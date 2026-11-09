export interface BibleBook {
    number: number;
    name: string;
    shortName: string;
    osis: string;
    youVersionCode: string;
    maxChapters: number;
    aliases: string[];
}
export declare const BIBLE_BOOKS: BibleBook[];
export declare function normalizeAlias(input: string): string;
export declare function findBookByAlias(alias: string): BibleBook | undefined;
