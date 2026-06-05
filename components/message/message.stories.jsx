import { html } from 'lit-html';
import Props from '@components/message/custom-elements';
import '@components/message';

export default {
  title: 'Components/Molecules/Message',
  component: 'dsh-message',
  tags: ['autodocs'],
  ...Props,
};

export const Info = {
  name: 'Info',
  render: () => html`
    <dsh-message variant="info">
      <div slot="title"><h3>Información importante</h3></div>
      <div slot="content"><p>Este es un mensaje informativo con contenido relevante para el usuario.</p></div>
      <div slot="footer"><a href="/">Ver más</a></div>
    </dsh-message>
  `,
};

export const ActionVariants = {
  name: 'Variantes de acción',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dsh-message variant="informative">
        <div slot="title"><h4>Informativo</h4></div>
        <div slot="content"><p>Mensaje informativo con fondo azul claro.</p></div>
      </dsh-message>
      <dsh-message variant="success">
        <div slot="title"><h4>Éxito</h4></div>
        <div slot="content"><p>La operación se realizó correctamente.</p></div>
      </dsh-message>
      <dsh-message variant="error">
        <div slot="title"><h4>Error</h4></div>
        <div slot="content"><p>Ocurrió un error al procesar la solicitud.</p></div>
      </dsh-message>
      <dsh-message variant="warning">
        <div slot="title"><h4>Advertencia</h4></div>
        <div slot="content"><p>Revisa los datos antes de continuar.</p></div>
      </dsh-message>
    </div>
  `,
};

export const WithCloseButton = {
  name: 'Con botón de cierre',
  render: () => html`
    <dsh-message variant="informative" ?close-button="${true}">
      <div slot="title"><h4>Mensaje con cierre</h4></div>
      <div slot="content"><p>Haz clic en la X para cerrar este mensaje.</p></div>
    </dsh-message>
  `,
};

export const Important = {
  name: 'Importante (borde punteado)',
  render: () => html`
    <dsh-message variant="important">
      <div slot="title"><h4>Información destacada</h4></div>
      <div slot="content"><p>Este mensaje usa un borde punteado para destacarse visualmente.</p></div>
      <div slot="footer"><a href="/">Más información</a></div>
    </dsh-message>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-message
      variant="${args.variant}"
      ?close-button="${args.closeButton}"
      timeout="${args.timeout}"
      ?show-component="${args.showComponent}"
    >
      <div slot="title"><h4>Título del mensaje</h4></div>
      <div slot="content"><p>Contenido del mensaje para este variant.</p></div>
      <div slot="footer"><a href="/">Acción</a></div>
    </dsh-message>
  `,
};
