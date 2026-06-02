# Changelog — dsh-button

## [1.1.0] — 2026-06-01

### Added
- Soporte de slots: `slot="left"` y `slot="right"` para íconos, slot por defecto para contenido
- Prop `label` como texto de fallback en el slot principal
- `custom-elements.js` con `args` y `argTypes` para los controles de Storybook
- `index.html` para desarrollo y demo standalone del componente
- `vite.config.js` para build standalone del componente hacia `dist/`
- `web-test-runner.mjs` y `button.test.js` con 7 casos de prueba (props, eventos, estados)
- Stories completas: `Primary`, `Secondary`, `Tertiary`, `Full`, `Slots`, `Playground`, `ReactUsage`
- `CHANGELOG.md` integrado en la documentación de Storybook

### Changed
- Tokens consumidos desde `src/generated-tokens/tokens.js` del propio proyecto (prefijo `Dsh`)
- `.storybook/preview.js` ahora importa `tokens.css`, configura `actions`, `storySort` y `autodocs`
- `.storybook/main.js` con `viteFinal` para resolver aliases `@components` y `@tokens`

### Fixed
- Eliminadas llamadas a `trackInteraction` (función GTM externa no definida en este proyecto)
- Eliminado import de `Fragment` no utilizado

---

## [1.0.0] — 2026-05-01

### Added
- Implementación inicial de `<dsh-button>` usando Atomico sobre Shadow DOM
- Variantes: `primary`, `secondary`, `tertiary`
- Colores: `blue`, `yellow`
- Props booleanas: `disabled`, `loading`, `full`, `fluid`
- Props de enlace: `href`, `target`
- Props de identificación: `id`, `name`, `type`, `ariaLabel`, `width`
- Estilos CSS-in-JS con tokens del Design System
- Evento `onClick` con `bubbles: true` y `composed: true`
- Soporte de navegación por teclado (`Enter`, `Space`)
