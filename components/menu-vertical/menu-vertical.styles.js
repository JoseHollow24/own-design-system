import { css, html } from 'atomico';
import {
  DshTextFamilyRawsonPro,
  DshSpace0,
  DshSpace50,
  DshSpace100,
  DshSpace200,
  DshSpace400,
  DshColorSecondaryG6,
  DshTextWeight650,
  DshTextSizeLg,
  DshTextLineHeightXl,
  DshColorMonoBlack,
  DshColorPrimaryC2,
  DshColorPrimaryC1,
  DshColorMonoWhite,
  DshColorSecondaryG1,
  DshBorderRadius100,
  DshColorSecondaryX4,
  DshColorSecondaryX6,
  DshTextWeight500,
} from '@tokens';

export const customProperties = (heightMenu) => {
  const val = heightMenu ? `${heightMenu}px` : 'auto';
  return html`
    <style>
      :host {
        --height-menu: ${val};
      }
    </style>
  `;
};

export const menuStyles = css`
  :host {
    display: block;
    width: 100%;
  }
  .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .menu__content {
    position: relative;
    flex-grow: 1;
  }
  .menu__header-mobile {
    display: none;
    background-color: ${DshColorSecondaryG6};
    padding: ${DshSpace100} ${DshSpace200};
  }
  .menu__header-mobile__close__button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: ${DshSpace0} ${DshSpace0} ${DshSpace100} ${DshSpace0};
  }
  .menu__header-mobile__indicator {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: ${DshSpace100};
    margin: ${DshSpace0} ${DshSpace0} ${DshSpace100} ${DshSpace0};
    padding: 12px ${DshSpace100} 12px ${DshSpace0};
  }
  .menu__header-mobile__arrow {
    cursor: pointer;
  }
  .menu__header-mobile__indicator.item-open {
    padding: ${DshSpace100};
  }
  .menu__header-mobile__indicator__text {
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight650};
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    color: ${DshColorMonoBlack};
  }
  @media only screen and (max-width: 63.95em) {
    :host {
      position: absolute;
      top: ${DshSpace0};
      bottom: ${DshSpace0};
      left: ${DshSpace0};
      right: ${DshSpace0};
    }
    .menu {
      position: fixed;
      width: 100%;
    }
    :host(.closed) {
      display: none;
    }
    .menu__header-desktop {
      display: none;
    }
    .menu__header-mobile {
      display: block;
    }
    .menu__header-mobile__button.exists {
      padding: ${DshSpace100} ${DshSpace0};
    }
    .menu__content {
      background-color: ${DshColorMonoWhite};
      padding: ${DshSpace100} ${DshSpace200} 0 ${DshSpace200};
      overflow-y: auto;
    }
  }
`;

export const menuItemStyles = css`
  a {
    color: inherit;
    text-decoration: inherit;
    display: inline-block;
    width: 100%;
  }
  a:focus {
    outline: 3px solid ${DshColorPrimaryC2};
    outline-offset: 4px;
    border-radius: ${DshBorderRadius100};
  }
  .item {
    margin: ${DshSpace100} ${DshSpace0} ${DshSpace0} ${DshSpace0};
    padding: ${DshSpace0} ${DshSpace0} 7px ${DshSpace0};
    border-bottom: 1px solid ${DshColorSecondaryX4};
  }
  .item.active {
    border-bottom: none;
  }
  .item.is-home-item.active .item__content {
    background: ${DshColorPrimaryC1};
  }
  .item.is-home-item.active dsh-icon {
    --color: ${DshColorMonoWhite};
  }
  .item.is-home-item.active .item__text {
    color: ${DshColorMonoWhite};
  }
  .item__content {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    padding: 8px;
    border-radius: 8px 0 0 8px;
  }
  .item:hover .item__content {
    background: ${DshColorSecondaryX6};
  }
  .bullet {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
  .bullet__square {
    width: 8px;
    height: 8px;
    background-color: ${DshColorPrimaryC1};
    border-radius: 1px;
  }
  .item__text {
    flex-grow: 1;
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight500};
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    color: ${DshColorSecondaryG1};
  }
  .active .item__text {
    font-weight: ${DshTextWeight650};
  }
  dsh-icon {
    --color: ${DshColorPrimaryC1};
  }
  .sub-items {
    display: none;
  }
  .sub-items.sub-items-visible.active {
    display: block;
    border-bottom: 1px solid ${DshColorSecondaryX4};
  }
  @media only screen and (max-width: 63.95em) {
    .hide-tablet-mobile {
      display: none;
    }
    .item {
      margin: ${DshSpace50} ${DshSpace0};
      border-bottom: none;
      padding: ${DshSpace0};
    }
    .item__content {
      padding: ${DshSpace100} ${DshSpace0};
    }
    .active .item__text {
      font-weight: ${DshTextWeight500};
    }
    .item:hover .item__content {
      background-color: initial;
    }
    .sub-items.sub-items-visible.active {
      position: fixed;
      z-index: 1;
      top: var(--height-menu);
      bottom: ${DshSpace0};
      left: ${DshSpace0};
      right: ${DshSpace0};
      background-color: ${DshColorMonoWhite};
      border-bottom: none;
      padding: 8px 16px ${DshSpace0} 16px;
      height: auto;
      overflow-x: auto;
    }
  }
`;

export const menuSubItemStyles = css`
  a {
    color: inherit;
    text-decoration: inherit;
    display: inline-block;
    width: 100%;
  }
  :host(:focus-within) a {
    outline: 3px solid ${DshColorPrimaryC2};
    outline-offset: 4px;
    border-radius: ${DshBorderRadius100};
  }
  .sub-item {
    margin: ${DshSpace50} ${DshSpace0};
  }
  .sub-item__content {
    display: flex;
    flex-direction: row;
    gap: ${DshSpace100};
    align-items: center;
    padding: ${DshSpace100} ${DshSpace100} ${DshSpace100} ${DshSpace400};
    border-radius: ${DshSpace100} ${DshSpace0} ${DshSpace0} ${DshSpace100};
  }
  .sub-item:hover .sub-item__content {
    background-color: ${DshColorSecondaryX6};
  }
  .sub-item:active .sub-item__content {
    background-color: ${DshColorPrimaryC1};
  }
  .sub-item.active .sub-item__content {
    background-color: ${DshColorPrimaryC1};
  }
  .bullet {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
  .bullet__square {
    width: 8px;
    height: 8px;
    background-color: ${DshColorPrimaryC1};
    border-radius: 1px;
  }
  .sub-item:active .bullet__square {
    background-color: ${DshColorMonoWhite};
  }
  .sub-item.active .bullet__square {
    background-color: ${DshColorMonoWhite};
  }
  .sub-item__text {
    flex-grow: 1;
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight500};
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    color: ${DshColorPrimaryC1};
  }
  .sub-item:active .sub-item__text {
    color: ${DshColorMonoWhite};
  }
  .sub-item.active .sub-item__text {
    color: ${DshColorMonoWhite};
  }
  dsh-icon {
    --color: ${DshColorPrimaryC1};
  }
  .sub-item:active dsh-icon {
    --color: ${DshColorMonoWhite};
  }
  .sub-item.active dsh-icon {
    --color: ${DshColorMonoWhite};
  }
  @media only screen and (max-width: 63.95em) {
    .sub-item {
      margin: ${DshSpace50} ${DshSpace0};
      padding: ${DshSpace0};
    }
    .sub-item__content {
      padding: ${DshSpace100} ${DshSpace0};
    }
    .sub-item:active .sub-item__content,
    .sub-item.active .sub-item__content,
    .sub-item:hover .sub-item__content {
      background-color: initial;
    }
    .sub-item:active .sub-item__text,
    .sub-item.active .sub-item__text {
      color: ${DshColorPrimaryC1};
    }
    .sub-item:active dsh-icon,
    .sub-item.active dsh-icon {
      --color: ${DshColorPrimaryC1};
    }
  }
`;
