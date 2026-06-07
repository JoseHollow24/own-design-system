import { c, css, useRef, useEffect, useUpdate } from 'atomico';
import { useChildNodes } from '@atomico/hooks/use-child-nodes';
import { useSlot } from '@atomico/hooks/use-slot';
import { useCssLightDom } from '@atomico/hooks/use-css-light-dom';
import { accordionsStyles } from './accordion.styles';
import './accordion.item.jsx';

const cssLightDom = css`
  [slot='item'].last-item {
    --margin-bottom: 0px;
    --m-margin-bottom: 0px;
  }
`;

function accordionComponent() {
  const rawChildNodes = useChildNodes();
  const childNodes = rawChildNodes.filter(Boolean);

  useCssLightDom(cssLightDom);

  const ref = useRef();
  const children = useSlot(ref);
  const update = useUpdate();

  childNodes
    .filter((e) => e instanceof HTMLElement)
    .forEach((e) => {
      e.addEventListener('action', () => {
        openAccordion(e.index);
      });
    });

  useEffect(() => {
    children.forEach((child, i) => {
      child.index = i;
      if (i === children.length - 1) child.classList.add('last-item');
      if (children.length === 1) child.classList.remove('last-item');
    });
  });

  const openAccordion = (n) => {
    children.forEach((child, i) => {
      if (i !== n && child.open !== false) child.open = false;
    });
    update();
  };

  return (
    <host shadowDom>
      <div className="accordion-groups">
        <slot ref={ref} name="item"></slot>
      </div>
    </host>
  );
}

accordionComponent.styles = [accordionsStyles];

export const Accordions = c(accordionComponent);

if (!customElements.get('dsh-accordions'))
  customElements.define('dsh-accordions', Accordions);
