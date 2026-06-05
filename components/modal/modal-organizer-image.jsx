import { c, css } from 'atomico';

function ModalOrganizerImageComponent() {
  return (
    <host shadowDom>
      <slot />
    </host>
  );
}

ModalOrganizerImageComponent.styles = [
  css`
    :host {
      grid-area: 1 / 1 / 2 / 3;
    }
  `,
];

export const ModalOrganizerImage = c(ModalOrganizerImageComponent);
