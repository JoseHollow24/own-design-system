import { c, useRef, useState, useEvent, useEffect } from 'atomico';
import { useListener } from '@atomico/hooks/use-listener';
import { useSlot } from '@atomico/hooks/use-slot';

import '@components/radio';

import Props from './cards.props';
import { CustomProperties, Styles } from './cards.style';

function TimepickerComponent(props) {
  // Props
  const { twentyFourH, timeData, maxOptions } = props;

  // States
  const [timeArray, setTimeArray] = useState([]);
  const [checkedRadio, setCheckedRadio] = useState('AM');

  // Refs
  const refAm = useRef();
  const refPm = useRef();
  const refText = useRef();
  const refForm = useRef();
  const refContainer = useRef();
  const childNodesText = useSlot(refText);

  // Dispatch's
  const dispatchEventSelect = useEvent('Select', {
    bubbles: true,
    composed: true,
  });

  // Obtiene unidades como hora(index 0) o minuto(index 1)
  const getUnit = (time, index) => {
    return parseInt(time.split(':')[index], 10);
  };

  // Convierte de formato 24H a AM/PM
  const convertToAmPm = (time) => {
    if (getUnit(time, 0) > 12) {
      if (getUnit(time, 0) - 12 < 10) {
        return `0${getUnit(time, 0) - 12}:${getUnit(time, 1)}`;
      }
      return `${getUnit(time, 0) - 12}:${getUnit(time, 1)}`;
    }
    return time;
  };

  const formatTimes = () => {
    if (typeof timeData === 'string' || timeData instanceof String) {
      return JSON.parse(timeData).sort((a, b) => {
        // Orden por hora
        if (getUnit(a.time, 0) < getUnit(b.time, 0)) return -1;
        if (getUnit(a.time, 0) > getUnit(b.time, 0)) return 1;
        // Orden por minuto
        if (getUnit(a.time, 1) < getUnit(b.time, 1)) return -1;
        if (getUnit(a.time, 1) > getUnit(b.time, 1)) return 1;
        return 0;
      });
    }
    return [];
  };

  const filterTimes = (limit) => {
    const base = formatTimes();
    let filtered = [];
    if (limit === 'AM') filtered = base.filter(({ time }) => getUnit(time, 0) < 12);
    else if (limit === 'PM') filtered = base.filter(({ time }) => getUnit(time, 0) >= 12);
    else filtered = base;
    setTimeArray(filtered);
    setCheckedRadio('AM');
  };

  const handleClick = (e, itemSelected) => {
    const selectedItems = timeArray.filter((item) => item.selected === true).length;
    if (selectedItems < maxOptions || (selectedItems >= maxOptions && itemSelected.selected === true)) {
      const updatedTimeArray = timeArray.map((time) => {
        if (time.time === itemSelected.time) {
          const newTime = {
            ...time, selected: !time.selected,
          };
          return newTime;
        }
        return time;
      });
      setTimeArray(updatedTimeArray);
      dispatchEventSelect(updatedTimeArray);
    } else {
      dispatchEventSelect({
        error: 'Max options already selected', type: 'error',
      });
    }
  };

  const addSeparator = () => {
    if (childNodesText.length > 0 || refForm.current !== undefined) return 'separator';
    return '';
  };

  const addHidden = (period) => {
    if (period !== checkedRadio) return 'hidden';
    return '';
  };

  // Listeners
  useListener(refAm, 'onClick', () => {
    filterTimes('AM');
    setCheckedRadio('AM');
  });

  useListener(refPm, 'onClick', () => {
    filterTimes('PM');
    setCheckedRadio('PM');
  });

  // Effects
  useEffect(() => {
    if (timeData.length > 0) {
      setTimeArray(formatTimes());
      if (twentyFourH) {
        filterTimes('AM');
        setCheckedRadio('AM');
      }
    }
  }, [twentyFourH, timeData]);

  return (
    <host shadowDom>
      {CustomProperties()}
      <div className="container">
        <div className={`header-container ${addSeparator()}`}>
          <div className="header-info">
            <slot name="text" ref={refText}></slot>
            <form ref={refForm} style={`display: ${!twentyFourH ? 'none' : 'display'};`}>
              <dsh-radio-group style="display: flex; flex-direction: row;">
                <dsh-radio
                  ref={refAm}
                  name="group"
                  checked={checkedRadio === 'AM'}>
                  AM
                </dsh-radio>
                <dsh-radio
                  ref={refPm}
                  name="group"
                  checked={checkedRadio === 'PM'}>
                  PM
                </dsh-radio>
              </dsh-radio-group>
            </form>
          </div>
        </div>
        <div className="time-container">
          {!twentyFourH && timeArray.every((item) => getUnit(item.time, 0) >= 12) === false ? (
            <div className="am-pm-container">
              {checkedRadio === 'AM' && (
                <div className={`am ${addHidden('AM')}`}>
                  {timeArray
                  .map((item, index) => (
                    <dsh-time
                      key={index}
                      value={item.time}
                      disabled={item.disabled}
                      selected={item.selected}
                      onClickTime={(e) => handleClick(e, item)}
                    />
                  ))}
                </div>
              )}
              {checkedRadio === 'PM' && (
                <div className={`pm ${addHidden('PM')}`}>
                  {timeArray
                  .map((item, index) => (
                    <dsh-time
                      key={index}
                      value={() => convertToAmPm(item.time)}
                      disabled={item.disabled}
                      selected={item.selected}
                      onClickTime={(e) => handleClick(e, item)}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div ref={refContainer} className="twentyfour-container">
              {timeArray.map((item, index) => (
                <dsh-time
                  key={index}
                  value={item.time}
                  disabled={item.disabled}
                  selected={item.selected}
                  onClickTime={(e) => handleClick(e, item)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </host>
  );
}

TimepickerComponent.props = Props;
TimepickerComponent.styles = [Styles];

const Timepicker = c(TimepickerComponent);

export default Timepicker;
export { Timepicker };
export const name = 'dsh-timepicker';
