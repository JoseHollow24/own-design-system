import { c, useEffect, useProp, useRef, useState } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import '@components/icon';
import { useWindowDimensions, Bullet } from './menu-vertical.utils.jsx';
import { customProperties, menuItemStyles } from './menu-vertical.styles.js';

const LeftIcon = (isMobile, isTablet, desktopIconName, mobileIconName) => {
  const iconName = isMobile || isTablet ? mobileIconName : desktopIconName;
  if (iconName === 'bullet') return Bullet();
  return <dsh-icon size="s2" icon-name={iconName} fa-styles="fas" />;
};

const RightIcon = (isMobile, isTablet, hasSubItems, iconName) => {
  if (isMobile || isTablet || hasSubItems) {
    return <dsh-icon size="s2" icon-name={iconName} fa-styles="fas" />;
  }
  return null;
};

function MenuVerticalItemComponent({
  desktopIconName,
  mobileIconName,
  itemValue,
  itemIdentifier,
  href,
  target,
  isHomeItem,
  heightMenu,
}) {
  const { isMobile, isTablet } = useWindowDimensions();
  const [active, setActive] = useProp('active');
  const [arrowIconName, setArrowIconName] = useState('fa-chevron-down');
  const subItemsRef = useRef();
  const subItemSlot = useRef();
  const refTab = useRef(null);
  const menuSubItemSlotList = useSlot(subItemSlot);
  const [currentSubItemIdentifier, setCurrentSubItemIdentifier] = useState();

  useEffect(() => {
    if (isMobile || isTablet) setArrowIconName('fa-chevron-right');
    else if (active) setArrowIconName('fa-chevron-up');
    else setArrowIconName('fa-chevron-down');

    if (active) {
      document.dispatchEvent(
        new CustomEvent('active-dsh-menu-item', {
          detail: { itemValue, itemIdentifier, hasChildren: menuSubItemSlotList.length > 0 },
        })
      );
    }

    if (active && menuSubItemSlotList.length > 0) {
      subItemsRef.current?.classList.add('active');
    } else {
      subItemsRef.current?.classList.remove('active');
      menuSubItemSlotList.forEach((slot) => { slot.active = false; });
    }
  }, [isMobile, isTablet, active]);

  useEffect(() => {
    const handler = (e) => {
      const { subItemIdentifier } = e.detail;
      setCurrentSubItemIdentifier(subItemIdentifier);
    };
    document.addEventListener('active-dsh-menu-sub-item', handler);
    return () => document.removeEventListener('active-dsh-menu-sub-item', handler);
  }, []);

  useEffect(() => {
    menuSubItemSlotList.forEach((slot) => {
      if (slot.subItemIdentifier !== currentSubItemIdentifier) slot.active = false;
    });
  }, [currentSubItemIdentifier]);

  useEffect(() => {
    const timeFocus = setTimeout(() => {
      refTab.current?.addEventListener('mouseout', (e) => e.currentTarget?.blur());
    }, 1000);
    return () => clearTimeout(timeFocus);
  }, []);

  return (
    <host shadowDom>
      {customProperties(heightMenu)}
      <a
        tabindex="0"
        href={href}
        target={target}
        onclick={() => setActive(!active)}
        className={isHomeItem ? 'hide-tablet-mobile' : ''}
        ref={refTab}
      >
        <div className={`item${active ? ' active' : ''}${isHomeItem ? ' is-home-item' : ''}`}>
          <div className="item__content">
            {LeftIcon(isMobile, isTablet, desktopIconName, mobileIconName)}
            <div className="item__text">{itemValue}</div>
            {RightIcon(isMobile, isTablet, menuSubItemSlotList.length > 0, arrowIconName)}
          </div>
        </div>
      </a>
      <div
        className={`sub-items${menuSubItemSlotList.length > 0 ? ' sub-items-visible' : ''}`}
        ref={subItemsRef}
      >
        <slot ref={subItemSlot} name="sub-item" />
      </div>
    </host>
  );
}

MenuVerticalItemComponent.props = {
  desktopIconName: { type: String, reflect: true, value: 'bullet' },
  mobileIconName: { type: String, reflect: true, value: 'bullet' },
  active: { type: Boolean, reflect: true, value: false },
  itemValue: { type: String, reflect: true, value: '' },
  itemIdentifier: { type: String, reflect: true, value: '' },
  href: { type: String, reflect: true, value: '#' },
  target: { type: String, reflect: true, value: '_self' },
  isHomeItem: { type: Boolean, reflect: true, value: false },
  heightMenu: { type: String, reflect: true, value: '' },
};

MenuVerticalItemComponent.styles = [menuItemStyles];

export const MenuVerticalItem = c(MenuVerticalItemComponent);
