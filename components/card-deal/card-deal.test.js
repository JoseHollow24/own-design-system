import './dist/dsh-card-deal.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-card-deal', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal></dsh-card-deal>`);
    await aTimeout(0);

    expect(component.variant).to.equal('default');
    expect(component.segment).to.equal('default');
    expect(component.img).to.equal('');
    expect(component.tagText).to.equal('');
    expect(component.title).to.equal('');
    expect(component.subtitle).to.equal('');
    expect(component.description).to.equal('');
    expect(component.amount).to.equal('');
    expect(component.textamount).to.equal('');
    expect(component.link).to.equal('');
    expect(component.linkText).to.equal('');
    expect(component.tagColor).to.equal('blue');
  });

  it('should reflect variant prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal variant="featured"></dsh-card-deal>`);
    await aTimeout(0);
    expect(component.variant).to.equal('featured');

    const component2 = fixtureSync(html`<dsh-card-deal variant="featured-discount"></dsh-card-deal>`);
    await aTimeout(0);
    expect(component2.variant).to.equal('featured-discount');
  });

  it('should reflect img prop', async function () {
    this.timeout(10000);

    const img = 'https://www.w3schools.com/howto/img_mountains_wide.jpg';
    const component = fixtureSync(html`<dsh-card-deal img="${img}"></dsh-card-deal>`);
    await aTimeout(0);
    expect(component.img).to.equal(img);
  });

  it('should render card container in shadow DOM', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal title="Test" variant="featured"></dsh-card-deal>`);
    await aTimeout(200);

    const card = component.shadowRoot?.querySelector('.card');
    expect(card).to.not.be.null;
  });

  it('should show image element when img prop is set', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-card-deal
        img="https://www.w3schools.com/howto/img_mountains_wide.jpg"
        variant="featured"
      ></dsh-card-deal>
    `);
    await aTimeout(200);

    const img = component.shadowRoot?.querySelector('.card-image img');
    expect(img).to.not.be.null;
  });

  it('should not show image element when img is empty', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal variant="featured"></dsh-card-deal>`);
    await aTimeout(200);

    const img = component.shadowRoot?.querySelector('.card-image');
    expect(img).to.be.null;
  });

  it('should reflect subtitle prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal variant="featured" subtitle="Buses"></dsh-card-deal>`);
    await aTimeout(0);
    expect(component.subtitle).to.equal('Buses');
  });

  it('should reflect description prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal variant="featured" description="Texto descriptivo"></dsh-card-deal>`);
    await aTimeout(0);
    expect(component.description).to.equal('Texto descriptivo');
  });

  it('should reflect textamount prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal textamount="Dcto."></dsh-card-deal>`);
    await aTimeout(0);
    expect(component.textamount).to.equal('Dcto.');
  });

  it('should apply segment class for gradient', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-deal segment="blue" variant="featured"></dsh-card-deal>`);
    await aTimeout(0);
    expect(component.segment).to.equal('blue');
  });
});
