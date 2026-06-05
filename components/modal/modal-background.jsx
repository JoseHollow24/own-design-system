import { c, css, useEvent } from 'atomico';

function ModalBackgroundComponent() {
  const dispatchOnClick = useEvent('onBackgroundClick', { bubbles: false, composed: true });

  return (
    <host shadowDom onclick={dispatchOnClick}>
      <slot />
    </host>
  );
}

ModalBackgroundComponent.styles = [
  css`
    :host {
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      animation: 0.4s ease-in-out fadeInDark;
      box-sizing: border-box;
      width: 100%;
      position: fixed;
      z-index: -1;
    }

    @keyframes fadeInDark {
      0% {
        background: var(--background-modal, #000000);
        opacity: 0;
      }
      100% {
        background: var(--background-modal, #000000);
        opacity: 0.8;
      }
    }
  `,
];

export const ModalBackground = c(ModalBackgroundComponent);
