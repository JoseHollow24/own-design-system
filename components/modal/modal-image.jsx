import { c, css } from 'atomico';
import { Silhouette } from './assets/silhouette.jsx';
import { DshSpace0, DshSpace200 } from '@tokens';

function ModalImageComponent({ src, alt, variant }) {
  return (
    <host shadowDom>
      <div className="container">
        <img src={src} alt={alt} className={variant} />
        {variant === 'promo' && <Silhouette />}
      </div>
    </host>
  );
}

ModalImageComponent.props = {
  src: { type: String, reflect: true, value: '' },
  alt: { type: String, reflect: true, value: '' },
  variant: { type: String, reflect: true, value: '' },
};

ModalImageComponent.styles = [
  css`
    :host {
      display: block;
      position: relative;
      width: 100%;
    }

    .container {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: auto;
      position: relative;
    }

    img.promo {
      aspect-ratio: 21 / 9;
    }

    .silhouette {
      display: block;
      width: 102%;
      height: auto;
      position: absolute;
      z-index: 3;
      left: ${DshSpace0};
      bottom: calc(${DshSpace200} - 1px);
      object-fit: cover;
    }

    @media only screen and (max-width: 482px) {
      img.promo {
        width: auto;
        height: 220px;
        object-fit: cover;
      }
    }
  `,
];

export const ModalImage = c(ModalImageComponent);
