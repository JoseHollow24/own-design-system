import './dist/dsh-progress-bar.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-progress-bar', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-progress-bar></dsh-progress-bar>`);
    await aTimeout(0);

    expect(component.minValue).to.equal(0);
    expect(component.maxValue).to.equal(100);
  });

  it('should render bars from optionsData', async function () {
    this.timeout(10000);

    const options = JSON.stringify([
      { value: 60, color: 'c1', label: 'Azul' },
      { value: 40, color: 'v1', label: 'Verde' },
    ]);

    const component = fixtureSync(html`
      <dsh-progress-bar options-data="${options}"></dsh-progress-bar>
    `);
    await aTimeout(200);

    const bars = component.shadowRoot?.querySelectorAll('.progress-bar__bar');
    expect(bars).to.not.be.null;
    expect(bars.length).to.equal(2);
  });

  it('should render legend items when label is provided', async function () {
    this.timeout(10000);

    const options = JSON.stringify([
      { value: 50, color: 'c1', label: 'Con etiqueta' },
      { value: 50, color: 'v1' },
    ]);

    const component = fixtureSync(html`
      <dsh-progress-bar options-data="${options}"></dsh-progress-bar>
    `);
    await aTimeout(200);

    const legends = component.shadowRoot?.querySelectorAll('.progress-bar__legend');
    expect(legends.length).to.equal(1);
  });

  it('should render top and bottom labels', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`
      <dsh-progress-bar
        options-data="[]"
        label-top-start="Inicio"
        label-top-end="Fin"
        label-bottom-start="0%"
        label-bottom-end="100%"
      ></dsh-progress-bar>
    `);
    await aTimeout(0);

    expect(component.labelTopStart).to.equal('Inicio');
    expect(component.labelTopEnd).to.equal('Fin');
    expect(component.labelBottomStart).to.equal('0%');
    expect(component.labelBottomEnd).to.equal('100%');
  });

  it('should set aria attributes correctly', async function () {
    this.timeout(10000);

    const options = JSON.stringify([{ value: 75, color: 'c1', label: 'Test' }]);

    const component = fixtureSync(html`
      <dsh-progress-bar
        options-data="${options}"
        min-value="0"
        max-value="100"
      ></dsh-progress-bar>
    `);
    await aTimeout(200);

    const bar = component.shadowRoot?.querySelector('.progress-bar__bar');
    expect(bar.getAttribute('role')).to.equal('progressbar');
    expect(bar.getAttribute('aria-valuenow')).to.equal('75');
    expect(bar.getAttribute('aria-valuemin')).to.equal('0');
    expect(bar.getAttribute('aria-valuemax')).to.equal('100');
  });
});
