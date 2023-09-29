import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';

import { CemLabsTs } from '../src/CemLabsTs.js';

import '../define/cem-labs-ts.js';

suite('CemLabsTs', () => {
  let el: CemLabsTs;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = (await fixture(html` <cem-labs-ts>light-dom</cem-labs-ts> `)) as CemLabsTs;
      await el.updateComplete;
    });

    test('has a default heading "Hey there" and counter 5', () => {
      assert.equal(el.heading, 'Hey there');
      assert.equal(el.counter, 5);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await assert.shadowDom.equalSnapshot(el);
      });

      test('LIGHT DOM - Structure test', async () => {
        await assert.lightDom.equalSnapshot(el);
      });
      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });

  suite('Events ', () => {
    setup(async () => {
      el = (await fixture(html` <cem-labs-ts></cem-labs-ts> `)) as CemLabsTs;
      await el.updateComplete;
    });

    test('increases the counter on button click', () => {
      const button = el.shadowRoot!.querySelector('button')!;
      button.click();
      assert.equal(el.counter, 6);
    });
  });

  suite('Override ', () => {
    setup(async () => {
      el = (await fixture(
        html` <cem-labs-ts heading="attribute heading"></cem-labs-ts> `)) as CemLabsTs;
      await el.updateComplete;
    });

    test('can override the heading via attribute', () => {
      assert.equal(el.heading, 'attribute heading');
    });
  });
});
