import { html, css } from 'atomico';
import {
  DshColorSecondaryG0,
  DshColorPrimaryC1,
  DshSpace0,
  DshSpace100,
  DshSpace200,
  DshSpace300,
} from '@tokens';
import { getTokenBg, getTokenBorderLeft, getTokenBorder, getTokenBorderBottom } from './accordion.tokens';

export const customProperties = (variant, type) => {
  const other = type === 'secundario' || variant === 'transversal';
  return html`
    <style>
      :host {
        --margin: ${DshSpace0};
        --height-body: 0;
        --margin-bottom: ${DshSpace300};
        --m-margin-bottom: ${DshSpace200};
        --align-items-header-right: center;
      }
      .content-accordion-item {
        background: ${getTokenBg(type, variant)};
        border-left: 8px solid ${getTokenBorderLeft(variant, type)};
        border-top: ${other ? '1px' : '0'} solid ${getTokenBorder(type, variant)};
        border-bottom: ${other ? '1px' : '0'} solid ${getTokenBorderBottom(type, variant)};
        border-right: 1px solid ${getTokenBorder(type, variant)};
        border-radius: ${type === 'borderbottom' || variant === 'transversal' ? DshSpace0 : DshSpace100};
        border-style: ${type === 'borderbottom' || variant === 'transversal' ? 'dashed' : 'solid'};
      }
      .label {
        color: ${type === 'borderbottom' || variant === 'transversal' ? DshColorPrimaryC1 : DshColorSecondaryG0};
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

  :host([type='secundario']) .label {
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

  :host([type='primario']) ::slotted([slot='body']) {
    padding: 16px;
  }

  :host([type='secundario']) ::slotted([slot='body']) {
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
  }

  :host([type='secundario']) .label {
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
    color: #3e4545;
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
    :host([type='secundario']) .label {
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
