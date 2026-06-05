import { html } from 'lit-html';
import '@components/card-highlight';

export default {
  title: 'Components/Molecules/Card/Highlights',
  component: 'dsh-card-highlights',
  tags: ['autodocs'],
};

const iconSvg = html`
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
  </svg>
`;

export const ThreeItems = {
  name: '3 Items',
  render: () => html`
    <dsh-card-highlights style="display:block;max-width:700px;">
      <dsh-card-highlights-item slot="tab" color="a6">
        ${iconSvg}
        <span slot="label">Beneficio Ámbar</span>
      </dsh-card-highlights-item>
      <dsh-card-highlights-item slot="tab" color="r6">
        ${iconSvg}
        <span slot="label">Beneficio Rojo</span>
      </dsh-card-highlights-item>
      <dsh-card-highlights-item slot="tab" color="v6">
        ${iconSvg}
        <span slot="label">Beneficio Verde</span>
      </dsh-card-highlights-item>
    </dsh-card-highlights>
  `,
};

export const TwoItems = {
  name: '2 Items',
  render: () => html`
    <dsh-card-highlights style="display:block;max-width:500px;">
      <dsh-card-highlights-item slot="tab" color="m6">
        ${iconSvg}
        <span slot="label">Opción Morado</span>
      </dsh-card-highlights-item>
      <dsh-card-highlights-item slot="tab" color="x6">
        ${iconSvg}
        <span slot="label">Opción Azul</span>
      </dsh-card-highlights-item>
    </dsh-card-highlights>
  `,
};

export const AllColors = {
  name: 'Todos los colores',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:24px;max-width:700px;">
      ${['a6', 'r6', 'n6', 'v6', 't6', 'l6', 'm6', 'x6'].map(
        (color) => html`
          <dsh-card-highlights style="display:block;">
            <dsh-card-highlights-item slot="tab" color="${color}">
              ${iconSvg}
              <span slot="label">Color ${color}</span>
            </dsh-card-highlights-item>
          </dsh-card-highlights>
        `
      )}
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: { color: 'a6' },
  argTypes: {
    color: {
      control: 'select',
      options: ['a6', 'r6', 'n6', 'v6', 't6', 'l6', 'm6', 'x6', 'a1'],
    },
  },
  render: (args) => html`
    <dsh-card-highlights style="display:block;max-width:600px;">
      <dsh-card-highlights-item slot="tab" color="${args.color}">
        ${iconSvg}
        <span slot="label">Elemento destacado</span>
      </dsh-card-highlights-item>
      <dsh-card-highlights-item slot="tab" color="x6">
        ${iconSvg}
        <span slot="label">Segundo elemento</span>
      </dsh-card-highlights-item>
    </dsh-card-highlights>
  `,
};
