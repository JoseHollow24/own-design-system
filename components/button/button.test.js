import './dist/dsh-button.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-button', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-button>Click me</dsh-button>`);
    await aTimeout(0);

    expect(component.variant).to.equal('primary');
    expect(component.color).to.equal('blue');
    expect(component.disabled).to.equal(false);
    expect(component.loading).to.equal(false);
    expect(component.type).to.equal('button');
  });

  it('should update when changing the disabled prop', async function () {
    this.timeout(10000);

    let component = fixtureSync(
      html`<dsh-button disabled="${false}">label</dsh-button>`
    );
    await aTimeout(0);
    expect(component.disabled).to.equal(false);

    component = fixtureSync(
      html`<dsh-button disabled="${true}">label</dsh-button>`
    );
    await aTimeout(0);
    expect(component.disabled).to.equal(true);
  });

  it('should update loading state', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-button>Click me</dsh-button>`);
    await aTimeout(0);
    expect(component.loading).to.equal(false);

    component.loading = true;
    await aTimeout(0);
    expect(component.loading).to.equal(true);
  });

  it('should render with different variants and colors', async function () {
    this.timeout(10000);

    const component = fixtureSync(
      html`<dsh-button variant="secondary" color="yellow">Click me</dsh-button>`
    );
    await aTimeout(0);

    expect(component.variant).to.equal('secondary');
    expect(component.color).to.equal('yellow');
  });

  it('should emit onClick event when clicked', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-button>Click me</dsh-button>`);
    await aTimeout(0);

    const clickPromise = oneEvent(component, 'buttonClick');
    const btn = component.shadowRoot?.querySelector('button');
    btn.click();

    const event = await clickPromise;
    expect(event.type).to.equal('buttonClick');
    expect(event.bubbles).to.equal(true);
    expect(event.composed).to.equal(true);
  });

  it('should not emit onClick event when disabled', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-button disabled>Click me</dsh-button>`);
    await aTimeout(0);

    let eventFired = false;
    component.addEventListener('buttonClick', () => {
      eventFired = true;
    });

    const btn = component.shadowRoot?.querySelector('button');
    btn.click();

    await aTimeout(0);
    expect(eventFired).to.equal(false);
  });

});
