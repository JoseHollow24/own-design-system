import { html, css } from 'atomico';
import {
  DshShadowL,
  DshSpace100,
  DshSpace150,
  DshSpace200,
  DshSpace300,
  DshSpace500,
  DshSpace600,
  DshBorderRadius300,
  DshColorMonoWhite,
  DshTextSizeXl,
  DshTextWeight400,
  DshTextWeight650,
  DshTextLineHeightXl,
  DshTextLineHeight2xl,
} from '@tokens';
import { segmentPalette } from './card-details.tokens';

export const customProperties = (darkMode) => html`
  <style>
    :host {
      --card-bg: ${darkMode ? '#252b3b' : DshColorMonoWhite};
      --card-text: ${darkMode ? '#e8eaed' : 'inherit'};
    }
  </style>
`;

export const cardDetailsStyles = css`
  :host {
    display: flex;
    flex-flow: column;
    width: 100%;
    overflow: hidden;
    box-shadow: ${DshShadowL};
    background-color: var(--card-bg, ${DshColorMonoWhite});
    border-top-left-radius: ${DshSpace100};
    border-top-right-radius: ${DshSpace100};
    border-bottom-left-radius: ${DshBorderRadius300};
    border-bottom-right-radius: ${DshBorderRadius300};
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  :host(.open) {
    height: 100%;
  }
`;

export const lineStyles = css`
  :host {
    flex: 0 1 8px;
    width: 100%;
    display: block;
    min-height: 8px;
    height: 100%;
  }

  :host(.transversal) { background-color: ${segmentPalette.transversal.line}; }
  :host(.blue) { background-color: ${segmentPalette.blue.line}; }
  :host(.purple) { background-color: ${segmentPalette.purple.line}; }
  :host(.slate) { background-color: ${segmentPalette.slate.line}; }
  :host(.cav) { background-color: ${segmentPalette.cav.line}; }
  :host(.ffmm) { background-color: ${segmentPalette.ffmm.line}; }
  :host(.apv) { background-color: ${segmentPalette.apv.line}; }
`;

export const headerStyles = css`
  :host {
    flex: 1 0 auto;
    min-height: ${DshSpace600};
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${DshSpace100};
    padding: ${DshSpace100} ${DshSpace150};
  }

  .as-image {
    padding: ${DshSpace200} ${DshSpace200} ${DshSpace300};
  }

  .title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
    width: 100%;
    justify-content: space-between;
  }

  .title {
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .title ::slotted(*) {
    margin: 0;
    padding: 0;
  }

  .title ::slotted(strong) {
    font-size: 32px;
    font-weight: ${DshTextWeight650};
    line-height: ${DshTextLineHeight2xl};
  }

  .title ::slotted(p) {
    font-size: ${DshTextSizeXl};
    font-weight: ${DshTextWeight400};
    line-height: ${DshTextLineHeightXl};
  }

  .title ::slotted(h4) {
    font-size: ${DshTextSizeXl};
    font-weight: ${DshTextWeight400};
    line-height: ${DshTextLineHeightXl};
  }
`;

export const accordeonStyles = css`
  :host {
    display: flex;
    height: 100%;
  }

  :host(.open) {
    min-height: 72px;
    padding: 0 ${DshSpace150} ${DshSpace150};
  }

  :host(.has-image) {
    padding: 0 ${DshSpace200} ${DshSpace200};
  }

  .accordeon-content {
    display: flex;
    flex-flow: column;
  }
`;

export const footerStyles = css`
  :host {
    width: 100%;
    display: contents;
  }

  ::slotted(*) {
    display: contents;
    height: ${DshSpace600};
  }

  .footer-container {
    margin-top: ${DshSpace100};
    display: flex;
    gap: 16px;
  }

  .has-image { margin-top: ${DshSpace300}; }
  .left { justify-content: start; }
  .center { justify-content: center; }
  .right { justify-content: end; }

  @media only screen and (max-width: 479px) {
    .fluid { flex-direction: column; }
    .reverse { flex-direction: column-reverse; }
  }
`;

export const iconStyles = css`
  :host {
    background-color: ${segmentPalette.background};
    border-radius: ${DshSpace500};
    width: ${DshSpace600};
    min-width: ${DshSpace600};
    height: ${DshSpace600};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host(.transversal) { color: ${segmentPalette.transversal.icon}; }
  :host(.blue) { color: ${segmentPalette.blue.icon}; }
  :host(.purple) { color: ${segmentPalette.purple.icon}; }
  :host(.slate) { color: ${segmentPalette.slate.icon}; }
  :host(.cav) { color: ${segmentPalette.cav.icon}; }
  :host(.ffmm) { color: ${segmentPalette.ffmm.icon}; }
  :host(.apv) { color: ${segmentPalette.apv.icon}; }
`;

export const imageStyles = css`
  :host {
    display: block;
    width: 100%;
    max-width: 160px;
    border-radius: 8px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;
