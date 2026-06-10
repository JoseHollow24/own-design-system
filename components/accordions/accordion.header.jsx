import { c, useEvent, useRef } from 'atomico';
import '@components/checkbox';
import '@components/icon';
import { customProperties, accordionHeaderStyles } from './accordion.styles';
import accordionHeaderProps from './accordion.header.props';

function accordionHeaderComponent({ label, sublabel, checkbox, slotHeaderFilter, variant, checked, setChecked, isOpen, setIsOpen, darkMode }) {
  const refSlotHeader = useRef();

  const dispatchAction = useEvent('action', {
    bubbles: true,
    composed: true,
  });

  const onChange = ({ target }) => setChecked(target.checked);

  return (
    <host shadowDom>
      {customProperties(variant, darkMode)}
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
            className={`content-arrow-header ${isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}`}
          >
            <dsh-icon icon-name={isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'} size="s2" color={darkMode ? 'white' : 'c1'}></dsh-icon>
          </div>
        )}
      </header>
    </host>
  );
}

accordionHeaderComponent.props = accordionHeaderProps;

accordionHeaderComponent.styles = [accordionHeaderStyles];

export const AccordionHeader = c(accordionHeaderComponent);

if (!customElements.get('dsh-accordion-header'))
  customElements.define('dsh-accordion-header', AccordionHeader);
