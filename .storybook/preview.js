import '../src/generated-tokens/tokens.css';
import './docs-override.css';

const DARK_BG = '#252b3b';
const LIGHT_BG = '#f6f7f7';

export const globalTypes = {
  theme: {
    name: 'Tema',
    description: 'Alternar modo claro / oscuro',
    defaultValue: 'light',
    toolbar: {
      icon: 'moon',
      items: [
        { value: 'light', icon: 'sun', title: 'Modo claro' },
        { value: 'dark', icon: 'moon', title: 'Modo oscuro' },
      ],
      dynamicTitle: true,
    },
  },
};

const withDarkMode = (StoryFn, context) => {
  const isDark = context.globals?.theme === 'dark';

  document.body.style.backgroundColor = isDark ? DARK_BG : LIGHT_BG;
  document.body.style.transition = 'background-color 0.2s ease';

  setTimeout(() => {
    document.querySelectorAll('*').forEach((el) => {
      if (el.tagName?.toLowerCase().startsWith('dsh-')) {
        if (isDark) el.setAttribute('dark-mode', '');
        else el.removeAttribute('dark-mode');
      }
    });
  }, 0);

  return StoryFn(context);
};

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  decorators: [withDarkMode],
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        xs:  { name: 'Mobile S — 320px',   styles: { width: '320px',  height: '568px'  } },
        sm:  { name: 'Mobile M — 375px',   styles: { width: '375px',  height: '812px'  } },
        md:  { name: 'Mobile L — 428px',   styles: { width: '428px',  height: '926px'  } },
        tab: { name: 'Tablet — 768px',     styles: { width: '768px',  height: '1024px' } },
        lg:  { name: 'Desktop — 1280px',   styles: { width: '1280px', height: '800px'  } },
        xl:  { name: 'Desktop XL — 1440px',styles: { width: '1440px', height: '900px'  } },
      },
      defaultViewport: 'lg',
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'landmark-one-main', enabled: false },
        ],
      },
    },
    options: {
      storySort: {
        order: [
          'Design System',
          ['Bienvenida'],
          'Tokens',
          'Components',
          ['Atoms', [
            'Button',
            'Icon',
            'Tag',
            'Badge',
            'Loading',
            'Checkbox',
            'Radio',
            'Input',
            'Textarea',
            'Select',
          ]],
          'Deprecated',
        ],
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;
