import { MenuVertical } from './menu-vertical.jsx';
import { MenuVerticalItem } from './menu-vertical-item.jsx';
import { MenuVerticalSubItem } from './menu-vertical-subitem.jsx';

if (!customElements.get('dsh-menu-vertical'))
  customElements.define('dsh-menu-vertical', MenuVertical);

if (!customElements.get('dsh-menu-vertical-item'))
  customElements.define('dsh-menu-vertical-item', MenuVerticalItem);

if (!customElements.get('dsh-menu-vertical-subitem'))
  customElements.define('dsh-menu-vertical-subitem', MenuVerticalSubItem);

export * from './menu-vertical.jsx';
export * from './menu-vertical-item.jsx';
export * from './menu-vertical-subitem.jsx';
