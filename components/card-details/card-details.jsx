import { c, useProp, useRef, useEffect, useState } from 'atomico';
import { useListener } from '@atomico/hooks/use-listener';
import { useResponsiveState } from '@atomico/hooks/use-responsive-state';
import { customProperties, cardDetailsStyles } from './card-details.styles';
import './card-details-line.jsx';
import './card-details-header.jsx';
import './card-details-accordeon.jsx';

function CardDetailsComponent({ color, icon, image, accordeonable, footerAlign, darkMode }) {
  const headerRef = useRef();
  const responsive = useResponsiveState('phone, tablet 768px, desktop 1024px');

  const [open, setOpen] = useProp('open');
  const [hostClass, setHostClass] = useState('');

  useListener(headerRef, 'onAccordeonChange', () => setOpen((prev) => !prev));

  useEffect(() => {
    let current = '';
    current += open ? 'open' : '';
    current += image?.src ? ' has-image' : '';
    setHostClass(current.trim());
  }, [open, image]);

  return (
    <host shadowDom class={hostClass}>
      {customProperties(darkMode)}
      <dsh-card-details-line color={color}></dsh-card-details-line>
      <dsh-card-details-header
        ref={headerRef}
        open={open}
        icon={icon}
        color={color}
        image={image}
        accordeonable={accordeonable && responsive === 'phone'}
      >
        <slot name="title"></slot>
      </dsh-card-details-header>
      <dsh-card-details-accordeon
        open={open}
        hasImage={!!image?.src}
        footerAlign={footerAlign}
      >
        <slot slot="content" name="content"></slot>
        <slot slot="footer" name="footer"></slot>
      </dsh-card-details-accordeon>
    </host>
  );
}

CardDetailsComponent.styles = [cardDetailsStyles];

CardDetailsComponent.props = {
  color: { type: String, value: 'transversal', reflect: true },
  open: { type: Boolean, value: true, reflect: true },
  accordeonable: { type: Boolean, value: false, reflect: true },
  icon: { type: String, reflect: true },
  image: { type: Object, reflect: true, value: () => ({ src: '', alt: '' }) },
  footerAlign: { type: String, value: 'fluid right', reflect: true },
  darkMode: { type: Boolean, reflect: true, value: false },
};

export const CardDetails = c(CardDetailsComponent);

if (!customElements.get('dsh-card-details'))
  customElements.define('dsh-card-details', CardDetails);
