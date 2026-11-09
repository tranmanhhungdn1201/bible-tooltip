export interface VerseQuery {
  bookNumber: number;
  bookName: string;
  osis: string;
  youVersionCode: string;
  chapter: number;
  verseStart: number;
  verseEnd?: number;
}

export interface VerseItem {
  verse: number;
  text: string;
}

export interface VerseResult {
  bookNumber: number;
  bookName: string;
  chapter: number;
  verseStart: number;
  verseEnd?: number;
  title: string;
  verses: VerseItem[];
  translation: string;
  chapterUrl: string;
}

interface GetBibleVerse {
  chapter: number;
  verse: number;
  name: string;
  text: string;
}

interface GetBibleChapterResponse {
  translation: string;
  abbreviation: string;
  book_nr: number;
  book_name: string;
  chapter: number;
  name: string;
  verses: GetBibleVerse[];
}

export type CustomVerseFetcher = (query: VerseQuery) => Promise<VerseResult>;

export interface ProviderOptions {
  translation?: string;
  translationLabel?: string;
  apiBaseUrl?: string;
  customFetcher?: CustomVerseFetcher;
  buildChapterUrl?: (query: VerseQuery) => string;
}

export interface BibleVersionInfo {
  code: string;
  name: string;
  youVersionId: number;
  youVersionCode: string;
}

export const SUPPORTED_VERSIONS: Record<string, BibleVersionInfo> = {
  VI2010: {
    code: 'VI2010',
    name: 'Bản Hiệu Đính 2010',
    youVersionId: 151,
    youVersionCode: 'VIE2010',
  },
  VIE2010: {
    code: 'VIE2010',
    name: 'Bản Hiệu Đính 2010',
    youVersionId: 151,
    youVersionCode: 'VIE2010',
  },
  RVV11: {
    code: 'RVV11',
    name: 'Bản Hiệu Đính 2010',
    youVersionId: 151,
    youVersionCode: 'VIE2010',
  },
  VI1925: {
    code: 'VI1925',
    name: 'Bản Truyền Thống 1925',
    youVersionId: 193,
    youVersionCode: 'VIE1925',
  },
  VIE1925: {
    code: 'VIE1925',
    name: 'Bản Truyền Thống 1925',
    youVersionId: 193,
    youVersionCode: 'VIE1925',
  },
  BD2011: {
    code: 'BD2011',
    name: 'Bản Dịch 2011',
    youVersionId: 19,
    youVersionCode: 'BD2011',
  },
  NVB: {
    code: 'NVB',
    name: 'Bản Dịch Mới',
    youVersionId: 449,
    youVersionCode: 'NVB',
  },
  KTHD: {
    code: 'KTHD',
    name: 'Kinh Thánh Hiện Đại',
    youVersionId: 1638,
    youVersionCode: 'KTHD',
  },
  BPT: {
    code: 'BPT',
    name: 'Bản Phổ Thông',
    youVersionId: 205,
    youVersionCode: 'BPT',
  },
};

const DEFAULT_API_BASE = 'https://api.getbible.net/v2/vietnamese';
const DEFAULT_TRANSLATION = 'VI2010';
const DEFAULT_TRANSLATION_LABEL = 'Bản Hiệu Đính 2010';

/**
 * Normalizes legacy characters in Vietnamese digital texts (e.g. Latin Eth Ð -> Vietnamese Đ)
 */
export function cleanVietnameseVerseText(text: string): string {
  return text
    .replace(/\u00D0/g, 'Đ')
    .replace(/\u00F0/g, 'đ')
    .normalize('NFC')
    .trim();
}

export class VerseProvider {
  private cache = new Map<string, GetBibleChapterResponse>();
  private inflight = new Map<string, Promise<GetBibleChapterResponse>>();
  private options: Required<Omit<ProviderOptions, 'customFetcher'>> & { customFetcher?: CustomVerseFetcher };

  constructor(options: ProviderOptions = {}) {
    const rawKey = (options.translation || DEFAULT_TRANSLATION).toUpperCase();
    const versionInfo = SUPPORTED_VERSIONS[rawKey] || SUPPORTED_VERSIONS.VI2010;

    this.options = {
      translation: options.translation || versionInfo.code,
      translationLabel: options.translationLabel || versionInfo.name,
      apiBaseUrl: options.apiBaseUrl || DEFAULT_API_BASE,
      customFetcher: options.customFetcher,
      buildChapterUrl: options.buildChapterUrl || ((q) =>
        `https://www.bible.com/vi/bible/${versionInfo.youVersionId}/${q.youVersionCode}.${q.chapter}.${versionInfo.youVersionCode}`),
    };
  }

  /**
   * Fetches the verse text for a given query
   */
  async getVerse(query: VerseQuery): Promise<VerseResult> {
    if (this.options.customFetcher) {
      return this.options.customFetcher(query);
    }

    const { bookNumber, chapter, verseStart, verseEnd, bookName } = query;
    const cacheKey = `${this.options.translation}:${bookNumber}:${chapter}`;

    let chapterData: GetBibleChapterResponse;

    if (this.cache.has(cacheKey)) {
      chapterData = this.cache.get(cacheKey)!;
    } else if (this.inflight.has(cacheKey)) {
      chapterData = await this.inflight.get(cacheKey)!;
    } else {
      const url = `${this.options.apiBaseUrl}/${bookNumber}/${chapter}.json`;
      const fetchPromise = (async () => {
        const response = await fetch(url, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Lỗi tải dữ liệu Kinh Thánh (${response.status})`);
        }

        const data: GetBibleChapterResponse = await response.json();
        this.cache.set(cacheKey, data);
        return data;
      })();

      this.inflight.set(cacheKey, fetchPromise);
      try {
        chapterData = await fetchPromise;
      } finally {
        this.inflight.delete(cacheKey);
      }
    }

    // Filter verses according to range
    const verses: VerseItem[] = [];
    const end = verseEnd || verseStart;

    if (chapterData && Array.isArray(chapterData.verses)) {
      for (const item of chapterData.verses) {
        if (item.verse >= verseStart && item.verse <= end) {
          verses.push({
            verse: item.verse,
            text: cleanVietnameseVerseText(item.text),
          });
        }
      }
    }

    if (verses.length === 0) {
      throw new Error(`Không tìm thấy câu ${verseStart}${verseEnd ? `-${verseEnd}` : ''} trong ${bookName} ${chapter}`);
    }

    const titleRange = verseEnd && verseEnd !== verseStart
      ? `${bookName} ${chapter}:${verseStart}-${verseEnd}`
      : `${bookName} ${chapter}:${verseStart}`;

    const chapterUrl = this.options.buildChapterUrl(query);

    return {
      bookNumber,
      bookName,
      chapter,
      verseStart,
      verseEnd,
      title: titleRange,
      verses,
      translation: this.options.translationLabel || DEFAULT_TRANSLATION_LABEL,
      chapterUrl,
    };
  }

  clearCache(): void {
    this.cache.clear();
  }
}
