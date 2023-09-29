/// <reference path="shared.d.ts"/>

import { LitElement } from 'lit';

export declare class HighlightableElementInterface {
  highlight: boolean;
  renderHighlight(heading: unknown): unknown;
}

export declare function DedupeMixin<T extends Constructor<any>>(
  superclass: T,
): Constructor<HighlightableElementInterface> & T & LitElement;
