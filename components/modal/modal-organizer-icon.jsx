import { c, css } from 'atomico';
import { DshSpace0, DshSpace200 } from '@tokens';

function ModalOrganizerIconComponent() {
  return (
    <host shadowDom>
      <slot />
    </host>
  );
}

ModalOrganizerIconComponent.styles = [
  css`
    :host {
      grid-area: 2 / 1 / 3 / 2;
    }

    @media only screen and (max-width: 767px) {
      ::slotted(*) {
        margin: ${DshSpace0} ${DshSpace0} ${DshSpace200};
      }
    }
  `,
];

export const ModalOrganizerIcon = c(ModalOrganizerIconComponent);
