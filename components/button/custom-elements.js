const types = ['button', 'submit'];
const colors = ['blue', 'yellow'];
const variants = ['primary', 'secondary', 'tertiary'];
const slotPosition = ['left', 'right'];

const Props = {
  args: {
    id: 'button-id',
    name: 'button-name',
    type: 'button',
    variant: 'primary',
    color: 'blue',
    label: 'Button',
    loading: false,
    full: false,
    href: '',
    target: '_self',
    disabled: false,
    fluid: false,
    width: '',
    ariaLabel: 'button-aria-label',
    slot: 'right',
  },
  argTypes: {
    id: {
      name: 'id',
      description: 'Define el identificador del botón',
      table: { type: { summary: 'string' } },
    },
    name: {
      name: 'name',
      description: 'Define el nombre del botón',
      table: { type: { summary: 'string' } },
    },
    type: {
      name: 'type',
      description: 'Define el tipo de botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      control: { type: 'select' },
      options: types,
    },
    variant: {
      name: 'variant',
      description: 'Define la variante del botón<br/><small>(todas las combinaciones no son posibles)</small>',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: { type: 'select' },
      options: variants,
    },
    slot: {
      name: 'slot',
      description: 'Posición del slot para íconos',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
      },
      control: { type: 'select' },
      options: slotPosition,
    },
    color: {
      name: 'color',
      description: 'Define el color del botón<br/><small>(todas las combinaciones no son posibles)</small>',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
      control: { type: 'select' },
      options: colors,
    },
    label: {
      name: 'label',
      description: 'Texto del botón (también acepta contenido como slot)',
      table: { type: { summary: 'string' } },
    },
    loading: {
      name: 'loading',
      description: 'Habilita/deshabilita la animación de carga del botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    full: {
      name: 'full',
      description: 'Define si el botón debe ocupar todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    href: {
      name: 'href',
      description: 'Define la URL de enlace del botón',
      table: { type: { summary: 'string' } },
    },
    target: {
      name: 'target',
      description: 'Define el atributo target del enlace del botón<br/><small>(requiere "href" para funcionar)</small>',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Habilita/deshabilita el botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fluid: {
      name: 'fluid',
      description: 'Habilita/deshabilita la adaptación automática en dispositivos móviles',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    buttonClick: {
      name: 'buttonClick',
      description: 'Evento disparado al hacer click. Escuchable con <code>addEventListener("buttonClick", fn)</code> en JS nativo o <code>onbuttonclick</code> en React 19.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
      },
    },
    ariaLabel: {
      name: 'aria-label',
      description: 'Parámetro de accesibilidad aria-label del botón',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
      },
    },
    width: {
      name: 'width',
      description: 'Define el ancho del botón<br /><small>(Acepta medidas de CSS: px, rem, etc.)</small>',
      table: {
        category: 'Design',
        type: { summary: 'string' },
      },
    },
  },
};

export default Props;
