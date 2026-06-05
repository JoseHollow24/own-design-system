import { c, css } from 'atomico';
import { DshSpace0, DshSpace200, DshBorderRadiusFull } from '@tokens';

function ModalAvatarComponent({ src, alt }) {
  return (
    <host shadowDom>
      <div className="container">
        <img src={src} alt={alt} className="avatar-img" />
      </div>
    </host>
  );
}

ModalAvatarComponent.props = {
  src: { type: String, reflect: true, value: '' },
  alt: { type: String, reflect: true, value: '' },
};

ModalAvatarComponent.styles = [
  css`
    .container {
      display: block;
      width: 100%;
      margin: ${DshSpace0} ${DshSpace0} ${DshSpace200};
    }

    .avatar-img {
      width: 48px;
      height: 48px;
      border-radius: ${DshBorderRadiusFull};
      object-fit: cover;
      display: block;
    }
  `,
];

export const ModalAvatar = c(ModalAvatarComponent);
