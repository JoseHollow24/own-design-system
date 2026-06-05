import { c, css, useEvent } from 'atomico';
import '@components/button';
import '@components/icon';
import { DshSpace0, DshSpace100 } from '@tokens';

function ModalCloseComponent() {
  const dispatchOnClose = useEvent('onClose', { bubbles: true, composed: true });

  return (
    <host shadowDom>
      <dsh-button className="closeBtn" variant="tertiary" color="blue" onclick={dispatchOnClose}>
        Cerrar
        <dsh-icon slot="right" icon-name="fa-xmark" fa-styles="fas" size="s2" />
      </dsh-button>
    </host>
  );
}

ModalCloseComponent.styles = [
  css`
    :host {
      display: flex;
      justify-content: end;
      margin: ${DshSpace0} ${DshSpace0} ${DshSpace100};
      height: max-content;
    }
  `,
];

export const ModalClose = c(ModalCloseComponent);
