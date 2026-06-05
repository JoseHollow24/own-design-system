import { c, useState, useEffect } from 'atomico';
import { footerStyles } from './card-details.styles';

function CardDetailsFooterComponent({ align, hasImage }) {
  const [footerClass, setFooterClass] = useState('');

  useEffect(() => {
    let current = 'footer-container';
    current += align ? ` ${align}` : '';
    current += hasImage ? ' has-image' : '';
    setFooterClass(current.trim());
  }, [align, hasImage]);

  return (
    <host shadowDom>
      <div part="ds-card-details__card__footer" className={footerClass}>
        <slot></slot>
      </div>
    </host>
  );
}

CardDetailsFooterComponent.props = {
  align: { type: String, value: 'fluid right', reflect: true },
  hasImage: { type: Boolean, value: false, reflect: true },
};

CardDetailsFooterComponent.styles = [footerStyles];

export const CardDetailsFooter = c(CardDetailsFooterComponent);

if (!customElements.get('dsh-card-details-footer'))
  customElements.define('dsh-card-details-footer', CardDetailsFooter);
