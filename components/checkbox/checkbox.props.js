const Props = {
  id: { type: String, reflect: true },
  name: { type: String, reflect: true },
  label: { type: String, reflect: true },
  value: { type: String, reflect: true },
  focus: { type: Boolean, reflect: true },
  checked: { type: Boolean, reflect: true, value: false },
  error: { type: Boolean, reflect: true },
  required: { type: Boolean, reflect: true },
  disabled: { type: Boolean, reflect: true },
  indeterminate: { type: Boolean, reflect: true, value: false },
  dark: { type: Boolean, reflect: true },
  tabIndex: { type: Number, reflect: true, value: 1 },
};

export default Props;
