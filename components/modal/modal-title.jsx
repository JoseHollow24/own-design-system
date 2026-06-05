import { c, css } from 'atomico';
import {
  DshColorSecondaryX1,
  DshTextSize2xl,
  DshTextSizeXl,
  DshTextLineHeight2xl,
  DshTextLineHeight3xl,
  DshTextWeight650,
} from '@tokens';

function ModalTitleComponent() {
  return (
    <host shadowDom>
      <slot />
    </host>
  );
}

ModalTitleComponent.styles = [
  css`
    :host {
      color: ${DshColorSecondaryX1};
      font-weight: ${DshTextWeight650};
      font-size: ${DshTextSize2xl};
      line-height: ${DshTextLineHeight3xl};
    }

    @media only screen and (max-width: 767px) {
      :host {
        font-size: ${DshTextSizeXl};
        line-height: ${DshTextLineHeight2xl};
      }
    }
  `,
];

export const ModalTitle = c(ModalTitleComponent);
