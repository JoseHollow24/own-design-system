import './dist/dsh-card-highlight.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-card-highlights-item', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-card-highlights-item></dsh-card-highlights-item>`);
    await aTimeout(0);

    expect(component.color).to.equal('a6');
    expect(component.total).to.equal(1);
  });

  it('should reflect color prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-card-highlights-item color="r6"></dsh-card-highlights-item>`);
    await aTimeout(0);
    expect(component.color).to.equal('r6');
  });

  it('should reflect type prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-card-highlights-item type="one"></dsh-card-highlights-item>`);
    await aTimeout(0);
    expect(component.type).to.equal('one');
  });

  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-card-highlights-item color="v6" type="one"></dsh-card-highlights-item>
    `);
    await aTimeout(200);

    expect(component.shadowRoot).to.not.be.null;
  });

  it('should render correct class for type one', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-card-highlights-item color="a6" type="one" index="3" total="3"></dsh-card-highlights-item>
    `);
    await aTimeout(200);

    const div = component.shadowRoot?.querySelector('.one');
    expect(div).to.not.be.null;
  });

  it('should render correct class for type informative', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-card-highlights-item color="m6" type="informative" index="2" total="3"></dsh-card-highlights-item>
    `);
    await aTimeout(200);

    const div = component.shadowRoot?.querySelector('.informative');
    expect(div).to.not.be.null;
  });

  it('should add radius-one class when total is 2', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-card-highlights-item color="x6" type="one" total="2"></dsh-card-highlights-item>
    `);
    await aTimeout(200);

    const div = component.shadowRoot?.querySelector('.radius-one');
    expect(div).to.not.be.null;
  });

  it('should render icon and label slots', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-card-highlights-item color="n6" type="one">
        <span slot="icon">icon</span>
        <span slot="label">Label text</span>
      </dsh-card-highlights-item>
    `);
    await aTimeout(200);

    const iconSlot = component.shadowRoot?.querySelector('slot[name="icon"]');
    const labelSlot = component.shadowRoot?.querySelector('slot[name="label"]');
    expect(iconSlot).to.not.be.null;
    expect(labelSlot).to.not.be.null;
  });
});

describe('Test dsh-card-highlights', () => {
  it('should render container with slot', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-card-highlights></dsh-card-highlights>`);
    await aTimeout(200);

    const cardsDiv = component.shadowRoot?.querySelector('.cards-items');
    expect(cardsDiv).to.not.be.null;
  });

  it('should set type one on first item and informative on rest', async function () {
    this.timeout(10000);
    const container = fixtureSync(html`
      <dsh-card-highlights>
        <dsh-card-highlights-item slot="tab" color="a6"></dsh-card-highlights-item>
        <dsh-card-highlights-item slot="tab" color="r6"></dsh-card-highlights-item>
        <dsh-card-highlights-item slot="tab" color="v6"></dsh-card-highlights-item>
      </dsh-card-highlights>
    `);
    await aTimeout(200);

    const items = container.querySelectorAll('dsh-card-highlights-item');
    expect(items[0].type).to.equal('one');
    expect(items[1].type).to.equal('informative');
    expect(items[2].type).to.equal('informative');
  });

  it('should set correct index on items (total - index)', async function () {
    this.timeout(10000);
    const container = fixtureSync(html`
      <dsh-card-highlights>
        <dsh-card-highlights-item slot="tab" color="a6"></dsh-card-highlights-item>
        <dsh-card-highlights-item slot="tab" color="r6"></dsh-card-highlights-item>
        <dsh-card-highlights-item slot="tab" color="v6"></dsh-card-highlights-item>
      </dsh-card-highlights>
    `);
    await aTimeout(200);

    const items = container.querySelectorAll('dsh-card-highlights-item');
    expect(items[0].index).to.equal('3');
    expect(items[1].index).to.equal('2');
    expect(items[2].index).to.equal('1');
  });

  it('should set total on all items', async function () {
    this.timeout(10000);
    const container = fixtureSync(html`
      <dsh-card-highlights>
        <dsh-card-highlights-item slot="tab" color="m6"></dsh-card-highlights-item>
        <dsh-card-highlights-item slot="tab" color="x6"></dsh-card-highlights-item>
      </dsh-card-highlights>
    `);
    await aTimeout(200);

    const items = container.querySelectorAll('dsh-card-highlights-item');
    expect(items[0].total).to.equal(2);
    expect(items[1].total).to.equal(2);
  });
});
