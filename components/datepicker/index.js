import { Datepicker } from './datepicker.jsx';
import { Dates } from './dates.jsx';
import { DatesTwoMonths } from './datesTwoMonths.jsx';

if (!customElements.get('dsh-datepicker')) customElements.define('dsh-datepicker', Datepicker);
if (!customElements.get('dsh-dates')) customElements.define('dsh-dates', Dates);
if (!customElements.get('dsh-dates-two-months')) customElements.define('dsh-dates-two-months', DatesTwoMonths);
