import './dist/dsh-timepicker.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

const sampleTimes = JSON.stringify([
  { time: '08:00', selected: false, disabled: false },
  { time: '08:30', selected: false, disabled: false },
  { time: '09:00', selected: false, disabled: false },
  { time: '14:00', selected: false, disabled: false },
  { time: '14:30', selected: false, disabled: true },
]);

describe('Test dsh-timepicker', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker></dsh-timepicker>`);
    await aTimeout(0);
    expect(component.twentyFourH).to.equal(false);
    expect(component.maxOptions).to.equal(100);
  });

  it('should reflect twenty-four-h prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker twenty-four-h></dsh-timepicker>`);
    await aTimeout(0);
    expect(component.twentyFourH).to.equal(true);
  });

  it('should reflect max-options prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker max-options="3"></dsh-timepicker>`);
    await aTimeout(0);
    expect(component.maxOptions).to.equal(3);
  });

  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker></dsh-timepicker>`);
    await aTimeout(200);
    expect(component.shadowRoot).to.not.be.null;
  });

  it('should render container in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker></dsh-timepicker>`);
    await aTimeout(200);
    const container = component.shadowRoot?.querySelector('.container');
    expect(container).to.not.be.null;
  });

  it('should render time-container', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker></dsh-timepicker>`);
    await aTimeout(200);
    const timeContainer = component.shadowRoot?.querySelector('.time-container');
    expect(timeContainer).to.not.be.null;
  });

  it('should render dsh-time elements when timeData is provided', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker></dsh-timepicker>`);
    component.timeData = sampleTimes;
    await aTimeout(300);
    const times = component.shadowRoot?.querySelectorAll('dsh-time');
    expect(times?.length).to.be.greaterThan(0);
  });

  it('should render AM/PM container when not twentyFourH and timeData has AM times', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker></dsh-timepicker>`);
    component.timeData = sampleTimes;
    await aTimeout(300);
    const amPmContainer = component.shadowRoot?.querySelector('.am-pm-container');
    expect(amPmContainer).to.not.be.null;
  });

  it('should render text slot', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-timepicker>
        <p slot="text">Selecciona horario</p>
      </dsh-timepicker>
    `);
    await aTimeout(200);
    const slot = component.shadowRoot?.querySelector('slot[name="text"]');
    expect(slot).to.not.be.null;
  });

  it('should dispatch Select event when time button is clicked', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-timepicker></dsh-timepicker>`);
    component.timeData = sampleTimes;
    await aTimeout(400);

    setTimeout(() => {
      const firstTime = component.shadowRoot?.querySelector('dsh-time');
      firstTime?.shadowRoot?.querySelector('.time-button')?.click();
    }, 10);

    const event = await oneEvent(component, 'Select');
    expect(event).to.not.be.null;
  });
});

describe('Test dsh-time', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-time></dsh-time>`);
    await aTimeout(0);
    expect(component.value).to.equal('');
    expect(component.disabled).to.equal(false);
    expect(component.selected).to.equal(false);
  });

  it('should reflect value prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-time value="09:00"></dsh-time>`);
    await aTimeout(0);
    expect(component.value).to.equal('09:00');
  });

  it('should reflect selected prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-time selected></dsh-time>`);
    await aTimeout(0);
    expect(component.selected).to.equal(true);
  });

  it('should reflect disabled prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-time disabled></dsh-time>`);
    await aTimeout(0);
    expect(component.disabled).to.equal(true);
  });

  it('should render time-button in shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-time value="10:00"></dsh-time>`);
    await aTimeout(200);
    const btn = component.shadowRoot?.querySelector('.time-button');
    expect(btn).to.not.be.null;
  });

  it('should display value in button', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-time value="10:30"></dsh-time>`);
    await aTimeout(200);
    const btn = component.shadowRoot?.querySelector('.time-button');
    expect(btn?.textContent?.trim()).to.equal('10:30');
  });

  it('should dispatch ClickTime event when button is clicked', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-time value="10:00"></dsh-time>`);
    await aTimeout(200);

    setTimeout(() => {
      component.shadowRoot?.querySelector('.time-button')?.click();
    }, 10);

    const event = await oneEvent(component, 'ClickTime');
    expect(event).to.not.be.null;
  });
});
