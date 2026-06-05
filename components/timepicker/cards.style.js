import { html, css } from 'atomico';
import {
  DshBorderRadius200,
  DshColorMonoBlack,
  DshColorMonoWhite,
  DshColorPrimaryC1,
  DshColorSecondaryG4,
  DshColorSecondaryX1,
  DshSpace0,
  DshSpace150,
  DshSpace300,
  DshStrokeWeightM,
  DshTextLineHeightXl,
  DshTextLineHeight2xl,
  DshTextSizeLg,
  DshTextSizeXl,
  DshTextWeight500,
  DshTextWeight650,
  DshTextFamilyRawsonPro,
} from '@tokens';

const CustomProperties = () => html`
  <style>
    :host {
      --font-family: ${DshTextFamilyRawsonPro};
    }
  </style>
`;

const Styles = [
  css`
    :host {
      font-family: var(--font-family);
      display: flex;
    }
    p {
      margin: ${DshSpace0};
    }
    .container {
      background-color: ${DshColorMonoWhite};
      border: ${DshStrokeWeightM} solid ${DshColorPrimaryC1};
      border-radius: ${DshBorderRadius200};
      padding: ${DshSpace300};
      width: 100%;
    }
    .header-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .header-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: ${DshSpace300};
    }
    form {
      display: flex;
      flex-direction: row;
      gap: 16px;
    }
    .header-title {
      font-size: ${DshTextSizeXl};
      font-weight: ${DshTextWeight650};
      line-height: ${DshTextLineHeight2xl};
      color: ${DshColorSecondaryX1};
    }
    ::slotted([slot='text']) {
      font-size: ${DshTextSizeLg};
      font-weight: ${DshTextWeight500};
      line-height: ${DshTextLineHeightXl};
      color: v${DshColorMonoBlack};
      margin: ${DshSpace0};
      padding: ${DshSpace150} ${DshSpace0};
    }
    ::slotted(p) {
      margin: ${DshSpace0};
    }
    .time-container {
      display: flex;
      margin: 8px ${DshSpace0};
      justify-content: center;
    }
    .am, .pm, .twentyfour-container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .hidden {
      display: none;
    }
    .separator:after {
      content: '';
      top: 100%;
      right: ${DshSpace0};
      height: 1px;
      background: ${DshColorSecondaryG4};
      margin: 8px ${DshSpace0} ${DshSpace300} ${DshSpace0};
    }
    @media only screen and (max-width: 47.95em) {
      .header-info {
        display: flex;
        flex-direction: column;
      }
    }
  `,
];

export { Styles, CustomProperties };
