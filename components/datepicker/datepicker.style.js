import { html, css } from 'atomico';
import {
  DshBorderRadius100,
  DshTextFamilyRawsonPro,
  DshTextLineHeightXl,
  DshTextSizeLg,
  DshTextSizeXl,
  DshSpace0,
  DshTextWeight400,
  DshTextWeight500,
  DshTextWeight650,
  DshShadowM,
  DshShadowS,
  DshColorMonoWhite,
  DshColorMonoBlack,
  DshColorSecondaryG1,
  DshColorSecondaryG6,
  DshTextLineHeight2xl,
  DshColorPrimaryC3,
  DshColorPrimaryC1,
  DshTextLineHeightLg,
  DshTextSizeBase,
  DshColorPrimaryC2,
  DshColorComplementaryR2,
  DshColorComplementaryV1,
  DshColorPrimaryC0,
  DshColorSecondaryG5,
  DshColorPrimaryC6,
  DshColorPrimaryC5,
  DshColorSecondaryG4,
  DshColorSecondaryG3,
} from '@tokens';

const customProperties = (range, weeks, twoMonths, height) => {
  let valueHeight = height;
  if (!Number.isNaN(valueHeight)) {
    valueHeight = parseInt(height, 10) + 16;
  }

  return html`
    <style>
      :host {
        --background: ${DshColorMonoWhite};
        --background-hover: ${DshColorSecondaryG6};
        --radio-hover: ${range ? 'none' : '12px'};
        --rows-week: ${weeks > 0 ? weeks : '6'};
        --justify-content: ${twoMonths ? 'space-between' : 'center'};
        --display-calendar: ${twoMonths ? 'flex' : 'block'};
        --height-cal-mob: ${twoMonths ? `${valueHeight}px` : '200px'};
        --color-text: ${DshColorSecondaryG1};
        --color-label: ${DshColorMonoBlack};
        --color-helper: ${DshColorSecondaryG1};
        --color-icon-hover: ${DshColorMonoBlack};
        --border-color: ${DshColorPrimaryC1};
        --border-color-hover: ${DshColorPrimaryC3};
        --shadow: ${DshShadowS};
        --font-family: ${DshTextFamilyRawsonPro};
        --margin: ${DshSpace0};
      }
    </style>
  `;
};

const stylesDatepicker = [
  css`
    :host {
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      margin: var(--margin);
      min-width:170px;
      max-width:356px;
    }
    .hidden{
      visibility:hidden;
      height:0;
    }
    ::slotted([slot="message-info"]),::slotted([slot="message-alert"]) {
      margin: 0;
      padding: 0;
    }
    p,h1,h2,h3,h4{
      margin:0;
      padding:0;
    }
    
    div.main-container {
      width: 100%;
    }
    p {
      margin: 0;
      width: 100%;
      font-family: var(--font-family);
    }
    .truncate {
      display: block;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    p.label {
      margin-bottom: 8px;
      font-size: ${DshTextSizeBase};
      line-height: ${DshTextLineHeightLg};
      font-weight: ${DshTextWeight500};
      color: var(--color-label);
    }
    p.helper {
      margin-top: 8px;
      font-size: ${DshTextSizeBase};
      line-height: ${DshTextLineHeightLg};
      font-weight: ${DshTextWeight500};
      color: var(--color-helper);
    }
    p.message-error {
      color: ${DshColorComplementaryR2};
    }
    p.message-success {
      color: ${DshColorComplementaryV1};
    }
    p.text {
      height: 24px;
      font-size: ${DshTextSizeLg};
      line-height: ${DshTextLineHeightXl};
      font-weight: ${DshTextWeight400};
      color: var(--color-text);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .select-box {
      display: flex;
      width: 100%;
      height: 48px;

      flex-direction: column;
      margin: 0;
      position: relative;
    }
    .select-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    .select-container:focus-visible {
      outline: 3px solid ${DshColorPrimaryC2};
      outline-offset: 0px;
      border-radius: ${DshBorderRadius100};
    }
    .select-container:focus-visible .selected {
      border: none;
    }
    .selected {
      box-sizing: border-box;
      width: 100%;
      background: var(--background);
      border-radius: ${DshBorderRadius100};
      padding: 0px 12px 0px 12px;
      margin: 0;
      position: relative;
      height: 48px;
      display: flex;
      flex-direction:row;
      gap:8px;
      align-items: center;
      border: 1px solid black;
      border-color: var(--border-color);
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    }
    .selected:hover {
      border-color: var(--border-color-hover);
    }
    .input-left{
      flex-direction:row-reverse;
    }
    .error {
      border: 2px solid ${DshColorComplementaryR2};
    }
    .success {
      border: 2px solid ${DshColorComplementaryV1};
    }
    .icon {
      width: 24px;
      height: 24px;
    }
    path {
      fill: var(--color-text);
    }
    .selected:hover path {
      
    }
    .dates {
      width: 100%;
      height: fit-content;
    }
    .dates-left {
      display: flex;
      justify-content: flex-start;
    }
    .dates-right {
      display: flex;
      justify-content: flex-end;
    }
    .dates-center {
      display: flex;
      justify-content: center;
    }
    .dates-hidden {
      display: none;
    }
    .slot {
      display: flex;
      width: 0px;
      height: 0px;
    }
  `,
];

const stylesDates = [
  css`
    :host {
      margin: 0;
      box-sizing: border-box;
      width: fit-content;
      display: flex;
      flex-direction: column;
      font-family: ${DshTextFamilyRawsonPro};
      z-index: 99999;
      margin-top: 8px;
      position:absolute;
    }
    :host([absolute="false"]) {
      position: relative;
    }
    .main {
      box-sizing: border-box;
      border: 1px solid ${DshColorPrimaryC0};
      border-radius: ${DshBorderRadius100};
      padding: 16px;
      background: ${DshColorMonoWhite};
      box-shadow: ${DshShadowM};
    }
    
    .selectors-container {
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .s-month{
      justify-content: center;
      align-items: center;
    }
    .year-selector {
      width: fit-content;
      height: 48px;
      display: flex;
      align-items: center;
      display: flex;
      gap: 8px;
      padding-left: 4px;
      border-radius: ${DshBorderRadius100};
    }
    .year-selector:hover {
      background: ${DshColorSecondaryG6};
      border-radius:12px;
    }
    .year-selector:focus-visible {
      outline: 3px solid ${DshColorPrimaryC2};
      outline-offset: 4px;
    }
    .year-selector:active {
      background: transparent;
    }
    .year-selector:active path {
      fill: ${DshColorPrimaryC3};
    }
    .year-selector:active {
      color: ${DshColorPrimaryC3};
    }
    .month-selector {
      width: fit-content;
      height: 48px;
      display: flex;
      align-items: center;
      display: flex;
      gap: 8px;
    }
    .selector-label {
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
      font-weight: ${DshTextWeight500};
      color: ${DshColorPrimaryC1};
    }
    .selector-icon {
      width: 48px;
      height: 48px;
      border-radius: ${DshBorderRadius100};
    }
    .selector-icon:hover {
      background: ${DshColorSecondaryG6};
      border-radius:12px;
    }
    .selector-icon:focus-visible {
      outline: 3px solid ${DshColorPrimaryC2};
      outline-offset: 4px;
    }
    .selector-icon:active {
      background: transparent;
    }
    .selector-icon path {
      fill: ${DshColorPrimaryC1};
    }
    .selector-icon:active path {
      fill: ${DshColorPrimaryC3};
    }
    .selector-icon:active {
      color: ${DshColorPrimaryC3};
    }
    .selector-icon.selector-label {
      width: fit-content;
      padding: 0 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      gap:8px
    }
    .locked {
      pointer-events: none;
    }
    .locked path {
      fill: ${DshColorSecondaryG5};
    }
    .unlocked {
      cursor: pointer;
    }
    .left {
      transform: rotate(-90deg);
    }
    .right {
      transform: rotate(90deg);
    }
    .dates-container {
      width: 100%;
      margin-top: 8px;
    }
    .days-container {
      width: 100%;
      height: 100%;
    }
    .days-header {
      width: 100%;
      height: 40px;
      display: flex;
      gap: 8px;
    }
    .days-name {
      width: 48px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
      font-weight: ${DshTextWeight650};
      color: ${DshColorSecondaryG1};
    }
    .days {
      display: grid;
      grid-template-columns: 48px repeat(5, 48px) 48px;
      grid-template-rows: repeat(var(--rows-week,6), 48px);
      grid-column-gap: 0px;
      grid-row-gap: 8px;
      gap:8px;
      margin-top:4px;
    }
    .day {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position:relative;
    }
    .pressed-finish-day-container {
      justify-content: flex-start;
    }
    .pressed-start-day-container {
      justify-content: flex-end;
    }
    .pressed-same-day-container {
      justify-content: center;
    }
    .col-end .intermediate-day{
      width: calc(100% + 8px);
      left: -8px;
    }
    .col-start .intermediate-day {
      width: calc(100% + 8px);
      left: 0px;
    }
    .col-start .intermediate-day span {
      margin-left:-8px;
    }
    inherit
    .first {
      justify-content: flex-start;
    }
    .last {
      justify-content: flex-end;
    }
    .first.pressed-finish-day-container .pressed-finish-day {
      width: 46px;
      padding: 0;
    }
    .last.pressed-start-day-container .pressed-start-day {
      width: 46px;
      padding: 0;
    }
    .first .intermediate-day {
      width: 50px;
      padding-right: 4px;
    }
    .last .intermediate-day {
      width: 50px;
      padding-left: 4px;
    }
    .day-button {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 0;
      margin: 0;
      background: transparent;
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
      font-weight: ${DshTextWeight400};
      color: ${DshColorPrimaryC1};
      font-family:var(--font-family);
    }
    .day-button:hover {
      color: ${DshColorPrimaryC0};
      background: ${DshColorPrimaryC6};
      border-radius: var(--radio-hover,12px);
    }
    .day-button:focus-visible {
      border-radius: 12px;
      outline: 3px solid ${DshColorPrimaryC1};
    }
    .current-day {
      border: 2px solid ${DshColorPrimaryC1};
      border-radius: 12px;
    }
    .pressed-day {
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
      border-radius:12px;
    }
    .pressed-day:hover {
      background: ${DshColorPrimaryC5};
    }
    .intermediate-day {
      width: calc(100% + 16px);
      background: ${DshColorPrimaryC5};
      position:absolute;
    }
    .intermediate-day:hover {
      background: ${DshColorPrimaryC5};
    }
    .intermediate-day.current-day {
      border: 0;
      border-radius: 0;
    }
    .day-locked {
      background: transparent;
      color: ${DshColorSecondaryG4};
      pointer-events: none;
    }
    .day-semilocked {
      background: transparent;
      color: ${DshColorSecondaryG3};
    }
    .day-unlocked {
      cursor: pointer;
    }
    .pressed-finish-day {
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
      border-radius: 0 12px 12px 0;
    }
    .pressed-start-day {
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
      border-radius: 12px 0 0 12px;
      position:absolute;
      /*width: calc(100% + 8px);
      left: 0px;*/
    }
    .pressed-start-day:hover, .pressed-finish-day:hover {
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
    }
    .pressed-start-day:hover{
      border-radius: 12px 0px 0px 12px;
    }
    .pressed-finish-day:hover{
      border-radius: 0 12px 12px 0;
    }
    
    .pressed-same-day {
      width: 46px;
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
      border-radius: 12px 12px 12px 12px;
    }
    .pressed-start-day.day-locked {
      background: transparent;
      color: ${DshColorSecondaryG4};
      pointer-events: none;
    }
    .pressed-finish-day.day-locked {
      background: transparent;
      color: ${DshColorSecondaryG4};
      pointer-events: none;
    }
    .day-semilocked.current-day {
      width: 46px;
      border: 2px solid ${DshColorPrimaryC1};
      border-radius: 12px;
    }
    .day-semilocked.current-day.pressed-start-day {
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
      border-radius: 12px 0 0 12px;
    }
    .day-semilocked.current-day.pressed-finish-day {
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
      border-radius: 0 12px 12px 0;
    }
    .current-day.pressed-finish-day, .current-day.pressed-start-day {
      background: white;
      color: ${DshColorPrimaryC1};
    }
    .years-container {
      width: 100%;
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(3, 80px);
      grid-template-rows: repeat(4, 46px);
      grid-column-gap: 76px;
      grid-row-gap: 32px;
    }
    .year-button {
      box-sizing: border-box;
      width: 80px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      border-radius: 12px;
      padding: 0;
      margin: 0;
      background: transparent;
      font-size: ${DshTextSizeXl};
      line-height: ${DshTextLineHeight2xl};
      font-weight: ${DshTextWeight400};
      color: ${DshColorPrimaryC1};
    }
    .year-button:hover {
      color: ${DshColorPrimaryC0};
      background: ${DshColorPrimaryC6};
    }
    .year-button:focus-visible {
      border-radius: 12px;
      outline: 3px solid ${DshColorPrimaryC1};
    }
    .current-year {
      border: 2px solid ${DshColorPrimaryC1};
      color: ${DshColorPrimaryC0};
    }
    .pressed-year {
      background: ${DshColorPrimaryC1};
      color: ${DshColorMonoWhite};
    }
    .pressed-year:hover {
      background: ${DshColorPrimaryC5};
      border-radius:12px;
    }
    .year-locked {
      background: transparent;
      color: ${DshColorSecondaryG4};
      pointer-events: none;
    }
    .year-unlocked {
      cursor: pointer;
    }
    @media (max-width: 47.95rem) {
      .selectors-container {
        width: auto;
        padding: 0px 5px 0px 5px;
      }
      .intermediate-day {
        width: calc(100% + 8px);
      }
      .main {
        border-radius: ${DshBorderRadius100};
        padding: 16px 3px 16px 3px;
        box-shadow: none;
      }
      .selector-label {
        font-size: ${DshTextSizeLg};
        line-height: ${DshTextLineHeightXl};
        color: ${DshColorPrimaryC1};
      }
      .days-header {
        gap: 0px;
      }
      .days-name {
        width: 46px;
        font-size: ${DshTextSizeLg};
        line-height: ${DshTextLineHeightXl};
      }
      .days {
        display: grid;
        grid-template-columns: 46px repeat(5, 46px) 46px;
        grid-template-rows: repeat(6, 48px);
        gap: 0px;
        margin-top:8px;
      }
      .day {
        width: 46px;
        font-size: ${DshTextSizeLg};
        line-height: ${DshTextLineHeightXl};
      }
      .day-button, .year-button {
        font-size: ${DshTextSizeLg};
        line-height: ${DshTextLineHeightXl};
      }
      .main-year{
        padding: 16px 8px;
      }
      .years-container {
        grid-column-gap: 48px;
        grid-row-gap: 32px;
      }
    }
  `,
];

export { stylesDatepicker, stylesDates, customProperties };
