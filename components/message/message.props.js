const Props = {
  variant: {
    type: String,
    reflect: true,
    value: 'info',
  },
  closeButton: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  timeout: {
    type: Number,
    reflect: true,
    value: 0,
  },
  showComponent: {
    type: Boolean,
    reflect: true,
    value: true,
  },
  ariaLabel: {
    type: String,
    reflect: true,
    value: '',
  },
  id: {
    type: String,
    reflect: true,
    value: '',
  },
};

export default Props;
