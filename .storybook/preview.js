import '../src/generated-tokens/tokens.css';

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Design System',
          'Tokens',
          'Components',
          ['Atoms', ['Button']],
          'Deprecated',
        ],
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;
