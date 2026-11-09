import { BIBLE_BOOKS, findBookByAlias, type BibleBook } from './books';
import { parseReference, tagContainer, type ParsedReference, type TaggingOptions } from './parser';
import { VerseProvider, SUPPORTED_VERSIONS, type ProviderOptions, type VerseQuery, type VerseResult, type CustomVerseFetcher, type BibleVersionInfo } from './provider';
import { BibleTooltipManager, type TooltipOptions } from './tooltip';
export interface VietnameseBibleTooltipConfig extends ProviderOptions, TooltipOptions, TaggingOptions {
    /**
     * CSS selector or Element to scan. Default: 'body'
     */
    target?: string | HTMLElement | HTMLElement[];
    /**
     * Whether to automatically observe DOM changes and tag newly added elements. Default: false
     */
    observe?: boolean;
}
export interface VietnameseBibleTooltipInstance {
    provider: VerseProvider;
    tooltip: BibleTooltipManager;
    scan: (container?: HTMLElement | string) => HTMLElement[];
    show: (element: HTMLElement) => Promise<void>;
    hide: () => void;
    destroy: () => void;
}
/**
 * Initializes Vietnamese Bible Tooltip on the current page
 */
export declare function init(config?: VietnameseBibleTooltipConfig): VietnameseBibleTooltipInstance;
export { BIBLE_BOOKS, findBookByAlias, parseReference, tagContainer, VerseProvider, BibleTooltipManager, SUPPORTED_VERSIONS, };
export type { BibleBook, BibleVersionInfo, ParsedReference, TaggingOptions, VerseQuery, VerseResult, CustomVerseFetcher, ProviderOptions, TooltipOptions, };
