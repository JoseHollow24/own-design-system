import { css } from 'atomico';

export const primaryButton = css`
 :host {
    display: inline-block;
  }
  
  button {
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-family: sans-serif;
    transition: 0.2s;
  }

  .primary {
    background-color: blue;
    color: white;
  }

  .secondary {
    background-color: red;
    color: white;
  }

  button:hover {
    filter: brightness(1.1);
  }
`;
