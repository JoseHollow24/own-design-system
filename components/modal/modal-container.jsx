import { c, css } from 'atomico';
import { DshSpace0 } from '@tokens';

function ModalContainerComponent({ open }) {
  return (
    <host shadowDom className={open ? 'open' : 'closed'}>
      <slot />
    </host>
  );
}

ModalContainerComponent.props = {
  open: { type: Boolean, reflect: true, value: false },
};

ModalContainerComponent.styles = [
  css`
    :host {
      z-index: 1900;
      position: fixed;
      height: 100%;
      width: 100%;
      top: ${DshSpace0};
      left: ${DshSpace0};
      display: none;
      justify-content: center;
      align-items: center;
    }

    :host(.closed) {
      display: none;
    }

    :host(.open) {
      display: flex;
      animation: 0.5s ease-out fadeIn;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
];

export const ModalContainer = c(ModalContainerComponent);
