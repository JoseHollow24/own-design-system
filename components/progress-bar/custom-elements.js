const SAMPLE_OPTIONS = JSON.stringify([
  { value: 40, color: 'c1', label: 'Segmento A' },
  { value: 35, color: 'v1', label: 'Segmento B' },
  { value: 25, color: 'a3', label: 'Segmento C' },
]);

const Props = {
  args: {
    optionsData: SAMPLE_OPTIONS,
    minValue: 0,
    maxValue: 100,
    labelTopStart: 'Inicio',
    labelTopEnd: 'Fin',
    labelBottomStart: '0%',
    labelBottomEnd: '100%',
  },
  argTypes: {
    optionsData: {
      name: 'options-data',
      description:
        'JSON array de segmentos. Cada objeto requiere <code>value</code> (número), <code>color</code> (clave de token) y <code>label</code> (string opcional).',
      table: { type: { summary: 'string (JSON)' } },
      control: { type: 'text' },
    },
    minValue: {
      name: 'min-value',
      description: 'Valor mínimo del rango de la barra',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    maxValue: {
      name: 'max-value',
      description: 'Valor máximo del rango de la barra',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
    labelTopStart: {
      name: 'label-top-start',
      description: 'Etiqueta superior izquierda',
      table: { type: { summary: 'string' } },
    },
    labelTopEnd: {
      name: 'label-top-end',
      description: 'Etiqueta superior derecha',
      table: { type: { summary: 'string' } },
    },
    labelBottomStart: {
      name: 'label-bottom-start',
      description: 'Etiqueta inferior izquierda',
      table: { type: { summary: 'string' } },
    },
    labelBottomEnd: {
      name: 'label-bottom-end',
      description: 'Etiqueta inferior derecha',
      table: { type: { summary: 'string' } },
    },
  },
};

export default Props;
