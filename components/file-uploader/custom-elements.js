export default {
  component: 'dsh-file-uploader',
  args: {
    textTitle: 'Subir documento',
    textSubtitle: 'Formatos permitidos: PDF, DOC, DOCX',
    textButton: 'Subir archivo',
    buttonVariant: 'secondary',
    allowedTypes: '.pdf,.doc,.docx',
    maxLoad: 3,
    maxSize: 5,
    disabled: false,
    name: 'file-uploader',
  },
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: { control: 'boolean' },
    maxLoad: { control: 'number' },
    maxSize: { control: 'number' },
    textTitle: { control: 'text' },
    textSubtitle: { control: 'text' },
    textButton: { control: 'text' },
    allowedTypes: { control: 'text' },
  },
};
