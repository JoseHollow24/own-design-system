import { html } from 'lit-html';
import Props from '@components/card-deal/custom-elements';
import '@components/card-deal';

export default {
  title: 'Components/Molecules/Card/Deal',
  component: 'dsh-card-deal',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Default',
  render: () => html`
    <dsh-card-deal
      variant="default"
      tag-color="yellow"
      tag-text="Text Tag"
      img="https://www.w3schools.com/howto/img_mountains_wide.jpg"
      title="Producto"
      subtitle="Encuentra los mejores precios de temporada."
      description="Disponible en productos seleccionados."
      amount="15%"
      textamount="<strong>Ahorro</strong>"
      link="https://www.google.com"
      link-text="Ver oferta"
    ></dsh-card-deal>
  `,
};

export const Featured = {
  name: 'Featured',
  render: () => html`
    <dsh-card-deal
      variant="featured"
      segment="blue"
      tag-color="yellow"
      tag-text="Text Tag"
      img="https://www.w3schools.com/howto/img_mountains_wide.jpg"
      title="Producto"
      subtitle="Encuentra los mejores precios de temporada."
      description="Disponible en productos seleccionados."
      amount="$9.990"
      textamount="Precio"
      link="https://www.google.com"
      link-text="Ver detalle"
    ></dsh-card-deal>
  `,
};

export const FeaturedDiscount = {
  name: 'Featured Discount',
  render: () => html`
    <dsh-card-deal
      variant="featured-discount"
      segment="purple"
      tag-color="yellow"
      tag-text="Text Tag"
      img="https://www.w3schools.com/howto/img_mountains_wide.jpg"
      title="Producto"
      subtitle="Encuentra los mejores precios de temporada."
      description="Disponible en productos seleccionados."
      amount="50<sup>%</sup>"
      textamount="<strong>Ahorro</strong>"
      link="https://www.google.com"
      link-text="Ver detalle"
    ></dsh-card-deal>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-card-deal
      variant="${args.variant}"
      segment="${args.segment}"
      tag-color="${args.tagColor}"
      tag-text="${args.tagText}"
      img="${args.img}"
      title="${args.title}"
      subtitle="${args.subtitle}"
      description="${args.description}"
      amount="${args.amount}"
      textamount="${args.textamount}"
      link="${args.link}"
      link-text="${args.linkText}"
    ></dsh-card-deal>
  `,
};
