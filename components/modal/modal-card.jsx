import { c, css, useEffect, useState } from 'atomico';
import {
  DshColorMonoWhite,
  DshShadowL,
  DshSpace0,
  DshSpace200,
  DshSpace300,
  DshBorderRadius200,
} from '@tokens';

function ModalCardComponent({ fixed, variant }) {
  const [classname, setClassname] = useState('');

  useEffect(() => {
    let current = '';
    if (fixed) current += 'fixed ';
    if (variant) current += `${variant} `;
    setClassname(current.trim());
  }, [fixed, variant]);

  return (
    <host shadowDom className={classname}>
      <slot />
    </host>
  );
}

ModalCardComponent.props = {
  fixed: { type: Boolean, reflect: true },
  variant: { type: String, reflect: true, value: '' },
};

ModalCardComponent.styles = [
  css`
    :host {
      padding: ${DshSpace300};
      position: relative;
      border-radius: ${DshBorderRadius200};
      display: block;
      height: inherit;
      background-color: ${DshColorMonoWhite};
      box-shadow: ${DshShadowL};
    }

    :host(.promo) {
      max-width: 653px !important;
    }

    :host(.fixed) {
      display: grid;
      height: -webkit-fill-available;
    }

    @media only screen and (max-width: 735px) {
      :host {
        width: 100%;
        margin: 64px ${DshSpace0};
        padding: ${DshSpace200} 12px;
        min-width: calc(320px - ${DshSpace300});
      }
    }

    @media only screen and (min-width: 361px) and (max-width: 767px) and (orientation: portrait) {
      :host {
        width: 736px;
        padding: ${DshSpace200} 12px;
        margin: 64px ${DshSpace200};
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      :host {
        width: 880px;
        margin: 96px ${DshSpace200};
      }
    }

    @media only screen and (min-width: 1024px) {
      :host {
        margin: 96px auto;
        max-width: 880px;
        width: calc((10 * ((100vw - 32px - (11 * 24px)) / 12)) + (9 * 24px));
      }
    }
  `,
];

export const ModalCard = c(ModalCardComponent);
