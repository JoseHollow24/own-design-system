import { c, css, useEffect, useEvent, useProp, useRef } from 'atomico';
import { useListener } from '@atomico/hooks/use-listener';
import { useSlot } from '@atomico/hooks/use-slot';
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
import { DshSpace0, DshSpace200, DshSpace300 } from '@tokens';

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

  const modalRef = useRef();
  const backgroundRef = useRef();
  const modalCardRef = useRef();
  const safeAreaRef = useRef();
  const actionableRef = useRef();

  const safeAreaSlot = useSlot(safeAreaRef);
  const actionableSlot = useSlot(actionableRef);

  const show = {
    safeArea: safeAreaSlot.length > 0,
    footer: actionableSlot.length > 0,
  };
  const safeAreaMargin = !!(imageSrc || avatarSrc || icon || textTitle || textDescription);

  const dispatchClose = useEvent('close', { bubbles: true, composed: true });

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
            <dsh-modal-organizer-safe visible={show.safeArea} margin={safeAreaMargin}>
              <slot name="safe-area" ref={safeAreaRef} />
            </dsh-modal-organizer-safe>
          </dsh-modal-organizer>
          <dsh-modal-footer align={actionableAlign} visible={show.footer}>
            <slot name="actionable" ref={actionableRef} />
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
    }

    ::slotted(*) {
      margin: 0;
      padding: 0;
    }

    ::slotted([slot='actionable']) {
      gap: ${DshSpace200};
      display: flex;
      flex-direction: row;
      padding: ${DshSpace0};
    }

    @media only screen and (min-width: 768px) {
      ::slotted([slot='actionable']) {
        gap: ${DshSpace300};
      }
    }

    @media only screen and (max-width: 767px) {
      ::slotted([slot='actionable']) {
        flex-direction: column-reverse;
      }
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
