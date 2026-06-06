const segments = ['neutral', 'blue', 'purple', 'slate'];
const targets = ['_self', '_blank'];

const Props = {
  args: {
    icon: 'fa-shield-check',
    faStyles: 'fas',
    title: 'Panel de usuario',
    subtitle: 'Accede a tus herramientas',
    segment: 'blue',
    link: '/',
    target: '_self',
    linkText: '',
    tag: '',
    id: 'direct-access-1',
  },
  argTypes: {
    icon: {
      name: 'icon',
      description: 'Nombre del ícono Font Awesome (e.g. fa-shield-check)',
      table: { type: { summary: 'string' } },
    },
    faStyles: {
      name: 'fa-styles',
      description: 'Clase FA: fas (solid), far (regular), fal (light), fab (brands)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fas' },
      },
      control: { type: 'select' },
      options: ['fas', 'far', 'fal', 'fab'],
    },
    title: {
      name: 'title',
      description: 'Título del acceso directo',
      table: { type: { summary: 'string' } },
    },
    subtitle: {
      name: 'subtitle',
      description: 'Subtítulo o descripción corta',
      table: { type: { summary: 'string' } },
    },
    segment: {
      name: 'segment',
      description: 'Segmento que determina el color del ícono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' },
      },
      control: { type: 'select' },
      options: segments,
    },
    link: {
      name: 'link',
      description: 'URL de destino del acceso directo',
      table: { type: { summary: 'string' } },
    },
    target: {
      name: 'target',
      description: 'Atributo target del enlace. Usar _blank muestra el footer con ícono externo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' },
      },
      control: { type: 'select' },
      options: targets,
    },
    linkText: {
      name: 'link-text',
      description: 'Texto del footer (visible cuando target="_blank")',
      table: { type: { summary: 'string' } },
    },
    tag: {
      name: 'tag',
      description: 'Etiqueta flotante encima de la tarjeta',
      table: { type: { summary: 'string' } },
    },
  },
};

export default Props;
