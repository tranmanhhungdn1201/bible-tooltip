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
export declare const SUPPORTED_VERSIONS: Record<string, BibleVersionInfo>;
/**
 * Normalizes legacy characters in Vietnamese digital texts (e.g. Latin Eth Ð -> Vietnamese Đ)
 */
export declare function cleanVietnameseVerseText(text: string): string;
export declare class VerseProvider {
    private cache;
    private inflight;
    private options;
    constructor(options?: ProviderOptions);
    /**
     * Fetches the verse text for a given query
     */
    getVerse(query: VerseQuery): Promise<VerseResult>;
    clearCache(): void;
}
