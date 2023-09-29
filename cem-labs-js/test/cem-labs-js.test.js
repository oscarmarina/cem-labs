import { html, fixture, assert, fixtureCleanup, expect } from '@open-wc/testing';
import '../define/cem-labs-js.js';

suite('CemLabsJs', () => {
  /**
   * @type {import('../index').CemLabsJs}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html` <cem-labs-js>light-dom</cem-labs-js> `);
      await el.updateComplete;
    });

    test('has a default heading "Hey there" and counter 5', () => {
      assert.equal(el.heading, 'Hey there');
      assert.equal(el.counter, 5);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot();
        // @ts-ignore (error within interface lightDom: Pick<Assertion> - chai-dom-diff-plugin.d.ts)
        // await assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['id'] });
      });
      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });

  suite('Events ', () => {
    setup(async () => {
      el = await fixture(html` <cem-labs-js></cem-labs-js> `);
      await el.updateComplete;
    });

    test('increases the counter on button click', () => {
      el.shadowRoot.querySelector('button').click();
      assert.equal(el.counter, 6);
    });
  });

  suite('Override ', () => {
    setup(async () => {
      el = await fixture(html` <cem-labs-js heading="attribute heading"></cem-labs-js> `);
      await el.updateComplete;
    });

    test('can override the heading via attribute', () => {
      assert.equal(el.heading, 'attribute heading');
    });
  });
});
