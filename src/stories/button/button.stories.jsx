import { html } from 'lit-html';
import Props from '@components/button/custom-elements';
import '@components/button';

export default {
  title: 'Components/Atoms/Button',
  component: 'dsh-button',
  tags: ['autodocs'],
  ...Props,
};

export const Primary = {
  name: 'Primary',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="primary" color="blue">Primary Blue</dsh-button>
      <dsh-button variant="primary" color="yellow">Primary Yellow</dsh-button>
      <dsh-button variant="primary" color="blue" disabled>Primary Disabled</dsh-button>
      <dsh-button variant="primary" color="blue" loading>Primary Loading</dsh-button>
    </div>
  `,
};

export const Secondary = {
  name: 'Secondary',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="secondary" color="blue">Secondary Blue</dsh-button>
      <dsh-button variant="secondary" color="blue" disabled>Secondary Disabled</dsh-button>
      <dsh-button variant="secondary" color="blue" loading>Secondary Loading</dsh-button>
    </div>
  `,
};

export const Tertiary = {
  name: 'Tertiary',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="tertiary" color="blue">Tertiary Blue</dsh-button>
      <dsh-button variant="tertiary" color="blue" disabled>Tertiary Disabled</dsh-button>
      <dsh-button variant="tertiary" color="blue" loading>Tertiary Loading</dsh-button>
    </div>
  `,
};

export const Full = {
  name: 'Full Width',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;width:400px;">
      <dsh-button variant="primary" color="blue" full>Primary Blue Full</dsh-button>
      <dsh-button variant="secondary" color="blue" full>Secondary Blue Full</dsh-button>
      <dsh-button variant="tertiary" color="blue" full>Tertiary Blue Full</dsh-button>
    </div>
  `,
};

export const Slots = {
  name: 'Slots (íconos)',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="primary" color="blue">
        <span slot="left">←</span>
        Ícono izquierda
      </dsh-button>
      <dsh-button variant="secondary" color="blue">
        Ícono derecha
        <span slot="right">→</span>
      </dsh-button>
      <dsh-button variant="tertiary" color="blue">
        <span slot="left">★</span>
        Ambos íconos
        <span slot="right">→</span>
      </dsh-button>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-button
      variant="${args.variant}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      ?full="${args.full}"
      ?fluid="${args.fluid}"
      aria-label="${args.ariaLabel}"
    >${args.label || 'Button'}</dsh-button>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
      <dsh-button variant="primary" color="blue">Primary Blue</dsh-button>
      <dsh-button variant="secondary" color="blue">Secondary Blue</dsh-button>
      <dsh-button variant="tertiary" color="blue">Tertiary Blue</dsh-button>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'own-design-system/components/button';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-button': React.HTMLAttributes<HTMLElement> & {
        variant?: 'primary' | 'secondary' | 'tertiary';
        color?: 'blue' | 'yellow';
        disabled?: boolean;
        loading?: boolean;
        full?: boolean;
        fluid?: boolean;
        href?: string;
        target?: string;
        label?: string;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
// El evento se escucha directamente con la prop onbuttonclick (lowercase)
function MyButton() {
  return (
    <dsh-button
      variant="primary"
      color="blue"
      onbuttonclick={(e) => console.log('buttonClick', e)}
    >
      Primary Blue
    </dsh-button>
  );
}

// ─── React 18 — via ref + addEventListener ──────────────────────────────────
import { useRef, useEffect } from 'react';

function MyButton() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: Event) => console.log('buttonClick', e);
    el.addEventListener('buttonClick', handler);
    return () => el.removeEventListener('buttonClick', handler);
  }, []);

  return (
    <dsh-button ref={ref} variant="primary" color="blue">
      Primary Blue
    </dsh-button>
  );
}`,
      },
    },
  },
};
