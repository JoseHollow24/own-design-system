import { Message } from './message.jsx';

if (!customElements.get('dsh-message'))
  customElements.define('dsh-message', Message);

export * from './message.jsx';
