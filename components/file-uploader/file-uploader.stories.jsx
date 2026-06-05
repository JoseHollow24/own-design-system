import { html } from 'lit-html';
import Props from '@components/file-uploader/custom-elements';
import '@components/file-uploader';

export default {
  title: 'Components/Molecules/FileUploader',
  component: 'dsh-file-uploader',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Default',
  render: () => html`
    <dsh-file-uploader
      text-title="Subir documento"
      text-subtitle="Sube un archivo PDF de máximo 5MB"
      text-button="Subir archivo"
      allowed-types=".pdf"
      max-size="5"
      max-load="1"
      name="doc-default"
    ></dsh-file-uploader>
  `,
};

export const Multiple = {
  name: 'Multiple archivos',
  render: () => html`
    <dsh-file-uploader
      text-title="Documentos de respaldo"
      text-subtitle="Formatos: PDF, DOC, DOCX — máx. 3MB cada uno"
      allowed-types=".pdf,.doc,.docx"
      max-size="3"
      max-load="3"
      name="docs-multiple"
    ></dsh-file-uploader>
  `,
};

export const Disabled = {
  name: 'Deshabilitado',
  render: () => html`
    <dsh-file-uploader
      text-title="Carga no disponible"
      text-subtitle="Esta función no está disponible en este momento"
      disabled
      name="disabled-demo"
    ></dsh-file-uploader>
  `,
};

export const NoSubtitle = {
  name: 'Sin subtítulo',
  render: () => html`
    <dsh-file-uploader
      text-title="Adjuntar archivo"
      allowed-types=".pdf,.jpg,.png"
      max-size="10"
      max-load="2"
      name="no-subtitle"
    ></dsh-file-uploader>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-file-uploader
      text-title="${args.textTitle}"
      text-subtitle="${args.textSubtitle}"
      text-button="${args.textButton}"
      button-variant="${args.buttonVariant}"
      allowed-types="${args.allowedTypes}"
      max-load="${args.maxLoad}"
      max-size="${args.maxSize}"
      name="${args.name}"
      ?disabled="${args.disabled}"
    ></dsh-file-uploader>
  `,
};
