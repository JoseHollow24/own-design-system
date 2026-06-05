import { Accordions } from './accordions.jsx';
import { AccordionItem } from './accordion.item.jsx';
import { AccordionHeader } from './accordion.header.jsx';

if (!customElements.get('dsh-accordions'))
  customElements.define('dsh-accordions', Accordions);
if (!customElements.get('dsh-accordion-item'))
  customElements.define('dsh-accordion-item', AccordionItem);
if (!customElements.get('dsh-accordion-header'))
  customElements.define('dsh-accordion-header', AccordionHeader);

export * from './accordions.jsx';
export * from './accordion.item.jsx';
export * from './accordion.header.jsx';
