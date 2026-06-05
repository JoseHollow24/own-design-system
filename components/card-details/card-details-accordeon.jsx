import { c, useState, useEffect } from 'atomico';
import { accordeonStyles } from './card-details.styles';
import './card-details-footer.jsx';

function CardDetailsAccordeonComponent({ open, footerAlign, hasImage }) {
  const [accordeonClass, setAccordeonClass] = useState('');

  useEffect(() => {
    let current = '';
    current += open ? 'open' : '';
    current += hasImage ? ' has-image' : '';
    setAccordeonClass(current.trim());
  }, [open, hasImage]);

  return (
    <host shadowDom class={accordeonClass}>
      {open && (
        <div className="accordeon-content" part="ds-card-details__card__content">
          <slot name="content"></slot>
          <dsh-card-details-footer hasImage={hasImage} align={footerAlign}>
            <slot name="footer"></slot>
          </dsh-card-details-footer>
        </div>
      )}
    </host>
  );
}

CardDetailsAccordeonComponent.props = {
  open: { type: Boolean, value: true, reflect: true },
  footerAlign: { type: String, value: 'fluid right', reflect: true },
  hasImage: { type: Boolean, value: false, reflect: true },
};

CardDetailsAccordeonComponent.styles = [accordeonStyles];

export const CardDetailsAccordeon = c(CardDetailsAccordeonComponent);

if (!customElements.get('dsh-card-details-accordeon'))
  customElements.define('dsh-card-details-accordeon', CardDetailsAccordeon);
