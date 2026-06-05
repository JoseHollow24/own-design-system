import { CardDeal } from './card-deal.jsx';

if (!customElements.get('dsh-card-deal'))
  customElements.define('dsh-card-deal', CardDeal);

export * from './card-deal.jsx';
