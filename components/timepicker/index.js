import { Timepicker } from './timepicker.jsx';
import { Time } from './components/time.jsx';

if (!customElements.get('dsh-timepicker')) customElements.define('dsh-timepicker', Timepicker);
if (!customElements.get('dsh-time')) customElements.define('dsh-time', Time);

export { Timepicker, Time };
