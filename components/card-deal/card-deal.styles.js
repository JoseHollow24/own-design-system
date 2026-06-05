import { html, css } from 'atomico';
import {
  DshSpace0,
  DshSpace50,
  DshSpace100,
  DshSpace200,
  DshSpace300,
  DshBorderRadius200,
  DshShadowM,
  DshTextSizeSm,
  DshTextSizeBase,
  DshTextSizeLg,
  DshTextSizeXl,
  DshTextSize2xl,
  DshTextSize3xl,
  DshTextSize4xl,
  DshTextLineHeightBase,
  DshTextLineHeightLg,
  DshTextLineHeightXl,
  DshTextLineHeight2xl,
  DshTextLineHeight3xl,
  DshTextLineHeight4xl,
  DshTextWeight500,
  DshTextWeight650,
  DshTextWeight700,
  DshColorMonoWhite,
  DshColorPrimaryC1,
  DshColorSecondaryG0,
  DshColorSecondaryG2,
  DshColorSecondaryG3,
} from '@tokens';
import { tokens } from './card-deal.tokens';

export const customProperties = (segment) => html`
  <style>
    :host {
      --margin-bottom: 0;
      --margin-top: 0;
      --margin: 0;
      max-width: 735px;
      min-width: 288px;
    }
    .card-image::after {
      content: '';
      position: absolute;
      top: ${DshSpace0};
      left: ${DshSpace0};
      width: 100%;
      height: 100%;
      background: ${tokens[segment] || tokens.default};
      pointer-events: none;
      z-index: 200;
    }
    @media only screen and (min-width: 1024px) {
      :host {
        min-width: 398px;
        max-width: 654px;
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
    height: 100%;
  }
  .card {
    width: 100%;
    border-radius: ${DshBorderRadius200};
    box-shadow: ${DshShadowM};
    background-color: ${DshColorMonoWhite};
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .card.default {
    display: grid;
    grid-template-columns: 90px auto;
  }
  .card-contents {
    padding: ${DshSpace200};
    display: flex;
    gap: ${DshSpace100};
    flex-direction: column;
    flex-grow: 1;
  }
  .card-contents__tag {
    position: absolute;
    top: ${DshSpace300};
  }
  .card-content__text-amounts {
    color: ${DshColorPrimaryC1};
    font-weight: ${DshTextWeight500};
    font-size: ${DshTextSizeBase};
    line-height: ${DshTextLineHeightLg};
  }
  .card-content__text-amounts .amount {
    display: inline-block;
    font-size: ${DshTextSize3xl};
    line-height: ${DshTextLineHeight3xl};
    margin-right: ${DshSpace100};
    font-weight: ${DshTextWeight650};
  }
  .card-content__text-description {
    display: block;
    font-size: ${DshTextSizeSm};
    line-height: ${DshTextLineHeightBase};
    color: ${DshColorSecondaryG3};
  }
  .card-content__text-main .title {
    font-size: ${DshTextSizeXl};
    line-height: ${DshTextLineHeight2xl};
    font-weight: ${DshTextWeight650};
    color: ${DshColorSecondaryG0};
    display: block;
  }
  .card-content__text-main .subtitle {
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    color: ${DshColorSecondaryG2};
    display: block;
  }
  .card-image {
    display: flex;
    position: relative;
    height: 184px;
  }
  .card-image img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  .default .card-contents__tag {
    position: initial;
  }
  .default .card-content__text-amounts {
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
  }
  .default .card-content__text-amounts .amount {
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    margin-right: ${DshSpace50};
  }
  .default .card-content__text-description {
    display: none;
  }
  .default .card-content__text-main .title {
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
  }
  .default .card-content__text-main .subtitle {
    font-size: ${DshTextSizeBase};
    line-height: ${DshTextLineHeightLg};
  }
  .default .card-contents {
    gap: ${DshSpace100};
    padding: ${DshSpace100} ${DshSpace200};
  }
  .default .card-image {
    height: inherit;
    overflow: hidden;
    position: relative;
  }
  .default .card-image img {
    height: 100%;
    width: auto;
  }
  .card-content__text {
    display: grid;
    gap: ${DshSpace100};
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .featured-discount .card-content__text {
    grid-template-columns: auto auto;
    grid-auto-flow: column;
  }
  .featured-discount .card-content__text-amounts {
    display: flex;
    flex-direction: column-reverse;
    text-align: end;
    grid-column-start: 2;
    grid-column-end: 2;
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    justify-content: flex-end;
  }
  .featured-discount sup {
    font-size: 44px;
    line-height: normal;
  }
  .content-footer {
    display: flex;
    margin-top: auto;
    justify-content: end;
  }
  .featured-discount .card-content__text-amounts .amount {
    font-size: ${DshTextSize4xl};
    line-height: ${DshTextLineHeight4xl};
    margin: ${DshSpace0};
  }
  .default .card-content__text {
    gap: ${DshSpace0};
  }
  @media only screen and (min-width: 1024px) {
    .card.default {
      grid-template-columns: 192px auto;
    }
    .card-contents {
      padding: ${DshSpace300};
      gap: ${DshSpace200};
    }
    .card-content__text-amounts {
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
      font-weight: ${DshTextWeight500};
    }
    .card-content__text-amounts .amount {
      font-size: 72px;
      line-height: ${DshTextLineHeight4xl};
      font-weight: ${DshTextWeight650};
    }
    .card-content__text-main .title {
      font-size: ${DshTextSize2xl};
      line-height: ${DshTextLineHeight3xl};
    }
    .card-content__text-description {
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
    }
    .card-content__text-main .subtitle {
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
    }
    .card-image {
      display: block;
      height: 272px;
      position: relative;
      overflow: hidden;
    }
    .default .card-content__text-amounts {
      font-weight: ${DshTextWeight500};
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
    }
    .default .card-content__text-amounts strong {
      font-weight: ${DshTextWeight650};
    }
    .card-content__text-amounts .amount {
      font-size: 72px;
      line-height: ${DshTextLineHeight4xl};
    }
    .default .card-content__text-amounts .amount {
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
    }
    .featured-discount .card-content__text-amounts .amount {
      font-size: 88px;
      line-height: 76px;
    }
    .default .card-content__text-main .title {
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
    }
    .default .card-content__text-main .subtitle {
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
    }
    .featured-discount sup {
      font-size: 58px;
      line-height: 44px;
      font-weight: ${DshTextWeight700};
    }
    .featured-discount .card-content__text {
      grid-template-columns: auto auto;
    }
    .card-content__text {
      display: grid;
      gap: ${DshSpace200};
    }
    .default .card-contents {
      padding: ${DshSpace200} ${DshSpace300};
    }
  }
`;
