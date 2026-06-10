import { html, css } from 'atomico';
import {
  DshBorderRadius50,
  DshBorderRadius100,
  DshBorderRadius200,
  DshColorMonoBlack,
  DshColorMonoWhite,
  DshColorPrimaryC1,
  DshColorPrimaryA3,
  DshColorSecondaryG1,
  DshColorSecondaryX5,
  DshColorSecondaryX6,
  DshTextFamilyRawsonPro,
  DshTextLineHeightBase,
  DshTextLineHeightXl,
  DshTextSizeSm,
  DshTextSizeLg,
  DshTextWeight500,
  DshTextWeight650,
  DshTextWeight700,
  DshShadowM,
  DshSpace50,
  DshSpace100,
  DshSpace150,
  DshSpace200,
  DshSpace300,
  DshSpaceN150,
  DshStrokeWeightS,
  DshStrokeWeightM,
} from '@tokens';
import { segmentTokens } from './direct-access.tokens';

export const customProperties = (segment, darkMode) =>
  html`
    <style>
      :host {
        --segment-color: ${segmentTokens[segment] || segmentTokens.transversales};
        --bg: ${darkMode ? '#2d3449' : DshColorMonoWhite};
        --border: ${darkMode ? '#3a4050' : DshColorSecondaryX5};
        --color: ${darkMode ? '#e8eaed' : DshColorSecondaryG1};
        --hover-bg: ${darkMode ? '#3a4462' : DshColorSecondaryX6};
      }
    </style>
  `;

export const styles = css`
  *,
  a {
    box-sizing: border-box;
    text-decoration: none;
  }

  :host {
    display: flex;
    font-family: ${DshTextFamilyRawsonPro};
    height: 100%;
    position: relative;
    width: 100%;
  }

  .direct-access {
    background-color: var(--bg);
    border: ${DshStrokeWeightS} solid var(--border);
    border-radius: ${DshBorderRadius200};
    box-shadow: ${DshShadowM};
    display: flex;
    flex-direction: column;
    max-width: 320px;
    min-width: 220px;
    width: 100%;
  }

  .direct-access:hover {
    background-color: var(--hover-bg);
    cursor: pointer;
  }

  .direct-access:focus {
    outline: ${DshStrokeWeightM} solid ${DshColorPrimaryC1};
    outline-offset: ${DshSpace100};
  }

  .direct-access-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${DshSpace200};
    padding: ${DshSpace300} ${DshSpace200};
  }

  .direct-access__bottom {
    align-items: center;
    border-top: ${DshStrokeWeightS} solid ${DshColorSecondaryX5};
    color: ${DshColorSecondaryG1};
    display: flex;
    font-size: ${DshTextSizeLg};
    font-weight: ${DshTextWeight500};
    gap: ${DshSpace100};
    justify-content: center;
    line-height: ${DshTextLineHeightXl};
    overflow: hidden;
    padding: ${DshSpace100} ${DshSpace200};
    text-align: center;
  }

  .direct-access__icon {
    background: var(--segment-color);
    border-radius: ${DshBorderRadius200};
    padding: ${DshSpace100};
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .direct-access__info {
    display: flex;
    flex-direction: column;
    gap: ${DshSpace50};
    text-align: center;
  }

  .subtitle {
    color: var(--color);
    font-size: ${DshTextSizeLg};
    font-weight: ${DshTextWeight500};
    line-height: ${DshTextLineHeightXl};
  }

  .tag {
    align-items: center;
    background-color: ${DshColorPrimaryA3};
    border-radius: ${DshBorderRadius50};
    color: ${DshColorMonoBlack};
    font-size: ${DshTextSizeSm};
    font-weight: ${DshTextWeight700};
    left: ${DshSpace200};
    line-height: ${DshTextLineHeightBase};
    padding: ${DshSpace50} ${DshSpace150};
    position: absolute;
    top: ${DshSpaceN150};
  }

  .title {
    color: var(--color);
    font-size: ${DshTextSizeLg};
    font-weight: ${DshTextWeight650};
    line-height: ${DshTextLineHeightXl};
  }

  @media (max-width: 767px) {
    .direct-access {
      max-width: 408px;
      min-width: 288px;
    }
    .direct-access__info {
      text-align: start;
    }
    .direct-access-content {
      flex-direction: row;
      padding: ${DshSpace200};
    }
    .direct-access__icon {
      width: 40px;
      border-radius: ${DshBorderRadius100};
      padding: ${DshSpace50};
    }
  }
`;
