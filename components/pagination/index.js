import { Pagination } from './pagination.jsx';

if (!customElements.get('dsh-pagination'))
  customElements.define('dsh-pagination', Pagination);

export * from './pagination.jsx';
