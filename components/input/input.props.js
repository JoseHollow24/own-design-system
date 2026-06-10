const componentProps = {
  id: { type: String, reflect: true },
  name: { type: String, reflect: true },
  type: { type: String, reflect: true, value: 'text' },
  placeholder: { type: String, reflect: true, value: '' },
  label: { type: String, reflect: true, value: '' },
  helpermessage: { type: String, reflect: true, value: '' },
  errormessage: { type: String, reflect: true, value: '' },
  disabled: { type: Boolean, reflect: true, value: false },
  variant: { type: String, reflect: true, value: '' },
  clearable: { type: Boolean, reflect: true, value: false },
  value: { type: String, reflect: true, value: '' },
  maxlength: { type: String, reflect: true, value: '700' },
  active: { type: Boolean, reflect: true, value: false },
  ariaLabel: String,
  minlength: String,
  readonly: String,
  required: { type: Boolean, reflect: true, value: false },
  darkMode: { type: Boolean, reflect: true, value: false },
};

export default componentProps;
