import { CardHighlights } from './card-highlight.jsx';
import { CardHighlightsItem } from './card-highlight-item.jsx';

if (!customElements.get('dsh-card-highlights'))
  customElements.define('dsh-card-highlights', CardHighlights);

if (!customElements.get('dsh-card-highlights-item'))
  customElements.define('dsh-card-highlights-item', CardHighlightsItem);

export * from './card-highlight.jsx';
export * from './card-highlight-item.jsx';
