import './dist/dsh-menu-vertical.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-menu-vertical', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical></dsh-menu-vertical>`);
    await aTimeout(0);
    expect(component.openMobile).to.equal(false);
  });

  it('should reflect openMobile prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical open-mobile></dsh-menu-vertical>`);
    await aTimeout(0);
    expect(component.openMobile).to.equal(true);
  });

  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical></dsh-menu-vertical>`);
    await aTimeout(200);
    const menu = component.shadowRoot?.querySelector('.menu');
    expect(menu).to.not.be.null;
  });

  it('should have closed class on host when openMobile is false', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical></dsh-menu-vertical>`);
    await aTimeout(200);
    expect(component.classList.contains('closed')).to.equal(true);
  });
});

describe('Test dsh-menu-vertical-item', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical-item></dsh-menu-vertical-item>`);
    await aTimeout(0);

    expect(component.desktopIconName).to.equal('bullet');
    expect(component.mobileIconName).to.equal('bullet');
    expect(component.active).to.equal(false);
    expect(component.href).to.equal('#');
    expect(component.target).to.equal('_self');
    expect(component.isHomeItem).to.equal(false);
  });

  it('should reflect active prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical-item active></dsh-menu-vertical-item>`);
    await aTimeout(0);
    expect(component.active).to.equal(true);
  });

  it('should reflect itemValue prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-menu-vertical-item item-value="Mi Cuenta"></dsh-menu-vertical-item>
    `);
    await aTimeout(0);
    expect(component.itemValue).to.equal('Mi Cuenta');
  });

  it('should render anchor in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-menu-vertical-item item-value="Test" href="/test"></dsh-menu-vertical-item>
    `);
    await aTimeout(200);
    const link = component.shadowRoot?.querySelector('a');
    expect(link).to.not.be.null;
  });

  it('should render active class when active', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-menu-vertical-item item-value="Active" active></dsh-menu-vertical-item>
    `);
    await aTimeout(200);
    const item = component.shadowRoot?.querySelector('.item.active');
    expect(item).to.not.be.null;
  });

  it('should render sub-items slot', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-menu-vertical-item item-value="Parent">
        <dsh-menu-vertical-subitem slot="sub-item">Child 1</dsh-menu-vertical-subitem>
      </dsh-menu-vertical-item>
    `);
    await aTimeout(200);
    const subSlot = component.shadowRoot?.querySelector('slot[name="sub-item"]');
    expect(subSlot).to.not.be.null;
  });
});

describe('Test dsh-menu-vertical-subitem', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical-subitem></dsh-menu-vertical-subitem>`);
    await aTimeout(0);

    expect(component.active).to.equal(false);
    expect(component.href).to.equal('#');
    expect(component.target).to.equal('_self');
  });

  it('should render active class when active', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-menu-vertical-subitem active>Item</dsh-menu-vertical-subitem>`);
    await aTimeout(200);
    const item = component.shadowRoot?.querySelector('.sub-item.active');
    expect(item).to.not.be.null;
  });

  it('should render anchor with correct href', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-menu-vertical-subitem href="/ruta">Texto</dsh-menu-vertical-subitem>
    `);
    await aTimeout(200);
    const link = component.shadowRoot?.querySelector('a');
    expect(link).to.not.be.null;
    expect(link.href).to.include('/ruta');
  });
});
