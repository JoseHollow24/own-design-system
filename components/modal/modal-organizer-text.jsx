import { c, css } from 'atomico';
import { DshSpace200 } from '@tokens';

function ModalOrganizerTextComponent() {
  return (
    <host shadowDom>
      <slot />
    </host>
  );
}

ModalOrganizerTextComponent.styles = [
  css`
    :host {
      display: flex;
      flex-direction: column;
      width: auto;
      grid-area: 2 / 2 / 3 / 3;
      gap: ${DshSpace200};
    }
  `,
];

export const ModalOrganizerText = c(ModalOrganizerTextComponent);
