const componentProps = {
  ariaLabel: String,
  name: String,
  id: String,
  label: { type: String, reflect: true, value: '' },
  state: { type: String, reflect: true, value: '' },
  variant: { type: String, reflect: true, value: 'informative' },
  subvariant: { type: String, reflect: true, value: 'success' },
  showIcon: { type: Boolean, reflect: true, value: false },
  color: { type: String, reflect: true, value: '' },
  darkMode: { type: Boolean, reflect: true, value: false },
};

export default componentProps;
