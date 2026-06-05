import { html } from 'lit-html';
import Props from '@components/card-headline/custom-elements';
import '@components/card-headline';

export default {
  title: 'Components/Molecules/Card/Headline',
  component: 'dsh-card-headline',
  tags: ['autodocs'],
  ...Props,
};

export const Info = {
  name: 'Info — Blue',
  render: () => html`
    <div style="max-width:300px;display:block;">
      <dsh-card-headline
        segment="blue"
        variant="info"
        img="https://www.w3schools.com/howto/img_mountains_wide.jpg"
        amount="50%"
        button-text="Ver más"
        button-link="https://www.google.com"
      >
        <span slot="title">Descuento especial</span>
        <span slot="description">Válido para compras en línea hasta agotar stock.</span>
      </dsh-card-headline>
    </div>
  `,
};

export const Segmentos = {
  name: 'Segmentos',
  render: () => html`
    <div style="display:flex;gap:24px;flex-wrap:wrap;">
      <dsh-card-headline segment="blue" variant="info" amount="$9.990" img="https://www.w3schools.com/howto/img_mountains_wide.jpg" style="max-width:260px;display:block;">
        <span slot="title">Blue</span>
        <span slot="description">Descripción de la variante azul.</span>
      </dsh-card-headline>
      <dsh-card-headline segment="purple" variant="info" amount="50%" img="https://www.w3schools.com/howto/img_mountains_wide.jpg" style="max-width:260px;display:block;">
        <span slot="title">Purple</span>
        <span slot="description">Descripción de la variante púrpura.</span>
      </dsh-card-headline>
      <dsh-card-headline segment="slate" variant="info" amount="30%" img="https://www.w3schools.com/howto/img_mountains_wide.jpg" style="max-width:260px;display:block;">
        <span slot="title">Slate</span>
        <span slot="description">Beneficio corporativo.</span>
      </dsh-card-headline>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <div style="max-width:300px;display:block;">
      <dsh-card-headline
        segment="${args.segment}"
        variant="${args.variant}"
        img="${args.img}"
        amount="${args.amount}"
        button-text="${args.buttonText}"
        button-link="${args.buttonLink}"
        target="${args.target}"
        description-font="${args.descriptionFont}"
        description-font-mobile="${args.descriptionFontMobile}"
      >
        <span slot="title">Título del card</span>
        <span slot="description">Descripción de ejemplo para el componente.</span>
      </dsh-card-headline>
    </div>
  `,
};
