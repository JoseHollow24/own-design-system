import { c, useEffect, useProp, useRef, useState } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import { useListener } from '@atomico/hooks/use-listener';
import '@components/button';
import '@components/icon';
import { menuStyles } from './menu-vertical.styles.js';
import { useWindowDimensions } from './menu-vertical.utils.jsx';

function MenuVerticalComponent() {
  const menuContentRef = useRef();
  const menuItemRef = useRef();
  const menuItemSlotList = useSlot(menuItemRef);
  const closeButtonRef = useRef();
  const backButtonRef = useRef();
  const btnHeaderMobileRef = useRef();
  const btnHeaderMobileSlot = useSlot(btnHeaderMobileRef);
  const [openMobile, setOpenMobile] = useProp('openMobile');
  const [heightMenu, setHeightMenu] = useState('0');
  const [headerText, setHeaderText] = useState('Menú');
  const [currentItemIdentifier, setCurrentItemIdentifier] = useState();
  const { width } = useWindowDimensions();

  const closeCurrentMenuItem = () => {
    const current = menuItemSlotList.find(
      (item) => item.itemIdentifier === currentItemIdentifier
    );
    if (current) current.active = false;
    setHeaderText('Menú');
  };

  useEffect(() => {
    const handler = (e) => {
      const { itemValue, itemIdentifier, hasChildren } = e.detail;
      if (hasChildren) setHeaderText(itemValue);
      setCurrentItemIdentifier(itemIdentifier);
    };
    document.addEventListener('active-dsh-menu-item', handler);
    return () => document.removeEventListener('active-dsh-menu-item', handler);
  }, []);

  useEffect(() => {
    setHeightMenu(menuContentRef.current?.clientHeight);
  }, [width]);

  useEffect(() => {
    if (!openMobile && currentItemIdentifier) {
      closeCurrentMenuItem();
    }
    setHeightMenu(menuContentRef.current?.clientHeight);
  }, [openMobile]);

  useEffect(() => {
    menuItemSlotList.forEach((item) => {
      if (item.itemIdentifier !== currentItemIdentifier) item.active = false;
    });
  }, [currentItemIdentifier]);

  useEffect(() => {
    menuItemSlotList.forEach((item) => {
      item.heightMenu = menuContentRef.current?.clientHeight?.toString() ?? '';
    });
  }, [openMobile]);

  useListener(closeButtonRef, 'onClick', () => setOpenMobile(false));
  useListener(backButtonRef, 'onClick', () => closeCurrentMenuItem());

  return (
    <host className={!openMobile ? 'closed' : ''} shadowDom>
      <div className="menu" ref={menuContentRef}>
        <div className="menu__header">
          <div className="menu__header-desktop">
            <slot name="menu-avatar" />
          </div>
          <div className="menu__header-mobile">
            <div className="menu__header-mobile__close__button">
              <dsh-button ref={closeButtonRef} variant="tertiary" color="blue" fluid>
                Cerrar
                <dsh-icon slot="right" icon-name="fa-xmark" fa-styles="fas" size="s2" />
              </dsh-button>
            </div>
            <div className={`menu__header-mobile__button${btnHeaderMobileSlot.length > 0 ? ' exists' : ''}`}>
              <slot ref={btnHeaderMobileRef} name="button-header-mobile" />
            </div>
            <div className={`menu__header-mobile__indicator${headerText !== 'Menú' ? ' item-open' : ''}`}>
              <dsh-button ref={backButtonRef} variant="tertiary" color="blue" fluid>
                {headerText !== 'Menú' && (
                  <span className="menu__header-mobile__arrow" slot="left">
                    <dsh-icon icon-name="fa-arrow-left" fa-styles="fas" size="s3" />
                  </span>
                )}
                <span className="menu__header-mobile__indicator__text">{headerText}</span>
              </dsh-button>
            </div>
          </div>
        </div>
        <div className="menu__content">
          <slot name="menu-item" ref={menuItemRef} />
        </div>
      </div>
    </host>
  );
}

MenuVerticalComponent.props = {
  openMobile: { type: Boolean, reflect: true, value: false },
};

MenuVerticalComponent.styles = [menuStyles];

export const MenuVertical = c(MenuVerticalComponent);
