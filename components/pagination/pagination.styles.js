import { html, css } from 'atomico';
import {
  DshBorderRadius100,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorSecondaryG3,
  DshColorSecondaryG6,
  DshColorMonoWhite,
  DshShadowM,
  DshSpace0,
  DshSpace100,
  DshTextFamilyRawsonPro,
  DshTextLineHeightLg,
  DshTextLineHeight2xl,
  DshTextSizeBase,
  DshTextSizeLg,
  DshTextWeight400,
} from '@tokens';

export const customProperties = (shadow) =>
  html`
    <style>
      :host {
        --background: ${DshColorMonoWhite};
        --background-active: ${DshColorPrimaryC1};
        --background-hover: ${DshColorSecondaryG6};
        --color: ${DshColorPrimaryC1};
        --color-active: ${DshColorMonoWhite};
        --color-disabled: ${DshColorSecondaryG3};
        --height: 40px;
        --margin: ${DshSpace0};
        --mobile-height: 36px;
        --mobile-width: 36px;
        --outline: ${DshColorPrimaryC2};
        --shadow: ${shadow ? DshShadowM : 'none'};
        --width: 40px;
      }
    </style>
  `;

export const styles = css`
  :host {
    display: flex;
    margin: var(--margin);
  }

  button:focus-visible {
    outline: 3px solid var(--outline);
    outline-offset: 4px;
  }

  .dots {
    color: var(--color);
    width: 18px;
    display: inline-block;
    justify-content: center;
  }

  .pages-container {
    display: flex;
    align-items: center;
  }

  .pagination {
    display: flex;
    gap: ${DshSpace100};
    align-items: center;
    justify-content: center;
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight400};
    background: var(--background);
    height: 62px;
    border-radius: ${DshBorderRadius100};
    box-shadow: var(--shadow);
    box-sizing: border-box;
  }

  .paginationItem {
    background: var(--background);
    border: none;
    padding: ${DshSpace100};
    height: var(--mobile-height);
    width: var(--mobile-width);
    position: relative;
    cursor: pointer;
    color: var(--color);
    border-radius: ${DshBorderRadius100};
  }

  .paginationItem.active {
    background-color: var(--background-active);
    border-radius: ${DshBorderRadius100};
    pointer-events: none;
    color: var(--color-active);
  }

  .paginationItem:hover,
  .prev:hover,
  .next:hover {
    background-color: var(--background-hover);
    color: var(--color);
  }

  .paginationItem span {
    font-size: ${DshTextSizeBase};
    line-height: ${DshTextLineHeight2xl};
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight400};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .prev,
  .next {
    font-family: ${DshTextFamilyRawsonPro};
    font-weight: ${DshTextWeight400};
    font-size: ${DshTextSizeBase};
    line-height: ${DshTextLineHeightLg};
    background: var(--background);
    border: none;
    padding: ${DshSpace100};
    color: var(--color);
    cursor: pointer;
    border-radius: ${DshBorderRadius100};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--mobile-width);
    height: var(--mobile-height);
  }

  .prev.disabled,
  .next.disabled {
    pointer-events: none;
    color: var(--color-disabled);
  }

  @media (max-width: 767px) {
    .text-label {
      display: none;
    }
  }

  @media (min-width: 767px) {
    .dots {
      width: 40px;
      text-align: center;
    }
    .pages-container {
      gap: ${DshSpace100};
    }
    .pagination {
      padding: ${DshSpace100};
    }
    .paginationItem {
      height: var(--height);
      width: var(--width);
    }
    .paginationItem span {
      font-size: ${DshTextSizeLg};
    }
    .prev,
    .next {
      width: 108px;
    }
  }

  @media only screen and (max-width: 47.95rem) {
    button:focus-visible {
      outline-offset: 0;
    }
    .pagination {
      height: 48px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      gap: ${DshSpace0};
    }
  }
`;
