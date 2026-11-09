import type { VerseProvider, VerseQuery, VerseResult } from './provider';

export interface TooltipOptions {
  theme?: 'auto' | 'light' | 'dark';
  showCopyButton?: boolean;
  showChapterLink?: boolean;
  hoverDelay?: number;
  hideDelay?: number;
}

export class BibleTooltipManager {
  private element: HTMLElement | null = null;
  private headerTitle: HTMLElement | null = null;
  private headerBadge: HTMLElement | null = null;
  private bodyContent: HTMLElement | null = null;
  private footerLink: HTMLAnchorElement | null = null;
  private copyBtn: HTMLButtonElement | null = null;
  private arrow: HTMLElement | null = null;

  private currentTarget: HTMLElement | null = null;
  private currentResult: VerseResult | null = null;
  private hoverTimeout: number | null = null;
  private hideTimeout: number | null = null;

  private provider: VerseProvider;
  private options: Required<TooltipOptions>;

  constructor(provider: VerseProvider, options: TooltipOptions = {}) {
    this.provider = provider;
    this.options = {
      theme: options.theme || 'auto',
      showCopyButton: options.showCopyButton ?? true,
      showChapterLink: options.showChapterLink ?? true,
      hoverDelay: options.hoverDelay ?? 120,
      hideDelay: options.hideDelay ?? 200,
    };

    this.initDOM();
  }

  private initDOM(): void {
    if (typeof document === 'undefined') return;

    let tooltip = document.getElementById('vb-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'vb-tooltip';
      tooltip.className = 'vb-tooltip';
      tooltip.setAttribute('role', 'dialog');
      tooltip.setAttribute('aria-hidden', 'true');

      tooltip.innerHTML = `
        <div class="vb-tooltip-arrow"></div>
        <div class="vb-tooltip-header">
          <div class="vb-tooltip-title-wrap">
            <span class="vb-tooltip-title"></span>
            <span class="vb-tooltip-badge"></span>
          </div>
          <button type="button" class="vb-tooltip-close" aria-label="Đóng">&times;</button>
        </div>
        <div class="vb-tooltip-body"></div>
        <div class="vb-tooltip-footer">
          <a class="vb-btn-link" target="_blank" rel="noopener noreferrer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Đọc toàn bộ chương</span>
          </a>
          <button type="button" class="vb-btn-copy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Sao chép</span>
          </button>
        </div>
      `;

      document.body.appendChild(tooltip);
    }

    this.element = tooltip;
    this.arrow = tooltip.querySelector('.vb-tooltip-arrow');
    this.headerTitle = tooltip.querySelector('.vb-tooltip-title');
    this.headerBadge = tooltip.querySelector('.vb-tooltip-badge');
    this.bodyContent = tooltip.querySelector('.vb-tooltip-body');
    this.footerLink = tooltip.querySelector('.vb-btn-link');
    this.copyBtn = tooltip.querySelector('.vb-btn-copy');

    if (this.options.theme && this.options.theme !== 'auto') {
      this.element.setAttribute('data-vb-theme', this.options.theme);
    }

    if (!this.options.showCopyButton && this.copyBtn) {
      this.copyBtn.style.display = 'none';
    }

    if (!this.options.showChapterLink && this.footerLink) {
      this.footerLink.style.display = 'none';
    }

    // Keep tooltip visible when mouse hovers over it
    this.element.addEventListener('mouseenter', () => this.cancelHide());
    this.element.addEventListener('mouseleave', () => this.scheduleHide());

    // Close button
    const closeBtn = tooltip.querySelector('.vb-tooltip-close');
    closeBtn?.addEventListener('click', () => this.hide());

    // Copy button
    this.copyBtn?.addEventListener('click', () => this.handleCopy());

    // Global listeners
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.hide();
    });

    document.addEventListener('pointerdown', (e) => {
      if (!this.element || !this.currentTarget) return;
      const target = e.target as Node;
      if (!this.element.contains(target) && !this.currentTarget.contains(target)) {
        this.hide();
      }
    });

    window.addEventListener('resize', () => {
      if (this.currentTarget) this.positionTooltip(this.currentTarget);
    });

    window.addEventListener('scroll', () => {
      if (this.currentTarget) this.positionTooltip(this.currentTarget);
    }, { passive: true });
  }

  attachListeners(refElement: HTMLElement): void {
    // Desktop hover
    refElement.addEventListener('mouseenter', () => {
      this.cancelHide();
      this.hoverTimeout = window.setTimeout(() => {
        this.show(refElement);
      }, this.options.hoverDelay);
    });

    refElement.addEventListener('mouseleave', () => {
      this.cancelHover();
      this.scheduleHide();
    });

    // Touch / Click toggle
    refElement.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.currentTarget === refElement && this.isVisible()) {
        this.hide();
      } else {
        this.show(refElement);
      }
    });

    // Keyboard accessibility
    refElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.show(refElement);
      }
    });
  }

  async show(refElement: HTMLElement): Promise<void> {
    if (!this.element) return;

    this.cancelHide();
    this.currentTarget?.classList.remove('vb-active');
    this.currentTarget = refElement;
    refElement.classList.add('vb-active');

    const query = this.extractQuery(refElement);
    if (!query) return;

    // Show loading state
    this.renderLoading(query);
    this.positionTooltip(refElement);
    this.element.classList.add('vb-visible');
    this.element.setAttribute('aria-hidden', 'false');

    try {
      const result = await this.provider.getVerse(query);
      if (this.currentTarget === refElement) {
        this.currentResult = result;
        this.renderContent(result);
        this.positionTooltip(refElement);
      }
    } catch (err) {
      if (this.currentTarget === refElement) {
        this.renderError(err instanceof Error ? err.message : 'Lỗi kết nối khi tải câu Kinh Thánh.');
        this.positionTooltip(refElement);
      }
    }
  }

  hide(): void {
    if (!this.element) return;
    this.element.classList.remove('vb-visible');
    this.element.setAttribute('aria-hidden', 'true');
    this.currentTarget?.classList.remove('vb-active');
    this.currentTarget = null;
    this.currentResult = null;
    this.cancelHover();
    this.cancelHide();
  }

  isVisible(): boolean {
    return this.element?.classList.contains('vb-visible') ?? false;
  }

  private scheduleHide(): void {
    this.cancelHide();
    this.hideTimeout = window.setTimeout(() => {
      this.hide();
    }, this.options.hideDelay);
  }

  private cancelHide(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  private cancelHover(): void {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }
  }

  private extractQuery(el: HTMLElement): VerseQuery | null {
    const bookNumber = parseInt(el.dataset.vbBookNumber || '', 10);
    const bookName = el.dataset.vbBookName || '';
    const osis = el.dataset.vbOsis || '';
    const youVersionCode = el.dataset.vbYvCode || '';
    const chapter = parseInt(el.dataset.vbChapter || '', 10);
    const verseStart = parseInt(el.dataset.vbVerseStart || '1', 10);
    const verseEnd = el.dataset.vbVerseEnd ? parseInt(el.dataset.vbVerseEnd, 10) : undefined;

    if (isNaN(bookNumber) || isNaN(chapter)) return null;

    return {
      bookNumber,
      bookName,
      osis,
      youVersionCode,
      chapter,
      verseStart,
      verseEnd,
    };
  }

  private positionTooltip(target: HTMLElement): void {
    if (!this.element) return;

    const targetRect = target.getBoundingClientRect();
    const tooltipRect = this.element.getBoundingClientRect();

    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    const viewportWidth = document.documentElement.clientWidth;
    const margin = 12;

    // Determine placement: prefer top, fallback to bottom if clipped
    const spaceAbove = targetRect.top;
    const spaceBelow = window.innerHeight - targetRect.bottom;
    const placeTop = spaceAbove >= tooltipRect.height + 14 || spaceAbove > spaceBelow;

    let top: number;
    if (placeTop) {
      top = targetRect.top + scrollY - tooltipRect.height - 10;
      this.element.setAttribute('data-placement', 'top');
    } else {
      top = targetRect.bottom + scrollY + 10;
      this.element.setAttribute('data-placement', 'bottom');
    }

    // Horizontal centering relative to target
    const targetCenterX = targetRect.left + scrollX + targetRect.width / 2;
    let left = targetCenterX - tooltipRect.width / 2;

    // Clamp inside viewport
    const minLeft = scrollX + margin;
    const maxLeft = scrollX + viewportWidth - tooltipRect.width - margin;
    left = Math.max(minLeft, Math.min(left, maxLeft));

    this.element.style.top = `${Math.round(top)}px`;
    this.element.style.left = `${Math.round(left)}px`;

    // Adjust arrow to point directly to target center
    if (this.arrow) {
      const arrowLeft = targetCenterX - left;
      const clampedArrowLeft = Math.max(16, Math.min(arrowLeft, tooltipRect.width - 16));
      this.arrow.style.left = `${Math.round(clampedArrowLeft)}px`;
    }
  }

  private renderLoading(query: VerseQuery): void {
    if (this.headerTitle) {
      const title = query.verseEnd
        ? `${query.bookName} ${query.chapter}:${query.verseStart}-${query.verseEnd}`
        : `${query.bookName} ${query.chapter}:${query.verseStart}`;
      this.headerTitle.textContent = title;
    }
    if (this.headerBadge) {
      this.headerBadge.textContent = 'Đang tải';
    }
    if (this.bodyContent) {
      this.bodyContent.innerHTML = `
        <div class="vb-tooltip-loading">
          <div class="vb-spinner"></div>
          <span>Đang lấy câu Kinh Thánh...</span>
        </div>
      `;
    }
    if (this.footerLink) {
      this.footerLink.style.visibility = 'hidden';
    }
    if (this.copyBtn) {
      this.copyBtn.style.visibility = 'hidden';
    }
  }

  private renderContent(result: VerseResult): void {
    if (this.headerTitle) {
      this.headerTitle.textContent = result.title;
    }
    if (this.headerBadge) {
      this.headerBadge.textContent = result.translation;
    }
    if (this.bodyContent) {
      this.bodyContent.innerHTML = result.verses
        .map(
          (v) =>
            `<div class="vb-tooltip-verse"><span class="vb-tooltip-verse-num">${v.verse}</span>${this.escapeHtml(v.text)}</div>`
        )
        .join('');
    }
    if (this.footerLink) {
      this.footerLink.href = result.chapterUrl;
      this.footerLink.style.visibility = 'visible';
    }
    if (this.copyBtn) {
      this.copyBtn.style.visibility = 'visible';
      this.resetCopyButton();
    }
  }

  private renderError(message: string): void {
    if (this.headerBadge) {
      this.headerBadge.textContent = 'Lỗi';
    }
    if (this.bodyContent) {
      this.bodyContent.innerHTML = `<div class="vb-tooltip-error">${this.escapeHtml(message)}</div>`;
    }
    if (this.footerLink) {
      this.footerLink.style.visibility = 'hidden';
    }
    if (this.copyBtn) {
      this.copyBtn.style.visibility = 'hidden';
    }
  }

  private async handleCopy(): Promise<void> {
    if (!this.currentResult || !this.copyBtn) return;

    const versesText = this.currentResult.verses
      .map((v) => `${v.verse}. ${v.text}`)
      .join('\n');
    const fullText = `"${versesText}" (${this.currentResult.title} - ${this.currentResult.translation})`;

    try {
      await navigator.clipboard.writeText(fullText);
      const span = this.copyBtn.querySelector('span');
      if (span) span.textContent = 'Đã chép!';
      this.copyBtn.classList.add('vb-copied');

      setTimeout(() => {
        this.resetCopyButton();
      }, 2000);
    } catch {
      // Fallback
    }
  }

  private resetCopyButton(): void {
    if (!this.copyBtn) return;
    const span = this.copyBtn.querySelector('span');
    if (span) span.textContent = 'Sao chép';
    this.copyBtn.classList.remove('vb-copied');
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  destroy(): void {
    this.element?.remove();
    this.element = null;
  }
}
