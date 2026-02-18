import { css } from 'atomico';

// Tokens
import {
  DshTextFamilyRawsonPro,
  DshTextSizeLg,
  DshTextWeight500,
  DshSpace50,
  DshSpace100,
  DshSpace150,
  DshSpace200,
  DshSpace300,
  DshTextLineHeightXl,
  DshBorderRadius50,
  DshBorderRadius100,
  DshColorMonochromaticW1,
  DshStrokeWeightM,
  DshColorPrimaryC0,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorPrimaryC3,
  DshColorPrimaryC6,
  DshColorSecondaryG1,
  DshColorSecondaryG3,
  DshColorSecondaryG5,
  DshColorSecondaryG6,
  DshSpace0,
} from '../../generated-tokens/tokens.js'

const DshColorTransparent = 'transparent';

export const baseStyles = css`
  :host {
    box-sizing: border-box;
    display: inline-block;
    position: relative;
  }
  :host(.full) {
    width: 100%;
  }
  button {
    margin: ${DshSpace0};
    gap: ${DshSpace100};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${DshTextSizeLg};
    font-weight: ${DshTextWeight500};
    font-family: ${DshTextFamilyRawsonPro};
    line-height: ${DshTextLineHeightXl};
    padding: ${DshSpace150} ${DshSpace300};
    border-radius: ${DshBorderRadius50};
    border: none;
    outline: none;
    height: 48px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    white-space: nowrap;
  }
  button:hover {
    cursor: pointer;
  }
  button:hover:disabled {
    cursor: not-allowed;
  }
  button:disabled {
    background: none;
  }
  button:focus-visible {
    outline: none;
  }
  button.vertical {
    flex-direction: column;
    gap: ${DshSpace50};
    height: 76px;
  }
  .hidden {
    display: none;
  }
  .full {
    width: 100% !important;
  }
  @media only screen and (width <= 479px) {
    :host(.fluid) {
      width: 100%;
    }
    .fluid {
      width: 100% !important;
    }
  }
`;

export const primaryLight = css`
  button.primary.blue {
    color: ${DshColorMonochromaticW1};
    background-color: ${DshColorPrimaryC1};
  }
  button.primary.blue:hover {
    background-color: ${DshColorPrimaryC0};
  }
  button.primary.blue:active {
    color: ${DshColorSecondaryG5};
    background-color: ${DshColorPrimaryC0};
    border: 3px solid ${DshColorPrimaryC3};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace300} - 3px);
  }
  button.primary.blue:focus {
    color: ${DshColorMonochromaticW1};
    background-color: ${DshColorPrimaryC1};
    outline: ${DshStrokeWeightM} solid ${DshColorPrimaryC2};
    outline-offset: ${DshStrokeWeightM};
  }
  button.primary.blue:active:focus {
    color: ${DshColorSecondaryG5};
    background-color: ${DshColorPrimaryC0};
    border: 3px solid ${DshColorPrimaryC3};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace300} - 3px);
    outline: none;
    outline-offset: 0;
  }
  button.primary.blue.vertical:focus {
    border: 3px solid ${DshColorPrimaryC3};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace200} - 3px);
  }
  button.primary.blue.vertical {
    padding: ${DshSpace150} ${DshSpace200};
  }
  button.primary:disabled {
    color: ${DshColorMonochromaticW1} !important;
    background-color: ${DshColorSecondaryG3} !important;
    outline: none !important;
    outline-offset: 0 !important;
    border: none !important;
    padding: 12px 24px !important;
  }
`;

export const secondaryLight = css`
  button.secondary.blue ds-button-loading {
    color: ${DshColorPrimaryC1};
  }
  button.secondary.blue {
    color: ${DshColorSecondaryG1};
    background-color: ${DshColorMonochromaticW1};
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC1};
    padding: calc(${DshSpace150} - ${DshStrokeWeightM}) calc(${DshSpace300} - ${DshStrokeWeightM});
  }
  button.secondary.blue:hover {
    background-color: ${DshColorSecondaryG6};
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC1};
    padding: calc(${DshSpace150} - ${DshStrokeWeightM}) calc(${DshSpace300} - ${DshStrokeWeightM});
  }
  button.secondary.blue:active {
    background-color: ${DshColorPrimaryC6};
    border: 3px solid ${DshColorPrimaryC1};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace300} - 3px);
  }
  button.secondary.blue:focus {
    background-color: ${DshColorMonochromaticW1};
    outline: ${DshStrokeWeightM} solid ${DshColorPrimaryC2};
    outline-offset: ${DshStrokeWeightM};
  }
  button.secondary.blue:active:focus {
    background-color: ${DshColorPrimaryC6};
    border: 3px solid ${DshColorPrimaryC1};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace300} - 3px);
    outline: none;
    outline-offset: 0;
  }
  button.secondary.blue.vertical:focus {
    border: 3px solid ${DshColorPrimaryC3};
    padding: calc(${DshSpace150} - 3px) calc(${DshSpace200} - 3px);
  }
  button.secondary.blue.vertical {
    padding: ${DshSpace150} ${DshSpace200};
  }
  button.secondary:disabled {
    color: ${DshColorSecondaryG3} !important;
    background-color: ${DshColorSecondaryG6} !important;
    border: ${DshStrokeWeightM} solid ${DshColorSecondaryG3} !important;
    padding: calc(${DshSpace150} - ${DshStrokeWeightM}) calc(${DshSpace300} - ${DshStrokeWeightM}) !important;
    outline: none !important;
    outline-offset: 0 !important;
  }
`;

export const tertiaryLight = css`
  button.tertiary {
    gap: ${DshSpace50};
    padding: ${DshSpace150} ${DshSpace200};
  }
  button.tertiary.blue {
    color: ${DshColorPrimaryC1};
    background-color: ${DshColorTransparent};
  }
  button.tertiary.blue:hover {
    background-color: ${DshColorSecondaryG6};
  }
  button.tertiary.blue:active {
    color: ${DshColorPrimaryC0};
    background-color: ${DshColorSecondaryG5};
  }
  button.tertiary.blue:focus {
    color: ${DshColorPrimaryC1};
    background-color: ${DshColorTransparent};
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC2};
    padding: calc(${DshSpace150} - ${DshStrokeWeightM}) calc(${DshSpace200} - ${DshStrokeWeightM});
  }
  button.tertiary.blue:active:focus {
    color: ${DshColorPrimaryC0};
    background-color: ${DshColorSecondaryG5};
  }
  button.tertiary.blue.vertical:focus {
    border: ${DshStrokeWeightM} solid ${DshColorPrimaryC2};
    padding: calc(${DshSpace150} - ${DshStrokeWeightM}) calc(${DshSpace200} - ${DshStrokeWeightM});
  }
  button.tertiary.blue.vertical {
    padding: ${DshSpace150} ${DshSpace200};
  }
  button.tertiary {
    border-radius: ${DshBorderRadius100};
  }
  button.tertiary:disabled {
    color: ${DshColorSecondaryG3} !important;
    padding: ${DshSpace150} ${DshSpace200} !important;
    background-color: ${DshColorTransparent} !important;
    outline: none !important;
    outline-offset: 0 !important;
    border: none !important;
  }
`;