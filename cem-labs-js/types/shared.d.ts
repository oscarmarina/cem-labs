type Constructor<T = {}> = new (...args: any[]) => T;

type CustomElement = HTMLElement & {
  adoptedCallback?(): void;
  attributeChangedCallback?(
    attributeName: string,
    oldValue: any,
    newValue: any,
    namespace?: any,
  ): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

