import { c } from 'atomico';
import { lineStyles } from './card-details.styles';

function CardDetailsLineComponent({ color }) {
  return <host shadowDom class={color}></host>;
}

CardDetailsLineComponent.props = {
  color: { type: String, value: 'transversal', reflect: true },
};

CardDetailsLineComponent.styles = [lineStyles];

export const CardDetailsLine = c(CardDetailsLineComponent);

if (!customElements.get('dsh-card-details-line'))
  customElements.define('dsh-card-details-line', CardDetailsLine);
