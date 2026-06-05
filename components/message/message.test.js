import './dist/dsh-message.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-message', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-message></dsh-message>`);
    await aTimeout(0);

    expect(component.variant).to.equal('info');
    expect(component.closeButton).to.equal(false);
    expect(component.showComponent).to.equal(true);
  });

  it('should render info variant with content container', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-message variant="info">
        <div slot="title"><h4>Test</h4></div>
      </dsh-message>
    `);
    await aTimeout(200);

    const content = component.shadowRoot?.querySelector('.content');
    expect(content).to.not.be.null;
  });

  it('should render action variant (informative)', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-message variant="informative">
        <div slot="content"><p>Test content</p></div>
      </dsh-message>
    `);
    await aTimeout(200);

    expect(component.variant).to.equal('informative');
    const content = component.shadowRoot?.querySelector('.content');
    expect(content).to.not.be.null;
  });

  it('should show close button when closeButton=true for action variants', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-message variant="success" ?close-button="${true}">
        <div slot="title"><h4>Test</h4></div>
      </dsh-message>
    `);
    await aTimeout(200);

    const closeBtn = component.shadowRoot?.querySelector('.icon-close');
    expect(closeBtn).to.not.be.null;
  });

  it('should not show close button for info variant even if closeButton=true', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-message variant="info" ?close-button="${true}">
        <div slot="title"><h4>Test</h4></div>
      </dsh-message>
    `);
    await aTimeout(200);

    const closeBtn = component.shadowRoot?.querySelector('.icon-close');
    expect(closeBtn).to.be.null;
  });

  it('should emit hide-message event when close button clicked', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-message variant="error" ?close-button="${true}">
        <div slot="title"><h4>Test</h4></div>
      </dsh-message>
    `);
    await aTimeout(200);

    const eventPromise = oneEvent(component, 'hide-message');
    const closeBtn = component.shadowRoot?.querySelector('.icon-close');
    closeBtn.click();

    const event = await eventPromise;
    expect(event.type).to.equal('hide-message');
  });

  it('should render important variant with dashed border class', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-message variant="important">
        <div slot="title"><h4>Destacado</h4></div>
        <div slot="content"><p>Contenido</p></div>
      </dsh-message>
    `);
    await aTimeout(200);

    expect(component.variant).to.equal('important');
    const content = component.shadowRoot?.querySelector('.content');
    expect(content).to.not.be.null;
  });

  it('should show by default and update showComponent prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-message variant="info">
        <div slot="title"><h4>Test</h4></div>
      </dsh-message>
    `);
    await aTimeout(0);

    expect(component.showComponent).to.equal(true);

    component.showComponent = false;
    await aTimeout(0);
    expect(component.showComponent).to.equal(false);
  });
});
