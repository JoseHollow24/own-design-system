import { c, useRef, useProp, useEffect } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import { useReflectEvent } from '@atomico/hooks/use-reflect-event';

import { customProperties, styles } from './tag.style';
import componentProps from './tag.props';

const subvariantsInfo = {
  success: { 'icon-name': 'fa-circle-check', color: 't1' },
  error: { 'icon-name': 'fa-circle-xmark', color: 'r1' },
  warning: { 'icon-name': 'fa-triangle-exclamation', color: 'n1' },
  informative: { 'icon-name': 'fa-circle-info', color: 'x1' },
};

const Component = (props) => {
  const { variant, subvariant, label, showIcon, color, darkMode } = props;

  const [stateInteractive, setStateInteractive] = useProp('state');
  const refTagInteractive = useRef();
  const refHost = useRef();
  const refSlotIcon = useRef();
  const slotIcon = useSlot(refSlotIcon);

  const handleClick = () => {
    setStateInteractive(stateInteractive !== 'pressed' ? 'pressed' : '');
  };

  useReflectEvent(refHost, refTagInteractive, 'click');

  useEffect(() => {
    if (slotIcon.length > 0) {
      setTimeout(() => {
        slotIcon.forEach((slot) => {
          slot.size = 's2';
          if (subvariant) {
            slot.color = subvariantsInfo[subvariant]?.color;
            if (showIcon) slot.iconName = subvariantsInfo[subvariant]?.['icon-name'];
          }
        });
      }, 100);
    }
  }, [slotIcon]);

  const tag = () => {
    switch (variant) {
      case 'general':
        return (
          <div class="tag general">
            <slot name="icon-tag-left"></slot>
            <span class="label">{label.trim()}</span>
            <slot name="icon-tag-right"></slot>
          </div>
        );
      case 'informative':
        if (showIcon) {
          return (
            <div class={`tag ${variant}`}>
              <dsh-icon size="s2" fa-styles="fas" icon-name={subvariantsInfo[subvariant]?.['icon-name']} color={subvariantsInfo[subvariant]?.color}></dsh-icon>
              <span class="label">{label.trim()}</span>
            </div>
          );
        }
        return (
          <div class={`tag ${variant}`}>
            <slot ref={refSlotIcon} name="icon-tag"></slot>
            <span class="label">{label.trim()}</span>
          </div>
        );
      case 'news':
        return (
          <div class="tag news">
            <span class="label">{label.trim()}</span>
          </div>
        );
      case 'menu':
        return (
          <div class="tag menu">
            <span class="label">{label.trim()}</span>
          </div>
        );
      case 'interactive':
        return (
          <div
            ref={refTagInteractive}
            class={`tag interactive ${stateInteractive === 'pressed' ? 'pressed' : 'noPressed'}`}
            onclick={handleClick}
          >
            <span class="label">{label.trim()}</span>
            <div className="grp-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {stateInteractive === 'pressed' ? (
                  <path d="M16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white" />
                ) : (
                  <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#006E62" />
                )}
              </svg>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <host shadowDom ref={refHost}>
      {customProperties(variant, subvariant, color, darkMode)}
      {tag()}
    </host>
  );
};

Component.props = componentProps;
Component.styles = [styles];

const Tag = c(Component);

export { Tag };

customElements.define('dsh-tag', Tag);
