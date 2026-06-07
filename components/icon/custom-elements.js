const sizes = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
const faStyleOptions = ['fas', 'far'];

const Props = {
  args: {
    iconName: 'fa-bell',
    faStyles: 'fas',
    color: 'g1',
    size: 's1',
    class: '',
  },
  argTypes: {
    iconName: {
      name: 'iconName',
      description: 'Nombre de la clase de ícono FontAwesome (ej: fa-bell, fa-user, fa-star)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fa-bell' },
      },
    },
    faStyles: {
      name: 'faStyles',
      description: 'Familia de íconos FontAwesome que determina el estilo visual del ícono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fas' },
      },
      control: { type: 'select' },
      options: faStyleOptions,
    },
    color: {
      name: 'color',
      description: 'Token de color del Design System aplicado al ícono (ej: g1, c1, r1, v1, a1)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'g1' },
      },
    },
    size: {
      name: 'size',
      description: 'Tamaño del ícono usando la escala del Design System (s1 = más pequeño, s7 = más grande)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 's1' },
      },
      control: { type: 'select' },
      options: sizes,
    },
    class: {
      name: 'class',
      description: 'Clases CSS adicionales para personalización externa',
      table: { type: { summary: 'string' } },
    },
  },
};

export default Props;
