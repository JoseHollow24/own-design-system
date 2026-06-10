import { c } from 'atomico';
import { customProperties, styles } from './card-deal.styles';
import '@components/tag';
import '@components/button';
import '@components/icon';

function CardDealComponent({ variant, segment, tagText, tagColor, img, title, subtitle, description, textamount, amount, link, linkText, darkMode }) {
  return (
    <host shadowDom>
      {customProperties(segment, darkMode)}
      <div className={`card ${variant || ''}`}>
        {img && (
          <div className="card-image">
            <img src={img} alt={title} className="img" />
          </div>
        )}
        <div className="card-contents">
          {tagText && (
            <div className="card-contents__tag">
              <dsh-tag variant="news" subvariant={tagColor} label={tagText}></dsh-tag>
            </div>
          )}
          <div className="card-content__text">
            <div className="card-content__text-amounts">
              <span className="amount" innerHTML={amount}></span>
              <span className="text-amount" innerHTML={textamount}></span>
            </div>
            <div className="card-content__text-main">
              <span className="title">{title}</span>
              {subtitle && <span className="subtitle">{subtitle}</span>}
            </div>
          </div>
          {description && (
            <span className="card-content__text-description">{description}</span>
          )}
          {link && (
            <div className="content-footer">
              <a href={link}>
                <dsh-button variant="tertiary" color="blue">
                  {linkText}
                  <dsh-icon size="s2" color="blue" icon-name="fa-arrow-right"></dsh-icon>
                </dsh-button>
              </a>
            </div>
          )}
        </div>
      </div>
    </host>
  );
}

CardDealComponent.props = {
  variant: { type: String, value: 'default', reflect: true },
  segment: { type: String, value: 'default', reflect: true },
  img: { type: String, value: '', reflect: true },
  tagText: { type: String, reflect: true, value: '' },
  title: { type: String, value: '', reflect: true },
  subtitle: { type: String, value: '', reflect: true },
  description: { type: String, value: '', reflect: true },
  textamount: { type: String, value: '', reflect: true },
  amount: { type: String, value: '', reflect: true },
  link: { type: String, value: '', reflect: true },
  linkText: { type: String, value: '', reflect: true },
  tagColor: { type: String, value: 'blue', reflect: true },
  darkMode: { type: Boolean, reflect: true, value: false },
};

CardDealComponent.styles = [styles];

export const CardDeal = c(CardDealComponent);

if (!customElements.get('dsh-card-deal'))
  customElements.define('dsh-card-deal', CardDeal);
