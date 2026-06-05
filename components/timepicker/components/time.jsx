import { c, useRef, useEvent } from 'atomico';
import styles from './time.style';

function TimeComponent({
                         value,
                         disabled,
                         selected,
                       }) {
  const refTime = useRef();

  const dispatchEventClick = useEvent('ClickTime', {
    bubbles: true,
    composed: true,
  });

  const clickTime = (e, time) => {
    if (disabled === false) {
      dispatchEventClick(time);
    }
    e.preventDefault();
  };

  return (
    <host shadowDom>
      <button
        ref={refTime}
        className="time-button"
        disabled={disabled}
        selected={selected}
        onclick={(e) => {
          clickTime(e, value);
        }}
        onkeyup={(e) => (e.keyCode === 13 ? clickTime(e, value) : {
})}
      >
        {value}
      </button>
    </host>
  );
}

TimeComponent.props = {
  value: {
    type: String,
    value: '',
    reflect: true,
  },
  disabled: {
    type: Boolean,
    value: false,
    reflect: true,
  },
  selected: {
    type: Boolean,
    value: false,
    reflect: true,
  },
};

/* Acá manejamos los estilos que no dependen de una variable para realizar al */
TimeComponent.styles = [styles];

const Time = c(TimeComponent);
export default Time;
export { Time };
export const name = 'dsh-time';
