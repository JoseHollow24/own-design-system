import { c, useRef, useProp } from 'atomico';
import { useCssLightDom } from '@atomico/hooks/use-css-light-dom';
import { useResizeObserverState } from '@atomico/hooks/use-resize-observer';
import { useChildNodes } from '@atomico/hooks/use-child-nodes';
import { customProperties, cssLightDom, accordionItemStyles } from './accordion.styles';
import accordionItemProps from './accordion.props';
import './accordion.header.jsx';

function accordionItemComponent({ label, checkbox, variant, sublabel, darkMode }) {
  const contentBody = useRef();

  const rawChildNodes = useChildNodes();
  const childNodes = rawChildNodes.filter(Boolean);

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
    checked,
    setChecked,
    isOpen,
    setIsOpen,
    darkMode
  };

  return (
    <host shadowDom>
      {customProperties(variant, darkMode)}
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

accordionItemComponent.props = accordionItemProps;
accordionItemComponent.styles = [accordionItemStyles];

export const AccordionItem = c(accordionItemComponent);

if (!customElements.get('dsh-accordion-item'))
  customElements.define('dsh-accordion-item', AccordionItem);
