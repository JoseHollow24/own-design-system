import { c, css, useRef, useProp } from 'atomico';
import { useCssLightDom } from '@atomico/hooks/use-css-light-dom';
import { useResizeObserverState } from '@atomico/hooks/use-resize-observer';
import { useChildNodes } from '@atomico/hooks/use-child-nodes';
import { customProperties, accordionItemStyles } from './accordion.styles';
import './accordion.header.jsx';

const cssLightDom = css`
  [slot='body'] {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    color: #3e4545;
  }
  [slot='btn-left'] {
    padding: 0 16px;
  }
  [slot='btn-left'],
  [slot='btn-right'] {
    display: flex;
    align-items: center;
  }
  ul {
    margin-top: 0;
    padding-left: 30px;
  }
`;

function accordionItemComponent({ label, checkbox, variant, type, sublabel }) {
  const contentBody = useRef();

  const [rawChildNodes = []] = useChildNodes();
  const childNodes = (Array.isArray(rawChildNodes) ? rawChildNodes : Array.from(rawChildNodes)).filter(Boolean);

  const slotHeaderFilter = childNodes
    .filter((e) => e instanceof HTMLElement)
    .filter((e) => e.slot === 'header-right');

  const slotAccordion = childNodes
    .filter((e) => e instanceof HTMLElement)
    .filter((e) => e.slot === 'accordion');

  const rect = useResizeObserverState(contentBody);

  useCssLightDom(cssLightDom);

  const [checked, setChecked] = useProp('checked');
  const [isOpen, setIsOpen] = useProp('open');

  const propsHeader = {
    label,
    sublabel,
    checkbox,
    slotHeaderFilter,
    variant,
    type,
    checked,
    setChecked,
    isOpen,
    setIsOpen,
  };

  return (
    <host shadowDom>
      {customProperties(variant, type)}
      <div className="content-accordion-item">
        <dsh-accordion-header {...propsHeader} />
        <div className="content-body">
          <div ref={contentBody} className={slotAccordion.length > 0 ? 'margin-bottom-body' : ''}>
            <slot name="body"></slot>
            <slot name="accordion"></slot>
          </div>
        </div>
      </div>
      <style>
        {`:host([open]){
          --margin-top-content-body: ${slotHeaderFilter.length > 0 ? '24px' : '16px'};
          --height-body: calc(${rect?.height || 0}px);
        }
        .content-body {
          overflow: ${isOpen ? 'visible' : 'hidden'};
          margin-top: ${isOpen ? (slotHeaderFilter.length > 0 ? '24px' : '16px') : '0px'};
        }`}
      </style>
    </host>
  );
}

accordionItemComponent.props = {
  label: { type: String, reflect: true, value: '' },
  sublabel: { type: String, reflect: true, value: '' },
  index: { type: Number, reflect: true },
  checkbox: { type: Boolean, reflect: true, value: false },
  variant: { type: String, reflect: true, value: 'blue' },
  type: { type: String, reflect: true, value: 'primario' },
  checked: { type: Boolean, reflect: true, value: false },
  open: { type: Boolean, reflect: true, value: false },
};

accordionItemComponent.styles = [accordionItemStyles];

export const AccordionItem = c(accordionItemComponent);

if (!customElements.get('dsh-accordion-item'))
  customElements.define('dsh-accordion-item', AccordionItem);
