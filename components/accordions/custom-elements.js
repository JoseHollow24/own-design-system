export default {
  'dsh-accordions': {
    component: 'dsh-accordions',
    description: 'Contenedor de acordeones',
  },
  'dsh-accordion-item': {
    component: 'dsh-accordion-item',
    description: 'Item de acordeón expandible',
    args: {
      label: 'Título del acordeón',
      sublabel: '',
      variant: 'blue',
      type: 'primario',
      open: false,
      checkbox: false,
      checked: false,
    },
    argTypes: {
      label: { control: 'text' },
      sublabel: { control: 'text' },
      variant: {
        control: 'select',
        options: ['blue', 'slate', 'purple', 'neutral'],
      },
      type: {
        control: 'select',
        options: ['primario', 'secundario', 'borderbottom', 'none'],
      },
      open: { control: 'boolean' },
      checkbox: { control: 'boolean' },
      checked: { control: 'boolean' },
    },
  },
};
