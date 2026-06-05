import { CardDetails } from './card-details.jsx';
import { CardDetailsLine } from './card-details-line.jsx';
import { CardDetailsHeader } from './card-details-header.jsx';
import { CardDetailsAccordeon } from './card-details-accordeon.jsx';
import { CardDetailsFooter } from './card-details-footer.jsx';
import { CardDetailsIcon } from './card-details-icon.jsx';
import { CardDetailsImage } from './card-details-image.jsx';

if (!customElements.get('dsh-card-details')) customElements.define('dsh-card-details', CardDetails);
if (!customElements.get('dsh-card-details-line')) customElements.define('dsh-card-details-line', CardDetailsLine);
if (!customElements.get('dsh-card-details-header')) customElements.define('dsh-card-details-header', CardDetailsHeader);
if (!customElements.get('dsh-card-details-accordeon')) customElements.define('dsh-card-details-accordeon', CardDetailsAccordeon);
if (!customElements.get('dsh-card-details-footer')) customElements.define('dsh-card-details-footer', CardDetailsFooter);
if (!customElements.get('dsh-card-details-icon')) customElements.define('dsh-card-details-icon', CardDetailsIcon);
if (!customElements.get('dsh-card-details-image')) customElements.define('dsh-card-details-image', CardDetailsImage);

export * from './card-details.jsx';
export * from './card-details-line.jsx';
export * from './card-details-header.jsx';
export * from './card-details-accordeon.jsx';
export * from './card-details-footer.jsx';
export * from './card-details-icon.jsx';
export * from './card-details-image.jsx';
