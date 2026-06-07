import { c, css } from 'atomico';
import { DshSpace0, DshSpace200, DshSpace300 } from '@tokens';

function ModalFooterComponent({ align, visible }) {
  return (
    <host shadowDom className={visible ? '' : 'empty'}>
      <div className={`container ${align}`.trim()}>
        <slot />
      </div>
    </host>
  );
}

ModalFooterComponent.props = {
  align: { type: String, reflect: true, value: 'right' },
  visible: { type: Boolean, reflect: true, value: false },
};

ModalFooterComponent.styles = [
  css`
    :host {
      margin: ${DshSpace300} ${DshSpace0} ${DshSpace0};
      display: block;
    }

    :host(.empty) {
      display: none;
    }

    .container {
      display: flex;
      gap: ${DshSpace200};
    }

    .left {
      justify-content: start;
    }

    .center {
      justify-content: center;
    }

    .right {
      justify-content: end;
    }

    @media only screen and (max-width: 767px) {
      .container {
        display: block;
        flex-direction: column;
      }
    }
  `,
];

export const ModalFooter = c(ModalFooterComponent);
