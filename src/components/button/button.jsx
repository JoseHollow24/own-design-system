import { c, html, css, Props } from "atomico";

function button({ label, primary, onClick }) {
  return html`
    <host shadowDom>
      <button 
        class=${primary ? "primary" : "secondary"} 
        onclick=${onClick}
      >
        ${label}
      </button>
    </host>
  `;
}

button.props = {
  label: { type: String, value: "My Button" },
  primary: { type: Boolean, value: false },
  onClick: { type: Function },
};

button.styles = css`
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

export const Button = c(button);
customElements.define("dsj-button", Button);