"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIBLE_REFERENCE_REGEX = void 0;
exports.parseReference = parseReference;
exports.tagContainer = tagContainer;
const books_1 = require("./books");
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
/**
 * Builds the comprehensive regex pattern for all book aliases
 */
function buildBibleRegex() {
    const allAliases = [];
    for (const book of books_1.BIBLE_BOOKS) {
        allAliases.push(book.name);
        allAliases.push(book.shortName);
        allAliases.push(book.osis);
        for (const alias of book.aliases) {
            allAliases.push(alias);
        }
    }
    // Remove duplicates and sort longest first to match compounds before sub-words
    const uniqueAliases = Array.from(new Set(allAliases)).sort((a, b) => b.length - a.length);
    const aliasPattern = uniqueAliases.map(escapeRegex).join('|');
    // Regex breakdown:
    // (?<=^|[^\p{L}\p{N}]) - lookbehind: preceded by start of string or non-letter/digit
    // (${aliasPattern})   - Group 1: matched book alias
    // \.?\s*              - optional abbreviation dot and optional spaces
    // (\d{1,3})           - Group 2: chapter number (1-3 digits)
    // (?:
    //   \s*[:.,]\s*       - chapter:verse separator (: or . or ,)
    //   (\d{1,3})         - Group 3: starting verse
    //   (?:\s*[-–—]\s*(\d{1,3}))? - Group 4: optional ending verse in range
    // )?                  - chapter-only references (like Thi Thiên 23) are optional on verses
    // (?=$|[^\p{L}\p{N}]) - lookahead: followed by end of string or non-letter/digit
    return new RegExp(`(?<=^|[^\\p{L}\\p{N}])(${aliasPattern})\\.?\\s*(\\d{1,3})(?:\\s*[:.,]\\s*(\\d{1,3})(?:\\s*[-–—]\\s*(\\d{1,3}))?)?(?=$|[^\\p{L}\\p{N}])`, 'giu');
}
exports.BIBLE_REFERENCE_REGEX = buildBibleRegex();
/**
 * Parses a single reference string into a structured ParsedReference, or null if invalid
 */
function parseReference(text) {
    const regex = new RegExp(exports.BIBLE_REFERENCE_REGEX.source, 'iu');
    const match = regex.exec(text);
    if (!match)
        return null;
    const rawBook = match[1];
    const book = (0, books_1.findBookByAlias)(rawBook);
    if (!book)
        return null;
    const chapter = parseInt(match[2], 10);
    if (chapter <= 0 || chapter > book.maxChapters)
        return null;
    const verseStart = match[3] ? parseInt(match[3], 10) : 1;
    const verseEnd = match[4] ? parseInt(match[4], 10) : undefined;
    if (verseEnd !== undefined && verseEnd < verseStart) {
        return null;
    }
    return {
        rawText: match[0],
        book,
        chapter,
        verseStart,
        verseEnd,
    };
}
const DEFAULT_EXCLUDE_SELECTORS = [
    'a',
    'button',
    'input',
    'textarea',
    'select',
    'script',
    'style',
    'code',
    'pre',
    'noscript',
    'template',
    'head',
    '.vb-ref',
    '[data-no-bible-ref]',
    '.no-bible-ref',
];
/**
 * Scans an HTMLElement or DocumentFragment, finds all Vietnamese Bible citations,
 * and wraps them in interactive reference elements.
 */
function tagContainer(container, options = {}) {
    const className = options.className || 'vb-ref';
    const excludeQuery = (options.excludeSelectors || DEFAULT_EXCLUDE_SELECTORS).join(', ');
    const textNodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent)
                return NodeFilter.FILTER_REJECT;
            if (parent.closest(excludeQuery)) {
                return NodeFilter.FILTER_REJECT;
            }
            if (!node.nodeValue || node.nodeValue.trim().length === 0) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        },
    });
    let currentNode;
    while ((currentNode = walker.nextNode())) {
        textNodes.push(currentNode);
    }
    const taggedElements = [];
    const regex = new RegExp(exports.BIBLE_REFERENCE_REGEX.source, 'giu');
    for (const textNode of textNodes) {
        const text = textNode.nodeValue;
        if (!text)
            continue;
        regex.lastIndex = 0;
        let match;
        let lastIndex = 0;
        const fragment = document.createDocumentFragment();
        let hasMatches = false;
        while ((match = regex.exec(text)) !== null) {
            const matchedString = match[0];
            const matchIndex = match.index;
            const rawBook = match[1];
            const book = (0, books_1.findBookByAlias)(rawBook);
            if (!book)
                continue;
            const chapter = parseInt(match[2], 10);
            if (chapter <= 0 || chapter > book.maxChapters)
                continue;
            const verseStart = match[3] ? parseInt(match[3], 10) : 1;
            const verseEnd = match[4] ? parseInt(match[4], 10) : undefined;
            if (verseEnd !== undefined && verseEnd < verseStart)
                continue;
            hasMatches = true;
            // Append text preceding the match
            if (matchIndex > lastIndex) {
                fragment.appendChild(document.createTextNode(text.substring(lastIndex, matchIndex)));
            }
            // Create interactive reference span
            const refSpan = document.createElement('span');
            refSpan.className = className;
            refSpan.setAttribute('role', 'button');
            refSpan.setAttribute('tabindex', '0');
            refSpan.setAttribute('aria-haspopup', 'dialog');
            refSpan.dataset.vbBookNumber = String(book.number);
            refSpan.dataset.vbBookName = book.name;
            refSpan.dataset.vbOsis = book.osis;
            refSpan.dataset.vbYvCode = book.youVersionCode;
            refSpan.dataset.vbChapter = String(chapter);
            refSpan.dataset.vbVerseStart = String(verseStart);
            if (verseEnd !== undefined) {
                refSpan.dataset.vbVerseEnd = String(verseEnd);
            }
            refSpan.dataset.vbRawText = matchedString;
            refSpan.textContent = matchedString;
            fragment.appendChild(refSpan);
            taggedElements.push(refSpan);
            lastIndex = matchIndex + matchedString.length;
        }
        if (hasMatches) {
            if (lastIndex < text.length) {
                fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
            }
            textNode.parentNode?.replaceChild(fragment, textNode);
        }
    }
    return taggedElements;
}
//# sourceMappingURL=parser.js.map