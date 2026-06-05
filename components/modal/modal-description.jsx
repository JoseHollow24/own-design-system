import { c, css } from 'atomico';
import {
  DshColorSecondaryG1,
  DshTextSizeLg,
  DshTextLineHeightXl,
  DshTextWeight500,
} from '@tokens';

function ModalDescriptionComponent({ variant }) {
  return (
    <host shadowDom className={variant}>
      <slot />
    </host>
  );
}

ModalDescriptionComponent.props = {
  variant: { type: String, reflect: true, value: '' },
};

ModalDescriptionComponent.styles = [
  css`
    :host {
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
      font-weight: ${DshTextWeight500};
      color: ${DshColorSecondaryG1};
    }

    @media only screen and (min-width: 736px) {
      :host(.promo) {
        font-size: ${DshTextSizeLg};
        line-height: ${DshTextLineHeightXl};
      }
    }
  `,
];

export const ModalDescription = c(ModalDescriptionComponent);
