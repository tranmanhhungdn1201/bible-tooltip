import { BIBLE_BOOKS, findBookByAlias, type BibleBook } from './books';
import { parseReference, tagContainer, type ParsedReference, type TaggingOptions } from './parser';
import {
  VerseProvider,
  SUPPORTED_VERSIONS,
  type ProviderOptions,
  type VerseQuery,
  type VerseResult,
  type CustomVerseFetcher,
  type BibleVersionInfo,
} from './provider';
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
export function init(config: VietnameseBibleTooltipConfig = {}): VietnameseBibleTooltipInstance {
  const provider = new VerseProvider({
    translation: config.translation,
    translationLabel: config.translationLabel,
    apiBaseUrl: config.apiBaseUrl,
    customFetcher: config.customFetcher,
    buildChapterUrl: config.buildChapterUrl,
  });

  const tooltip = new BibleTooltipManager(provider, {
    theme: config.theme,
    showCopyButton: config.showCopyButton,
    showChapterLink: config.showChapterLink,
    hoverDelay: config.hoverDelay,
    hideDelay: config.hideDelay,
  });

  function scanElement(container: HTMLElement): HTMLElement[] {
    const refs = tagContainer(container, {
      className: config.className,
      excludeSelectors: config.excludeSelectors,
    });

    for (const ref of refs) {
      tooltip.attachListeners(ref);
    }

    return refs;
  }

  function resolveContainers(target?: string | HTMLElement | HTMLElement[]): HTMLElement[] {
    const tgt = target || config.target || 'body';
    if (typeof tgt === 'string') {
      return Array.from(document.querySelectorAll<HTMLElement>(tgt));
    }
    if (Array.isArray(tgt)) {
      return tgt;
    }
    if (tgt instanceof HTMLElement) {
      return [tgt];
    }
    return [document.body];
  }

  function scan(target?: string | HTMLElement | HTMLElement[]): HTMLElement[] {
    const containers = resolveContainers(target);
    const allRefs: HTMLElement[] = [];
    for (const container of containers) {
      allRefs.push(...scanElement(container));
    }
    return allRefs;
  }

  // Initial scan
  const initialElements = scan();

  // Optional MutationObserver for dynamic SPAs or infinite scroll
  let observer: MutationObserver | null = null;
  if (config.observe && typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of Array.from(mutation.addedNodes)) {
          if (addedNode instanceof HTMLElement && !addedNode.closest('.vb-tooltip')) {
            scanElement(addedNode);
          }
        }
      }
    });

    const containers = resolveContainers();
    for (const c of containers) {
      observer.observe(c, { childList: true, subtree: true });
    }
  }

  return {
    provider,
    tooltip,
    scan,
    show: (el) => tooltip.show(el),
    hide: () => tooltip.hide(),
    destroy: () => {
      observer?.disconnect();
      tooltip.destroy();
    },
  };
}

// Named exports
export {
  BIBLE_BOOKS,
  findBookByAlias,
  parseReference,
  tagContainer,
  VerseProvider,
  BibleTooltipManager,
  SUPPORTED_VERSIONS,
};

export type {
  BibleBook,
  BibleVersionInfo,
  ParsedReference,
  TaggingOptions,
  VerseQuery,
  VerseResult,
  CustomVerseFetcher,
  ProviderOptions,
  TooltipOptions,
};

// Global browser window export when loaded as script tag
if (typeof window !== 'undefined') {
  (window as unknown as { VietnameseBibleTooltip: unknown }).VietnameseBibleTooltip = {
    init,
    parseReference,
    tagContainer,
    VerseProvider,
    BibleTooltipManager,
    BIBLE_BOOKS,
    findBookByAlias,
    SUPPORTED_VERSIONS,
  };
}
