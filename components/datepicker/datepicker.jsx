/* eslint-disable react/no-unknown-property */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
import {
  c,
  useRef,
  useState,
  useProp,
  useEffect,
  useEvent,
} from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import { Dates } from './dates.jsx';
import { DatesTwoMonths } from './datesTwoMonths.jsx';
import { customProperties, stylesDatepicker } from './datepicker.style';

/**
 *
 * @param {import("atomico").Props<select.props>} props
 */
function DatepickerComponent({
  label,
  placeholder,
  helper,
  position,
  disabledDays,
  hereAfter,
  availableTo,
  availableFrom,
  twoMonths,
  legend,
  highSeason,
  absolute,
}) {
  const [value, setValue] = useProp('value');
  const [startDate, setStartDate] = useProp('startDate');
  const [finishDate, setFinishDate] = useProp('finishDate');
  const [state, setState] = useProp('state');
  const [positionInput, setPositionInput] = useProp('positionInput');
  const [clsPosition, setClsPosition] = useState('');
  const refSelect = useRef();
  const refOption = useRef();
  const refFocus = useRef();

  const messageInfo = useRef();
  const messageAlert = useRef();
  const slotMessageInfo = useSlot(messageInfo);
  const slotMessageAlert = useSlot(messageAlert);
  const [text, setText] = useState('');
  const [messageInfoSalida, setMessageInfoSalida] = useState('');
  const [messageAlertSalida, setMessageAlertSalida] = useState('');
  const texto = text;

  const [active, setActive] = useState(false);
  const [inside, setInside] = useState(false);
  const [range, setRange] = useProp('range');

  const dispatchEvent = useEvent('ChangeDate', {
    bubbles: true,
    composed: true,
  });

  const formatDate = (valueF) => {
    const val = valueF.replaceAll('/', '-');
    const fArr = val.split('-');
    let day = parseInt(fArr[0], 10);
    let month = parseInt(fArr[1], 10);
    const year = fArr[2];

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;
    if (!Number.isNaN(Date.parse(`${month}/${day}/${year}`))) return `${month}/${day}/${year}`;
    return '';
  };

  useEffect(() => {
    if (twoMonths) setRange(true);
  }, [twoMonths]);

  useEffect(() => {
    const handleClick = () => {
      if (!inside) {
        setActive(false);
      }
    };
    const handleEnter = (event) => {
      if (event.keyCode === 13 && (event.target !== refOption.current)) {
        event.preventDefault();
        setActive(!active);
      }
    };

    document.addEventListener('mousedown', handleClick);
    refSelect.current.addEventListener('keyup', handleEnter);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      refSelect.current.removeEventListener('keyup', handleEnter);
    };
  });
  useEffect(() => {
    if (!range) {
      let valueAux = value.replaceAll('/', '-');
      const fArr = valueAux.split('-');
      let day = parseInt(fArr[0], 10);
      let month = parseInt(fArr[1], 10);
      const year = fArr[2];

      if (day < 10) day = `0${day}`;
      if (month < 10) month = `0${month}`;

      const nFech = `${month}/${day}/${year}`;
      const isValidDate = Date.parse(nFech);
      if (!Number.isNaN(isValidDate)) {
        valueAux = value.replaceAll('-', '/');
        setText(valueAux);
      }
    } else {
      const start = formatDate(startDate);
      const finish = formatDate(finishDate);
      if ((!Number.isNaN(Date.parse(start))) && (!Number.isNaN(Date.parse(finish)))) {
        let sDate = start.split('/');
        let day = sDate[1];
        let month = sDate[0];
        let year = sDate[2];
        const sFecha = `${day}/${month}/${year}`;
        sDate = finish.split('/');
        day = sDate[1];
        month = sDate[0];
        year = sDate[2];
        const fFecha = `${day}/${month}/${year}`;
        setText(`${sFecha} - ${fFecha}`);
      } else {
        setText('');
      }
    }
  }, [value]);
  useEffect(() => {
    if (slotMessageInfo.length > 0) {
      let salida = slotMessageInfo[0].innerHTML;
      if (salida.indexOf('<!--') > -1) salida = salida.substring(salida.indexOf('-->') + 3);
      setMessageInfoSalida(salida);
    }
    if (slotMessageAlert.length > 0) {
      let salida = slotMessageAlert[0].innerHTML;
      if (salida.indexOf('<!--') > -1) salida = salida.substring(salida.indexOf('-->') + 3);
      setMessageAlertSalida(salida);
    }
  }, [slotMessageInfo, slotMessageAlert]);
  useEffect(() => {
    const states = ['', 'success', 'error'];
    if (states.indexOf(state) < 0) {
      setState('');
    }
  }, [state]);
  useEffect(() => {
    const positionInputs = ['', 'left'];
    if (positionInputs.indexOf(positionInput) < 0) {
      setPositionInput('');
    }
    switch (position) {
      case 'center':
        setClsPosition('dates-center');
        break;
      case 'right':
        setClsPosition('dates-right');
        break;
      default:
        setClsPosition('dates-left');
        break;
    }
  }, [positionInput, position]);

  const handleActive = () => {
    setActive(!active);
  };

  const handleChangeDate = (e) => {
    if (e !== '') {
      if (range) {
        const start = new Date(formatDate(e.start));
        const finish = new Date(formatDate(e.finish));

        let dayIni = start.getDate();
        let monthIni = start.getMonth() + 1;
        const yearIni = start.getFullYear();
        if (dayIni < 10) dayIni = `0${dayIni}`;
        if (monthIni < 10) monthIni = `0${monthIni}`;

        let dayFin = finish.getDate();
        let monthFin = finish.getMonth() + 1;
        const yearFin = finish.getFullYear();
        if (dayFin < 10) dayFin = `0${dayFin}`;
        if (monthFin < 10) monthFin = `0${monthFin}`;
        // eslint-disable-next-line max-len
        if (start.getUTCDate() === finish.getUTCDate() && start.getMonth() === finish.getMonth() && start.getFullYear() === finish.getFullYear()) {
          setText(`${dayIni}/${monthIni}/${yearIni} - ${dayFin}/${monthFin}/${yearFin}`);
        } else {
          setText(`${dayIni}/${monthIni}/${yearIni} - ${dayFin}/${monthFin}/${yearFin}`);
          setStartDate(`${dayIni}-${monthIni}-${yearIni}`);
          setFinishDate(`${dayFin}-${monthFin}-${yearFin}`);
        }
      } else {
        const valueAux = e.replaceAll('/', '-');
        const fArr = valueAux.split('-');
        let day = parseInt(fArr[0], 10);
        let month = parseInt(fArr[1], 10);
        const year = fArr[2];

        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;
        setText(`${day}/${month}/${year}`);
        setValue(`${day}-${month}-${year}`);
      }
    } else {
      setText(e);
    }
    dispatchEvent(e);
    setActive(false);
  };

  return (
    <host shadowDom onChange={() => handleChangeDate()}>
      {customProperties(null, null, twoMonths)}
      <div className={'main-container'}>
        <div>
          {label !== ''
            ? <p className='label truncate'>{label}</p>
            : null
          }

          <div
            className='select-box'
            onmouseover={() => setInside(true)}
            onmouseleave={() => setInside(false)}
            ref={refSelect}
          >
            <div
              className='select-container'
              ref={refFocus}
              onclick={() => handleActive()}
              tabindex='0'
            >
              <div className={`selected${state === '' ? '' : ` ${state}`}${positionInput === '' ? '' : ` input-${positionInput}`}`} >
                <p className='text'>
                  {texto && texto !== '' ? texto : placeholder}
                </p>
                <div className='icon'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {active ? (
                      <path d='M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z' fill='#3E4545' />
                    ) : (
                      <path d='M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z' fill='#3E4545' />
                    )}
                  </svg>
                </div>
              </div>
            </div>
            <div className={`dates ${active ? '' : 'dates-hidden'} ${clsPosition}`}>
              {twoMonths
                ? <DatesTwoMonths absolute={absolute} state={state} messageInfo={messageInfoSalida} messageAlert={messageAlertSalida} legend={legend} highSeason={highSeason} twoMonths={twoMonths} availableTo={availableTo} availableFrom={availableFrom} hereAfter={hereAfter} value={texto} startDate={startDate} finishDate={finishDate} range={true} active={active} disabledDays={disabledDays} onChangeDatepicker={(e) => handleChangeDate(e.detail)} ref={refOption} >

                </DatesTwoMonths>
                : <Dates absolute={absolute} state={state} availableTo={availableTo} availableFrom={availableFrom} hereAfter={hereAfter} value={texto} startDate={startDate} finishDate={finishDate} range={range} active={active} disabledDays={disabledDays} onChangeDatepicker={(e) => handleChangeDate(e.detail)} ref={refOption} />
              }

            </div>
          </div>
          <p className={`helper truncate${state === '' ? '' : ` message-${state}`}`} >{helper}</p>
          <slot ref={messageInfo} className='hidden' name='message-info'></slot>
          <slot ref={messageAlert} className='hidden' name='message-alert'></slot>
        </div>
      </div>
    </host>
  );
}
DatepickerComponent.props = {
  id: String,
  value: {
    type: String,
    reflect: true,
    value: '',
  },
  legend: {
    type: Boolean,
    reflect: true,
    value: true,
  },
  availableTo: {
    type: String,
    reflect: true,
    value: '',
  },
  availableFrom: {
    type: String,
    reflect: true,
    value: '',
  },
  label: {
    type: String,
    reflect: true,
    value: '',
  },
  helper: {
    type: String,
    reflect: true,
    value: '',
  },
  placeholder: {
    type: String,
    reflect: true,
    value: '',
  },
  startDate: {
    type: String,
    reflect: true,
    value: '',
  },
  finishDate: {
    type: String,
    reflect: true,
    value: '',
  },
  range: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  position: {
    type: String,
    reflect: true,
    value: 'left',
  },
  positionInput: {
    type: String,
    reflect: true,
    value: '',
  },
  disabledDays: String || Array,
  highSeason: String || Array,
  hereAfter: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  twoMonths: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  state: {
    type: String,
    reflect: true,
    value: '',
  },
  absolute: {
    type: Boolean,
    reflect: true,
    value: true,
  },
};

DatepickerComponent.styles = stylesDatepicker;

const Datepicker = c(DatepickerComponent);

export default Datepicker;
export { Datepicker };
export const name = 'dsh-datepicker';
