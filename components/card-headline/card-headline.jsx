import { c } from 'atomico';
import { customProperties, styles } from './card-headline.styles';
import '@components/button';
import '@components/icon';

function CardHeadlineComponent({ img, amount, buttonText, buttonLink, descriptionFont, descriptionFontMobile, target, variant, segment }) {
  return (
    <host shadowDom>
      {customProperties(segment, descriptionFont, descriptionFontMobile)}
      <div className="card">
        <div className="card__header">
          <div className="card__segment">
            {img && (
              <div className="card__segment-img">
                <img src={img} alt="" />
              </div>
            )}
            <div className="card__segment-title">
              <slot name="title"></slot>
            </div>
          </div>
        </div>

        <div className="card__body">
          {variant === 'info' ? (
            <div className="card__body-content">
              <p className="body-content__amount">{amount}</p>
              <slot name="description"></slot>
            </div>
          ) : (
            <div className="card__body-content">
              <slot></slot>
            </div>
          )}
        </div>

        {variant === 'info' && buttonLink !== '' && buttonText !== '' && (
          <div className="card__footer">
            <dsh-button variant="tertiary" color="blue" href={buttonLink} target={target}>
              {buttonText}
              <dsh-icon size="s2" color="current" icon-name="fa-arrow-right"></dsh-icon>
            </dsh-button>
          </div>
        )}
      </div>
    </host>
  );
}

CardHeadlineComponent.props = {
  segment: { type: String, value: 'default', reflect: true },
  descriptionFont: { type: String, value: 'default', reflect: true },
  descriptionFontMobile: { type: String, value: 'default', reflect: true },
  variant: { type: String, value: 'info', reflect: true },
  img: { type: String, value: '', reflect: true },
  amount: { type: String, value: '', reflect: true },
  buttonText: { type: String, value: '', reflect: true },
  buttonLink: { type: String, value: '', reflect: true },
  target: { type: String, value: '_self', reflect: true },
};

CardHeadlineComponent.styles = [styles];

export const CardHeadline = c(CardHeadlineComponent);

if (!customElements.get('dsh-card-headline'))
  customElements.define('dsh-card-headline', CardHeadline);
