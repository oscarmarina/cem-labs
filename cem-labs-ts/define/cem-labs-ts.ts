import { customElement } from 'lit/decorators.js';
import { CemLabsTs } from '../src/CemLabsTs.js';

// Ideas:
// https://github.com/elix/elix/blob/main/define/Button.js
// https://github.com/material-components/material-web/blob/main/button/text-button.ts

/**
 * An example element - define.
 */

@customElement('cem-labs-ts')
export class BlkCemLabsTs extends CemLabsTs{}

declare global {
  interface HTMLElementTagNameMap {
    'cem-labs-ts': BlkCemLabsTs;
  }
}
