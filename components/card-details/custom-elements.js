export default {
  component: 'dsh-card-details',
  args: {
    color: 'neutral',
    open: true,
    accordeonable: false,
    icon: 'fa-file-alt',
    footerAlign: 'fluid right',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'blue', 'purple', 'slate', 'cav', 'ffmm', 'apv'],
    },
    open: { control: 'boolean' },
    accordeonable: { control: 'boolean' },
    icon: { control: 'text' },
    footerAlign: {
      control: 'select',
      options: ['left', 'right', 'center', 'fluid right', 'fluid left'],
    },
  },
};
