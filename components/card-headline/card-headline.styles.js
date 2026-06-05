import { html, css } from 'atomico';
import {
  DshSpace0,
  DshSpace100,
  DshSpace200,
  DshSpace300,
  DshSpace400,
  DshBorderRadius250,
  DshTextSizeLg,
  DshTextSizeXl,
  DshTextSize2xl,
  DshTextSize4xl,
  DshTextLineHeightXl,
  DshTextLineHeight2xl,
  DshTextLineHeight3xl,
  DshTextLineHeight5xl,
  DshTextWeight500,
  DshTextWeight650,
  DshColorMonoWhite,
  DshColorPrimaryC1,
  DshColorSecondaryG0,
  DshColorSecondaryG3,
  DshShadowM,
} from '@tokens';
import { bgTokens, fontTokens, lhTokens } from './card-headline.tokens';

export const customProperties = (segment, descriptionFont, descriptionFontMobile) => html`
  <style>
    :host {
      --text-align: 'center';
      --background-color: ${bgTokens[segment] || bgTokens.default};
      --font-size: ${fontTokens[descriptionFontMobile] || fontTokens.default};
      --line-height: ${lhTokens[descriptionFontMobile] || lhTokens.default};
    }
    @media only screen and (min-width: 768px) {
      :host {
        --font-size: ${fontTokens[descriptionFont] || fontTokens.default};
        --line-height: ${lhTokens[descriptionFont] || lhTokens.default};
      }
    }
  </style>
`;

export const styles = css`
  :host {
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    margin: var(--margin);
    position: relative;
  }

  ::slotted([slot='title']) {
    margin: ${DshSpace0};
    color: ${DshColorSecondaryG0};
    font-weight: ${DshTextWeight650};
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
  }

  h1, h2, h3, h4, h5, h6, p, span {
    margin: ${DshSpace0};
  }

  .card {
    border-radius: ${DshBorderRadius250};
    box-shadow: ${DshShadowM};
    height: 100%;
    background-color: ${DshColorMonoWhite};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: ${DshSpace200};
    min-height: 160px;
    width: 100%;
  }

  .card__header {
    border-radius: ${DshBorderRadius250} ${DshBorderRadius250} 0 0;
    padding: ${DshSpace200};
    min-height: 66px;
    box-sizing: border-box;
    margin-bottom: 30px;
    position: relative;
    background-color: var(--background-color);
  }

  .card__body {
    padding: 0 ${DshSpace200};
    margin-bottom: ${DshSpace100};
    background-color: ${DshColorMonoWhite};
  }

  .card__footer {
    padding: ${DshSpace0} ${DshSpace200};
    display: flex;
    justify-content: flex-end;
  }

  .card__segment-img {
    position: absolute;
    top: ${DshSpace200};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background: ${DshColorMonoWhite};
    box-shadow: ${DshShadowM};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__segment-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__segment-title {
    margin-left: calc(80px + ${DshSpace200});
    color: ${DshColorSecondaryG0};
  }

  .body-content__amount {
    color: ${DshColorPrimaryC1};
    font-weight: ${DshTextWeight650};
    display: block;
    font-size: ${DshTextSize2xl};
    line-height: ${DshTextLineHeight3xl};
    margin-bottom: ${DshSpace100};
  }

  .card__body-content ::slotted([slot='description']) {
    margin: ${DshSpace0};
    color: ${DshColorSecondaryG3};
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: ${DshTextWeight500};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    ::slotted([slot='title']) {
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
    }

    .card {
      min-height: 208px;
      padding-bottom: ${DshSpace300};
    }

    .card__header {
      padding: ${DshSpace300} ${DshSpace300} ${DshSpace200};
      margin-bottom: ${DshSpace400};
      min-height: 104px;
    }

    .card__body {
      padding: 0 ${DshSpace300};
      margin-bottom: ${DshSpace200};
      background-color: ${DshColorMonoWhite};
      min-height: 88px;
    }

    .card__footer {
      padding: 0 ${DshSpace300};
    }

    .card__segment-img {
      width: 124px;
      height: 124px;
    }

    .card__segment-title {
      margin-left: calc(124px + ${DshSpace300});
    }

    .body-content__amount {
      font-size: ${DshTextSize4xl};
      line-height: ${DshTextLineHeight5xl};
      font-weight: ${DshTextWeight650};
      margin-bottom: ${DshSpace200};
    }
  }
`;
