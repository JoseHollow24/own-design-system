import './dist/dsh-direct-access.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-direct-access', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-direct-access></dsh-direct-access>`);
    await aTimeout(0);

    expect(component.segment).to.equal('transversales');
    expect(component.target).to.equal('_self');
    expect(component.link).to.equal('/');
  });

  it('should render the anchor element', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-direct-access title="Test" link="/test"></dsh-direct-access>
    `);
    await aTimeout(200);

    const anchor = component.shadowRoot?.querySelector('a.direct-access');
    expect(anchor).to.not.be.null;
    expect(anchor.getAttribute('href')).to.equal('/test');
  });

  it('should show title and subtitle', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-direct-access
        title="Mi título"
        subtitle="Mi subtítulo"
      ></dsh-direct-access>
    `);
    await aTimeout(200);

    const title = component.shadowRoot?.querySelector('.title');
    const subtitle = component.shadowRoot?.querySelector('.subtitle');
    expect(title?.textContent?.trim()).to.equal('Mi título');
    expect(subtitle?.textContent?.trim()).to.equal('Mi subtítulo');
  });

  it('should not show bottom section when target is _self', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-direct-access target="_self"></dsh-direct-access>
    `);
    await aTimeout(200);

    const bottom = component.shadowRoot?.querySelector('.direct-access__bottom');
    expect(bottom).to.be.null;
  });

  it('should show bottom section when target is _blank', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-direct-access target="_blank" link-text="Ver más"></dsh-direct-access>
    `);
    await aTimeout(200);

    const bottom = component.shadowRoot?.querySelector('.direct-access__bottom');
    expect(bottom).to.not.be.null;
  });

  it('should show tag when provided', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-direct-access tag="Nuevo"></dsh-direct-access>
    `);
    await aTimeout(200);

    const tag = component.shadowRoot?.querySelector('.tag');
    expect(tag).to.not.be.null;
    expect(tag?.textContent?.trim()).to.equal('Nuevo');
  });

  it('should not show tag when empty', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-direct-access tag=""></dsh-direct-access>
    `);
    await aTimeout(200);

    const tag = component.shadowRoot?.querySelector('.tag');
    expect(tag).to.be.null;
  });
});
