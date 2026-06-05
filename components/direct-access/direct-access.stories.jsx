import { html } from 'lit-html';
import Props from '@components/direct-access/custom-elements';
import '@components/direct-access';

export default {
  title: 'Components/Molecules/Direct Access',
  component: 'dsh-direct-access',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Por defecto',
  render: () => html`
    <dsh-direct-access
      icon="fa-shield-check"
      title="Certificado de afiliación"
      subtitle="Descarga tu certificado en línea"
      segment="blue"
      link="/"
    ></dsh-direct-access>
  `,
};

export const Segments = {
  name: 'Segmentos (colores)',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;">
      <dsh-direct-access
        icon="fa-user"
        title="Blue"
        subtitle="Categoría principal"
        segment="blue"
        link="/"
      ></dsh-direct-access>
      <dsh-direct-access
        icon="fa-building"
        title="Slate"
        subtitle="Categoría secundaria"
        segment="slate"
        link="/"
      ></dsh-direct-access>
      <dsh-direct-access
        icon="fa-wheelchair"
        title="Purple"
        subtitle="Categoría terciaria"
        segment="purple"
        link="/"
      ></dsh-direct-access>
      <dsh-direct-access
        icon="fa-globe"
        title="Transversales"
        subtitle="Acceso transversal"
        segment="transversales"
        link="/"
      ></dsh-direct-access>
    </div>
  `,
};

export const WithExternalLink = {
  name: 'Con enlace externo (footer)',
  render: () => html`
    <dsh-direct-access
      icon="fa-file-invoice"
      title="Portal de cotizaciones"
      subtitle="Gestiona tus cotizaciones"
      segment="blue"
      link="https://example.com"
      target="_blank"
      link-text="Ir al portal externo"
    ></dsh-direct-access>
  `,
};

export const WithTag = {
  name: 'Con etiqueta',
  render: () => html`
    <dsh-direct-access
      icon="fa-star"
      title="Servicio destacado"
      subtitle="Accede al servicio especial"
      segment="blue"
      tag="Nuevo"
      link="/"
    ></dsh-direct-access>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-direct-access
      icon="${args.icon}"
      fa-styles="${args.faStyles}"
      title="${args.title}"
      subtitle="${args.subtitle}"
      segment="${args.segment}"
      link="${args.link}"
      target="${args.target}"
      link-text="${args.linkText}"
      tag="${args.tag}"
    ></dsh-direct-access>
  `,
};
