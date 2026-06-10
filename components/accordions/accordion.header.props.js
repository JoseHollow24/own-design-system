const accordionHeaderProps = {
  label:            { type: String,   reflect: true, value: '' },
  sublabel:         { type: String,   reflect: true, value: '' },
  checkbox:         { type: Boolean,  reflect: true, value: false },
  checked:          { type: Boolean,  reflect: true, value: false },
  isOpen:           { type: Boolean,  reflect: true, value: false },
  setIsOpen:        { type: Function, reflect: true, value: () => {} },
  setChecked:       { type: Function, reflect: true, value: () => {} },
  slotHeaderFilter: { type: Array,    reflect: true, value: () => [] },
  variant:          { type: String,   reflect: true, value: 'primario-blue' },
  darkMode:         { type: Boolean,  reflect: true, value: false },
};

export default accordionHeaderProps;
