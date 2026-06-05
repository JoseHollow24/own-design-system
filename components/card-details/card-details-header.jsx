import { c, useRef, useEvent, useState, useEffect } from 'atomico';
import { useListener } from '@atomico/hooks/use-listener';
import '@components/icon';
import '@components/button';
import { headerStyles } from './card-details.styles';
import './card-details-icon.jsx';
import './card-details-image.jsx';

function CardDetailsHeaderComponent({ icon, color, image, accordeonable, open }) {
  const buttonRef = useRef();
  const [classContainer, setClassContainer] = useState('container');

  const dispatchAccordeonChange = useEvent('onAccordeonChange', {
    bubbles: true,
    composed: true,
  });

  useListener(buttonRef, 'onClick', () => dispatchAccordeonChange(!open));

  useEffect(() => {
    let current = 'container';
    current += image?.src ? ' as-image' : '';
    setClassContainer(current);
  }, [image]);

  return (
    <host shadowDom class={classContainer}>
      <div className={classContainer}>
        {icon && (
          <dsh-card-details-icon name={icon} color={color}></dsh-card-details-icon>
        )}
        <div className="title-container">
          <p className="title">
            <slot></slot>
          </p>
          {accordeonable && (
            <dsh-button ref={buttonRef} variant="tertiary" color="blue">
              <dsh-icon
                icon-name={open ? 'fa-chevron-up' : 'fa-chevron-down'}
                color="current"
                size="s2"
              ></dsh-icon>
            </dsh-button>
          )}
        </div>
        {image?.src && image?.alt && (
          <dsh-card-details-image src={image.src} alt={image.alt}></dsh-card-details-image>
        )}
      </div>
    </host>
  );
}

CardDetailsHeaderComponent.props = {
  icon: { type: String, reflect: true },
  color: { type: String, value: 'transversal', reflect: true },
  image: { type: Object, reflect: true, value: () => ({ src: '', alt: '' }) },
  accordeonable: { type: Boolean, value: false, reflect: true },
  open: { type: Boolean, value: true, reflect: true },
};

CardDetailsHeaderComponent.styles = [headerStyles];

export const CardDetailsHeader = c(CardDetailsHeaderComponent);

if (!customElements.get('dsh-card-details-header'))
  customElements.define('dsh-card-details-header', CardDetailsHeader);
