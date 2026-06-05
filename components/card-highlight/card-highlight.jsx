import { c, useRef, useEffect } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';
import { containerStyle } from './card-highlight.styles.js';

function CardHighlightsComponent() {
  const refSlotCards = useRef();
  const slotCards = useSlot(refSlotCards);

  useEffect(() => {
    if (slotCards.length > 0) {
      const total = slotCards.length;
      slotCards.forEach((slotCard, index) => {
        slotCard.type = index === 0 ? 'one' : 'informative';
        slotCard.index = (total - index).toString();
        slotCard.total = total;
      });
    }
  }, [slotCards]);

  return (
    <host shadowDom>
      <div className="cards-items">
        <slot ref={refSlotCards} name="tab" />
      </div>
    </host>
  );
}

CardHighlightsComponent.props = {
  positionDivide: {
    type: String,
    reflect: true,
  },
  position: {
    type: String,
    reflect: true,
  },
  active: {
    type: String,
    reflect: true,
  },
};

CardHighlightsComponent.styles = [containerStyle];

export const CardHighlights = c(CardHighlightsComponent);
