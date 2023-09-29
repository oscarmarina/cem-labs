/**
 * @typedef {import('../types/hello').DedupeMixin} DedupeMixin
 */

import { dedupeMixin } from '@open-wc/dedupe-mixin';



/**
 * @type {DedupeMixin}
 */
const Hellotable = SuperClass =>
  // @ts-ignore
  class HellotableElement extends SuperClass {
    static properties = {
      /**
       * The heading to say "Hello" to.
       */
      heading: { type: String },
    };

    constructor() {
      super();
      this.heading = 'Hey there';
    }

    /**
     * Formats a greeting
     * @param heading {string} The heading to say "Hello" to
     * @returns {string} A greeting directed at `heading`
     */
    sayHello(heading) {
      return `Hello, ${heading}`;
    }
  };

export const HellotableMixin = dedupeMixin(Hellotable);
