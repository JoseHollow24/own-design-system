import './dist/dsh-accordions.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-accordions', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    expect(item).to.not.be.null;
    expect(item.label).to.equal('');
    expect(item.variant).to.equal('blue');
    expect(item.type).to.equal('primario');
    expect(item.open).to.equal(false);
    expect(item.checked).to.equal(false);
    expect(item.checkbox).to.equal(false);
  });

  it('should reflect label prop', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Título de prueba" variant="blue" type="primario"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    expect(item.label).to.equal('Título de prueba');
  });

  it('should reflect variant and type props', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Test" variant="purple" type="secundario"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    expect(item.variant).to.equal('purple');
    expect(item.type).to.equal('secundario');
  });

  it('should set open=true when open attribute is present', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Open test" ?open="${true}"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    expect(item.open).to.equal(true);
  });

  it('should set open=false programmatically', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Close test" ?open="${true}"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    item.open = false;
    await aTimeout(200);
    expect(item.open).to.equal(false);
  });

  it('should render multiple items', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Item 1"></dsh-accordion-item>
        <dsh-accordion-item slot="item" label="Item 2"></dsh-accordion-item>
        <dsh-accordion-item slot="item" label="Item 3"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const items = wrapper.querySelectorAll('dsh-accordion-item');
    expect(items.length).to.equal(3);
  });

  it('should render accordion-item shadow DOM container', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Shadow test" variant="slate" type="primario">
          <div slot="body"><p>Body content</p></div>
        </dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    const container = item.shadowRoot?.querySelector('.content-accordion-item');
    expect(container).to.not.be.null;
  });

  it('should reflect checkbox prop', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Checkbox test" ?checkbox="${true}"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    expect(item.checkbox).to.equal(true);
  });

  it('should support transversal variant', async function () {
    this.timeout(10000);

    const wrapper = fixtureSync(html`
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Transversal" variant="neutral" type="primario"></dsh-accordion-item>
      </dsh-accordions>
    `);
    await aTimeout(200);

    const item = wrapper.querySelector('dsh-accordion-item');
    expect(item.variant).to.equal('transversal');
  });
});
