"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibleTooltipManager = exports.VerseProvider = exports.tagContainer = exports.parseReference = exports.findBookByAlias = exports.BIBLE_BOOKS = void 0;
exports.init = init;
const books_1 = require("./books");
Object.defineProperty(exports, "BIBLE_BOOKS", { enumerable: true, get: function () { return books_1.BIBLE_BOOKS; } });
Object.defineProperty(exports, "findBookByAlias", { enumerable: true, get: function () { return books_1.findBookByAlias; } });
const parser_1 = require("./parser");
Object.defineProperty(exports, "parseReference", { enumerable: true, get: function () { return parser_1.parseReference; } });
Object.defineProperty(exports, "tagContainer", { enumerable: true, get: function () { return parser_1.tagContainer; } });
const provider_1 = require("./provider");
Object.defineProperty(exports, "VerseProvider", { enumerable: true, get: function () { return provider_1.VerseProvider; } });
const tooltip_1 = require("./tooltip");
Object.defineProperty(exports, "BibleTooltipManager", { enumerable: true, get: function () { return tooltip_1.BibleTooltipManager; } });
/**
 * Initializes Vietnamese Bible Tooltip on the current page
 */
function init(config = {}) {
    const provider = new provider_1.VerseProvider({
        translation: config.translation,
        translationLabel: config.translationLabel,
        apiBaseUrl: config.apiBaseUrl,
        customFetcher: config.customFetcher,
        buildChapterUrl: config.buildChapterUrl,
    });
    const tooltip = new tooltip_1.BibleTooltipManager(provider, {
        theme: config.theme,
        showCopyButton: config.showCopyButton,
        showChapterLink: config.showChapterLink,
        hoverDelay: config.hoverDelay,
        hideDelay: config.hideDelay,
    });
    function scanElement(container) {
        const refs = (0, parser_1.tagContainer)(container, {
            className: config.className,
            excludeSelectors: config.excludeSelectors,
        });
        for (const ref of refs) {
            tooltip.attachListeners(ref);
        }
        return refs;
    }
    function resolveContainers(target) {
        const tgt = target || config.target || 'body';
        if (typeof tgt === 'string') {
            return Array.from(document.querySelectorAll(tgt));
        }
        if (Array.isArray(tgt)) {
            return tgt;
        }
        if (tgt instanceof HTMLElement) {
            return [tgt];
        }
        return [document.body];
    }
    function scan(target) {
        const containers = resolveContainers(target);
        const allRefs = [];
        for (const container of containers) {
            allRefs.push(...scanElement(container));
        }
        return allRefs;
    }
    // Initial scan
    const initialElements = scan();
    // Optional MutationObserver for dynamic SPAs or infinite scroll
    let observer = null;
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
// Global browser window export when loaded as script tag
if (typeof window !== 'undefined') {
    window.VietnameseBibleTooltip = {
        init,
        parseReference: parser_1.parseReference,
        tagContainer: parser_1.tagContainer,
        VerseProvider: provider_1.VerseProvider,
        BibleTooltipManager: tooltip_1.BibleTooltipManager,
        BIBLE_BOOKS: books_1.BIBLE_BOOKS,
        findBookByAlias: books_1.findBookByAlias,
    };
}
//# sourceMappingURL=index.js.map