import { c } from 'atomico';
import { imageStyles } from './card-details.styles';

function CardDetailsImageComponent({ src, alt }) {
  return (
    <host shadowDom>
      <img src={src} alt={alt} />
    </host>
  );
}

CardDetailsImageComponent.props = {
  src: { type: String, value: '', reflect: true },
  alt: { type: String, value: '', reflect: true },
};

CardDetailsImageComponent.styles = [imageStyles];

export const CardDetailsImage = c(CardDetailsImageComponent);

if (!customElements.get('dsh-card-details-image'))
  customElements.define('dsh-card-details-image', CardDetailsImage);
