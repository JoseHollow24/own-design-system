import { c } from 'atomico';
import '@components/icon';
import { iconStyles } from './card-details.styles';

function CardDetailsIconComponent({ name, color }) {
  return (
    <host shadowDom class={color}>
      <dsh-icon icon-name={name} size="s2" color="current"></dsh-icon>
    </host>
  );
}

CardDetailsIconComponent.props = {
  name: { type: String, value: '', reflect: true },
  color: { type: String, value: 'transversal', reflect: true },
};

CardDetailsIconComponent.styles = [iconStyles];

export const CardDetailsIcon = c(CardDetailsIconComponent);

if (!customElements.get('dsh-card-details-icon'))
  customElements.define('dsh-card-details-icon', CardDetailsIcon);
