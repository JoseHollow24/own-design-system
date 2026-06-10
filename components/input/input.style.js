import { html, css } from 'atomico';
import {
  DshSpace0,
  DshSpace50,
  DshSpace100,
  DshBorderRadius100,
  DshTextSizeBase,
  DshTextSizeLg,
  DshTextLineHeightLg,
  DshTextLineHeightXl,
  DshSpaceN400,
  DshTextWeight500,
  DshTextFamilyRawsonPro,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorMonoBlack,
  DshColorMonoWhite,
  DshColorSecondaryG1,
  DshColorSecondaryG3,
  DshColorSecondaryG6,
  DshColorSecondaryX3,
  DshColorSecondaryX4,
  DshColorSecondaryX6,
  DshColorPrimaryC0,
  DshStrokeWeightS,
  DshStrokeWeightM,
  DshTextWeight400,
  DshShadowS,
} from '@tokens';
import { variantBorderTokens, variantBgTokens } from './input.tokens';

export const customProperties = (variant, darkMode) => {
  const variantName = variant === '' ? 'default' : variant;
  return html`
    <style>
      :host {
        --font-family: ${DshTextFamilyRawsonPro};
        --border-radius: ${DshBorderRadius100};
        --color: ${variantBgTokens[variantName]};
        --color-focus: ${DshColorPrimaryC2};
        --color-placeholder-variant: ${DshColorMonoBlack};
        --color-background-disabled: ${darkMode ? '#3a4050' : DshColorSecondaryX6};
        --border-color-hover-active: ${DshColorPrimaryC0};
        --color-g-1: ${DshColorPrimaryC0};
        --border: ${DshStrokeWeightS} solid ${darkMode ? '#3a4050' : DshColorPrimaryC1};
        --border-variant: ${DshStrokeWeightM} solid ${variantBorderTokens[variantName]};
        --margin: ${DshSpace0};
        --input-bg: ${darkMode ? '#2d3449' : DshColorMonoWhite};
        --input-text: ${darkMode ? '#e8eaed' : DshColorSecondaryG1};
        --input-title: ${darkMode ? '#e8eaed' : DshColorMonoBlack};
        --input-label: ${darkMode ? '#9aa0ab' : DshColorSecondaryG3};
        --input-placeholder: ${darkMode ? '#6b7280' : DshColorSecondaryG3};
        --input-hover-bg: ${darkMode ? '#3a4462' : DshColorSecondaryG6};
      }
    </style>
  `;
};

export const styles = [
  css`
    :host {
      display: flex;
      margin: var(--margin);
      font-family: var(--font-family);
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: ${DshSpace0};
    }
    input[type=number] { -moz-appearance: textfield; }
    .main { width: 100%; height: fit-content; }
    .label {
      font-family: var(--font-family);
      color: var(--input-title);
      font-weight: ${DshTextWeight500};
      line-height: ${DshTextLineHeightLg};
      font-size: ${DshTextSizeBase};
    }
    .input-group {
      gap: 4px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: ${DshSpace100} ${DshSpace0} ${DshSpace0} ${DshSpace0};
      outline: var(--border);
      border-radius: var(--border-radius);
      height: 48px;
      box-shadow: ${DshShadowS};
      background: var(--input-bg);
    }
    :host([variant="success"]) .input-group,
    :host([variant="error"]) .input-group {
      outline: var(--border-variant);
    }
    :host([variant="success"]) .disabled,
    :host([variant="error"]) .disabled {
      border: ${DshStrokeWeightS} solid ${DshColorSecondaryX4};
    }
    .input-group-prepend {
      width: 48px;
      height: 100%;
      order: 0;
      z-index: 1;
    }
    .input-group-append {
      width: 48px;
      height: 100%;
      display: flex;
      border-radius: var(--border-radius);
      order: 2;
    }
    .form-control {
      display: block;
      width: 100%;
      height: auto;
      font-family: var(--font-family);
      font-size: ${DshTextSizeLg};
      font-weight: ${DshSpaceN400};
      line-height: ${DshTextLineHeightXl};
      color: var(--input-text);
      background-color: var(--input-bg);
      padding: 11px 16px;
      border: none;
      order: 1;
    }
    :host([variant="error"]) .form-control,
    :host([variant="success"]) .form-control {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .input-group-prepend ~ .form-control { padding-left: ${DshSpace0}; }
    .input-group > .form-control {
      position: relative;
      flex: 1 1 auto;
      width: 1%;
      margin-bottom: ${DshSpace0};
    }
    .input-group > .form-control:not(:focus) { border-radius: var(--border-radius); }
    .input-group-text {
      width: 48px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${DshSpace0};
      margin: ${DshSpace0};
      text-align: center;
      white-space: nowrap;
      border: none;
      border-radius: var(--border-radius);
      background: transparent;
    }
    .button-actionable:hover { background: var(--input-hover-bg); }
    :host([disabled]) .button-actionable:hover { background: var(--color-background-disabled); }
    .input-group:hover:not(.disabled) { outline: ${DshStrokeWeightS} solid var(--border-color-hover-active); }
    .input-group:active:not(.disabled) { outline: ${DshStrokeWeightS} solid var(--border-color-hover-active); }
    .form-control::placeholder { color: var(--input-placeholder); }
    .form-control:active { outline: none; border-radius: var(--border-radius); }
    .form-control:focus::placeholder { color: transparent; }
    :host([clearable]) button:focus,
    .form-control:focus:not(:active) {
      outline: 3px solid var(--color-focus);
      border-radius: var(--border-radius);
      z-index: 1;
    }
    :host([disabled]) button:focus { outline: none; box-shadow: none; }
    .icon { position: absolute; z-index: 90; }
    .icon ~ .form-control { padding-left: 52px; }
    .end-clear-spacing { padding-right: ${DshSpace0}; }
    .end-icon-spacing { padding-right: 52px; margin-right: ${DshSpace0}; }
    .end-icon-spacing:focus { padding-right: ${DshSpace0}; margin-right: ${DshSpace0}; }
    .disabled > .form-control {
      background: var(--color-background-disabled);
      color: ${DshColorSecondaryG3};
    }
    .disabled > .form-control::placeholder { color: ${DshColorSecondaryG3}; }
    .disabled path { fill: ${DshColorSecondaryX3}; }
    .help-message {
      font-family: var(--font-family);
      color: var(--color);
      font-size: ${DshTextSizeBase};
      font-weight: ${DshTextWeight400};
      white-space: wrap;
      word-wrap: break-word;
      line-height: ${DshTextLineHeightLg};
      padding: ${DshSpace50} ${DshSpace0} ${DshSpace0};
    }
    :host([disabled]) .help-message,
    :host([disabled]) .label {
      color: ${DshColorSecondaryX3};
    }
    button { background: var(--input-bg); cursor: pointer; }
    :host([disabled]) button { background: var(--color-background-disabled); cursor: auto; }
    .disabled {
      background: var(--color-background-disabled);
      color: ${DshColorSecondaryG3};
      outline: ${DshStrokeWeightS} solid ${DshColorSecondaryX4};
    }
    .input-error-success {
      width: 48px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      order: 2;
      position: absolute;
      z-index: 1;
      right: ${DshSpace0};
      background: var(--input-bg);
      border-radius: var(--border-radius);
    }
    :host([variant="error"]) .form-control::placeholder { color: var(--color-placeholder-variant); }
    :host([variant="success"]) .form-control::placeholder { color: var(--color-placeholder-variant); }
    :host([variant="error"]) .input-group:hover:not(.disabled) { outline: var(--border-variant); }
    :host([variant="success"]) .input-group:hover:not(.disabled) { outline: var(--border-variant); }
    .input-family { display: flex; flex-direction: row; }
  `,
];

export const cssLightDomDisabled = css`
  [slot="icon"] { width: fit-content; height: fit-content; }
  [slot="icon"] svg { width: 24px; height: 24px; }
  [slot="icon"] svg path { fill: ${DshColorSecondaryX3}; }
  [slot="icon"] > * { --icon-size: 24px; --color: ${DshColorSecondaryX3}; }
`;

export const cssLightDom = css`
  :host:focus-visible { border: none; }
  :host:focus { outline: none; }
  [slot="icon"] { width: fit-content; height: fit-content; }
  [slot="icon"] svg { width: 24px; height: 24px; }
  [slot="icon"] svg path { fill: ${DshColorSecondaryG1}; }
  [slot="icon"] > * { --icon-size: 24px; --color: ${DshColorSecondaryG1}; }
`;
