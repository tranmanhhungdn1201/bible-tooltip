import { type BibleBook } from './books';
export interface ParsedReference {
    rawText: string;
    book: BibleBook;
    chapter: number;
    verseStart: number;
    verseEnd?: number;
}
export declare const BIBLE_REFERENCE_REGEX: RegExp;
/**
 * Parses a single reference string into a structured ParsedReference, or null if invalid
 */
export declare function parseReference(text: string): ParsedReference | null;
export interface TaggingOptions {
    className?: string;
    excludeSelectors?: string[];
}
/**
 * Scans an HTMLElement or DocumentFragment, finds all Vietnamese Bible citations,
 * and wraps them in interactive reference elements.
 */
export declare function tagContainer(container: HTMLElement, options?: TaggingOptions): HTMLElement[];
