import { html } from 'lit-html';
import Props from '@components/accordions/custom-elements';
import '@components/accordions';

export default {
  title: 'Components/Molecules/Accordions',
  component: 'dsh-accordions',
  tags: ['autodocs'],
};

export const Default = {
  name: 'Grupo de acordeones',
  render: () => html`
    <div style="display:block;max-width:700px;">
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Lorem ipsum dolor sit amet" variant="blue" type="primario">
          <div slot="body">
            <ul>
              <li>Elemento 01</li>
              <li>Elemento 02</li>
              <li>Elemento 03</li>
            </ul>
          </div>
        </dsh-accordion-item>
        <dsh-accordion-item slot="item" label="Lorem ipsum dolor sit amet" variant="blue" type="secundario" sublabel="Subtítulo descriptivo">
          <div slot="body">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quo quidem ratione, totam quibusdam voluptas explicabo officiis.</span>
          </div>
        </dsh-accordion-item>
        <dsh-accordion-item slot="item" label="Acordeón con checkbox" variant="blue" type="primario" ?checkbox="${true}">
          <div slot="body">
            <span>Contenido del acordeón con checkbox.</span>
          </div>
        </dsh-accordion-item>
      </dsh-accordions>
    </div>
  `,
};

export const Variantes = {
  name: 'Variantes de color',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:32px;max-width:700px;">
      <div>
        <p style="font-size:12px;color:#586264;text-transform:uppercase;margin:0 0 8px">Blue</p>
        <dsh-accordions>
          <dsh-accordion-item slot="item" label="Blue" variant="blue" type="primario">
            <div slot="body"><p>Contenido de variante azul.</p></div>
          </dsh-accordion-item>
        </dsh-accordions>
      </div>
      <div>
        <p style="font-size:12px;color:#586264;text-transform:uppercase;margin:0 0 8px">Slate</p>
        <dsh-accordions>
          <dsh-accordion-item slot="item" label="Slate" variant="slate" type="primario">
            <div slot="body"><p>Contenido de variante slate.</p></div>
          </dsh-accordion-item>
        </dsh-accordions>
      </div>
      <div>
        <p style="font-size:12px;color:#586264;text-transform:uppercase;margin:0 0 8px">Purple</p>
        <dsh-accordions>
          <dsh-accordion-item slot="item" label="Purple" variant="purple" type="primario">
            <div slot="body"><p>Contenido de variante púrpura.</p></div>
          </dsh-accordion-item>
        </dsh-accordions>
      </div>
      <div>
        <p style="font-size:12px;color:#586264;text-transform:uppercase;margin:0 0 8px">Neutral</p>
        <dsh-accordions>
          <dsh-accordion-item slot="item" label="Neutral" variant="neutral" type="primario">
            <div slot="body"><p>Contenido de variante neutral.</p></div>
          </dsh-accordion-item>
        </dsh-accordions>
      </div>
    </div>
  `,
};

export const Tipos = {
  name: 'Tipos de acordeón',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:32px;max-width:700px;">
      <div>
        <p style="font-size:12px;color:#586264;text-transform:uppercase;margin:0 0 8px">Primario</p>
        <dsh-accordions>
          <dsh-accordion-item slot="item" label="Tipo primario" variant="blue" type="primario">
            <div slot="body"><p>Fondo azul con relleno completo.</p></div>
          </dsh-accordion-item>
        </dsh-accordions>
      </div>
      <div>
        <p style="font-size:12px;color:#586264;text-transform:uppercase;margin:0 0 8px">Secundario</p>
        <dsh-accordions>
          <dsh-accordion-item slot="item" label="Tipo secundario" sublabel="Con subtítulo" variant="blue" type="secundario">
            <div slot="body"><p>Fondo blanco con borde azul.</p></div>
          </dsh-accordion-item>
        </dsh-accordions>
      </div>
      <div>
        <p style="font-size:12px;color:#586264;text-transform:uppercase;margin:0 0 8px">Borderbottom</p>
        <dsh-accordions>
          <dsh-accordion-item slot="item" label="Tipo borderbottom" variant="blue" type="borderbottom">
            <div slot="body"><p>Solo borde inferior, fondo transparente.</p></div>
          </dsh-accordion-item>
        </dsh-accordions>
      </div>
    </div>
  `,
};

export const Anidado = {
  name: 'Acordeones anidados',
  render: () => html`
    <div style="display:block;max-width:700px;">
      <dsh-accordions>
        <dsh-accordion-item slot="item" label="Acordeón padre" variant="blue" type="primario">
          <div slot="body">
            <p>Contenido del padre.</p>
            <dsh-accordions slot="accordion">
              <dsh-accordion-item slot="item" label="Acordeón hijo 1" variant="blue" type="secundario">
                <div slot="body"><span>Contenido del hijo 1.</span></div>
              </dsh-accordion-item>
              <dsh-accordion-item slot="item" label="Acordeón hijo 2" variant="blue" type="secundario">
                <div slot="body"><span>Contenido del hijo 2.</span></div>
              </dsh-accordion-item>
            </dsh-accordions>
          </div>
        </dsh-accordion-item>
      </dsh-accordions>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props['dsh-accordion-item'].args,
  argTypes: Props['dsh-accordion-item'].argTypes,
  render: (args) => html`
    <div style="display:block;max-width:700px;">
      <dsh-accordions>
        <dsh-accordion-item
          slot="item"
          label="${args.label}"
          sublabel="${args.sublabel}"
          variant="${args.variant}"
          type="${args.type}"
          ?open="${args.open}"
          ?checkbox="${args.checkbox}"
          ?checked="${args.checked}"
        >
          <div slot="body">
            <p>Contenido del acordeón de ejemplo.</p>
          </div>
        </dsh-accordion-item>
      </dsh-accordions>
    </div>
  `,
};
