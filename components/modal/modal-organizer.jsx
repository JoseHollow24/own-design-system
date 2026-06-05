import { c, css } from 'atomico';
import { DshSpace0, DshSpace200 } from '@tokens';

function ModalOrganizerComponent({ icon }) {
  return (
    <host shadowDom className={icon ? 'icon' : ''}>
      <slot />
    </host>
  );
}

ModalOrganizerComponent.props = {
  icon: { type: Boolean, reflect: true, value: false },
};

ModalOrganizerComponent.styles = [
  css`
    :host {
      display: grid;
      grid-template-columns: min-content;
      grid-template-rows: auto auto minmax(0, min-content);
      grid-column-gap: ${DshSpace0};
      grid-row-gap: ${DshSpace0};
      max-height: min-content;
      overflow-y: auto;
    }

    :host(.icon) {
      grid-column-gap: ${DshSpace200};
      grid-template-columns: 48px auto;
    }

    @media only screen and (max-width: 767px) {
      :host {
        display: block;
      }
    }
  `,
];

export const ModalOrganizer = c(ModalOrganizerComponent);
