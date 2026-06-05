import './dist/dsh-datepicker.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-datepicker', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.value).to.equal('');
    expect(component.range).to.equal(false);
    expect(component.twoMonths).to.equal(false);
    expect(component.hereAfter).to.equal(false);
    expect(component.position).to.equal('left');
    expect(component.legend).to.equal(true);
    expect(component.absolute).to.equal(true);
  });

  it('should reflect label prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker label="Fecha"></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.label).to.equal('Fecha');
  });

  it('should reflect placeholder prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker placeholder="DD/MM/AAAA"></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.placeholder).to.equal('DD/MM/AAAA');
  });

  it('should reflect helper prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker helper="Selecciona una fecha"></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.helper).to.equal('Selecciona una fecha');
  });

  it('should reflect range prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker range></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.range).to.equal(true);
  });

  it('should reflect two-months prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker two-months></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.twoMonths).to.equal(true);
  });

  it('should reflect here-after prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker here-after></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.hereAfter).to.equal(true);
  });

  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker></dsh-datepicker>`);
    await aTimeout(200);
    expect(component.shadowRoot).to.not.be.null;
  });

  it('should render main-container in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker></dsh-datepicker>`);
    await aTimeout(200);
    const container = component.shadowRoot?.querySelector('.main-container');
    expect(container).to.not.be.null;
  });

  it('should render label when label prop is set', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker label="Mi Fecha"></dsh-datepicker>`);
    await aTimeout(200);
    const label = component.shadowRoot?.querySelector('.label');
    expect(label).to.not.be.null;
    expect(label.textContent).to.equal('Mi Fecha');
  });

  it('should render helper text', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker helper="Texto de ayuda"></dsh-datepicker>`);
    await aTimeout(200);
    const helper = component.shadowRoot?.querySelector('.helper');
    expect(helper).to.not.be.null;
    expect(helper.textContent).to.equal('Texto de ayuda');
  });

  it('should render select-box in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker></dsh-datepicker>`);
    await aTimeout(200);
    const selectBox = component.shadowRoot?.querySelector('.select-box');
    expect(selectBox).to.not.be.null;
  });

  it('should render calendar icon SVG', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker></dsh-datepicker>`);
    await aTimeout(200);
    const icon = component.shadowRoot?.querySelector('.icon svg');
    expect(icon).to.not.be.null;
  });

  it('should show dates when clicked', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker></dsh-datepicker>`);
    await aTimeout(200);
    const container = component.shadowRoot?.querySelector('.select-container');
    container?.click();
    await aTimeout(100);
    const dates = component.shadowRoot?.querySelector('.dates');
    expect(dates).to.not.be.null;
    expect(dates.classList.contains('dates-hidden')).to.equal(false);
  });

  it('should reflect state prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-datepicker state="error"></dsh-datepicker>`);
    await aTimeout(0);
    expect(component.state).to.equal('error');
  });
});

describe('Test dsh-dates', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-dates></dsh-dates>`);
    await aTimeout(0);
    expect(component.range).to.equal(false);
    expect(component.hereAfter).to.equal(false);
    expect(component.active).to.equal(false);
  });

  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-dates active></dsh-dates>`);
    await aTimeout(200);
    expect(component.shadowRoot).to.not.be.null;
  });

  it('should render calendar when active', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-dates active></dsh-dates>`);
    await aTimeout(300);
    const main = component.shadowRoot?.querySelector('.main');
    expect(main).to.not.be.null;
  });
});
