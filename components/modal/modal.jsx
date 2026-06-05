import { c, css, useEffect, useEvent, useProp, useRef, useState } from 'atomico';
import { useListener } from '@atomico/hooks/use-listener';
import { useChildNodes } from '@atomico/hooks/use-child-nodes';
import '@components/icon';
import './modal-container.jsx';
import './modal-card.jsx';
import './modal-close.jsx';
import './modal-title.jsx';
import './modal-image.jsx';
import './modal-footer.jsx';
import './modal-avatar.jsx';
import './modal-organizer.jsx';
import './modal-background.jsx';
import './modal-description.jsx';
import './modal-organizer-icon.jsx';
import './modal-organizer-text.jsx';
import './modal-organizer-safe.jsx';
import './modal-organizer-image.jsx';
import './modal-organizer-avatar.jsx';
import { DshSpace200, DshTextFamilyRawsonPro } from '@tokens';

function ModalComponent(props) {
  const {
    icon,
    iconColor,
    imageSrc,
    imageAlt,
    avatarSrc,
    avatarAlt,
    closable,
    fixed,
    textTitle,
    textDescription,
    actionableAlign,
    variant,
    id,
    noClose,
  } = props;

  const [open, setOpen] = useProp('open');

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const [safeAreaMargin, setSafeAreaMargin] = useState(false);
  const [show, setShow] = useState({ safeArea: false, footer: false });

  const modalRef = useRef();
  const footerRef = useRef();
  const safeAreaRef = useRef();
  const backgroundRef = useRef();
  const modalCardRef = useRef();

  const [childNodes, update] = useChildNodes();

  const dispatchClose = useEvent('close', { bubbles: true, composed: true });

  useListener(footerRef, 'onSlotChange', update);
  useListener(safeAreaRef, 'onSlotChange', update);

  useListener(backgroundRef, 'onBackgroundClick', () => {
    if (!noClose) {
      setOpen(false);
      dispatchClose();
    }
  });

  useListener(modalRef, 'onClose', () => {
    if (!noClose) {
      setOpen(false);
      dispatchClose();
    }
  });

  useEffect(() => {
    if (childNodes.length) {
      const safeArea = !!childNodes.find((node) => node.slot === 'safe-area')?.children;
      const footer = !!childNodes.find((node) => node.slot === 'actionable')?.children;
      setShow({ safeArea, footer });
    } else {
      setShow({ safeArea: false, footer: false });
    }
  }, [childNodes]);

  useEffect(() => {
    if (imageSrc || avatarSrc || icon || textTitle || textDescription) {
      setSafeAreaMargin(true);
    } else {
      setSafeAreaMargin(false);
    }
  }, [imageSrc, avatarSrc, icon, textTitle, textDescription]);

  useEffect(() => {
    if (noClose) return;
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        dispatchClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [noClose]);

  useEffect(() => {
    if (open) modalCardRef.current?.focus();
  }, [open]);

  const modalTitleId = id ? `${id}-title` : 'modal-title';
  const modalDescriptionId = id ? `${id}-description` : 'modal-description';

  return (
    <host shadowDom>
      <dsh-modal-container
        open={open}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalTitleId}
        aria-describedby={modalDescriptionId}
      >
        <dsh-modal-card ref={modalCardRef} fixed={fixed} variant={variant} tabindex="0">
          {closable && !noClose && (
            <dsh-modal-close aria-label="Cerrar ventana" />
          )}
          <dsh-modal-organizer icon={!!icon}>
            {imageSrc && imageAlt && (
              <dsh-modal-organizer-image>
                <dsh-modal-image src={imageSrc} alt={imageAlt} variant={variant} />
              </dsh-modal-organizer-image>
            )}
            {avatarSrc && avatarAlt && (
              <dsh-modal-organizer-avatar>
                <dsh-modal-avatar src={avatarSrc} alt={avatarAlt} />
              </dsh-modal-organizer-avatar>
            )}
            {icon && (
              <dsh-modal-organizer-icon>
                <dsh-icon size="s5" color={iconColor} icon-name={icon} aria-hidden="true" />
              </dsh-modal-organizer-icon>
            )}
            {(textTitle || textDescription) && (
              <dsh-modal-organizer-text>
                {textTitle && <dsh-modal-title id={modalTitleId}>{textTitle}</dsh-modal-title>}
                {textDescription && (
                  <dsh-modal-description id={modalDescriptionId} variant={variant}>
                    {textDescription}
                  </dsh-modal-description>
                )}
              </dsh-modal-organizer-text>
            )}
            <dsh-modal-organizer-safe ref={safeAreaRef} visible={show.safeArea} margin={safeAreaMargin}>
              <slot name="safe-area" slot="safe-area" />
            </dsh-modal-organizer-safe>
          </dsh-modal-organizer>
          <dsh-modal-footer ref={footerRef} align={actionableAlign} visible={show.footer}>
            <slot name="actionable" slot="actionable" />
          </dsh-modal-footer>
        </dsh-modal-card>
        <dsh-modal-background tabindex="-1" ref={backgroundRef} />
      </dsh-modal-container>
    </host>
  );
}

ModalComponent.props = {
  avatarSrc: { type: String, reflect: true, value: '' },
  avatarAlt: { type: String, reflect: true, value: '' },
  icon: { type: String, reflect: true, value: '' },
  iconColor: { type: String, reflect: true, value: 'x1' },
  imageSrc: { type: String, reflect: true, value: '' },
  imageAlt: { type: String, reflect: true, value: '' },
  textTitle: { type: String, reflect: true },
  textDescription: { type: String, reflect: true },
  open: { type: Boolean, reflect: true, value: false },
  closable: { type: Boolean, reflect: true, value: false },
  fixed: { type: Boolean, reflect: true, value: false },
  noClose: { type: Boolean, reflect: true, value: false },
  actionableAlign: { type: String, reflect: true, value: 'right' },
  variant: { type: String, reflect: true, value: '' },
  id: { type: String, reflect: true, value: '' },
};

ModalComponent.styles = [
  css`
    :host {
      position: relative;
      font-family: ${DshTextFamilyRawsonPro};
    }

    ::slotted(*) {
      margin: 0;
      padding: 0;
    }

    dsh-modal-organizer-text:nth-child(3) {
      margin-top: ${DshSpace200};
    }

    dsh-modal-organizer-icon:nth-child(2) {
      margin-top: ${DshSpace200};
    }
  `,
];

export const Modal = c(ModalComponent);
