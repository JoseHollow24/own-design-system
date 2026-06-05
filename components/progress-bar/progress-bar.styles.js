import { css } from 'atomico';
import {
  DshColorMonoWhite,
  DshColorSecondaryG1,
  DshColorSecondaryG4,
  DshSpace0,
  DshSpace100,
  DshSpace200,
  DshStrokeWeightS,
  DshTextSizeLg,
  DshTextWeight400,
  DshTextWeight500,
  DshTextWeight650,
  DshTextFamilyRawsonPro,
} from '@tokens';

const fixedStyles = css`
  :host {
    width: 100%;
    display: block;
    font-family: ${DshTextFamilyRawsonPro};
    font-size: ${DshTextSizeLg};
    color: ${DshColorSecondaryG1};
  }

  .progress-bar__legend-circle {
    border-radius: 50%;
    width: ${DshSpace100};
    height: ${DshSpace100};
    flex-shrink: 0;
  }

  .progress-bar__bar-container {
    width: 100%;
    height: 10px;
    background-color: ${DshColorMonoWhite};
    overflow: hidden;
    border: ${DshStrokeWeightS} solid ${DshColorSecondaryG4};
    border-radius: 6px;
    margin: ${DshSpace100} ${DshSpace0};
    display: flex;
    flex-direction: row;
  }

  .progress-bar__bar {
    transition: width 0.5s ease-in-out;
  }

  .progress-bar__label-container-top,
  .progress-bar__label-container-bottom {
    max-height: 24px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ${DshTextWeight500};
    color: ${DshColorSecondaryG1};
  }

  .progress-bar__label-container-bottom {
    font-weight: ${DshTextWeight400};
  }

  .progress-bar__legend {
    display: flex;
    position: relative;
    gap: ${DshSpace100};
    align-items: center;
    font-weight: ${DshTextWeight500};
  }

  .progress-bar__legend-container {
    display: flex;
    flex-direction: row;
    gap: ${DshSpace200};
    align-items: center;
    margin-bottom: ${DshSpace100};
    flex-flow: wrap;
  }

  .progress-bar__title {
    display: inline-block;
    margin-bottom: ${DshSpace100};
    font-size: 24px;
    line-height: 32px;
    font-weight: ${DshTextWeight650};
    color: ${DshColorSecondaryG1};
  }
`;

export default fixedStyles;
