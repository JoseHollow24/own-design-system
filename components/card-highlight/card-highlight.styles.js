import { css, html } from 'atomico';
import {
  DshSpace0,
  DshSpace100,
  DshSpace200,
  DshBorderRadius0,
  DshBorderRadius100,
  DshBorderRadius200,
  DshTextSizeLg,
  DshTextSizeXl,
  DshTextLineHeightXl,
  DshTextLineHeight2xl,
  DshTextFamilyRawsonPro,
  DshTextWeight400,
  DshTextWeight500,
  DshTextWeight600,
} from '@tokens';
import { bgTokens, iconBgTokens } from './card-highlight.tokens.js';

export const customProperties = (color, index) => {
  return html`
    <style>
      :host {
        --zIndex: ${index};
        --font-family: ${DshTextFamilyRawsonPro};
        --background: ${bgTokens[color]};
        --background-icon: ${iconBgTokens[color]};
        --weight-bold: ${DshTextWeight600};
        --weight-regular: ${DshTextWeight400};
        --weight-medium: ${DshTextWeight500};
        --margin: 0;
      }
    </style>
  `;
};

export const itemStyle = css`
  :host {
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight400};
    display: flex;
    align-items: stretch;
    flex: 1 1 0;
  }
  .icon {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${DshSpace100} ${DshSpace200} ${DshSpace100} ${DshSpace0};
  }
  .text {
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight400};
    font-size: ${DshTextSizeXl};
    line-height: ${DshTextLineHeight2xl};
    width: 100%;
  }
  .informative,
  .one {
    display: flex;
    background: var(--background);
    z-index: var(--zIndex);
    align-items: center;
    justify-content: center;
    border-radius: ${DshBorderRadius200} ${DshBorderRadius200} 200px ${DshBorderRadius200};
    width: 100%;
  }
  .informative {
    margin-left: -100%;
    padding: ${DshSpace0} 48px ${DshSpace0} calc(100% + ${DshSpace0});
  }
  .one {
    padding: ${DshSpace0} 48px ${DshSpace0} ${DshSpace0};
    margin-left: ${DshSpace0};
  }

  @media (max-width: 768px) {
    .one {
      border-radius: ${DshBorderRadius100} ${DshBorderRadius100} 64px ${DshBorderRadius100};
    }
    .radius-one {
      border-radius: ${DshBorderRadius100} ${DshBorderRadius100} 64px ${DshBorderRadius0};
    }
    .informative,
    .one {
      margin-left: ${DshSpace0};
      flex: 1 1 100%;
      justify-content: flex-start;
      padding-left: ${DshSpace0};
      padding-right: ${DshSpace0};
    }
    .informative {
      border-radius: ${DshBorderRadius0} ${DshBorderRadius0} 64px ${DshBorderRadius100};
      padding-top: 72px;
      margin-top: -55px;
    }
    .icon {
      justify-content: start;
      align-items: start;
      margin: ${DshSpace0} ${DshSpace100} ${DshSpace0} ${DshSpace0};
    }
    .text {
      font-size: ${DshTextSizeLg};
    }
  }
`;

export const cssLightDomD = css`
  [slot='icon'] svg path {
    fill: var(--background-icon);
  }
  [slot='icon'] {
    display: flex;
  }
  [slot='icon'] dsh-icon {
    --color: var(--background-icon);
    --icon-size: 48px;
  }
  [slot='icon'] * {
    --color: var(--background-icon);
    --icon-size: 48px;
  }
  [slot='icon'] svg {
    width: 48px;
    height: 48px;
  }
  [slot='label'] {
    font-family: var(--font-family);
    font-weight: var(--weight-medium);
    font-size: ${DshTextSizeXl};
    line-height: ${DshTextLineHeight2xl};
  }
`;

export const cssLightDomM = css`
  [slot='label'] {
    font-family: var(--font-family);
    font-weight: var(--weight-medium);
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
  }
  [slot='icon'] {
    display: flex;
  }
  [slot='icon'] svg {
    width: 32px;
    height: 32px;
  }
  [slot='icon'] svg path {
    fill: var(--background-icon);
  }
  [slot='icon'] dsh-icon {
    --icon-size: 32px;
    --color: var(--background-icon);
  }
  [slot='icon'] * {
    --icon-size: 32px;
    --color: var(--background-icon);
  }
`;

export const containerStyle = css`
  :host {
    display: block;
    margin: var(--margin);
  }
  .cards-items {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    min-height: 48px;
    gap: ${DshSpace200};
  }

  @media only screen and (max-width: 768px) {
    .cards-items {
      flex-direction: column;
      gap: ${DshSpace0};
    }
  }
`;
