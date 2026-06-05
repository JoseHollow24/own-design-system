import { c, useEffect, useProp } from 'atomico';
import '@components/icon';
import { useWindowDimensions, Bullet } from './menu-vertical.utils.jsx';
import { menuSubItemStyles } from './menu-vertical.styles.js';

function MenuVerticalSubItemComponent({ href, target, subItemIdentifier }) {
  const { isMobile, isTablet } = useWindowDimensions();
  const [active, setActive] = useProp('active');

  useEffect(() => {
    if (active) {
      document.dispatchEvent(
        new CustomEvent('active-dsh-menu-sub-item', { detail: { subItemIdentifier } })
      );
    }
  }, [active]);

  const clickItem = (e) => {
    e.currentTarget.blur();
    setActive(!active);
  };

  return (
    <host shadowDom>
      <a tabindex="0" href={href} target={target} onclick={clickItem}>
        <div className={`sub-item${active ? ' active' : ''}`}>
          <div className="sub-item__content">
            {!isMobile && !isTablet && Bullet()}
            <div className="sub-item__text">
              <slot />
            </div>
            {(isMobile || isTablet) && (
              <dsh-icon size="s2" icon-name="fa-chevron-right" fa-styles="fas" />
            )}
          </div>
        </div>
      </a>
    </host>
  );
}

MenuVerticalSubItemComponent.props = {
  iconName: { type: String, reflect: true, value: 'bullet' },
  href: { type: String, reflect: true, value: '#' },
  target: { type: String, reflect: true, value: '_self' },
  active: { type: Boolean, reflect: true, value: false },
  subItemIdentifier: { type: String, reflect: true, value: '' },
};

MenuVerticalSubItemComponent.styles = [menuSubItemStyles];

export const MenuVerticalSubItem = c(MenuVerticalSubItemComponent);
