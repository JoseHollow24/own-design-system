import './dist/dsh-file-uploader.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout } from '@open-wc/testing';

describe('Test dsh-file-uploader', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-file-uploader></dsh-file-uploader>`);
    await aTimeout(0);

    expect(component.buttonVariant).to.equal('secondary');
    expect(component.maxLoad).to.equal(1);
    expect(component.maxSize).to.equal(3);
    expect(component.disabled).to.equal(false);
    expect(component.allowedTypes).to.equal('');
  });

  it('should reflect textTitle prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-file-uploader text-title="Mi título"></dsh-file-uploader>
    `);
    await aTimeout(0);
    expect(component.textTitle).to.equal('Mi título');
  });

  it('should reflect maxLoad prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-file-uploader max-load="5"></dsh-file-uploader>
    `);
    await aTimeout(0);
    expect(component.maxLoad).to.equal(5);
  });

  it('should reflect disabled prop', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-file-uploader disabled></dsh-file-uploader>`);
    await aTimeout(0);
    expect(component.disabled).to.equal(true);
  });

  it('should render shadow DOM with button', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-file-uploader text-title="Upload"></dsh-file-uploader>`);
    await aTimeout(200);

    const button = component.shadowRoot?.querySelector('dsh-button');
    expect(button).to.not.be.null;
  });

  it('should render title sub-component', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-file-uploader text-title="Subir archivos"></dsh-file-uploader>
    `);
    await aTimeout(200);

    const title = component.shadowRoot?.querySelector('dsh-file-uploader-title');
    expect(title).to.not.be.null;
  });

  it('should render subtitle when provided', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-file-uploader
        text-title="Título"
        text-subtitle="Subtítulo"
      ></dsh-file-uploader>
    `);
    await aTimeout(200);

    const subtitle = component.shadowRoot?.querySelector('dsh-file-uploader-subtitle');
    expect(subtitle).to.not.be.null;
  });

  it('should render list sub-component', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-file-uploader name="test"></dsh-file-uploader>`);
    await aTimeout(200);

    const list = component.shadowRoot?.querySelector('dsh-file-uploader-list');
    expect(list).to.not.be.null;
  });
});

describe('Test dsh-file-uploader-message', () => {
  it('should render error message', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-file-uploader-message
        .errors=${['not_valid_size']}
        max-size="5"
      ></dsh-file-uploader-message>
    `);
    await aTimeout(200);

    const container = component.shadowRoot?.querySelector('.container');
    expect(container).to.not.be.null;
  });
});

describe('Test dsh-file-uploader-file', () => {
  it('should have default prop values', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`<dsh-file-uploader-file></dsh-file-uploader-file>`);
    await aTimeout(0);
    expect(component.disabled).to.equal(false);
  });

  it('should render shadow DOM', async function () {
    this.timeout(10000);
    const component = fixtureSync(html`
      <dsh-file-uploader-file
        name="documento.pdf"
        state="ready"
        .file=${{ url: '#', name: 'documento.pdf' }}
      ></dsh-file-uploader-file>
    `);
    await aTimeout(200);
    expect(component.shadowRoot).to.not.be.null;
  });
});
