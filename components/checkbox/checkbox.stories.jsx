import { html } from 'lit-html';
import { userEvent, expect } from 'storybook/test';
import Props from '@components/checkbox/custom-elements';
import '@components/checkbox';

export default {
  title: 'Components/Atoms/Checkbox',
  component: 'dsh-checkbox',
  tags: ['autodocs'],
  ...Props,
};

export const Default = {
  name: 'Default',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="cb1" name="group1" label="Opción 1" value="opt1"></dsh-checkbox>
      <dsh-checkbox id="cb2" name="group1" label="Opción 2" value="opt2"></dsh-checkbox>
      <dsh-checkbox id="cb3" name="group1" label="Opción 3 (required)" value="opt3" required></dsh-checkbox>
    </div>
  `,
};

export const Checked = {
  name: 'Checked',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="ch1" name="group2" label="Marcado" value="val1" checked></dsh-checkbox>
      <dsh-checkbox id="ch2" name="group2" label="Sin marcar" value="val2"></dsh-checkbox>
    </div>
  `,
};

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="d1" name="group3" label="Deshabilitado" value="val1" disabled></dsh-checkbox>
      <dsh-checkbox id="d2" name="group3" label="Deshabilitado marcado" value="val2" disabled checked></dsh-checkbox>
    </div>
  `,
};

export const Error = {
  name: 'Error',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="e1" name="group4" label="Con error" value="val1" error></dsh-checkbox>
      <dsh-checkbox id="e2" name="group4" label="Error marcado" value="val2" error checked></dsh-checkbox>
    </div>
  `,
};

export const Indeterminate = {
  name: 'Indeterminate',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="ind1" name="group5" label="Estado indeterminado (selección parcial)" value="all" indeterminate></dsh-checkbox>
      <dsh-checkbox id="ind2" name="group5" label="Opción A" value="a" checked></dsh-checkbox>
      <dsh-checkbox id="ind3" name="group5" label="Opción B" value="b"></dsh-checkbox>
    </div>
  `,
};

export const DarkMode = {
  name: 'Dark mode',
  render: () => html`
    <div style="background:#1a1a2e;padding:16px;border-radius:8px;display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="dm1" name="group6" label="Dark mode" value="val1" dark></dsh-checkbox>
      <dsh-checkbox id="dm2" name="group6" label="Dark mode marcado" value="val2" dark checked></dsh-checkbox>
      <dsh-checkbox id="dm3" name="group6" label="Dark mode deshabilitado" value="val3" dark disabled></dsh-checkbox>
    </div>
  `,
};

export const Playground = {
  name: 'Playground',
  args: Props.args,
  argTypes: Props.argTypes,
  render: (args) => html`
    <dsh-checkbox
      id="${args.id}"
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      ?focus="${args.focus}"
      ?checked="${args.checked}"
      ?error="${args.error}"
      ?required="${args.required}"
      ?disabled="${args.disabled}"
      ?indeterminate="${args.indeterminate}"
      ?dark="${args.dark}"
      tab-index="${args.tabIndex}"
    ></dsh-checkbox>
  `,
};

export const ReactUsage = {
  name: 'React — Cómo usarlo',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="r1" name="terms" label="Acepto los términos y condiciones" value="accepted"></dsh-checkbox>
      <dsh-checkbox id="r2" name="newsletter" label="Suscribirse al boletín" value="subscribed" checked></dsh-checkbox>
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `// 1. Registrar el componente una vez en el entry de tu app
import 'josehollow-design-system/components/checkbox';

// 2. Declarar el tipo para TypeScript (global.d.ts)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dsh-checkbox': React.HTMLAttributes<HTMLElement> & {
        id?: string;
        name?: string;
        label?: string;
        value?: string;
        focus?: boolean;
        checked?: boolean;
        error?: boolean;
        required?: boolean;
        disabled?: boolean;
        indeterminate?: boolean;
        dark?: boolean;
        tabIndex?: number;
      };
    }
  }
}

// ─── React 19 — soporte nativo de custom elements ───────────────────────────
function TermsCheckbox() {
  return (
    <dsh-checkbox
      id="terms"
      name="terms"
      label="Acepto los términos y condiciones"
      value="accepted"
      oncheckbox-change={(e) => console.log('change', e.detail)}
    />
  );
}

// ─── React 18 — via ref + addEventListener ──────────────────────────────────
import { useRef, useEffect } from 'react';

function TermsCheckbox() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: CustomEvent) => {
      const { checked, value, name, id } = e.detail;
      console.log('checkbox-change', { checked, value, name, id });
    };
    el.addEventListener('checkbox-change', handler);
    return () => el.removeEventListener('checkbox-change', handler);
  }, []);

  return (
    <dsh-checkbox
      ref={ref}
      id="terms"
      name="terms"
      label="Acepto los términos y condiciones"
      value="accepted"
    />
  );
}`,
      },
    },
  },
};

export const Interaction = {
  name: 'Interacción — Toggle',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dsh-checkbox id="cb-interaction" name="test" value="val1">Acepto los términos y condiciones</dsh-checkbox>
      <dsh-checkbox id="cb-disabled" name="test" value="val2" disabled>Opción deshabilitada</dsh-checkbox>
    </div>
  `,
  play: async ({ canvasElement }) => {
    await customElements.whenDefined('dsh-checkbox');

    const host = canvasElement.querySelector('#cb-interaction');
    await expect(host).not.toBeNull();
    await expect(host.checked).toBe(false);

    // Esperar a que el shadow DOM esté listo
    await new Promise(r => setTimeout(r, 50));

    let lastEvent = null;
    host.addEventListener('checkbox-change', (e) => { lastEvent = e.detail; });

    const labelEl = host?.shadowRoot?.querySelector('dsh-checkbox-label');
    const input = labelEl?.querySelector('input') ?? host?.shadowRoot?.querySelector('input');
    if (input) await userEvent.click(input);

    await expect(host.checked).toBe(true);
    await expect(lastEvent?.checked).toBe(true);

    // Segundo click → desmarca
    if (input) await userEvent.click(input);
    await expect(host.checked).toBe(false);

    // El deshabilitado no cambia
    const disabled = canvasElement.querySelector('#cb-disabled');
    await expect(disabled.checked).toBe(false);
    const disabledLabelEl = disabled?.shadowRoot?.querySelector('dsh-checkbox-label');
    const disabledInput = disabledLabelEl?.querySelector('input') ?? disabled?.shadowRoot?.querySelector('input');
    if (disabledInput) await userEvent.click(disabledInput);
    await expect(disabled.checked).toBe(false);
  },
};
