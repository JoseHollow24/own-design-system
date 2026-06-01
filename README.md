# DSH Design System

Web component library built with [Atomico](https://atomicojs.dev/) and bundled with Vite.

## Setup

```bash
npm install
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run build:tokens` | Compila los design tokens de `tokens/` a `src/generated-tokens/` |
| `npm run storybook` | Inicia Storybook en el puerto 6006 |
| `npm run build` | Compila TypeScript y genera el bundle de la librería en `dist/` |
| `npm run build-storybook` | Genera el sitio estático de Storybook |
| `npm run lint` | Corre ESLint |

## Estructura del proyecto

```
components/          Código fuente de los componentes web
src/
  generated-tokens/  Tokens auto-generados (no editar manualmente)
  stories/           Stories y docs de Storybook
tokens/              Archivos JSON fuente de los design tokens
```

## Pipeline de tokens

1. Editar los archivos JSON en `tokens/`
2. Ejecutar `npm run build:tokens`
3. Se regeneran `src/generated-tokens/tokens.css` y `tokens.js`

## Componentes

| Componente | Tag HTML | Variantes |
|---|---|---|
| Button | `<dsh-button>` | primary, secondary, tertiary |
