import './dist/dsh-card-details.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-card-details', () => {
  it('should render the component', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`<dsh-card-details></dsh-card-details>`);
    await aTimeout(0);
    expect(el).to.exist;
  });

  it('should have default prop values', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`<dsh-card-details></dsh-card-details>`);
    await aTimeout(0);
    expect(el.color).to.equal('transversal');
    expect(el.open).to.equal(true);
    expect(el.accordeonable).to.equal(false);
  });

  it('should reflect color prop', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`<dsh-card-details color="blue"></dsh-card-details>`);
    await aTimeout(0);
    expect(el.color).to.equal('blue');
  });

  it('should reflect accordeonable prop', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`<dsh-card-details ?accordeonable="${true}"></dsh-card-details>`);
    await aTimeout(0);
    expect(el.accordeonable).to.equal(true);
  });

  it('should reflect icon prop', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`<dsh-card-details icon="fa-test"></dsh-card-details>`);
    await aTimeout(0);
    expect(el.icon).to.equal('fa-test');
  });

  it('should accept footerAlign prop', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`<dsh-card-details footer-align="right"></dsh-card-details>`);
    await aTimeout(0);
    expect(el).to.exist;
  });

  it('should render title slot content', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`
      <dsh-card-details>
        <span slot="title">Title Test</span>
      </dsh-card-details>
    `);
    await aTimeout(0);
    const slot = el.querySelector('[slot="title"]');
    expect(slot.textContent).to.equal('Title Test');
  });

  it('should render content slot', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`
      <dsh-card-details>
        <span slot="content">Content Test</span>
      </dsh-card-details>
    `);
    await aTimeout(0);
    const slot = el.querySelector('[slot="content"]');
    expect(slot.textContent).to.equal('Content Test');
  });

  it('should render footer slot', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`
      <dsh-card-details>
        <span slot="footer">Footer Test</span>
      </dsh-card-details>
    `);
    await aTimeout(0);
    const slot = el.querySelector('[slot="footer"]');
    expect(slot.textContent).to.equal('Footer Test');
  });

  it('should render shadow DOM with line element', async function () {
    this.timeout(10000);
    const el = fixtureSync(html`<dsh-card-details color="slate"></dsh-card-details>`);
    await aTimeout(200);
    const line = el.shadowRoot?.querySelector('dsh-card-details-line');
    expect(line).to.not.be.null;
  });
});
