import { html } from 'lit-html';
import { userEvent, expect } from 'storybook/test';
import Props from '@components/pagination/custom-elements';
import '@components/pagination';

export default {
  title: 'Components/Molecules/Pagination',
  component: 'dsh-pagination',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Por defecto',
  render: () => html`
    <dsh-pagination pages="10"></dsh-pagination>
  `,
};

export const FewPages = {
  name: 'Pocas páginas (≤ 6)',
  render: () => html`
    <dsh-pagination pages="5"></dsh-pagination>
  `,
};

export const ManyPages = {
  name: 'Muchas páginas (con puntos suspensivos)',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dsh-pagination pages="20" select-page="1"></dsh-pagination>
      <dsh-pagination pages="20" select-page="10"></dsh-pagination>
      <dsh-pagination pages="20" select-page="20"></dsh-pagination>
    </div>
  `,
};

export const WithShadow = {
  name: 'Con sombra',
  render: () => html`
    <dsh-pagination pages="10" ?shadow="${true}"></dsh-pagination>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-pagination
      pages="${args.pages}"
      select-page="${args.selectPage}"
      ?shadow="${args.shadow}"
    ></dsh-pagination>
  `,
};

export const Interaction = {
  name: 'Interacción — Eventos',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dsh-pagination id="pg-events" pages="5"></dsh-pagination>
      <p id="log" style="font-family:monospace;font-size:13px;color:#586264;">Esperando evento...</p>
    </div>
  `,
  play: async ({ canvasElement }) => {
    await customElements.whenDefined('dsh-pagination');
    const pg = canvasElement.querySelector('#pg-events');
    const log = canvasElement.querySelector('#log');

    pg.addEventListener('nextPage', (e) => {
      log.textContent = `nextPage → ${e.detail}`;
    });
    pg.addEventListener('prevPage', (e) => {
      log.textContent = `prevPage → ${e.detail}`;
    });
    pg.addEventListener('currentPage', (e) => {
      log.textContent = `currentPage → ${e.detail}`;
    });

    await customElements.whenDefined('dsh-pagination');
    const nextBtn = pg.shadowRoot?.querySelector('.next');
    await expect(nextBtn).not.toBeNull();
    await userEvent.click(nextBtn);
    await expect(log.textContent).to.include('nextPage');
  },
};
