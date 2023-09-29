import { html, LitElement } from 'lit';
import { HighlightableMixin } from './highlightable.js';
import { HellotableMixin } from './hello.js';
import { styles } from './styles/cem-labs-js-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-2.0.0-blue)
 *
 * ## `<cem-labs-js>`
 * An example element.
 *
 * @attr heading
 * @attr counter
 * @fires counterchange - Indicates when the count changes
 * @slot - This element has a slot
 */
export class CemLabsJs extends HellotableMixin(HighlightableMixin(LitElement)) {
  static styles = [super.styles || [], styles];

  static properties = {
    /**
     * The heading to say "Hello" to.
     */
    heading: { type: String },
    /**
     * The number of times the button has been clicked.
     */
    counter: { type: Number },
  };

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 5;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.heading)}!</h1>
      <button @click=${this.#onClick}>Counter: ${this.counter}</button>
      <hr />
      <slot></slot>
      <hr />
      ${this.renderHighlight(html`<span>Simple highlight</span>`)}
    `;
  }

  #onClick() {
    this.counter += 1;

    const counterchangeEvent = new CustomEvent('counterchange', { detail: this.counter });
    this.dispatchEvent(counterchangeEvent);
  }
}
