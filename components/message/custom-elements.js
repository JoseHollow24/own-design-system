const variants = ['info', 'informative', 'success', 'error', 'warning', 'important'];

const Props = {
  args: {
    variant: 'info',
    closeButton: false,
    timeout: 0,
    showComponent: true,
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Tipo de mensaje. <br/><small>info: informativo simple · informative/success/error/warning: acción con colores · important: destacado con borde punteado</small>',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
      control: { type: 'select' },
      options: variants,
    },
    closeButton: {
      name: 'close-button',
      description: 'Muestra botón de cierre (solo en variantes de acción)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    timeout: {
      name: 'timeout',
      description: 'Tiempo en ms para cerrar automáticamente (0 = sin timeout)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    showComponent: {
      name: 'show-component',
      description: 'Controla la visibilidad del componente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    hideMessage: {
      name: 'hide-message',
      description: 'Evento emitido al cerrar el componente',
      table: { category: 'Events', type: { summary: 'CustomEvent' } },
    },
  },
};

export default Props;
