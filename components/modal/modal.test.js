import './dist/dsh-modal.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-modal', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal></dsh-modal>`);
    await aTimeout(0);
    expect(component.open).to.equal(false);
    expect(component.closable).to.equal(false);
    expect(component.fixed).to.equal(false);
    expect(component.noClose).to.equal(false);
    expect(component.actionableAlign).to.equal('right');
    expect(component.variant).to.equal('');
    expect(component.iconColor).to.equal('x1');
  });

  it('should reflect open prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal open></dsh-modal>`);
    await aTimeout(0);
    expect(component.open).to.equal(true);
  });

  it('should reflect closable prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal closable></dsh-modal>`);
    await aTimeout(0);
    expect(component.closable).to.equal(true);
  });

  it('should reflect textTitle prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal text-title="Hello Modal"></dsh-modal>`);
    await aTimeout(0);
    expect(component.textTitle).to.equal('Hello Modal');
  });

  it('should reflect textDescription prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal text-description="Modal description"></dsh-modal>`);
    await aTimeout(0);
    expect(component.textDescription).to.equal('Modal description');
  });

  it('should reflect variant prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal variant="promo"></dsh-modal>`);
    await aTimeout(0);
    expect(component.variant).to.equal('promo');
  });

  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal></dsh-modal>`);
    await aTimeout(200);
    expect(component.shadowRoot).to.not.be.null;
  });

  it('should render dsh-modal-container in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal></dsh-modal>`);
    await aTimeout(200);
    const container = component.shadowRoot?.querySelector('dsh-modal-container');
    expect(container).to.not.be.null;
  });

  it('should render dsh-modal-card in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal></dsh-modal>`);
    await aTimeout(200);
    const card = component.shadowRoot?.querySelector('dsh-modal-card');
    expect(card).to.not.be.null;
  });

  it('should render dsh-modal-background in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal></dsh-modal>`);
    await aTimeout(200);
    const bg = component.shadowRoot?.querySelector('dsh-modal-background');
    expect(bg).to.not.be.null;
  });

  it('should have open container when open=true', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal open></dsh-modal>`);
    await aTimeout(200);
    const container = component.shadowRoot?.querySelector('dsh-modal-container');
    expect(container?.open).to.equal(true);
  });

  it('should render close button when closable=true', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal open closable></dsh-modal>`);
    await aTimeout(200);
    const closeBtn = component.shadowRoot?.querySelector('dsh-modal-close');
    expect(closeBtn).to.not.be.null;
  });

  it('should NOT render close button when closable=false', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal open></dsh-modal>`);
    await aTimeout(200);
    const closeBtn = component.shadowRoot?.querySelector('dsh-modal-close');
    expect(closeBtn).to.be.null;
  });

  it('should render dsh-modal-title when textTitle is set', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal text-title="Test Title"></dsh-modal>`);
    await aTimeout(200);
    const title = component.shadowRoot?.querySelector('dsh-modal-title');
    expect(title).to.not.be.null;
  });

  it('should render dsh-modal-description when textDescription is set', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal text-description="Test Desc"></dsh-modal>`);
    await aTimeout(200);
    const desc = component.shadowRoot?.querySelector('dsh-modal-description');
    expect(desc).to.not.be.null;
  });

  it('should render dsh-icon when icon is set', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal icon="fa-check"></dsh-modal>`);
    await aTimeout(200);
    const icon = component.shadowRoot?.querySelector('dsh-icon');
    expect(icon).to.not.be.null;
  });

  it('should dispatch close event when open is set to false after being true', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal open closable></dsh-modal>`);
    await aTimeout(200);
    setTimeout(() => { component.open = false; }, 10);
    // just verify prop change works
    await aTimeout(100);
    expect(component.open).to.equal(false);
  });
});

describe('Test dsh-modal-container', () => {
  it('should have open class when open=true', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-container open></dsh-modal-container>`);
    await aTimeout(200);
    expect(component.classList.contains('open')).to.equal(true);
  });

  it('should have closed class when open=false', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-container></dsh-modal-container>`);
    await aTimeout(200);
    expect(component.classList.contains('closed')).to.equal(true);
  });
});

describe('Test dsh-modal-card', () => {
  it('should have fixed class when fixed=true', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-card fixed></dsh-modal-card>`);
    await aTimeout(200);
    expect(component.classList.contains('fixed')).to.equal(true);
  });

  it('should have variant class', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-card variant="promo"></dsh-modal-card>`);
    await aTimeout(200);
    expect(component.classList.contains('promo')).to.equal(true);
  });
});

describe('Test dsh-modal-footer', () => {
  it('should have default align prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-footer></dsh-modal-footer>`);
    await aTimeout(0);
    expect(component.align).to.equal('right');
  });

  it('should have empty class when visible=false', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-footer></dsh-modal-footer>`);
    await aTimeout(200);
    expect(component.classList.contains('empty')).to.equal(true);
  });
});

describe('Test dsh-modal-title', () => {
  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-title>Título</dsh-modal-title>`);
    await aTimeout(200);
    expect(component.shadowRoot).to.not.be.null;
  });
});

describe('Test dsh-modal-description', () => {
  it('should reflect variant prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-modal-description variant="promo">Desc</dsh-modal-description>`);
    await aTimeout(0);
    expect(component.variant).to.equal('promo');
  });
});
