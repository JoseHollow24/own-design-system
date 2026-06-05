/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unknown-property */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import {
  useState, useEffect, useRef, useProp, useEvent, c, css,
} from 'atomico';
import moment from 'moment';
import { customProperties } from './datepicker.style';

function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });

  return {
    width,
    height,
  };
}
/**
 *
 * @param {import('atomico').Props<select.props>} props
 */
function DatesComponent({
  startDate, finishDate, range, disabledDays, value, hereAfter, legend, highSeason, messageInfo, messageAlert,
}) {
  useWindowDimensions();
  const daysRef = useRef();
  const daysContainer = useRef();
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
  const [displayMonthTwo, setDisplayMonthTwo] = useState();
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
  const [highSeasonAux, setHighSeasonAux] = useState([]);
  const [semanas, setSemanas] = useState(6);

  const [displayDate, setDisplayDate] = useState();
  const [heightCalendar, setHeightCalendar] = useState('auto');
  const [dateOneYear, setDateOneYear] = useState([]);

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
    const firstDayOfMonthTo = new Date(formatDate(`1-${month + 1}-${year}`));
    setDisplayDate(firstDayOfMonth);

    firstDayOfMonthTo.setMonth(firstDayOfMonthTo.getMonth() + 1);
    setDisplayMonthTwo(firstDayOfMonthTo.getMonth());

    // MES 1
    let dayOfWeek = firstDayOfMonth.getDay();
    let list = [];

    let prevIndex = dayOfWeek === 0 ? 7 : dayOfWeek;
    for (let i = 1; i < prevIndex; i++) {
      const day = new Date(firstDayOfMonth);
      day.setDate(firstDayOfMonth.getDate() + (i - prevIndex));
      list.push(day);
    }

    list.push(firstDayOfMonth);
    let nSem = list.length;
    let ultimoDia = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0);
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

    // MES 2

    dayOfWeek = firstDayOfMonthTo.getDay();

    list = [];

    prevIndex = dayOfWeek === 0 ? 7 : dayOfWeek;
    for (let i = 1; i < prevIndex; i++) {
      const day = new Date(firstDayOfMonthTo);
      day.setDate(firstDayOfMonthTo.getDate() + (i - prevIndex));
      list.push(day);
    }

    list.push(firstDayOfMonthTo);
    nSem = list.length;
    ultimoDia = new Date(firstDayOfMonthTo.getFullYear(), firstDayOfMonthTo.getMonth() + 1, 0);
    for (let i = prevIndex + 1; i < 43; i++) {
      const day = new Date(firstDayOfMonthTo);
      day.setDate(firstDayOfMonthTo.getDate() + (i - prevIndex));
      list.push(day);
      if (nSem < 7) nSem++;
      else nSem = 1;

      if (day >= ultimoDia && nSem === 7) {
        i = 43;
      }
    }
    // CARGAR 12 MESES PARA MOBILE;
    const dateOneYearAux = [];
    for (let x = 1; x < 12; x++) {
      const fechaAdd = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + x, 1);
      ultimoDia = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + x + 1, 0);
      const dayOfWeek2 = fechaAdd.getDay();
      const list2 = [];
      const prevIndex2 = dayOfWeek2 === 0 ? 7 : dayOfWeek2;
      for (let i = 1; i < prevIndex2; i++) {
        const day2 = new Date(fechaAdd);
        day2.setDate(fechaAdd.getDate() + (i - prevIndex2));
        list2.push(day2);
      }

      list2.push(fechaAdd);

      let nSem2 = list2.length;

      for (let i = prevIndex2 + 1; i < 43; i++) {
        const day2 = new Date(fechaAdd);
        day2.setDate(fechaAdd.getDate() + (i - prevIndex2));
        list2.push(day2);
        if (nSem2 < 7) nSem2++;
        else nSem2 = 1;

        if (day2 >= ultimoDia && nSem2 === 7) {
          i = 43;
        }
      }
      const semana = list2.length / 7;
      const objFecha = { date: fechaAdd, data: list2, semanas: semana };
      dateOneYearAux.push(objFecha);
    }
    setDateOneYear(dateOneYearAux);
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
    // setSelectedDay(initialDay);
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

  useEffect(() => {
    if (typeof highSeason === 'string' || highSeason instanceof String) {
      setHighSeasonAux(JSON.parse(highSeason));
    } else {
      setHighSeasonAux(highSeason || []);
    }
  }, [highSeason]);
  useEffect(() => {
    if (daysContainer.current.clientHeight > 0) setHeightCalendar(daysContainer.current.clientHeight);
    else setHeightCalendar('');
  }, [active]);

  const clickDay = (day) => {
    let start;
    let finish;
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
  const highSeasonHandle = (day) => {
    for (let i = 0; i < highSeasonAux.length; i++) {
      const fechaAux = formatDate(highSeasonAux[i]);
      const isValidDate = Date.parse(fechaAux);
      if (!Number.isNaN(isValidDate)) {
        const aux = new Date(fechaAux);
        aux.setHours(0, 0, 0, 0);
        day.setHours(0, 0, 0, 0);
        if (day.getTime() === aux.getTime()) {
          return true;
        }
      }
    }
    return false;
  };

  const lockedDay = (day, twoM) => {
    if (day.getMonth() !== twoM.getMonth()) {
      return true;
    }

    const mes = twoM.getMonth();
    const primerDia = new Date(`${mes + 1}-1-${day.getFullYear()}`);
    const ultimoDia = new Date(primerDia.getFullYear(), primerDia.getMonth() + 1, 0);

    primerDia.setHours(0, 0, 0, 0);
    ultimoDia.setHours(0, 0, 0, 0);
    day.setHours(0, 0, 0, 0);

    if ((day.getTime() < primerDia.getTime()) || (day.getTime() > ultimoDia.getTime())) {
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

  const viewsDate = (date, month) => {
    const primerDia = new Date(month.getFullYear(), month.getMonth(), 1);
    const ultimoDia = new Date(month.getFullYear(), month.getMonth() + 1, 0);

    primerDia.setHours(0, 0, 0, 0);
    ultimoDia.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    if ((date.getTime() < primerDia.getTime()) || (date.getTime() > ultimoDia.getTime())) {
      return '';
    }

    return date.getUTCDate();
  };

  return (
    <host shadowDom>
      {customProperties(range, semanas, true, heightCalendar)}

      {daysActive
        && <div className={`main ${yearActive ? 'main-year' : ''}`}>
          <div className='selectors-container'>
            <div className='year-selector' tabindex='1'>
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
              <div className='selector-label'>
                {`${months[displayMonth]} ${displayYear}`}
              </div>

            </div>
            <div className='month-selector'>

              <div className='selector-label'>
                {`${months[displayMonthTwo]} ${displayYear}`}
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

            <div ref={daysContainer} className='days-container'>
              <div className='selectors-container2'>
                <div className='selector-label'>
                  {`${months[displayMonth]} ${displayYear}`}
                </div>
              </div>
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
                    <div
                      key={item}
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
                            ${highSeasonHandle(item, displayDate) ? 'high-season' : ''}
                            ${!lockedDay(item, displayDate) ? disabledCalendar ? 'day-semilocked' : 'day-unlocked' : 'day-locked'}
                          `}
                        onclick={(e) => clickDay(e.currentTarget.value)}
                        onmouseover={(e) => hoverDay(e.currentTarget.value)}
                        onkeyup={(e) => (e.keyCode === 13 ? clickDay(e.currentTarget.value) : {})}
                        onfocus={(e) => hoverDay(e.currentTarget.value)}
                        tabindex={!lockedDay(item, displayDate) ? disabledCalendar ? '1' : '1' : '-1'}
                      >
                        <span>{viewsDate(item, displayDate)}</span>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>
            {
              dateOneYear.map((itemDate, i) => (
                <div key={i} className={`days-container mt-16 ${i > 0 ? 'days-container-mob' : ''}`} >
                  <div className='selectors-container2'>
                    <div className='selector-label'>
                      {`${months[itemDate.date.getMonth()]} ${itemDate.date.getFullYear()}`}
                    </div>
                  </div>
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
                  <div className='days' style={{ gridTemplateRows: `repeat(${itemDate.semanas}, 48px)` }}>
                    {
                      itemDate.data.map((item) => (
                        <div key={item}
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
                          ${currentDate.toDateString() === item.toDateString() && !lockedDay(item, itemDate.date) ? 'current-day' : ''}  
                          ${selectedDay ? selectedDay.toDateString() === item.toDateString() ? 'pressed-day' : '' : ''}  
                          ${selectedStartDayAux ? selectedStartDayAux.toDateString() === item.toDateString() ? 'pressed-start-day' : '' : selectedStartDay ? selectedStartDay.toDateString() === item.toDateString() ? 'pressed-start-day' : '' : ''}  
                          ${selectedFinishDayAux ? selectedFinishDayAux.toDateString() === item.toDateString() ? 'pressed-finish-day' : '' : selectedFinishDay ? selectedFinishDay.toDateString() === item.toDateString() ? 'pressed-finish-day' : '' : ''}  
                          ${(selectedFinishDayAux && selectedStartDayAux) ? (selectedFinishDayAux.toDateString() === item.toDateString() && selectedStartDayAux.toDateString() === item.toDateString()) ? 'pressed-same-day' : '' : (selectedFinishDay && selectedStartDay) ? (selectedFinishDay.toDateString() === item.toDateString() && selectedStartDay.toDateString() === item.toDateString()) ? 'pressed-same-day' : '' : ''} 
                          ${((item > selectedStartDayAux && item < selectedFinishDayAux) || (item > selectedStartDay && item < selectedFinishDay)) ? 'intermediate-day' : ''} 
                          ${highSeasonHandle(item, displayDate) ? 'high-season' : ''}
                          ${!lockedDay(item, itemDate.date) ? disabledCalendar ? 'day-semilocked' : 'day-unlocked' : 'day-locked'}
                        `}
                            onclick={(e) => clickDay(e.currentTarget.value)}
                            onmouseover={(e) => hoverDay(e.currentTarget.value)}
                            onkeyup={(e) => (e.keyCode === 13 ? clickDay(e.currentTarget.value) : {})}
                            onfocus={(e) => hoverDay(e.currentTarget.value)}
                            tabindex={!lockedDay(item, itemDate.date) ? disabledCalendar ? '1' : '1' : '-1'}
                          >
                            {viewsDate(item, itemDate.date)}
                          </button>
                        </div>
                      ))
                    }
                  </div>
                </div>

              ))
            }

          </div>
          <div class='footer'>
            <div class='content-footer'>
              <div class='content-leyenda'>
                {(legend && messageInfo !== '')
                  && <div>
                    <div class='circle'></div>
                  </div>
                }
                <span class='message-info'>{messageInfo}</span>
              </div>
              {(messageInfo !== '' && messageAlert !== '')
                && <div class='v-line'></div>
              }
              <span class='message-alert'>{messageAlert}</span>
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
  legend: {
    type: Boolean,
    reflect: true,
    value: true,
  },
  messageInfo: {
    type: String,
    reflect: true,
    value: '',
  },
  messageAlert: {
    type: String,
    reflect: true,
    value: '',
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
  twoMonths: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  disabledDays: String || Array,
  highSeason: String || Array,
  hereAfter: {
    type: Boolean,
    reflect: true,
    value: false,
  },
};

/* Acá manejamos los estilos que no dependen de una variable para realizar al */
DatesComponent.styles = [
  css`
    :host {
      margin: 0;
      box-sizing: border-box;
      width: fit-content;
      display: flex;
      flex-direction: column;
      font-family: var(--ds-font-family,  'Rawson Pro' sans-serif );
      z-index: 99999;
      margin-top: 8px;
      position:absolute;
    }

    :host([absolute="false"]) {
      position: relative;
    }
    
    .message-info {
      margin:0;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    p,h1,h2,h3,h4{
      margin:0;
      padding:0;
    }
    .content-leyenda{
      display: flex;
      position: relative;
      gap: 8px;
      align-items: center;
  
    }
    .circle {
      background: var(--primary-a-3, #F9BE00);;
      border-radius: 50%;
      width: 8px;
      height: 8px;
    }
    .v-line{
      border-left: 0.948px solid var(--secondary-g-3, #A8B3B7);;
      height:100%;
      left: 50%;
     }
    .selectors-container2,.days-container-mob{
      display:none;
    }
    .main {
      box-sizing: border-box;
      border: 1px solid var(--ds-color-primary-c-0, #00648F);
      border-radius: var(--ds-corner-radius-s-1, 8px);
      padding: 16px;
      background: var(--ds-color-monochromatic-w-1, #ffffff);
      box-shadow: var(--ds-shadow-s-2, 0px 8px 40px rgba(0, 0, 0, 0.08));
    }
    
    .selectors-container {
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .s-month{
      justify-content: center;
      align-items: center;
    }
    .year-selector {
      width: fit-content;
      height: 48px;
      display: flex;
      align-items: center;
      display: flex;
      gap: 8px;
      padding-left: 4px;
      border-radius: var(--ds-corner-radius-s-1, 8px);
    }
    .selectors-container .left:hover, .selectors-container .right:hover{
      background: var(--ds-color-complementary-g-6, #F6F7F7);
      border-radius:12px;
    }
    .year-selector:hover {
      
    }
    .year-selector:focus-visible {
      outline: 3px solid var(--ds-color-primary-c-2, #008ec4);
      outline-offset: 4px;
    }
    .year-selector:active {
      background: transparent;
    }
    .year-selector:active path {
      fill: var(--ds-color-primary-c-3, #1896D3);
    }
    .year-selector:active {
      color: var(--ds-color-primary-c-3, #1896D3);
    }
    .month-selector {
      width: fit-content;
      height: 48px;
      display: flex;
      align-items: center;
      display: flex;
      gap: 8px;
    }
    .selector-label {
      font-size: var(--ds-size-font-rem-s-4, 1.5rem);
      line-height: var(--ds-size-line-height-rem-s-4, 2rem);
      font-weight: var(--ds-weight-font-medium, 500);
      color: var(--ds-color-primary-c-1, #0076A9);
    }
    .selector-icon {
      width: 48px;
      height: 48px;
      border-radius: var(--ds-corner-radius-s-1, 8px);
    }
    .selector-icon:hover {
      background: var(--ds-color-complementary-g-6, #F6F7F7);
      border-radius:12px;
    }
    .selector-icon:focus-visible {
      outline: 3px solid var(--ds-color-primary-c-2, #008ec4);
      outline-offset: 4px;
    }
    .selector-icon:active {
      background: transparent;
    }
    .selector-icon path {
      fill: var(--ds-color-primary-c-1, #0076A9);
    }
    .selector-icon:active path {
      fill: var(--ds-color-primary-c-3, #1896D3);
    }
    .selector-icon:active {
      color: var(--ds-color-primary-c-3, #1896D3);
    }
    .selector-icon.selector-label {
      width: fit-content;
      padding: 0 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      gap:8px
    }
    .locked {
      pointer-events: none;
    }
    .locked path {
      fill: var(--ds-color-complementary-g-5, #DFE3E5);
    }
    .unlocked {
      cursor: pointer;
    }
    .left {
      transform: rotate(-90deg);
    }
    .right {
      transform: rotate(90deg);
    }
    .dates-container {
      width: 100%;
      margin-top: 8px;
      display: var(--display-calendar,block);
      gap:32px;
    }
    .days-container {
      width: 100%;
      height: 100%;
    }
    .days-header {
      width: 100%;
      height: 40px;
      display: flex;
      gap: 8px;
    }
    .days-name {
      width: 48px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: var(--ds-size-font-rem-s-4, 1.5rem);
      line-height: var(--ds-size-line-height-rem-s-4, 2rem);
      font-weight: var(--ds-weight-font-bold, 650);
      color: var(--ds-color-complementary-g-1, #3E4545);
    }
    .days {
      display: grid;
      grid-template-columns: 48px repeat(5, 48px) 48px;
      grid-template-rows: repeat(var(--rows-week,6), 48px);
      grid-column-gap: 0px;
      grid-row-gap: 8px;
      gap:8px;
      margin-top:4px;
    }
    .day {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position:relative;
    }
    .pressed-finish-day-container {
      justify-content: flex-start;
    }
    .pressed-start-day-container {
      justify-content: flex-end;
    }
    .pressed-same-day-container {
      justify-content: center;
    }
    .col-end .intermediate-day{
      width: calc(100% + 8px);
      left: -8px;
    }
    .col-start .intermediate-day {
      width: calc(100% + 8px);
      left: 0px;
    }
    .col-start .intermediate-day span {
      margin-left:-8px;
    }
    inherit
    .first {
      justify-content: flex-start;
    }
    .last {
      justify-content: flex-end;
    }
    .first.pressed-finish-day-container .pressed-finish-day {
      width: 46px;
      padding: 0;
    }
    .last.pressed-start-day-container .pressed-start-day {
      width: 46px;
      padding: 0;
    }
    .first .intermediate-day {
      width: 50px;
      padding-right: 4px;
    }
    .last .intermediate-day {
      width: 50px;
      padding-left: 4px;
    }
    .day-button {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 0;
      margin: 0;
      background: transparent;
      font-size: var(--ds-size-font-rem-s-4, 1.5rem);
      line-height: var(--ds-size-line-height-rem-s-4, 2rem);
      font-weight: var(--ds-weight-font-regular, 400);
      color: var(--ds-color-primary-c-1, #0076A9);
      font-family:var(--font-family);
    }
    .day-button:hover {
      color: var(--ds-color-primary-c-0, #00648F);
      background: var(--ds-color-primary-c-6, #DEF4FF);
      border-radius: var(--radio-hover,12px);
    }
    .day-button:focus-visible {
      border-radius: 12px;
      outline: 3px solid var(--ds-color-primary-c-1, #0076A9);
    }
    .current-day {
      border: 2px solid var(--ds-color-primary-c-1, #0076A9);
      border-radius: 12px;
    }
    .pressed-day {
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
      border-radius:12px;
    }
    .high-season {
      background: var(--primary-a-3, #F9BE00);
      color: var(--secondary-g-1, #3E4545);
      border-radius: 12px;
    }
    .pressed-day:hover {
      background: var(--ds-color-primary-c-5, #92D5F1);
    }
    .intermediate-day {
      width: calc(100% + 16px);
      background: var(--ds-color-primary-c-5, #92D5F1);
      position:absolute;
    }
    .intermediate-day:hover {
      background: var(--ds-color-primary-c-5, #92D5F1);
    }
    .intermediate-day.current-day {
      border: 0;
      border-radius: 0;
    }
    .day-locked {
      background: transparent;
      color: var(--ds-color-complementary-g-4, #C9D0D3);
      pointer-events: none;
    }
    .day-semilocked {
      background: transparent;
      color: var(--ds-color-complementary-g-3, #A8B3B7);
    }
    .day-unlocked {
      cursor: pointer;
    }
    .pressed-finish-day {
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
      border-radius: 0 12px 12px 0;
    }
    .pressed-start-day {
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
      border-radius: 12px 0 0 12px;
      position:absolute;
      /*width: calc(100% + 8px);
      left: 0px;*/
    }
    .pressed-start-day:hover, .pressed-finish-day:hover {
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
    }
    .pressed-start-day:hover{
      border-radius: 12px 0px 0px 12px;
    }
    .pressed-finish-day:hover{
      border-radius: 0 12px 12px 0;
    }
    
    .pressed-same-day {
      width: 46px;
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
      border-radius: 12px 12px 12px 12px;
    }
    .pressed-start-day.day-locked {
      background: transparent;
      color: var(--ds-color-complementary-g-4, #C9D0D3);
      pointer-events: none;
    }
    .pressed-finish-day.day-locked {
      background: transparent;
      color: var--ds-color-complementary-g-4, #C9D0D3);
      pointer-events: none;
    }
    .day-semilocked.current-day {
      width: 46px;
      border: 2px solid var(--ds-color-primary-c-1, #0076A9);
      border-radius: 12px;
    }
    .day-semilocked.current-day.pressed-start-day {
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
      border-radius: 12px 0 0 12px;
    }
    .day-semilocked.current-day.pressed-finish-day {
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
      border-radius: 0 12px 12px 0;
    }
    .current-day.pressed-finish-day, .current-day.pressed-start-day {
      background: white;
      color: var(--ds-color-primary-c-1, #0076A9);
    }
    .years-container {
      width: 100%;
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(3, 80px);
      grid-template-rows: repeat(4, 46px);
      grid-column-gap: 76px;
      grid-row-gap: 32px;
    }
    .year-button {
      box-sizing: border-box;
      width: 80px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      border-radius: 12px;
      padding: 0;
      margin: 0;
      background: transparent;
      font-size: var(--ds-size-font-rem-s-4, 1.5rem);
      line-height: var(--ds-size-line-height-rem-s-4, 2rem);
      font-weight: var(--ds-weight-font-regular, 400);
      color: var(--ds-color-primary-c-1, #0076A9);
    }
    .year-button:hover {
      color: var(--ds-color-primary-c-0, #00648F);
      background: var(--ds-color-primary-c-6, #DEF4FF);
    }
    .year-button:focus-visible {
      border-radius: 12px;
      outline: 3px solid var(--ds-color-primary-c-1, #0076A9);
    }
    .current-year {
      border: 2px solid var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-primary-c-0, #00648F);
    }
    .pressed-year {
      background: var(--ds-color-primary-c-1, #0076A9);
      color: var(--ds-color-monochromatic-w-1, #ffffff);
    }
    .pressed-year:hover {
      background: var(--ds-color-primary-c-5, #92D5F1);
      border-radius:12px;
    }
    .year-locked {
      background: transparent;
      color: var(--ds-color-complementary-g-4, #C9D0D3);
      pointer-events: none;
    }
    .year-unlocked {
      cursor: pointer;
    }
    .message-info, .message-alert {
      font-family: Rawson Pro;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; 
    }
    ::slotted([leyenda='false']) {
      color:red;
    }
    .footer{
      display: flex;
      align-content: center;
      justify-content: center;
      padding-top:8px;
    }
    .content-footer{
      display: flex;
      gap: 16px;
    }
    ::slotted([slot='message-info']) {
      color:#3E4545;
    }
    .message-alert{
      color:#B21E27;
    }
    @media (max-width: 63.95rem) {
      .footer{
        display: flex;
        align-content: center;
        justify-content: center;
        padding-top:0;
      }
      .content-footer{
        display: flex;
        flex-direction:column;
        gap: 8px;
      }
      ::slotted([slot='message-info']),::slotted([slot='message-alert']){
       
      }
      .mt-16{
        margin-top:16px;
      }
      .dates-container{
        flex-direction:column;
        gap:0;
        overflow-x: hidden; 
        overflow-y: auto;
        height:var(--height-cal-mob,200px);
      }
      .selectors-container2{
        padding-left: 8px;
        display: block;
        padding-bottom: 8px;
      }
      .left, .right,.selectors-container,.v-line{
        display:none;
      }
      .selectors-container {
        width: auto;
        padding: 0px 5px 0px 5px;
      }
      .days-container-mob{
        display:block;
      }
      .intermediate-day {
        width: calc(100% + 8px);
      }
      .main {
        border-radius: var(--ds-corner-radius-s-1, 8px);
        padding: 16px 3px 16px 3px;
        box-shadow: none;
        width: calc(100% + 3px);
      }
      .selector-label {
        font-size: var(--ds-size-font-s-3, 18px);
        line-height: var(--ds-size-line-height-s-3, 24px);
        color: var(--ds-color-primary-c-1, #0076A9);
      }
      .days-header {
        gap: 0px;
      }
      .days-name {
        width: 46px;
        font-size: var(--ds-size-font-s-3, 18px);
        line-height: var(--ds-size-line-height-s-3, 24px);
      }
      .days {
        display: grid;
        grid-template-columns: 46px repeat(5, 46px) 46px;
        grid-template-rows: repeat(6, 48px);
        gap: 0px;
        margin-top:8px;
      }
      .day {
        width: 46px;
        font-size: var(--ds-size-font-s-3, 18px);
        line-height: var(--ds-size-line-height-s-3, 24px);
      }
      .day-button, .year-button {
        font-size: var(--ds-size-font-s-3, 18px);
        line-height: var(--ds-size-line-height-s-3, 24px);
      }
      .main-year{
        padding: 16px 8px;
      }
      .years-container {
        grid-column-gap: 48px;
        grid-row-gap: 32px;
      }
    }
  `,
];

const DatesTwoMonths = c(DatesComponent);

export default DatesTwoMonths;
export { DatesTwoMonths };
export const name = 'dsh-dates-two-months';
