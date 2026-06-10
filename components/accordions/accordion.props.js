const accordionItemProps = {
  label:    { type: String,  reflect: true, value: '' },
  sublabel: { type: String,  reflect: true, value: '' },
  index:    { type: Number,  reflect: true },
  checkbox: { type: Boolean, reflect: true, value: false },
  variant:  { type: String,  reflect: true, value: 'primario-blue' },
  checked:  { type: Boolean, reflect: true, value: false },
  open:     { type: Boolean, reflect: true, value: false },
  darkMode: { type: Boolean, reflect: true, value: false },
};

export default accordionItemProps;
