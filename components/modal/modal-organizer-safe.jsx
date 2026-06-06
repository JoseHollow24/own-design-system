import { c, css, useEffect, useState } from 'atomico';
import { DshSpace300 } from '@tokens';

function ModalOrganizerSafeComponent({ visible, margin }) {
  const [classname, setClassname] = useState('empty');

  useEffect(() => {
    let current = 'empty';
    if (visible) current = '';
    if (margin) current += ' margin';
    setClassname(current.trim());
  }, [visible, margin]);

  return (
    <host shadowDom className={classname}>
      <slot name="safe-area" />
    </host>
  );
}

ModalOrganizerSafeComponent.props = {
  visible: { type: Boolean, reflect: true, value: false },
  margin: { type: Boolean, reflect: true, value: false },
};

ModalOrganizerSafeComponent.styles = [
  css`
    :host {
      display: block;
      grid-area: 3 / 1 / 4 / 3;
    }

    :host(.empty) {
      display: none;
    }

    :host(.margin) {
      margin-top: ${DshSpace300};
    }
  `,
];

export const ModalOrganizerSafe = c(ModalOrganizerSafeComponent);
