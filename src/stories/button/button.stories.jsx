import { html } from "lit-html";
import "../../components/button/button";

export default {
  title: 'Atoms/Button',
  component: 'dsh-button'
};

export const Primary = {
  render: () => html`
    <div class="container">
      <dsh-button id="buttondh" label="Guardar Cambios" primary></dsh-button>
    </div>
  `,
};