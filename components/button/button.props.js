const props = {
  label: {
    type: String,
    reflect: true,
  },
  id: {
    type: String,
    reflect: true,
  },
  name: {
    type: String,
    reflect: true,
  },
  type: {
    type: String,
    reflect: true,
    value: 'button',
  },
  variant: {
    type: String,
    reflect: true,
    value: 'primary',
  },
  color: {
    type: String,
    reflect: true,
    value: 'blue',
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  loading: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  vertical: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  href: {
    type: String,
    reflect: true,
  },
  target: {
    type: String,
    reflect: true,
    value: '_self',
  },
  full: {
    type: Boolean,
    reflect: true,
  },
  fluid: {
    type: Boolean,
    reflect: true,
  },
  ariaLabel: {
    type: String,
    reflect: true,
  },
  width: {
    type: String,
    reflect: true,
  },
  darkMode: {
    type: Boolean,
    reflect: true,
    value: false,
  },
};

export default props;
