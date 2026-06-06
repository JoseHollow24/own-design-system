import { html } from 'lit-html';
import Props from '@components/card-details/custom-elements';
import '@components/card-details';

export default {
  title: 'Components/Molecules/Card/Details',
  component: 'dsh-card-details',
  tags: ['autodocs'],
  ...Props,
};

export const Transversal = {
  name: 'Transversal',
  render: () => html`
    <dsh-card-details color="transversal" icon="fa-file-alt" style="max-width:320px;display:block;">
      <strong slot="title">Título del card</strong>
      <p slot="content">Información relevante para el usuario sobre este tema específico.</p>
      <button slot="footer">Acción principal</button>
      <button slot="footer">Acción secundaria</button>
    </dsh-card-details>
  `,
};

export const Segmentos = {
  name: 'Segmentos',
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:24px;">
      <dsh-card-details color="blue" icon="fa-user" style="max-width:280px;display:block;">
        <strong slot="title">Blue</strong>
        <p slot="content">Contenido de variante azul.</p>
        <button slot="footer">Ver más</button>
      </dsh-card-details>
      <dsh-card-details color="purple" icon="fa-heart" style="max-width:280px;display:block;">
        <strong slot="title">Purple</strong>
        <p slot="content">Contenido de variante púrpura.</p>
        <button slot="footer">Ver detalles</button>
      </dsh-card-details>
      <dsh-card-details color="slate" icon="fa-building" style="max-width:280px;display:block;">
        <h4 slot="title">Slate</h4>
        <p slot="content">Contenido de variante slate.</p>
        <button slot="footer">Gestionar</button>
      </dsh-card-details>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-card-details
      color="${args.color}"
      ?open="${args.open}"
      ?accordeonable="${args.accordeonable}"
      icon="${args.icon}"
      footer-align="${args.footerAlign}"
      style="max-width:320px;display:block;"
    >
      <strong slot="title">Título del card</strong>
      <p slot="content">Contenido del card de detalles.</p>
      <button slot="footer">Acción principal</button>
    </dsh-card-details>
  `,
};
