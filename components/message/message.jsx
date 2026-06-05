import { c, useRef, useState, useEffect } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import { useResponsiveState } from '@atomico/hooks/use-responsive-state';

import Props from './message.props';
import { customProperties, styles } from './message.styles';

// ── Static SVG icons ────────────────────────────────────
const ICONS = {
  info: (
    <svg width="27" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM17.6 24H14.4V14.4H17.6V24ZM17.6 11.2H14.4V8H17.6V11.2Z" fill="#326295" />
    </svg>
  ),
  informative: (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM17.6 24H14.4V14.4H17.6V24ZM17.6 11.2H14.4V8H17.6V11.2Z" fill="#326295" />
    </svg>
  ),
  success: (
    <svg width="26" height="26" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.168 0 0 7.1689 0 16.002C0 24.8351 7.168 32.004 16 32.004C24.832 32.004 32 24.8351 32 16.002C32 7.1689 24.832 0 16 0ZM12.8 24.003L4.8 16.002L7.056 13.7457L12.8 19.4744L24.944 7.32892L27.2 9.6012L12.8 24.003Z" fill="#006E62" />
    </svg>
  ),
  error: (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.152 0 0 7.152 0 16C0 24.848 7.152 32 16 32C24.848 32 32 24.848 32 16C32 7.152 24.848 0 16 0ZM24 21.744L21.744 24L16 18.256L10.256 24L8 21.744L13.744 16L8 10.256L10.256 8L16 13.744L21.744 8L24 10.256L18.256 16L24 21.744Z" fill="#B21E27" />
    </svg>
  ),
  warning: (
    <svg width="26" height="26" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.86917 26.1315C0.483152 26.7981 0.964208 27.6325 1.73457 27.6325H30.2654C31.0358 27.6325 31.5168 26.7981 31.1308 26.1315L16.8654 1.49457C16.4802 0.829352 15.5198 0.829353 15.1346 1.49457L0.86917 26.1315ZM17.4545 23.2695H14.5455V20.3608H17.4545V23.2695ZM17.4545 17.4521H14.5455V11.6348H17.4545V17.4521Z" fill="#B34A00" />
    </svg>
  ),
};

const CLOSE_ICON = (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 1.43539L12.59 0.0253906L7 5.61539L1.41 0.0253906L0 1.43539L5.59 7.02539L0 12.6154L1.41 14.0254L7 8.43539L12.59 14.0254L14 12.6154L8.41 7.02539L14 1.43539Z" fill="black" />
  </svg>
);

// ────────────────────────────────────────────────────────
function MessageComponent({ variant, closeButton, timeout, showComponent, ariaLabel, id }) {
  const expression = 'phone, tablet 768px, desktop 1024px';
  const state = useResponsiveState(expression);
  const isMobile = state === 'phone';

  const nodeRef = useRef();
  const iconSlotRef = useRef();
  const iconSlot = useSlot(iconSlotRef);

  const [display, setDisplay] = useState(showComponent);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    setHiding(!showComponent);
    setTimeout(() => setDisplay(showComponent), 500);
  }, [showComponent]);

  useEffect(() => {
    if (timeout > 0) {
      setTimeout(() => closeMsg(), timeout);
    }
  }, [timeout]);

  const closeMsg = () => {
    setHiding(true);
    setTimeout(() => {
      nodeRef.current?.dispatchEvent(
        new CustomEvent('hide-message', { detail: false, bubbles: true, composed: true }),
      );
      setDisplay(false);
    }, 500);
  };

  const isImportant = variant === 'important';
  const isActionType = ['informative', 'success', 'error', 'warning'].includes(variant);
  const icon = ICONS[variant] || ICONS.info;
  const hasIcon = iconSlot.length > 0;

  // ── IMPORTANT variant layout ─────────────────────────
  if (isImportant) {
    return (
      <host shadowDom style={{ display: display ? 'inline-flex' : 'none' }}>
        {customProperties(variant, false)}
        <div className={`content ${hasIcon ? 'has-icon' : ''}`}>
          <slot name="icon" ref={iconSlotRef} />
          <div className="content-inner">
            <div className="slot-title"><slot name="title" /></div>
            <div className="slot-content"><slot name="content" /></div>
            <div className="slot-footer"><slot name="footer" /></div>
          </div>
        </div>
      </host>
    );
  }

  // ── INFO / ACTION variants layout ────────────────────
  return (
    <host
      shadowDom
      ref={nodeRef}
      id={id}
      aria-label={ariaLabel}
      className={hiding ? 'hide-content' : ''}
      style={{ display: display ? 'inline-flex' : 'none' }}
    >
      {customProperties(variant, closeButton)}
      <div className="content">
        {closeButton && isActionType && (
          <button
            className="icon-close"
            onclick={() => closeMsg()}
            tabindex="1"
          >
            {CLOSE_ICON}
          </button>
        )}
        <div className="content-body">
          <div className="content-body__top">
            <div className="content-body__top-icon">{icon}</div>
            {isMobile && (
              <div className="slot-title"><slot name="title" /></div>
            )}
          </div>
          <div className="content-body__mid">
            {!isMobile && (
              <div className="slot-title"><slot name="title" /></div>
            )}
            <div className="slot-content"><slot name="content" /></div>
          </div>
          <div className="slot-footer"><slot name="footer" /></div>
        </div>
      </div>
    </host>
  );
}

MessageComponent.props = Props;
MessageComponent.styles = [styles];

export const Message = c(MessageComponent);

if (!customElements.get('dsh-message'))
  customElements.define('dsh-message', Message);
