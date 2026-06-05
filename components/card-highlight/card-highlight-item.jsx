import { c, useEvent, useRef } from 'atomico';
import { useCssLightDom } from '@atomico/hooks/use-css-light-dom';
import { customProperties, itemStyle, cssLightDomD, cssLightDomM } from './card-highlight.styles.js';

function CardHighlightsItemComponent({ color, index, type, total }) {
  useCssLightDom(window.innerWidth > 767 ? cssLightDomD : cssLightDomM);

  const dispatchSelectTab = useEvent('SelectTab', {
    bubbles: true,
    composed: true,
  });

  return (
    <host shadowDom>
      {customProperties(color, index)}
      <div className={`${type} ${total === 2 ? 'radius-one' : ''}`}>
        <div className="icon">
          <slot name="icon" />
        </div>
        <div className="text">
          <slot name="label" />
        </div>
      </div>
    </host>
  );
}

CardHighlightsItemComponent.props = {
  color: {
    type: String,
    reflect: true,
    value: 'a6',
  },
  index: {
    type: String,
    value: '',
    reflect: true,
  },
  type: {
    type: String,
    value: '',
    reflect: true,
  },
  total: {
    type: Number,
    value: 1,
    reflect: true,
  },
};

CardHighlightsItemComponent.styles = [itemStyle];

export const CardHighlightsItem = c(CardHighlightsItemComponent);
