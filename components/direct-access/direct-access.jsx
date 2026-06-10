import { useRef, c } from 'atomico';
import { useResponsiveState } from '@atomico/hooks/use-responsive-state';

import '@components/icon';
import Props from './direct-access.props';
import { customProperties, styles } from './direct-access.styles';

function Component({ icon, faStyles, link, tag, title, subtitle, segment, target, linkText, id, parentComponent, darkMode }) {
  const expression = 'phone, tablet 768px, desktop 1024px';
  const state = useResponsiveState(expression);
  const refAnchor = useRef();
  const lastInteractionRef = useRef(null);

  const iconSize = state === 'phone' ? 's3' : 's4';
  const iconBottomSize = state === 'phone' ? 's2' : 's3';

  const trackInteraction = (eventType) => {
    if (!link) return;
    const hostElement = refAnchor.current?.getRootNode()?.host;
    const parentEl = hostElement?.closest?.('[data-gtm-parent]');
    const resolvedParent = parentComponent || parentEl?.getAttribute('data-gtm-parent') || null;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      component: 'dsh-direct-access',
      event: eventType,
      parentComponent: resolvedParent,
      destination: link,
      origin: window.location.pathname,
      id,
      timestamp: new Date().toISOString(),
    });
  };

  const handleClick = () => {
    if (link && lastInteractionRef.current !== 'keyboard') trackInteraction('mouse');
    lastInteractionRef.current = null;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      lastInteractionRef.current = 'keyboard';
      trackInteraction('keyboard');
      refAnchor.current?.click();
    }
  };

  return (
    <host shadowDom>
      {customProperties(segment, darkMode)}
      <a
        ref={refAnchor}
        href={link}
        target={target}
        className="direct-access"
        onclick={handleClick}
        onkeydown={handleKeyDown}
        data-gtm-component="dsh-direct-access"
        data-gtm-destination={link}
      >
        <div className="direct-access-content">
          {tag && <span className="tag">{tag}</span>}
          <div className="direct-access__icon">
            <dsh-icon size={iconSize} color="white" icon-name={icon} fa-styles={faStyles || 'fas'}></dsh-icon>
          </div>
          <div className="direct-access__info">
            <span className="title">{title}</span>
            <span className="subtitle">{subtitle}</span>
          </div>
        </div>
        {target !== '_self' && (
          <div className="direct-access__bottom">
            <dsh-icon
              size={iconBottomSize}
              color="c1"
              icon-name="fa-up-right-from-square"
            ></dsh-icon>
            <span>{linkText}</span>
          </div>
        )}
      </a>
    </host>
  );
}

Component.styles = [styles];
Component.props = Props;

export const DirectAccess = c(Component);

if (!customElements.get('dsh-direct-access'))
  customElements.define('dsh-direct-access', DirectAccess);
