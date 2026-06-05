/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unknown-property */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import {
  useState, useEffect, useRef, useProp, useEvent, c,
} from 'atomico';
import moment from 'moment';
import { customProperties, stylesDates } from './datepicker.style';

function DatesComponent({
  startDate, finishDate, range, disabledDays, value, hereAfter,
}) {
  const daysRef = useRef();
  const [availableTo] = useProp('availableTo');
  const [availableFrom] = useProp('availableFrom');
  const [active] = useProp('active');

  const start = new Date(moment(startDate, 'DD-MM-YYYY').toDate());
  const finish = new Date(moment(finishDate, 'DD-MM-YYYY').toDate());

  const [days, setDays] = useState([]);
  const [years, setYears] = useState([]);
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const currentDate = new Date();
  const currentYear = new Date().getFullYear();

  const [displayMonth, setDisplayMonth] = useState();
  const [displayYear, setDisplayYear] = useState();

  const [displayYearAux, setDisplayYearAux] = useState();

  const [selectedDay, setSelectedDay] = useState();

  const [selectedStartDay, setSelectedStartDay] = useState();
  const [selectedFinishDay, setSelectedFinishDay] = useState(finish);

  const [selectedStartDayAux, setSelectedStartDayAux] = useState();
  const [selectedFinishDayAux, setSelectedFinishDayAux] = useState();

  const [yearActive, setYearActive] = useState(false);
  const [monthActive, setMonthActive] = useState(false);
  const [daysActive, setDaysActive] = useState(true);
  const [disabledCalendar, setDisabledCalendar] = useState(false);
  const [disabledDayAux, setDisabledDayAux] = useState([]);
  const [semanas, setSemanas] = useState(6);
  // typeof isDayBlocked
  const dispatchEvent = useEvent('ChangeDatepicker', {
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

    return `${month}/${day}/${year}`;
  };

  const updateDays = (month, year) => {
    const firstDayOfMonth = new Date(formatDate(`1-${month + 1}-${year}`));
    const dayOfWeek = firstDayOfMonth.getDay();

    const list = [];

    const prevIndex = dayOfWeek === 0 ? 7 : dayOfWeek;
    for (let i = 1; i < prevIndex; i++) {
      const day = new Date(firstDayOfMonth);
      day.setDate(firstDayOfMonth.getDate() + (i - prevIndex));
      list.push(day);
    }

    list.push(firstDayOfMonth);
    let nSem = list.length;
    const ultimoDia = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0);
    for (let i = prevIndex + 1; i < 43; i++) {
      const day = new Date(firstDayOfMonth);
      day.setDate(firstDayOfMonth.getDate() + (i - prevIndex));
      list.push(day);
      if (nSem < 7) nSem++;
      else nSem = 1;

      if (day >= ultimoDia && nSem === 7) {
        i = 43;
      }
    }
    setSemanas(list.length / 7);

    setDays(list);
  };

  const updateYears = (year) => {
    const resto = year % 12;
    const initialYear = year - resto;

    const listYears = [];
    for (let i = 0; i < 12; i++) {
      listYears.push(initialYear + i);
    }
    setDisplayYearAux(initialYear);

    setYears(listYears);
  };

  useEffect(() => {
    let initialDay = new Date();
    let currenDateSel = currentDate;
    if (!range) {
      const valueFecha = moment(value, 'DD-MM-YYYY');
      if (valueFecha.isValid()) {
        initialDay = new Date(moment(value, 'DD-MM-YYYY').toDate());
        currenDateSel = new Date(moment(value, 'DD-MM-YYYY').toDate());
      }
    }
    const avaTo = new Date(moment(availableTo, 'DD-MM-YYYY').toDate());
    const avaFrom = new Date(moment(availableFrom, 'DD-MM-YYYY').toDate());

    if (currenDateSel < avaFrom) {
      initialDay = new Date(avaFrom);
    } else if (currenDateSel > avaTo) {
      initialDay = new Date(avaTo);
    } else if (currenDateSel < start) {
      initialDay = new Date(start);
    } else if (currenDateSel > finish) {
      initialDay = new Date(finish);
    }

    setDisplayMonth(initialDay.getMonth());
    setDisplayYear(initialDay.getFullYear());
    setSelectedDay(initialDay);
    updateDays(initialDay.getMonth(), initialDay.getFullYear());
    updateYears(initialDay.getFullYear());
  }, [value]);

  useEffect(() => {
    if (selectedStartDay && !selectedFinishDay) {
      setSelectedStartDay();
      setSelectedFinishDay();
      setSelectedStartDayAux();
      setSelectedFinishDayAux();
      dispatchEvent('');
    }
    setDisabledCalendar(false);
    if (!daysActive && !yearActive && !monthActive) {
      setDaysActive(active);
    }
  }, [active]);

  useEffect(() => {
    if (range) {
      const sF = formatDate(startDate);
      const fF = formatDate(finishDate);
      if ((!Number.isNaN(Date.parse(sF))) && (!Number.isNaN(Date.parse(fF)))) {
        setSelectedStartDay(new Date(sF));
        setSelectedFinishDay(new Date(fF));
      } else {
        setSelectedFinishDay();
        setSelectedStartDay();
      }
    }
  }, [startDate, finishDate]);

  useEffect(() => {
    if (typeof disabledDays === 'string' || disabledDays instanceof String) {
      setDisabledDayAux(JSON.parse(disabledDays));
    } else {
      setDisabledDayAux(disabledDays || []);
    }
  }, [disabledDays]);

  const clickDay = (day) => {
    let start = '';
    let finish = '';

    if (range) {
      if (selectedStartDay && !selectedFinishDay && !disabledCalendar) {
        if (selectedStartDay <= new Date(day)) {
          setSelectedFinishDay(new Date(day));
          start = new Date(selectedStartDay);
          finish = new Date(day);
        } else {
          setSelectedFinishDay(new Date(selectedStartDay));
          setSelectedStartDay(new Date(day));
          start = new Date(day);
          finish = new Date(selectedStartDay);
        }
        setSelectedStartDayAux();
        setSelectedFinishDayAux();
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

        const listado = daysRef.current?.getElementsByClassName('intermediate-day');
        const fechasSeleccionadas = [];
        fechasSeleccionadas.push(`${dayIni}-${monthIni}-${yearIni}`);
        for (const item of listado) {
          const locked = item.classList.contains('day-locked');
          if (!locked) {
            const fecha = new Date(item.value);
            let d = fecha.getDate();
            let m = fecha.getMonth() + 1;
            const y = fecha.getFullYear();
            if (d < 10) d = `0${d}`;
            if (m < 10) m = `0${m}`;
            fechasSeleccionadas.push(`${d}-${m}-${y}`);
          }
        }
        fechasSeleccionadas.push(`${dayFin}-${monthFin}-${yearFin}`);

        dispatchEvent({ start: `${dayIni}/${monthIni}/${yearIni}`, finish: `${dayFin}/${monthFin}/${yearFin}`, data: fechasSeleccionadas });
      } else if (!selectedStartDay && !selectedFinishDay) {
        setSelectedStartDay(new Date(day));
        setSelectedStartDayAux(new Date(day));
      } else if (selectedStartDay && selectedFinishDay) {
        setSelectedStartDay(new Date(day));
        setSelectedStartDayAux(new Date(day));

        setSelectedFinishDay();
      }
    } else {
      setSelectedDay(new Date(day));
      start = new Date(day);
      let dayIni = start.getDate();
      let monthIni = start.getMonth() + 1;
      const yearIni = start.getFullYear();
      if (dayIni < 10) dayIni = `0${dayIni}`;
      if (monthIni < 10) monthIni = `0${monthIni}`;

      dispatchEvent(`${dayIni}/${monthIni}/${yearIni}`);
    }
    setYearActive(false);
    setMonthActive(false);
    setDaysActive(true);
  };

  const clickMonth = (action) => {
    let auxMonth;
    let auxYear;
    if (action === 'up') {
      if (displayMonth !== 11) {
        auxMonth = displayMonth + 1;
        auxYear = displayYear;
      } else {
        auxMonth = 0;
        auxYear = displayYear + 1;
      }
    } else if (action === 'down') {
      if (displayMonth !== 0) {
        auxMonth = displayMonth - 1;
        auxYear = displayYear;
      } else {
        auxMonth = 11;
        auxYear = displayYear - 1;
      }
    }
    setDisplayMonth(auxMonth);
    setDisplayYear(auxYear);

    updateDays(auxMonth, auxYear);
  };

  const clickYear = (year) => {
    setDisplayYear(Number(year));
    setDisplayYearAux(Number(year) + 12);
    setYearActive(false);
    setMonthActive(true);
    setDaysActive(false);
  };

  const clickMonthCal = (value) => {
    const month = value.split('-')[1];
    setDisplayMonth(parseInt(month, 10));
    setDisplayYear(displayYear);
    updateDays(parseInt(month, 10), displayYear);
    setYearActive(false);
    setMonthActive(false);
    setDaysActive(true);
  };

  const lockedDay = (day) => {
    if (day.getMonth() !== displayMonth) {
      return true;
    }
    if ((typeof availableTo === 'string' || availableTo instanceof String) && (typeof availableFrom === 'string' || availableFrom instanceof String)) {
      const availableToAux = formatDate(availableTo);
      const availableFromAux = formatDate(availableFrom);
      if ((!Number.isNaN(Date.parse(availableFromAux))) && (!Number.isNaN(Date.parse(availableToAux)))) {
        const auxFrom = new Date(availableFromAux);
        const auxTo = new Date(availableToAux);
        day.setHours(0, 0, 0, 0);
        auxFrom.setHours(0, 0, 0, 0);
        auxTo.setHours(0, 0, 0, 0);
        if ((day.getTime() < auxFrom.getTime()) || (day.getTime() > auxTo.getTime())) {
          return true;
        }
      } else if (!Number.isNaN(Date.parse(availableToAux))) {
        const auxTo = new Date(availableToAux);
        day.setHours(0, 0, 0, 0);
        auxTo.setHours(0, 0, 0, 0);
        if (day.getTime() > auxTo.getTime()) {
          return true;
        }
      } else if (!Number.isNaN(Date.parse(availableFromAux))) {
        const auxFrom = new Date(availableFromAux);
        day.setHours(0, 0, 0, 0);
        auxFrom.setHours(0, 0, 0, 0);
        if (day.getTime() < auxFrom.getTime()) {
          return true;
        }
      }
    }
    if (hereAfter) {
      currentDate.setHours(0, 0, 0, 0);
      day.setHours(0, 0, 0, 0);
      if (day.getTime() < currentDate.getTime()) {
        return true;
      }
    }
    for (let i = 0; i < disabledDayAux.length; i++) {
      const fechaAux = formatDate(disabledDayAux[i]);
      const isValidDate = Date.parse(fechaAux);
      if (!Number.isNaN(isValidDate)) {
        const aux = new Date(fechaAux);
        if ((day.getUTCDate() === aux.getUTCDate()) && (day.getMonth() === aux.getMonth()) && (day.getFullYear() === aux.getFullYear())) {
          return true;
        }
      }
    }
    return false;
  };

  const lockedMonth = (action) => {
    if ((action === 'up' && displayMonth === 11 && displayYear === finish.getFullYear()) || (action === 'down' && displayMonth === 0 && displayYear === start.getFullYear())) {
      return true;
    }
    return false;
  };

  const lockedYear = () => false;

  const hoverDay = (e) => {
    setDisabledCalendar(false);

    const day = new Date(e);
    if (selectedStartDay && !selectedFinishDay) {
      if (day >= selectedStartDay) {
        setSelectedStartDayAux(selectedStartDay);
        setSelectedFinishDayAux(new Date(day));
        for (let i = 0; i < disabledDayAux.length; i++) {
          const lockedDays = days.filter((item) => item.getDay() === Number(disabledDayAux[i]) && item.getMonth() === displayMonth);
          for (let j = 0; j < lockedDays.length; j++) {
            if (day > lockedDays[j] && selectedStartDay < lockedDays[j]) {
              setDisabledCalendar(true);
            }
          }
        }
      } else if (day < selectedStartDay) {
        setSelectedFinishDayAux(selectedStartDay);
        setSelectedStartDayAux(new Date(day));

        for (let i = 0; i < disabledDayAux.length; i++) {
          const lockedDays = days.filter((item) => item.getDay() === Number(disabledDayAux[i]) && item.getMonth() === displayMonth);
          for (let j = 0; j < lockedDays.length; j++) {
            if (day < lockedDays[j] && selectedStartDay > lockedDays[j]) {
              setDisabledCalendar(true);
            }
          }
        }
      }
    }
  };

  const clickYears = () => {
    setDaysActive(false);
    setYearActive(true);
    setMonthActive(false);
    setDisplayYearAux(displayYear + 12);
  };

  return (
    <host shadowDom>
      {customProperties(range, semanas, false)}

      {daysActive
        && <div className={`main ${yearActive ? 'main-year' : ''}`}>
          <div className='selectors-container'>
            <div className='year-selector unlocked' onclick={() => clickYears()} onkeyup={(e) => (e.keyCode === 13 ? clickYears() : {})} tabindex='1'>
              <div className='selector-label'>
                {`${months[displayMonth]} ${displayYear}`}
              </div>
              <div className='selector-icon'>
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z'
                    fill='black'
                  />
                </svg>
              </div>
            </div>
            <div className='month-selector'>
              <div className='selector-label'>

              </div>
              <div className={`selector-icon left ${lockedMonth('down') ? 'locked' : 'unlocked'}`} onclick={() => clickMonth('down')} onkeyup={(e) => (e.keyCode === 13 ? clickMonth('down') : {})} tabindex={lockedMonth('down') ? '-1' : '1'}>
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z' fill='black' />
                </svg>
              </div>
              <div className={`selector-icon right ${lockedMonth('up') ? 'locked' : 'unlocked'}`} onclick={() => clickMonth('up')} onkeyup={(e) => (e.keyCode === 13 ? clickMonth('up') : {})} tabindex={lockedMonth('up') ? '-1' : '1'}>
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z' fill='black' />
                </svg>
              </div>
            </div>
          </div>
          <div className='dates-container'>
            <div className='days-container'>
              <div className='days-header'>
                <div className='days-name'>
                  L
                </div>
                <div className='days-name'>
                  M
                </div>
                <div className='days-name'>
                  M
                </div>
                <div className='days-name'>
                  J
                </div>
                <div className='days-name'>
                  V
                </div>
                <div className='days-name'>
                  S
                </div>
                <div className='days-name'>
                  D
                </div>
              </div>
              <div className='days' ref={daysRef}>
                {
                  days.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div
                      className={`day 
                          ${item.getDay() === 1 ? 'col-start' : ''} ${item.getDay() === 0 ? 'col-end' : ''}
                          ${selectedStartDayAux ? selectedStartDayAux.toDateString() === item.toDateString() ? 'pressed-start-day-container' : '' : selectedStartDay ? selectedStartDay.toDateString() === item.toDateString() ? 'pressed-start-day-container' : '' : ''}  
                          ${selectedFinishDayAux ? selectedFinishDayAux.toDateString() === item.toDateString() ? 'pressed-finish-day-container' : '' : selectedFinishDay ? selectedFinishDay.toDateString() === item.toDateString() ? 'pressed-finish-day-container' : '' : ''}  
                          ${(selectedFinishDayAux && selectedStartDayAux) ? (selectedFinishDayAux.toDateString() === item.toDateString() && selectedStartDayAux.toDateString() === item.toDateString()) ? 'pressed-same-day-container' : '' : (selectedFinishDay && selectedStartDay) ? (selectedFinishDay.toDateString() === item.toDateString() && selectedStartDay.toDateString() === item.toDateString()) ? 'pressed-same-day-container' : '' : ''}
                        `}
                    >
                      <button
                        value={item}
                        start={selectedStartDay}
                        finish={selectedFinishDay}
                        className={`
                            day-button 
                            ${currentDate.toDateString() === item.toDateString() ? 'current-day' : ''}  
                            ${selectedDay ? selectedDay.toDateString() === item.toDateString() ? 'pressed-day' : '' : ''}  
                            ${selectedStartDayAux ? selectedStartDayAux.toDateString() === item.toDateString() ? 'pressed-start-day' : '' : selectedStartDay ? selectedStartDay.toDateString() === item.toDateString() ? 'pressed-start-day' : '' : ''}  
                            ${selectedFinishDayAux ? selectedFinishDayAux.toDateString() === item.toDateString() ? 'pressed-finish-day' : '' : selectedFinishDay ? selectedFinishDay.toDateString() === item.toDateString() ? 'pressed-finish-day' : '' : ''}  
                            ${(selectedFinishDayAux && selectedStartDayAux) ? (selectedFinishDayAux.toDateString() === item.toDateString() && selectedStartDayAux.toDateString() === item.toDateString()) ? 'pressed-same-day' : '' : (selectedFinishDay && selectedStartDay) ? (selectedFinishDay.toDateString() === item.toDateString() && selectedStartDay.toDateString() === item.toDateString()) ? 'pressed-same-day' : '' : ''} 
                            ${((item > selectedStartDayAux && item < selectedFinishDayAux) || (item > selectedStartDay && item < selectedFinishDay)) ? 'intermediate-day' : ''} 
                            ${!lockedDay(item) ? disabledCalendar ? 'day-semilocked' : 'day-unlocked' : 'day-locked'}
                          `}
                        onclick={(e) => clickDay(e.currentTarget.value)}
                        onmouseover={(e) => hoverDay(e.currentTarget.value)}
                        onkeyup={(e) => (e.keyCode === 13 ? clickDay(e.currentTarget.value) : {})}
                        onfocus={(e) => hoverDay(e.currentTarget.value)}
                        tabindex={!lockedDay(item) ? disabledCalendar ? '1' : '1' : '-1'}
                      >
                        <span>{item.getUTCDate()}</span>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      }
      {yearActive
        && <div className={`main ${yearActive ? 'main-year' : ''}`}>
          <div className='selectors-container'>
            <div className={`selector-icon left ${lockedYear('down') ? 'locked' : 'unlocked'}`} onclick={() => updateYears(displayYearAux - 12)} onkeyup={(e) => (e.keyCode === 13 ? updateYears(displayYearAux - 12) : {})} tabindex={lockedYear('down') ? '-1' : '1'}>
              <svg
                width='48'
                height='48'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z' fill='black' />
              </svg>
            </div>
            <div className='selector-icon selector-label' onclick={() => { setYearActive(false); setMonthActive(false); setDaysActive(true); }} onkeyup={(e) => { if (e.keyCode === 13) { setYearActive(false); setMonthActive(false); setDaysActive(true); } }} tabindex='1'>
              {`${years[0]} - ${years[years.length - 1]}`}
            </div>
            <div className={`selector-icon right ${lockedYear('up') ? 'locked' : 'unlocked'}`} onclick={() => updateYears(displayYearAux + 12)} onkeyup={(e) => (e.keyCode === 13 ? updateYears(displayYearAux + 12) : {})} tabindex={lockedYear('up') ? '-1' : '1'}>
              <svg
                width='48'
                height='48'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z' fill='black' />
              </svg>
            </div>
          </div>
          <div className='years-container'>
            {
              years.map((item) => (
                <button
                  key={item}
                  value={item}
                  className={`
                      year-button 
                      ${currentYear === item ? 'current-year' : ''} 
                      ${displayYear === item ? 'pressed-year' : ''}
                      ${lockedYear('select', item) ? 'year-locked' : 'year-unlocked'}
                    `}
                  onclick={(e) => clickYear(e.currentTarget.value)}
                  onkeyup={(e) => (e.keyCode === 13 ? clickYear(e.currentTarget.value) : {})}
                  tabindex={lockedYear('select', item) ? '-1' : '1'}
                >
                  {item}
                </button>
              ))
            }
          </div>
        </div>
      }

      {monthActive
        && <div className={`main ${yearActive ? 'main-year' : ''}`}>
          <div className='selectors-container s-month'>

            <div className='selector-icon selector-label ' onclick={() => { setYearActive(true); setMonthActive(false); setDaysActive(false); }} onkeyup={(e) => { if (e.keyCode === 13) { setYearActive(true); setMonthActive(false); setDaysActive(false); } }} tabindex='1'>
              {`${displayYear}`}
              <div className={`selector-icon  ${lockedYear('up') ? 'locked' : 'unlocked'}`} tabindex={lockedYear('up') ? '-1' : '1'}>
                <svg width='48' height='48' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z' fill='black'></path></svg>
              </div>
            </div>
          </div>

          <div className='years-container'>
            {
              months.map((item, i) => (
                <button
                  key={i}
                  value={`month-${i}`}
                  className={`
                      year-button 
                      ${currentYear === item ? 'current-year' : ''} 
                      ${displayMonth === i ? 'pressed-year' : ''}
                      ${lockedYear('select', item) ? 'year-locked' : 'year-unlocked'}
                    `}
                  onclick={(e) => { clickMonthCal(e.currentTarget.value); }
                  }
                  onkeyup={(e) => (e.keyCode === 13 ? clickMonthCal(e.currentTarget.value) : {})}
                  tabindex={lockedYear('select', item) ? '-1' : '1'}
                >
                  {item.substr(0, 3)}
                </button>
              ))
            }
          </div>
        </div>
      }

    </host >
  );
}

DatesComponent.props = {
  value: {
    type: String,
    reflect: true,
    value: '',
  },
  active: {
    type: Boolean,
    reflect: true,
    value: false,
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
  startDate: {
    type: String,
    reflect: true,
    value: '01-01-0000',
  },
  finishDate: {
    type: String,
    reflect: true,
    value: '12-31-3023',
  },
  range: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  disabledDays: String || Array,
  hereAfter: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  state: {
    type: String,
    reflect: true,
    value: '',
  },
  position: {
    type: String,
    reflect: true,
    value: 'static',
  },
};

/* Acá manejamos los estilos que no dependen de una letiable para realizar al */
DatesComponent.styles = stylesDates;

const Dates = c(DatesComponent);

export default Dates;
export { Dates };
export const name = 'dsh-dates';
