import { c, useState, useEffect, useEvent, useRef } from 'atomico';
import { useResponsiveState } from '@atomico/hooks/use-responsive-state';

import '@components/icon';
import componentProps from './pagination.props';
import { customProperties, styles } from './pagination.styles';

function PaginationComponent({ pages, selectPage, shadow, darkMode }) {
  const expression = 'phone, tablet 48rem, desktop 1024px';
  const state = useResponsiveState(expression);
  const isMobile = state === 'phone';
  const pageLimit = isMobile ? 5 : 6;

  const nextRef = useRef();
  const prevRef = useRef();
  const paginationCont = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [nextB, setNextB] = useState(false);
  const [prevB, setPrevB] = useState(false);
  const [handlEnter, setHandlEnter] = useState(false);

  const dispatchEventNextPage = useEvent('nextPage', { bubbles: true, composed: true });
  const dispatchEventPrevPage = useEvent('prevPage', { bubbles: true, composed: true });
  const dispatchEventCurrentPage = useEvent('currentPage', { bubbles: true, composed: true });

  const goToNextPage = (event) => {
    setHandlEnter(event.pointerId > 0 ? false : true);
    if (currentPage < pages) {
      const next = currentPage + 1;
      setCurrentPage(next);
      setPrevB(false);
      setNextB(true);
      dispatchEventNextPage(next);
    }
    if (state === 'phone' && event.pointerId > 0)
      setTimeout(() => { event.target.blur(); }, 50);
  };

  const goToPreviousPage = (event) => {
    setHandlEnter(event.pointerId > 0 ? false : true);
    if (currentPage > 1) {
      const prev = currentPage - 1;
      setCurrentPage(prev);
      setNextB(false);
      setPrevB(true);
      dispatchEventPrevPage(prev);
    }
    if (state === 'phone' && event.pointerId > 0)
      setTimeout(() => { event.target.blur(); }, 50);
  };

  const changePage = (pageNumber) => {
    if (typeof pageNumber !== 'number') return;
    setCurrentPage(pageNumber);
    setPrevB(false);
    setNextB(false);
    dispatchEventCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    if (pages <= pageLimit) {
      return Array.from({ length: pages }, (_, i) => i + 1);
    }
    const sideSize = isMobile ? 3 : 4;
    const showLeftDots = currentPage > sideSize;
    const showRightDots = currentPage < pages - (sideSize - 1);

    if (!showLeftDots) {
      const leftRange = Array.from({ length: 4 }, (_, i) => i + 1);
      return [...leftRange, '...', pages];
    }
    if (!showRightDots) {
      const rightRange = Array.from(
        { length: sideSize },
        (_, i) => pages - sideSize + i + 1,
      );
      return [1, '...', ...rightRange];
    }
    if (showLeftDots && showRightDots) {
      const middleRange = isMobile
        ? [currentPage]
        : [currentPage - 1, currentPage, currentPage + 1];
      return [1, '...', ...middleRange, '...', pages];
    }
    return [];
  };

  useEffect(() => {
    const targetPage = Number(selectPage);
    if (targetPage > 0) {
      setCurrentPage(targetPage > pages ? 1 : targetPage);
    }
  }, [selectPage, pages]);

  return (
    <host shadowDom>
      {customProperties(shadow, darkMode)}
      <nav
        ref={paginationCont}
        className="pagination"
        role="navigation"
        aria-label={`Paginación ${currentPage} de ${pages}`}
      >
        <button
          ref={prevRef}
          onclick={(e) => goToPreviousPage(e)}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          aria-label="página anterior"
          disabled={currentPage === 1}
        >
          <dsh-icon color="current" icon-name="fa-chevron-left" size="s2"></dsh-icon>
          <span className="text-label" aria-hidden="true">Anterior</span>
        </button>

        <div className="pages-container">
          {getPaginationGroup().map((item, index) => {
            if (item === '...') {
              return (
                <span
                  key={`dots-${index}`}
                  className="dots"
                  aria-hidden="true"
                  role="presentation"
                >
                  ...
                </span>
              );
            }

            const isCurrent = currentPage === item;

            return (
              <button
                key={item}
                onclick={() => changePage(item)}
                className={`paginationItem ${isCurrent ? 'active' : ''}`}
                aria-label={`página ${item}`}
                aria-current={isCurrent ? 'page' : undefined}
              >
                <span>{item}</span>
              </button>
            );
          })}
        </div>

        <button
          ref={nextRef}
          onclick={(e) => goToNextPage(e)}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
          aria-label="página siguiente"
          disabled={currentPage === pages}
        >
          <span className="text-label" aria-hidden="true">Siguiente</span>
          <dsh-icon color="current" icon-name="fa-chevron-right" size="s2"></dsh-icon>
        </button>
      </nav>
    </host>
  );
}

PaginationComponent.props = componentProps;
PaginationComponent.styles = [styles];

export const Pagination = c(PaginationComponent);

if (!customElements.get('dsh-pagination'))
  customElements.define('dsh-pagination', Pagination);
