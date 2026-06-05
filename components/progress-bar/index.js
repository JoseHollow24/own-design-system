import { ProgressBar } from './progress-bar.jsx';

if (!customElements.get('dsh-progress-bar'))
  customElements.define('dsh-progress-bar', ProgressBar);

export * from './progress-bar.jsx';
