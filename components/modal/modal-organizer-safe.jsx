import { c, css, useEffect, useEvent, useRef, useState } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import { DshSpace300 } from '@tokens';

function ModalOrganizerSafeComponent({ visible, margin }) {
  const ref = useRef();
  const slot = useSlot(ref);
  const [classname, setClassname] = useState('empty');

  const onSlotChange = useEvent('onSlotChange', { bubbles: true, composed: true });

  useEffect(() => {
    onSlotChange();
  }, [slot]);

  useEffect(() => {
    let current = 'empty';
    if (visible) current = '';
    if (margin) current += ' margin';
    setClassname(current.trim());
  }, [visible, margin]);

  return (
    <host shadowDom className={classname}>
      <slot ref={ref} name="safe-area" />
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
