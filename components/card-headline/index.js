import { CardHeadline } from './card-headline.jsx';

if (!customElements.get('dsh-card-headline'))
  customElements.define('dsh-card-headline', CardHeadline);

export * from './card-headline.jsx';
