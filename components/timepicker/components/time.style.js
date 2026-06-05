import { css } from 'atomico';
import {
  DshBorderRadius100,
  DshColorMonoWhite,
  DshColorPrimaryC1,
  DshColorSecondaryG2,
  DshColorSecondaryG6,
  DshTextLineHeightXl,
  DshTextSizeLg,
  DshTextWeight500,
  DshTextFamilyRawsonPro,
} from '@tokens';

const styles = [
  css`
    :host {
      font-family: ${DshTextFamilyRawsonPro};
      display: flex;
    }
    .time-button {
      font-family: ${DshTextFamilyRawsonPro};
      padding: 10px;
      font-size: ${DshTextSizeLg};
      font-weight: ${DshTextWeight500};
      line-height: ${DshTextLineHeightXl};
      color: ${DshColorPrimaryC1};
      text-align: center;
      background: ${DshColorMonoWhite};
      cursor: pointer;
      border: none;
      border-radius: ${DshBorderRadius100};
      transition: background 0.3s ease-out;
    }
    .time-button:disabled {
      color: ${DshColorSecondaryG2};
      cursor: not-allowed;
      pointer-events: none;
    }
    .time-button:hover {
      background: ${DshColorSecondaryG6};
      transition: background-color 0.3s ease-in;
    }
    :host([selected]) .time-button {
        background: ${DshColorPrimaryC1};
        color: ${DshColorMonoWhite};
    }
  `,
];

export default styles;
