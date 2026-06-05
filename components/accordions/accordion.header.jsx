import { c, useEvent, useRef } from 'atomico';
import '@components/checkbox';
import { customProperties, accordionHeaderStyles } from './accordion.styles';

function accordionHeaderComponent({ label, sublabel, checkbox, slotHeaderFilter, variant, type, checked, setChecked, isOpen, setIsOpen }) {
  const refSlotHeader = useRef();

  const dispatchAction = useEvent('action', {
    bubbles: true,
    composed: true,
  });

  const onChange = ({ target }) => setChecked(target.checked);

  return (
    <host shadowDom>
      {customProperties(variant, type)}
      <header className="content-header">
        {checkbox && (
          <dsh-checkbox checked={checked} onclick={(e) => onChange(e)} />
        )}
        <div
          className={`content-header-texts ${sublabel ? 'padding-sublabel' : ''}`}
          onclick={() => {
            setIsOpen(!isOpen);
            dispatchAction();
          }}
        >
          <h2
            className={`label ${checkbox ? 'label-check label-altern' : ''} ${
              slotHeaderFilter && slotHeaderFilter.length > 0 ? 'label-altern' : ''
            }`}
          >
            {label}
          </h2>
          {sublabel && <h6 className="sub-label">{sublabel}</h6>}
        </div>
        <slot ref={refSlotHeader} name="header-right">
          <slot name="header-text-center"></slot>
          <slot name="btn-left"></slot>
          <slot name="btn-right"></slot>
        </slot>
        {!(slotHeaderFilter && slotHeaderFilter.length > 0) && (
          <div
            onclick={() => {
              setIsOpen(!isOpen);
              dispatchAction();
            }}
            className={`content-arrow-header ${isOpen ? 'content-arrow-header-active' : ''}`}
          >
            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.18875 0L8.5 6.10667L14.8113 0L16.75 1.88L8.5 9.88L0.25 1.88L2.18875 0Z" fill="#0076A9" />
            </svg>
          </div>
        )}
      </header>
    </host>
  );
}

accordionHeaderComponent.props = {
  label: { type: String, reflect: true, value: '' },
  sublabel: { type: String, reflect: true, value: '' },
  checkbox: { type: Boolean, reflect: true, value: false },
  checked: { type: Boolean, reflect: true, value: false },
  isOpen: { type: Boolean, reflect: true, value: false },
  setIsOpen: { type: Function, reflect: true, value: () => {} },
  setChecked: { type: Function, reflect: true, value: () => {} },
  slotHeaderFilter: { type: Array, reflect: true, value: () => [] },
  variant: { type: String, reflect: true, value: 'blue' },
  type: { type: String, reflect: true, value: 'primario' },
};

accordionHeaderComponent.styles = [accordionHeaderStyles];

export const AccordionHeader = c(accordionHeaderComponent);

if (!customElements.get('dsh-accordion-header'))
  customElements.define('dsh-accordion-header', AccordionHeader);
