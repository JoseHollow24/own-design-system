import { c, useRef, useEffect, useState, useEvent, Fragment } from 'atomico';
import { useSlot } from "@atomico/hooks/use-slot";

import componentProps from './button.props';
import { baseStyles, primaryLight, secondaryLight, tertiaryLight } from './button.styles';

const Component = ({ 
  label, 
  variant = "primary",
  disabled,
  id, name, type, color, loading, href, target, full, fluid, ariaLabel, width, vertical
}) => {
  //States
  const [classes, setClasses] = useState('');
  const [hostClasses, setHostClasses] = useState('');

  //Ref
  const refSlotStart = useRef();
  const refSlotMain = useRef();
  const refSlotEnd = useRef();
  const refAnchor = useRef();
  const refButton = useRef();
  const lastInteractionRef = useRef(null);

  const slotStart = useSlot(refSlotStart);
  const slotMain = useSlot(refSlotMain);
  const slotEnd = useSlot(refSlotEnd);

  //Events
  const dispatchOnClick = useEvent('onClick', {
    bubbles: true,
    composed: true,
  });

  //Methods
  const methods = {
    on: {
      click: (event) => {
        dispatchOnClick(event);

        if (href && lastInteractionRef.current !== 'keyboard') {
          trackInteraction('mouse');
        }

        lastInteractionRef.current = null;

        if (href && target) {
          refAnchor?.current?.click(event);
        }
      },
      keydown: (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          lastInteractionRef.current = 'keyboard';

          if (href) {
            trackInteraction('keyboard');
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
        current += vertical ? ` vertical` : '';
        setClasses(current.trim());
      },
    },
  };

  useEffect(() => {
    methods.calculate.classes();
    methods.calculate.hostClasses();
  }, [variant, color, full, disabled, vertical, fluid]);

  return (
    <host shadowDom className={hostClasses}>
      <a ref={refAnchor} href={href} target={target} className="hidden"></a>
      <button 
        ref={refButton}
        onclick={methods.on.click}
        className={classes}
        disabled={disabled}
      >
        {label || "button"} 
      </button>
    </host>
  );
}

Component.props = componentProps;
Component.styles = [baseStyles, primaryLight, secondaryLight, tertiaryLight];
customElements.define('dsh-button', c(Component));