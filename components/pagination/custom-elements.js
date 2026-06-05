const Props = {
  args: {
    pages: 10,
    selectPage: 1,
    shadow: false,
  },
  argTypes: {
    pages: {
      name: 'pages',
      description: 'Número total de páginas',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
    },
    selectPage: {
      name: 'select-page',
      description: 'Página seleccionada por defecto',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    shadow: {
      name: 'shadow',
      description: 'Agrega sombra al contenedor de paginación',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    nextPage: {
      name: 'nextPage',
      description: 'Evento al avanzar página',
      table: { category: 'Events', type: { summary: 'CustomEvent' } },
    },
    prevPage: {
      name: 'prevPage',
      description: 'Evento al retroceder página',
      table: { category: 'Events', type: { summary: 'CustomEvent' } },
    },
    currentPage: {
      name: 'currentPage',
      description: 'Evento al seleccionar una página específica',
      table: { category: 'Events', type: { summary: 'CustomEvent' } },
    },
  },
};

export default Props;
