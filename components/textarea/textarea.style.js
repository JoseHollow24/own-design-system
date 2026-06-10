import { html, css } from 'atomico';
import {
  DshTextFamilyRawsonPro,
  DshSpace0,
  DshColorMonoWhite,
  DshColorMonoBlack,
  DshColorSecondaryG1,
  DshColorSecondaryG3,
  DshColorSecondaryX1,
  DshTextWeight400,
  DshTextWeight500,
  DshTextLineHeightLg,
  DshColorPrimaryC1,
  DshColorSecondaryX6,
  DshColorSecondaryX4,
  DshTextSizeBase,
} from '@tokens';
import { stateBorderTokens, stateCounterTokens } from './textarea.tokens';

export const customProperties = (state, disabled, rows, darkMode) => html`
  <style>
    :host {
      --font-family: ${DshTextFamilyRawsonPro};
      --font-weight-regular: ${DshTextWeight400};
      --font-weight-medium: ${DshTextWeight500};
      --border-color: ${disabled ? DshColorSecondaryX4 : stateBorderTokens[state]};
      --color: ${disabled ? DshColorSecondaryG3 : (darkMode ? '#e8eaed' : DshColorSecondaryG1)};
      --color-footer: ${disabled ? DshColorSecondaryG3 : (darkMode ? '#9aa0ab' : DshColorSecondaryG1)};
      --color-footer-counter: ${disabled ? DshColorSecondaryX4 : stateCounterTokens[state]};
      --color-title: ${disabled ? DshColorSecondaryG3 : (darkMode ? '#e8eaed' : DshColorMonoBlack)};
      --background: ${disabled ? DshColorSecondaryX6 : (darkMode ? '#2d3449' : DshColorMonoWhite)};
      --border-color-hover: ${DshColorSecondaryX1};
      --border-color-active: ${DshColorPrimaryC1};
      --margin: 0;
      --rows: ${rows};
    }
  </style>
`;

export const mainStyles = [
  css`
    :host {
      display: flex;
      margin: var(--margin);
    }
    :host([disabled]) {
      cursor: not-allowed;
    }
    .body-textarea textarea:disabled {
      pointer-events: none;
      overflow: hidden;
    }
    .content-textarea {
      font-family: var(--font-family);
      font-weight: var(--font-weight-regular);
      height: 100%;
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      padding: ${DshSpace0};
    }
    .content-textarea:hover textarea {
      outline: 1px solid var(--border-color-hover);
    }
    .content-textarea:hover .outfocus .cover {
      border-bottom: 1px solid var(--border-color-hover);
    }
    .content-textarea:hover textarea:disabled {
      outline: 1px solid var(--border-color);
    }
    .body-textarea {
      flex: 1 1 auto;
      display: flex;
      border-radius: 8px;
      position: relative;
      overflow: visible;
      padding-top: 28px;
      padding-bottom: 4px;
    }
    .body-textarea textarea {
      font-weight: var(--font-weight-regular);
      border: none;
      width: 100%;
      padding: 12px 16px;
      border-radius: 8px;
      resize: none;
      background-color: transparent;
      font-family: var(--font-family);
      font-size: 18px;
      color: var(--color);
      overflow-wrap: break-word;
      height: auto;
      line-height: 24px;
      background: var(--background);
      outline: 1px solid var(--border-color);
      outline-offset: -1px;
      display: block;
      transition: 0s;
    }
    .outfocus .cover {
      background: var(--background);
      width: calc(100% - 24px);
      height: 10px;
      position: absolute;
      bottom: 4px;
      left: 12px;
      border-bottom: 1px solid var(--border-color);
    }
    .outfocus textarea {
      display: -webkit-box !important;
      -webkit-line-clamp: var(--rows);
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .outfocus:hover textarea {
      overflow-y: auto !important;
      text-overflow: ellipsis;
      display: block !important;
    }
    .outfocus:hover .cover { display: none; }
    .outfocus:hover textarea:disabled {
      display: -webkit-box !important;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
    .content-textarea:hover .outfocus .disabled {
      display: block;
      border-bottom: 1px solid var(--border-color) !important;
    }
    .body-textarea textarea::placeholder {
      font-size: 18px;
      font-family: var(--font-family);
      font-weight: var(--font-weight-regular);
      color: var(--color);
    }
    .body-textarea textarea::-webkit-scrollbar { width: 8px; }
    .body-textarea textarea::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 4px 8px;
    }
    .body-textarea textarea::-webkit-scrollbar-thumb {
      background-color: #a8b3b7;
      border-radius: 100px;
    }
    .body-textarea .label {
      font-size: 16px;
      position: absolute;
      top: ${DshSpace0};
      left: ${DshSpace0};
      width: calc(100% - 16px);
    }
    .body-textarea textarea:focus-within,
    .body-textarea textarea:active {
      outline: 3px solid var(--border-color-active);
      outline-offset: -1px;
    }
    .body-textarea .label label {
      font-weight: var(--font-weight-medium);
      line-height: 20px;
      color: var(--color-title);
    }
    .footer-textarea {
      font-size: ${DshTextSizeBase};
      margin-top: ${DshSpace0};
      display: flex;
      justify-content: space-between;
    }
    .footer-textarea .helper { margin-right: ${DshSpace0}; text-align: left; }
    .footer-textarea .helper,
    .footer-textarea .charcounter {
      font-style: normal;
      font-weight: normal;
      line-height: ${DshTextLineHeightLg};
      color: var(--color-footer);
      margin-left: ${DshSpace0};
      font-weight: var(--font-weight-regular);
      min-width: 80px;
    }
    .footer-textarea .charcounter {
      color: var(--color-footer-counter);
      text-align: right;
    }
  `,
];
