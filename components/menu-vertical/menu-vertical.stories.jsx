import { html } from 'lit-html';
import '@components/menu-vertical';

export default {
  title: 'Components/Molecules/MenuVertical',
  component: 'dsh-menu-vertical',
  tags: ['autodocs'],
};

export const Default = {
  name: 'Default',
  render: () => html`
    <div style="width:260px;height:500px;background:white;border:1px solid #dfe3e5;">
      <dsh-menu-vertical>
        <dsh-menu-vertical-item
          slot="menu-item"
          item-value="Inicio"
          item-identifier="inicio"
          href="#"
          desktop-icon-name="fa-house"
          mobile-icon-name="fa-house"
          is-home-item
        ></dsh-menu-vertical-item>

        <dsh-menu-vertical-item
          slot="menu-item"
          item-value="Mi cuenta"
          item-identifier="mi-cuenta"
          href="#"
        >
          <dsh-menu-vertical-subitem slot="sub-item" href="#" sub-item-identifier="datos">
            Datos personales
          </dsh-menu-vertical-subitem>
          <dsh-menu-vertical-subitem slot="sub-item" href="#" sub-item-identifier="seguridad">
            Seguridad
          </dsh-menu-vertical-subitem>
        </dsh-menu-vertical-item>

        <dsh-menu-vertical-item
          slot="menu-item"
          item-value="Beneficios"
          item-identifier="products"
          href="#"
          desktop-icon-name="fa-star"
        >
          <dsh-menu-vertical-subitem slot="sub-item" href="#" sub-item-identifier="offers">
            Descuentos
          </dsh-menu-vertical-subitem>
          <dsh-menu-vertical-subitem slot="sub-item" href="#" sub-item-identifier="convenios">
            Convenios
          </dsh-menu-vertical-subitem>
        </dsh-menu-vertical-item>

        <dsh-menu-vertical-item
          slot="menu-item"
          item-value="Configuración"
          item-identifier="config"
          href="#"
        ></dsh-menu-vertical-item>
      </dsh-menu-vertical>
    </div>
  `,
};

export const WithActiveItem = {
  name: 'Con item activo',
  render: () => html`
    <div style="width:260px;height:400px;background:white;border:1px solid #dfe3e5;">
      <dsh-menu-vertical>
        <dsh-menu-vertical-item
          slot="menu-item"
          item-value="Mi cuenta"
          item-identifier="cuenta"
          href="#"
          active
        >
          <dsh-menu-vertical-subitem slot="sub-item" href="#" sub-item-identifier="datos" active>
            Datos personales
          </dsh-menu-vertical-subitem>
          <dsh-menu-vertical-subitem slot="sub-item" href="#" sub-item-identifier="cambio">
            Cambiar contraseña
          </dsh-menu-vertical-subitem>
        </dsh-menu-vertical-item>

        <dsh-menu-vertical-item
          slot="menu-item"
          item-value="Beneficios"
          item-identifier="products"
          href="#"
        ></dsh-menu-vertical-item>
      </dsh-menu-vertical>
    </div>
  `,
};
