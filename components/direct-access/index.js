import { DirectAccess } from './direct-access.jsx';

if (!customElements.get('dsh-direct-access'))
  customElements.define('dsh-direct-access', DirectAccess);

export * from './direct-access.jsx';
