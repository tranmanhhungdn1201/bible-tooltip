import type { VerseProvider } from './provider';
export interface TooltipOptions {
    theme?: 'auto' | 'light' | 'dark';
    showCopyButton?: boolean;
    showChapterLink?: boolean;
    hoverDelay?: number;
    hideDelay?: number;
}
export declare class BibleTooltipManager {
    private element;
    private headerTitle;
    private headerBadge;
    private bodyContent;
    private footerLink;
    private copyBtn;
    private arrow;
    private currentTarget;
    private currentResult;
    private hoverTimeout;
    private hideTimeout;
    private provider;
    private options;
    constructor(provider: VerseProvider, options?: TooltipOptions);
    private initDOM;
    attachListeners(refElement: HTMLElement): void;
    show(refElement: HTMLElement): Promise<void>;
    hide(): void;
    isVisible(): boolean;
    private scheduleHide;
    private cancelHide;
    private cancelHover;
    private extractQuery;
    private positionTooltip;
    private renderLoading;
    private renderContent;
    private renderError;
    private handleCopy;
    private resetCopyButton;
    private escapeHtml;
    destroy(): void;
}
