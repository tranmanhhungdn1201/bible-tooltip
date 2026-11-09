"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerseProvider = void 0;
const DEFAULT_API_BASE = 'https://api.getbible.net/v2/vietnamese';
const DEFAULT_TRANSLATION_LABEL = 'Bản Truyền Thống 1925';
class VerseProvider {
    constructor(options = {}) {
        this.cache = new Map();
        this.inflight = new Map();
        this.options = {
            translation: 'vietnamese',
            translationLabel: DEFAULT_TRANSLATION_LABEL,
            apiBaseUrl: DEFAULT_API_BASE,
            buildChapterUrl: (q) => `https://www.bible.com/vi/bible/193/${q.youVersionCode}.${q.chapter}.VIE1925`,
            ...options,
        };
    }
    /**
     * Fetches the verse text for a given query
     */
    async getVerse(query) {
        if (this.options.customFetcher) {
            return this.options.customFetcher(query);
        }
        const { bookNumber, chapter, verseStart, verseEnd, bookName } = query;
        const cacheKey = `${this.options.translation}:${bookNumber}:${chapter}`;
        let chapterData;
        if (this.cache.has(cacheKey)) {
            chapterData = this.cache.get(cacheKey);
        }
        else if (this.inflight.has(cacheKey)) {
            chapterData = await this.inflight.get(cacheKey);
        }
        else {
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
                const data = await response.json();
                this.cache.set(cacheKey, data);
                return data;
            })();
            this.inflight.set(cacheKey, fetchPromise);
            try {
                chapterData = await fetchPromise;
            }
            finally {
                this.inflight.delete(cacheKey);
            }
        }
        // Filter verses according to range
        const verses = [];
        const end = verseEnd || verseStart;
        if (chapterData && Array.isArray(chapterData.verses)) {
            for (const item of chapterData.verses) {
                if (item.verse >= verseStart && item.verse <= end) {
                    verses.push({
                        verse: item.verse,
                        text: item.text.trim(),
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
        const chapterUrl = this.options.buildChapterUrl
            ? this.options.buildChapterUrl(query)
            : `https://www.bible.com/vi/bible/193/${query.youVersionCode}.${chapter}.VIE1925`;
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
    clearCache() {
        this.cache.clear();
    }
}
exports.VerseProvider = VerseProvider;
//# sourceMappingURL=provider.js.map