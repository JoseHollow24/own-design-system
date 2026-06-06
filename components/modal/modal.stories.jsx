import { html } from 'lit-html';
import '@components/modal';
import '@components/button';

const argTypes = {
  open: {
    name: 'open',
    description: 'Controla si el modal está visible',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  textTitle: {
    name: 'text-title',
    description: 'Título del modal',
    control: 'text',
    table: { type: { summary: 'string' } },
  },
  textDescription: {
    name: 'text-description',
    description: 'Descripción o cuerpo del modal',
    control: 'text',
    table: { type: { summary: 'string' } },
  },
  closable: {
    name: 'closable',
    description: 'Muestra el botón de cierre',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  fixed: {
    name: 'fixed',
    description: 'El modal ocupa toda la altura disponible',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  noClose: {
    name: 'no-close',
    description: 'Desactiva cierre por click en fondo y tecla Escape',
    control: 'boolean',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
  },
  actionableAlign: {
    name: 'actionable-align',
    description: 'Alineación de los botones del footer',
    control: 'select',
    options: ['left', 'center', 'right'],
    table: { type: { summary: 'string' }, defaultValue: { summary: 'right' } },
  },
  variant: {
    name: 'variant',
    description: 'Variante del card del modal (promo: modal con imagen)',
    control: 'select',
    options: ['', 'promo'],
    table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
  },
  icon: {
    name: 'icon',
    description: 'Nombre del ícono Font Awesome (ej: fa-circle-check)',
    control: 'text',
    table: { type: { summary: 'string' } },
  },
  iconColor: {
    name: 'icon-color',
    description: 'Color del ícono',
    control: 'select',
    options: ['x1', 'blue', 'purple', 'slate'],
    table: { type: { summary: 'string' }, defaultValue: { summary: 'x1' } },
  },
};

export default {
  title: 'Components/Molecules/Modal',
  component: 'dsh-modal',
  tags: ['autodocs'],
  argTypes,
};

export const Basic = {
  name: 'Básico',
  render: () => html`
    <div>
      <dsh-button onclick="document.getElementById('story-basic').open = true">Abrir modal</dsh-button>
      <dsh-modal
        id="story-basic"
        text-title="Título del modal"
        text-description="Contenido informativo del modal. Aquí puedes incluir información relevante para el usuario."
      >
        <div slot="actionable">
          <dsh-button onclick="document.getElementById('story-basic').open = false">Cancelar</dsh-button>
          <dsh-button variant="primary" color="blue" onclick="document.getElementById('story-basic').open = false">Aceptar</dsh-button>
        </div>
      </dsh-modal>
    </div>
  `,
};

export const WithClose = {
  name: 'Con botón de cierre',
  render: () => html`
    <div>
      <dsh-button onclick="document.getElementById('story-close').open = true">Abrir modal</dsh-button>
      <dsh-modal
        id="story-close"
        closable
        text-title="Modal con cierre"
        text-description="Este modal tiene botón de cierre y se puede cerrar con la tecla Escape."
      >
        <div slot="actionable">
          <dsh-button variant="primary" color="blue" onclick="document.getElementById('story-close').open = false">Entendido</dsh-button>
        </div>
      </dsh-modal>
    </div>
  `,
};

export const WithIcon = {
  name: 'Con ícono',
  render: () => html`
    <div>
      <dsh-button onclick="document.getElementById('story-icon').open = true">Abrir modal</dsh-button>
      <dsh-modal
        id="story-icon"
        closable
        icon="fa-circle-check"
        icon-color="x1"
        text-title="Operación exitosa"
        text-description="La acción se completó correctamente."
      >
        <div slot="actionable">
          <dsh-button variant="primary" color="blue" onclick="document.getElementById('story-icon').open = false">Entendido</dsh-button>
        </div>
      </dsh-modal>
    </div>
  `,
};

export const WithSafeArea = {
  name: 'Con área segura',
  render: () => html`
    <div>
      <dsh-button onclick="document.getElementById('story-safe').open = true">Abrir modal</dsh-button>
      <dsh-modal
        id="story-safe"
        closable
        text-title="Información adicional"
        text-description="Modal con contenido en el área segura bajo el cuerpo principal."
      >
        <div slot="safe-area">
          <p style="margin:0;padding:12px;background:#f6f7f7;border-radius:8px;font-size:14px;">Contenido del área segura: términos y condiciones adicionales.</p>
        </div>
        <div slot="actionable">
          <dsh-button onclick="document.getElementById('story-safe').open = false">Cancelar</dsh-button>
          <dsh-button variant="primary" color="blue" onclick="document.getElementById('story-safe').open = false">Confirmar</dsh-button>
        </div>
      </dsh-modal>
    </div>
  `,
};

export const WithImage = {
  name: 'Con imagen (promo)',
  render: () => html`
    <div>
      <dsh-button onclick="document.getElementById('story-promo').open = true">Abrir modal</dsh-button>
      <dsh-modal
        id="story-promo"
        closable
        variant="promo"
        image-src="https://www.w3schools.com/howto/img_mountains_wide.jpg"
        image-alt="Imagen de montañas"
        text-title="Destino destacado"
        text-description="Explora los mejores destinos disponibles esta temporada."
      >
        <div slot="actionable">
          <dsh-button onclick="document.getElementById('story-promo').open = false">Más tarde</dsh-button>
          <dsh-button variant="primary" color="blue" onclick="document.getElementById('story-promo').open = false">Ver más</dsh-button>
        </div>
      </dsh-modal>
    </div>
  `,
};

export const WithAvatar = {
  name: 'Con avatar',
  render: () => html`
    <div>
      <dsh-button onclick="document.getElementById('story-avatar').open = true">Abrir modal</dsh-button>
      <dsh-modal
        id="story-avatar"
        closable
        avatar-src="https://www.w3schools.com/howto/img_avatar.png"
        avatar-alt="Avatar de usuario"
        text-title="Perfil de usuario"
        text-description="Información del perfil seleccionado."
      >
        <div slot="actionable">
          <dsh-button variant="primary" color="blue" onclick="document.getElementById('story-avatar').open = false">Cerrar</dsh-button>
        </div>
      </dsh-modal>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: {
    open: false,
    textTitle: 'Título del modal',
    textDescription: 'Descripción del contenido del modal.',
    closable: true,
    fixed: false,
    noClose: false,
    actionableAlign: 'right',
    variant: '',
    icon: '',
    iconColor: 'x1',
  },
  render: (args) => html`
    <dsh-modal
      ?open="${args.open}"
      text-title="${args.textTitle}"
      text-description="${args.textDescription}"
      ?closable="${args.closable}"
      ?fixed="${args.fixed}"
      ?no-close="${args.noClose}"
      actionable-align="${args.actionableAlign}"
      variant="${args.variant}"
      icon="${args.icon}"
      icon-color="${args.iconColor}"
    >
      <div slot="actionable">
        <dsh-button>Cancelar</dsh-button>
        <dsh-button variant="primary" color="blue">Aceptar</dsh-button>
      </div>
    </dsh-modal>
  `,
};
