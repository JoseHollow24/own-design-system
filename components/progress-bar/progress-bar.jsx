import { c } from 'atomico';
import { useChildNodes } from '@atomico/hooks/use-child-nodes';

import componentProps from './progress-bar.props';
import { itemTokens } from './progress-bar.tokens';
import fixedStyles from './progress-bar.styles';

function ProgressBarComponent({
  optionsData,
  minValue,
  maxValue,
  labelTopStart,
  labelTopEnd,
  labelBottomStart,
  labelBottomEnd,
}) {
  const rawChildNodes = useChildNodes();
  const childNodes = rawChildNodes;

  const options = JSON.parse(optionsData || '[]');
  const range = Number(maxValue) - Number(minValue);

  const setWidthValue = (option) => ({
    ...option,
    width: `${(Number(option.value) / range) * 100}%`,
  });

  const setColor = (option) => ({
    ...option,
    color: itemTokens.color[option.color] || itemTokens.color.default,
  });

  const progressBars = options.map(setWidthValue).map(setColor);

  const slotTitle = childNodes
    .filter((e) => e instanceof HTMLElement)
    .filter((e) => e.slot === 'title');

  const showTitle = slotTitle.length > 0;

  return (
    <host shadowDom>
      <div className="progress-bar">
        {showTitle && <slot name="title" className="progress-bar__title" />}
        <div className="progress-bar__legend-container">
          {progressBars.map(
            (item, index) =>
              item.label && (
                <div className="progress-bar__legend" key={index}>
                  <div>
                    <div
                      className="progress-bar__legend-circle"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  <span>{item.label}</span>
                </div>
              ),
          )}
        </div>
        <div className="progress-bar__label-container-top">
          <span>{labelTopStart}</span>
          <span>{labelTopEnd}</span>
        </div>
        <div className="progress-bar__bar-container">
          {progressBars.map((item, index) => (
            <div
              key={index}
              className="progress-bar__bar"
              role="progressbar"
              style={{
                width: item.width,
                backgroundColor: item.color,
                transition: 'width 1s ease-in-out',
              }}
              aria-valuenow={item.value}
              aria-valuemin={minValue}
              aria-valuemax={maxValue}
            />
          ))}
        </div>
        <div className="progress-bar__label-container-bottom">
          <span>{labelBottomStart}</span>
          <span>{labelBottomEnd}</span>
        </div>
      </div>
    </host>
  );
}

ProgressBarComponent.props = componentProps;
ProgressBarComponent.styles = [fixedStyles];

const ProgressBar = c(ProgressBarComponent);

if (!customElements.get('dsh-progress-bar'))
  customElements.define('dsh-progress-bar', ProgressBar);

export { ProgressBar };
export default ProgressBar;
