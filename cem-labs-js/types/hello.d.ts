/// <reference path="shared.d.ts"/>

import { LitElement } from 'lit';

export declare class HellotableElementInterface {
  heading: string;
  sayHello(heading: string): string;
}

export declare function DedupeMixin<T extends Constructor<any>>(
  superclass: T,
): Constructor<HellotableElementInterface> & T & LitElement;


