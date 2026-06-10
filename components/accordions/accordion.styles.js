import { html, css } from 'atomico';
import {
  DshColorSecondaryG0,
  DshColorPrimaryC1,
  DshSpace100,
  DshSpace200,
  DshSpace300,
} from '@tokens';
import { variantBgTokens, variantBorderLeftTokens } from './accordion.tokens';

export const cssLightDom = css`
  [slot='body'] {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
  }
  [slot='btn-left'] {
    padding: 0 16px;
  }
  [slot='btn-left'],
  [slot='btn-right'] {
    display: flex;
    align-items: center;
  }
  ul {
    margin-top: 0;
    padding-left: 30px;
  }
`;

export const customProperties = (variant, darkMode) => {
  const parts = (variant || '').split('-');
  const typeKey  = parts[0];
  const colorKey = parts[1];

  const tokenBg     = variantBgTokens[typeKey];
  const bg          = darkMode ? (tokenBg ? '#3a445f' : 'transparent') : (tokenBg || 'transparent');
  const borderLeft  = colorKey ? (variantBorderLeftTokens[colorKey] || DshColorPrimaryC1) : 'none';

  return html`
    <style>
      :host {
        --accordion-text: ${darkMode ? '#ffffff' : DshColorSecondaryG0};
        --height-body: 0;
        --margin-bottom: ${DshSpace300};
        --m-margin-bottom: ${DshSpace200};
        --align-items-header-right: center;
      }
      .content-accordion-item {
        background: ${bg};
        border-left: ${colorKey ? `8px solid ${borderLeft}` : 'none'};
        border-radius: ${DshSpace100};
      }
      .label {
        color: var(--accordion-text);
      }
    </style>
  `;
};

export const accordionItemStyles = css`
  :host {
    width: 100%;
    display: block;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .content-accordion-item {
    margin-bottom: var(--margin-bottom);
    padding: 16px;
  }

  :host([variant*='secundario']) .label {
    font-weight: 650;
  }

  .content-body {
    box-sizing: border-box;
    margin-bottom: 0;
    transition: 0.2s ease all;
    height: var(--height-body);
  }

  .margin-bottom-body ::slotted([slot='body']) {
    margin-bottom: 16px;
  }

  ::slotted([slot='header-right']) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: var(--align-items-header-right);
  }

  .content-body ::slotted([slot='body']) {
    background: #ffffff;
    border-radius: 8px;
    box-sizing: border-box;
    height: auto;
    display: block;
    margin: 0;
  }

  :host([variant*='primario']) ::slotted([slot='body']) {
    padding: 16px;
  }

  :host([variant*='secundario']) ::slotted([slot='body']) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    color: #3e4545;
    padding: 0;
  }

  :host([variant='transversal']) ::slotted([slot='body']) {
    padding: 16px 0;
  }

  @media only screen and (max-width: 47.95em) {
    .content-accordion-item {
      margin-bottom: var(--m-margin-bottom);
      padding: 12px 16px;
    }
  }
`;

export const accordionHeaderStyles = css`
  .content-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    min-height: 24px;
  }

  .content-header .label-check {
    padding-left: 32px;
  }

  .content-header-texts {
    width: 100%;
    margin-right: 16px;
    cursor: pointer;
  }

  .label {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
    padding-right: 16px;
    margin: 0;
    cursor: pointer;
    color: #3e4545;
  }

  :host([dark-mode]) .label {
    color: #e8eaed;
  }

  :host([dark-mode]) .sub-label {
    color: #e8eaed;
  }

  :host([variant*='secundario']) .label {
    font-weight: 650;
  }

  .label-altern {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  .content-arrow-header {
    margin-left: auto;
    align-self: flex-start;
    cursor: pointer;
  }

  .content-arrow-header svg {
    transition: all ease 0.2s;
    margin-top: 10px;
  }

  .content-arrow-header-active svg {
    transform: rotate(180deg);
  }

  .sub-label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 1.125rem;
    margin: 0;
    margin-top: 8px;
    cursor: pointer;
  }

  ::slotted([slot='header-right']) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: var(--align-items-header-right);
  }

  @media only screen and (max-width: 47.95em) {
    ::slotted([slot='header-right']) {
      display: none;
    }
    .label {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
    :host([variant*='secundario']) .label {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export const accordionsStyles = css`
  .accordion-groups {
    margin-bottom: -24px;
  }
  @media only screen and (max-width: 47.95em) {
    .accordion-groups {
      margin-bottom: -16px;
    }
  }
`;
