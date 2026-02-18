/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    // 1. Configuración de controles globales
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // 2. Asegura que el fondo sea neutro para ver bien los componentes
    layout: 'centered',
  },
};

export default preview;