import './dist/dsh-card-headline.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-card-headline', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-card-headline></dsh-card-headline>`);
    await aTimeout(0);

    expect(component.segment).to.equal('default');
    expect(component.descriptionFont).to.equal('default');
    expect(component.descriptionFontMobile).to.equal('default');
    expect(component.variant).to.equal('info');
    expect(component.img).to.equal('');
    expect(component.amount).to.equal('');
    expect(component.buttonText).to.equal('');
    expect(component.buttonLink).to.equal('');
    expect(component.target).to.equal('_self');
  });

  it('should reflect img prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-headline img="https://picsum.photos/600/300"></dsh-card-headline>`);
    await aTimeout(0);
    expect(component.img).to.equal('https://picsum.photos/600/300');
  });

  it('should reflect variant prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-headline variant="custom"></dsh-card-headline>`);
    await aTimeout(0);
    expect(component.variant).to.equal('custom');
  });

  it('should reflect segment prop', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-headline segment="blue"></dsh-card-headline>`);
    await aTimeout(0);
    expect(component.segment).to.equal('blue');
  });

  it('should render card container in shadow DOM', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-headline variant="info"></dsh-card-headline>`);
    await aTimeout(200);

    const card = component.shadowRoot?.querySelector('.card');
    expect(card).to.not.be.null;
  });

  it('should render amount text in info variant', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-headline variant="info" amount="$9.990"></dsh-card-headline>`);
    await aTimeout(200);

    const amount = component.shadowRoot?.querySelector('.body-content__amount');
    expect(amount).to.not.be.null;
    expect(amount.textContent).to.equal('$9.990');
  });

  it('should show footer button when buttonLink and buttonText are set', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-card-headline
        variant="info"
        button-text="Ver más"
        button-link="https://example.com"
      ></dsh-card-headline>
    `);
    await aTimeout(200);

    const footer = component.shadowRoot?.querySelector('.card__footer');
    expect(footer).to.not.be.null;
  });

  it('should not show footer when buttonLink is empty', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-card-headline variant="info" amount="50%"></dsh-card-headline>`);
    await aTimeout(200);

    const footer = component.shadowRoot?.querySelector('.card__footer');
    expect(footer).to.be.null;
  });
});
