import { html, css } from 'atomico';
import {
  DshTextFamilyRawsonPro,
  DshBorderRadius0,
  DshBorderRadius100,
  DshBorderRadius400,
  DshSpace0,
  DshSpace50,
  DshSpace100,
  DshSpace200,
  DshTextSizeSm,
  DshTextSizeBase,
  DshTextSizeLg,
  DshTextLineHeightBase,
  DshTextLineHeightLg,
  DshTextLineHeightXl,
  DshTextWeight500,
  DshTextWeight650,
  DshColorComplementaryT1,
  DshColorComplementaryV1,
  DshColorComplementaryV6,
  DshColorComplementaryT6,
  DshColorMonoWhite,
  DshColorComplementaryN5,
} from '@tokens';
import { variantTextTokens, variantBgTokens, variantBorderTokens } from './tag.tokens';

const colorTokensArr = {
  T5: '#90ddca',
  V5: '#89e9b0',
  R5: '#ffb5af',
  N5: `${DshColorComplementaryN5}`,
  L5: '#ea95f1',
};

const customProperties = (variant, subvariant, color, darkMode) => {
  let tagBackground;
  if (color) {
    const key = color.toUpperCase() + '5';
    tagBackground = colorTokensArr[key];
  }

  return html`
    <style>
      :host {
        --color: ${variant === 'general' ? variantTextTokens[variant] : variantTextTokens[subvariant]};
        --background-color: ${variant === 'general' ? variantBgTokens[variant] : variantBgTokens[subvariant]};
        --border-color: ${variant === 'general' ? variantBorderTokens[variant] : variantBorderTokens[subvariant]};
        --border-color-hover: ${DshColorComplementaryT1};
        --background-color-hover: ${DshColorComplementaryV6};
        --background-color-pressed: ${DshColorComplementaryT1};
        --background-color-pressed-hover: ${DshColorComplementaryV1};
        --margin: ${DshSpace0};
        --label-color: ${darkMode ? '#e8eaed' : 'inherit'};
      }
      .menu {
        border-radius: ${DshBorderRadius100} ${DshBorderRadius0};
        padding: ${DshSpace50} !important;
        min-height: 24px;
        background-color: ${color ? `${tagBackground}` : `${DshColorComplementaryN5}`};
      }
    </style>
  `;
};

const styles = [
  css`
    :host {
      display: inline-grid;
      margin: var(--margin);
      width: max-content;
      max-width: 288px;
    }
    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${DshSpace50} ${DshSpace100};
      gap: ${DshSpace100};
      box-sizing: border-box;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    /* Ocultar slot vacío para evitar espacio extra */
    slot:not([name]):empty,
    slot[name="icon-tag"]:not(:has(*)) {
      display: none;
    }
    ::slotted(*) {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }
    .informative, .news, .interactive, .general {
      color: var(--color);
      background-color: var(--background-color);
      outline: 1px solid var(--border-color);
      outline-offset: -1px;
    }
    .label {
      font-family: ${DshTextFamilyRawsonPro};
      font-weight: ${DshTextWeight500};
      font-size: ${DshTextSizeBase};
      line-height: ${DshTextLineHeightLg};
    }
    .menu .label {
      font-family: ${DshTextFamilyRawsonPro};
      font-weight: ${DshTextWeight650};
      font-size: ${DshTextSizeSm};
      line-height: ${DshTextLineHeightBase};
    }
    .interactive {
      padding: ${DshSpace100} ${DshSpace100} ${DshSpace100} ${DshSpace200};
      height: 40px;
      margin: ${DshSpace50};
    }
    .informative {
      border-radius: ${DshBorderRadius100};
      height: 32px;
    }
    .interactive {
      border-radius: ${DshBorderRadius400};
    }
    .news {
      border-radius: 10px ${DshBorderRadius0};
      padding: ${DshSpace50} ${DshSpace200};
      min-height: 28px;
    }
    .general {
      border-radius: ${DshBorderRadius100};
      height: 32px;
    }
    .grp-icon { height: 24px; }
    .interactive > div { display: flex; }
    .interactive span {
      margin-right: ${DshSpace100};
      text-align: left;
      font-size: ${DshTextSizeLg};
      font-weight: ${DshTextWeight500};
      line-height: ${DshTextLineHeightXl};
    }
    .interactive:hover {
      cursor: pointer;
      outline: 1px solid var(--border-color-hover);
      outline-offset: -1px;
      background-color: var(--background-color-hover);
    }
    .pressed {
      background-color: var(--background-color-pressed);
      border-color: var(--background-color-pressed);
      color: ${DshColorMonoWhite};
    }
    .pressed:hover {
      cursor: pointer;
      border-color: var(--background-color-pressed-hover);
      background-color: var(--background-color-pressed-hover);
    }
  `,
];

export { customProperties, styles };
