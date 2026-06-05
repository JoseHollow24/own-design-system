import { html } from 'lit-html';
import Props from '@components/progress-bar/custom-elements';
import '@components/progress-bar';

export default {
  title: 'Components/Molecules/Progress Bar',
  component: 'dsh-progress-bar',
  tags: ['autodocs'],
  ...Props,
};

const opts = (arr) => JSON.stringify(arr);

export const Default = {
  name: 'Por defecto',
  render: () => html`
    <dsh-progress-bar
      options-data=${opts([
        { value: 40, color: 'c1', label: 'Segmento A' },
        { value: 35, color: 'v1', label: 'Segmento B' },
        { value: 25, color: 'a3', label: 'Segmento C' },
      ])}
      label-top-start="Inicio"
      label-top-end="Fin"
      label-bottom-start="0"
      label-bottom-end="100"
    ></dsh-progress-bar>
  `,
};

export const WithTitle = {
  name: 'Con título (slot)',
  render: () => html`
    <dsh-progress-bar
      options-data=${opts([
        { value: 60, color: 'c1', label: 'Completado' },
        { value: 40, color: 'g4', label: 'Pendiente' },
      ])}
      label-top-start="0%"
      label-top-end="100%"
    >
      <span slot="title">Progreso total del proyecto</span>
    </dsh-progress-bar>
  `,
};

export const Colors = {
  name: 'Colores disponibles',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dsh-progress-bar
        options-data=${opts([{ value: 100, color: 'c1', label: 'Azul (c1)' }])}
        label-top-start="Azul"
      ></dsh-progress-bar>
      <dsh-progress-bar
        options-data=${opts([{ value: 100, color: 'v1', label: 'Verde (v1)' }])}
        label-top-start="Verde"
      ></dsh-progress-bar>
      <dsh-progress-bar
        options-data=${opts([{ value: 100, color: 'r1', label: 'Rojo (r1)' }])}
        label-top-start="Rojo"
      ></dsh-progress-bar>
      <dsh-progress-bar
        options-data=${opts([{ value: 100, color: 'a3', label: 'Amarillo (a3)' }])}
        label-top-start="Amarillo"
      ></dsh-progress-bar>
      <dsh-progress-bar
        options-data=${opts([{ value: 100, color: 'n1', label: 'Naranja (n1)' }])}
        label-top-start="Naranja"
      ></dsh-progress-bar>
      <dsh-progress-bar
        options-data=${opts([{ value: 100, color: 't1', label: 'Teal (t1)' }])}
        label-top-start="Teal"
      ></dsh-progress-bar>
    </div>
  `,
};

export const MultiSegment = {
  name: 'Múltiples segmentos',
  render: () => html`
    <dsh-progress-bar
      options-data=${opts([
        { value: 25, color: 'c1', label: 'Enero' },
        { value: 30, color: 'v1', label: 'Febrero' },
        { value: 20, color: 'a3', label: 'Marzo' },
        { value: 15, color: 'r1', label: 'Abril' },
        { value: 10, color: 'n1', label: 'Mayo' },
      ])}
      label-top-start="Ene"
      label-top-end="May"
      label-bottom-start="Inicio del año"
      label-bottom-end="Fin del período"
    ></dsh-progress-bar>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-progress-bar
      options-data="${args.optionsData}"
      min-value="${args.minValue}"
      max-value="${args.maxValue}"
      label-top-start="${args.labelTopStart}"
      label-top-end="${args.labelTopEnd}"
      label-bottom-start="${args.labelBottomStart}"
      label-bottom-end="${args.labelBottomEnd}"
    ></dsh-progress-bar>
  `,
};
