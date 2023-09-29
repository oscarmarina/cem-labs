/**
 * @typedef {import('../types/highlightable').DedupeMixin} DedupeMixin
 */

import { css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { dedupeMixin } from '@open-wc/dedupe-mixin';

/**
 * @type {DedupeMixin}
 */
const Highlightable = superClass =>
  // @ts-ignore
  class HighlightableElement extends superClass {
    static properties = {
      highlight: { type: Boolean },
    };

    static styles = [
      // @ts-ignore
      superClass.styles ?? [],
      css`
        .highlight {
          background: indianred;
        }
      `,
    ];

    constructor() {
      super();
      this.highlight = false;
    }

    renderHighlight(content) {
      return html` <div class=${classMap({ highlight: this.highlight })}>${content}</div>`;
    }
  };

export const HighlightableMixin = dedupeMixin(Highlightable);
