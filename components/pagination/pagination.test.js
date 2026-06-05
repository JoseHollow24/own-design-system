import './dist/dsh-pagination.es.js';
import { expect } from '@esm-bundle/chai';
import { fixtureSync, html, aTimeout, oneEvent } from '@open-wc/testing';

describe('Test dsh-pagination', () => {
  it('should render with default props', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-pagination></dsh-pagination>`);
    await aTimeout(0);

    expect(component.pages).to.equal(10);
    expect(component.selectPage).to.equal(1);
    expect(component.shadow).to.equal(false);
  });

  it('should render navigation element', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-pagination pages="5"></dsh-pagination>`);
    await aTimeout(200);

    const nav = component.shadowRoot?.querySelector('nav');
    expect(nav).to.not.be.null;
    expect(nav.getAttribute('role')).to.equal('navigation');
  });

  it('should render correct number of page buttons for small page count', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-pagination pages="5"></dsh-pagination>`);
    await aTimeout(200);

    const pageButtons = component.shadowRoot?.querySelectorAll('.paginationItem');
    expect(pageButtons.length).to.equal(5);
  });

  it('should mark first page as active by default', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-pagination pages="5"></dsh-pagination>`);
    await aTimeout(200);

    const activeBtn = component.shadowRoot?.querySelector('.paginationItem.active');
    expect(activeBtn).to.not.be.null;
    expect(activeBtn.getAttribute('aria-current')).to.equal('page');
  });

  it('should disable prev button on first page', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-pagination pages="5"></dsh-pagination>`);
    await aTimeout(200);

    const prevBtn = component.shadowRoot?.querySelector('.prev');
    expect(prevBtn.disabled).to.be.true;
  });

  it('should emit nextPage event when clicking next', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-pagination pages="5"></dsh-pagination>`);
    await aTimeout(200);

    const eventPromise = oneEvent(component, 'nextPage');
    const nextBtn = component.shadowRoot?.querySelector('.next');
    nextBtn.click();

    const event = await eventPromise;
    expect(event.type).to.equal('nextPage');
  });

  it('should emit currentPage event when clicking a page', async function () {
    this.timeout(10000);

    const component = fixtureSync(html`<dsh-pagination pages="5"></dsh-pagination>`);
    await aTimeout(200);

    const eventPromise = oneEvent(component, 'currentPage');
    const pageBtn = component.shadowRoot?.querySelectorAll('.paginationItem')[1];
    pageBtn.click();

    const event = await eventPromise;
    expect(event.type).to.equal('currentPage');
  });
});
