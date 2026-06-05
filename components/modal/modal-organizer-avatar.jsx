import { c, css } from 'atomico';

function ModalOrganizerAvatarComponent() {
  return (
    <host shadowDom>
      <slot />
    </host>
  );
}

ModalOrganizerAvatarComponent.styles = [
  css`
    :host {
      grid-area: 1 / 1 / 2 / 3;
    }
  `,
];

export const ModalOrganizerAvatar = c(ModalOrganizerAvatarComponent);
