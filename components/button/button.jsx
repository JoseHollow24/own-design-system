import { c, useRef, useEffect, useState, useEvent } from 'atomico';
import { useSlot } from "@atomico/hooks/use-slot";

import componentProps from './button.props';
import { baseStyles, primaryLight, secondaryLight, tertiaryLight } from './button.styles';

const Component = ({
  label,
  variant = "primary",
  disabled,
  id, name, type, color, loading, href, target, full, fluid, ariaLabel, width
}) => {
  const [classes, setClasses] = useState('');
  const [hostClasses, setHostClasses] = useState('');

  const refSlotStart = useRef();
  const refSlotMain = useRef();
  const refSlotEnd = useRef();
  const refAnchor = useRef();
  const refButton = useRef();

  const slotStart = useSlot(refSlotStart);
  const slotMain = useSlot(refSlotMain);
  const slotEnd = useSlot(refSlotEnd);

  const dispatchButtonClick = useEvent('buttonClick', {
    bubbles: true,
    composed: true,
  });

  const methods = {
    on: {
      click: (event) => {
        dispatchButtonClick(event);
        if (href && target) {
          refAnchor?.current?.click(event);
        }
      },
      keydown: (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (href) {
            refButton.current?.click();
          }
        }
      },
    },
    calculate: {
      hostClasses: () => {
        let current = '';
        current += fluid ? ` fluid` : '';
        current += full ? ` full` : '';
        setHostClasses(current);
      },
      classes: () => {
        let current = '';
        current += variant ?? '';
        current += color ? ` ${color}` : '';
        current += fluid ? ` fluid` : '';
        current += full ? ` full` : '';
        current += loading ? ` loading` : '';
        setClasses(current.trim());
      },
    },
  };

  useEffect(() => {
    methods.calculate.classes();
    methods.calculate.hostClasses();
  }, [variant, color, full, disabled, fluid, loading]);

  return (
    <host shadowDom className={hostClasses}>
      <a ref={refAnchor} href={href} target={target} className="hidden"></a>
      <button
        ref={refButton}
        onclick={methods.on.click}
        onkeydown={methods.on.keydown}
        className={classes}
        disabled={disabled}
      >
        <slot name="left" ref={refSlotStart}></slot>
        <slot ref={refSlotMain}>{label}</slot>
        <slot name="right" ref={refSlotEnd}></slot>
        {loading ? <span className="spinner"></span> : null}
      </button>
    </host>
  );
}

Component.props = componentProps;
Component.styles = [baseStyles, primaryLight, secondaryLight, tertiaryLight];
customElements.define('dsh-button', c(Component));