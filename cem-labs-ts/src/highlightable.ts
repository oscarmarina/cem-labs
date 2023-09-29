/* eslint-disable max-classes-per-file */
import { LitElement, css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';
import { dedupeMixin, Constructor } from '@open-wc/dedupe-mixin';

export declare class HighlightableInterface {
  highlight: boolean;

  renderHighlight(content: unknown): unknown;
}


const Highlightable = <T extends Constructor<any>>(superClass: T) => {
  class HighlightableElement extends superClass {
    static styles = [
      (superClass as unknown as typeof LitElement).styles ?? [],
      css`
        .highlight {
          background: lightsalmon;
        }
      `,
    ];

    @property({ type: Boolean }) highlight = false;

    renderHighlight(content: unknown) {
      return html` <div class=${classMap({ highlight: this.highlight })}>${content}</div>`;
    }
  }
  return HighlightableElement as Constructor<HighlightableInterface> & T;
};

export const HighlightableMixin = dedupeMixin(Highlightable);

