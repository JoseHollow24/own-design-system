const Props = {
  icon: {
    type: String,
    reflect: true,
    value: 'fa-shield-check',
  },
  faStyles: {
    type: String,
    reflect: true,
    value: 'fas',
  },
  link: {
    type: String,
    reflect: true,
    value: '/',
  },
  linkText: {
    type: String,
    reflect: true,
    value: '',
  },
  tag: {
    type: String,
    reflect: true,
    value: '',
  },
  id: {
    type: String,
    reflect: true,
    value: '',
  },
  parentComponent: {
    type: String,
    value: null,
  },
  title: {
    type: String,
    reflect: true,
    value: '',
  },
  subtitle: {
    type: String,
    reflect: true,
    value: '',
  },
  segment: {
    type: String,
    reflect: true,
    value: 'transversales',
  },
  target: {
    type: String,
    reflect: true,
    value: '_self',
  },
  darkMode: {
    type: Boolean,
    reflect: true,
    value: false,
  },
};

export default Props;
