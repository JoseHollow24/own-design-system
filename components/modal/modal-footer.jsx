import { c, css } from 'atomico';
import { DshSpace0, DshSpace200, DshSpace300 } from '@tokens';

function ModalFooterComponent({ align, visible }) {
  return (
    <host shadowDom className={visible ? '' : 'empty'}>
      <div className={`container ${align}`.trim()}>
        <slot name="actionable" />
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

    ::slotted([slot='actionable']) {
      gap: ${DshSpace200};
      display: flex;
      flex-direction: row;
      padding: ${DshSpace0};
    }

    @media only screen and (min-width: 768px) {
      ::slotted([slot='actionable']) {
        gap: ${DshSpace300};
      }
    }

    @media only screen and (max-width: 767px) {
      .container {
        display: block;
        flex-direction: column;
      }

      ::slotted([slot='actionable']) {
        flex-direction: column-reverse;
      }
    }
  `,
];

export const ModalFooter = c(ModalFooterComponent);
