# Tic Tac Toe

[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![ESLint](https://img.shields.io/badge/ESLint-10.2.1-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

A modern, interactive Tic Tac Toe game built with React and Vite. Features include winner detection, turn tracking, game reset, and celebratory animations.

## Key Features

- Two-player local gameplay (X and O)
- Automatic winner detection with diagonal, horizontal, and vertical line validation
- Turn indicator showing current player
- Game reset button to start a new game
- Winner modal with celebratory confetti animation
- Draw detection when the board is full with no winner

## Tech Stack

- **Framework**: React 19.2.5
- **Build Tool**: Vite 8.0.10
- **Styling**: CSS (custom styles in App.css and index.css)
- **Animation**: canvas-confetti 1.9.4
- **Linting**: ESLint 10.2.1

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies defined in `package.json`, including:

- react and react-dom
- canvas-confetti
- Vite and its React plugin
- ESLint and related plugins

### 2. Start Development Server

```bash
npm run dev
```

This starts the Vite development server with Hot Module Replacement (HMR). Open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

### 3. Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder. This uses Vite's build tool to bundle and minify the application.

### 4. Preview Production Build

```bash
npm run preview
```

Serves the production build locally to test how the app will behave in production.

### 5. Run Linter

```bash
npm run lint
```

Runs ESLint to check code quality and enforce style conventions.

## Available Scripts

| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Create production build           |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint code quality checks    |

## Project Structure

```
tic-tac-toe/
├── public/              # Static assets
│   ├── favicon.svg      # App favicon
│   └── icons.svg        # SVG icons
├── src/
│   ├── assets/          # Images and media
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/      # React components
│   │   └── game/
│   │       ├── BoardGame.jsx    # Main game board (3x3 grid)
│   │       ├── ButtonReset.jsx  # Reset game button
│   │       ├── Square.jsx       # Individual cell component
│   │       ├── Turns.jsx        # Turn indicator component
│   │       └── WinnerModal.jsx  # Winner announcement modal
│   ├── Hooks/           # Custom React hooks
│   │   └── useGame.js   # Game state management hook
│   ├── logic/           # Game logic functions
│   │   └── logic.js     # Winner detection & end game checks
│   ├── constants.js     # Constants (winner combinations)
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Architecture Overview

### Game Logic (`src/logic/logic.js`)

The game logic consists of two exported functions:

- **`checkWinner(boardToCheck)`**: Iterates through `WINNER_COMBOS` (defined in constants.js) to check if three matching symbols align in any winning combination. Returns the winner symbol ('X' or 'O') or `null` if no winner.

- **`checkEndGame(newBoard)`**: Uses `Array.every()` to verify if all board positions are filled, indicating a draw or completed game.

### Constants (`src/constants.js`)

Contains the winning combinations as a 2D array of indices:

- Horizontal lines: [0,1,2], [3,4,5], [6,7,8]
- Vertical lines: [0,3,6], [1,4,7], [2,5,8]
- Diagonal lines: [0,4,8], [2,4,6]

### Custom Hook (`src/Hooks/useGame.js`)

Manages all game state including:

- Board state (array of 9 positions)
- Current turn (X or O)
- Winner detection
- Game reset functionality

### Components

- **`Square.jsx`**: Renders a single cell. Accepts `value` (X, O, or null) and `onClick` handler.

- **`BoardGame.jsx`**: Renders the 3x3 grid of squares using CSS Grid.

- **`Turns.jsx`**: Displays whose turn it is and the history of moves.

- **`WinnerModal.jsx`**: Shows winner announcement with confetti animation using canvas-confetti library.

- **`ButtonReset.jsx`**: Resets the game to initial state.

## Environment Variables

This project does not require any environment variables. All configuration is handled through package.json and Vite's default settings.

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. You can also stop other processes using that port or specify a different port:

```bash
npm run dev -- --port 3000
```

### Node Version Issues

Ensure you're using Node.js 18 or higher. Check your version:

```bash
node --version
```

If you need to manage multiple Node versions, consider using nvm (Node Version Manager).

### ESLint Errors

If `npm run lint` shows errors, you can fix some issues automatically:

```bash
npm run lint -- --fix
```

Not all errors can be auto-fixed; some may require manual changes.

## License

MIT

---

# Versión en Español

[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![ESLint](https://img.shields.io/badge/ESLint-10.2.1-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

## Descripción

Un juego interactivo moderno de Tres en Raya construido con React y Vite. Incluye detección de ganador, seguimiento de turnos, reinicio del juego y animaciones festivas.

## Características Principales

- Juego local para dos jugadores (X y O)
- Detección automática de ganador con validación de líneas diagonales, horizontales y verticales
- Indicador de turno mostrando el jugador actual
- Botón de reinicio para comenzar un nuevo juego
- Modal de ganador con animación de confeti
- Detección de empate cuando el tablero está lleno sin ganador

## Stack Tecnológico

- **Framework**: React 19.2.5
- **Herramienta de Build**: Vite 8.0.10
- **Estilos**: CSS (estilos personalizados en App.css e index.css)
- **Animación**: canvas-confetti 1.9.4
- **Linting**: ESLint 10.2.1

## Requisitos Previos

- Node.js 18 o superior
- npm (incluido con Node.js)

## Primeros Pasos

### 1. Instalar Dependencias

```bash
npm install
```

Esto instalará todas las dependencias definidas en `package.json`, incluyendo:

- react y react-dom
- canvas-confetti
- Vite y su plugin de React
- ESLint y plugins relacionados

### 2. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Esto inicia el servidor de desarrollo de Vite con Hot Module Replacement (HMR). Abre tu navegador en la URL mostrada en la terminal (típicamente `http://localhost:5173`).

### 3. Construir para Producción

```bash
npm run build
```

Crea una build de producción optimizada en la carpeta `dist/`. Utiliza la herramienta de build de Vite para empaquetar y minificar la aplicación.

### 4. Previsualizar Build de Producción

```bash
npm run preview
```

Sirve la build de producción localmente para probar cómo funcionará la app en producción.

### 5. Ejecutar Linter

```bash
npm run lint
```

Ejecuta ESLint para verificar la calidad del código y aplicar las convenciones de estilo.

## Scripts Disponibles

| Script            | Descripción                                           |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Iniciar servidor de desarrollo con HMR                |
| `npm run build`   | Crear build de producción                             |
| `npm run preview` | Previsualizar build de producción localmente          |
| `npm run lint`    | Ejecutar verificación de calidad de código con ESLint |

## Estructura del Proyecto

```
tic-tac-toe/
├── public/              # Activos estáticos
│   ├── favicon.svg      # Favicon de la app
│   └── icons.svg        # Iconos SVG
├── src/
│   ├── assets/          # Imágenes y medios
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/      # Componentes de React
│   │   └── game/
│   │       ├── BoardGame.jsx    # Tablero principal (cuadrícula 3x3)
│   │       ├── ButtonReset.jsx  # Botón de reinicio
│   │       ├── Square.jsx       # Celda individual
│   │       ├── Turns.jsx        # Componente indicador de turnos
│   │       └── WinnerModal.jsx  # Modal de anuncio de ganador
│   ├── Hooks/           # Hooks personalizados de React
│   │   └── useGame.js   # Hook de gestión del estado del juego
│   ├── logic/           # Funciones de lógica del juego
│   │   └── logic.js     # Detección de ganador y verificación de fin de juego
│   ├── constants.js     # Constantes (combinaciones ganadoras)
│   ├── App.jsx          # Componente principal App
│   ├── App.css          # Estilos específicos de la app
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada de la aplicación
├── index.html           # Punto de entrada HTML
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── eslint.config.js     # Configuración de ESLint
```

## Visión General de la Arquitectura

### Lógica del Juego (`src/logic/logic.js`)

La lógica del juego consiste en dos funciones exportadas:

- **`checkWinner(boardToCheck)`**: Itera a través de `WINNER_COMBOS` (definido en constants.js) para verificar si tres símbolos iguales se alinean en cualquier combinación ganadora. Retorna el símbolo del ganador ('X' o 'O') o `null` si no hay ganador.

- **`checkEndGame(newBoard)`**: Utiliza `Array.every()` para verificar si todas las posiciones del tablero están llenas, indicando un empat o juego completado.

### Constantes (`src/constants.js`)

Contiene las combinaciones ganadoras como un array 2D de índices:

- Líneas horizontales: [0,1,2], [3,4,5], [6,7,8]
- Líneas verticales: [0,3,6], [1,4,7], [2,5,8]
- Líneas diagonales: [0,4,8], [2,4,6]

### Hook Personalizado (`src/Hooks/useGame.js`)

Gestiona todo el estado del juego incluyendo:

- Estado del tablero (array de 9 posiciones)
- Turno actual (X o O)
- Detección de ganador
- Funcionalidad de reinicio del juego

### Componentes

- **`Square.jsx`**: Renderiza una celda individual. Acepta `value` (X, O, o null) y el manejador `onClick`.

- **`BoardGame.jsx`**: Renderiza la cuadrícula 3x3 de celdas usando CSS Grid.

- **`Turns.jsx`**: Muestra de quién es el turno y el historial de movimientos.

- **`WinnerModal.jsx`**: Muestra el anuncio del ganador con animación de confeti usando la librería canvas-confetti.

- **`ButtonReset.jsx`**: Reinicia el juego al estado inicial.

## Variables de Entorno

Este proyecto no requiere ninguna variable de entorno. Toda la configuración se maneja a través de package.json y la configuración predeterminada de Vite.

## Solución de Problemas

### Puerto Ya en Uso

Si el puerto 5173 ya está en uso, Vite automáticamente usará el siguiente puerto disponible. También puedes detener otros procesos que usen ese puerto o especificar un puerto diferente:

```bash
npm run dev -- --port 3000
```

### Problemas con la Versión de Node

Asegúrate de estar usando Node.js 18 o superior. Verifica tu versión:

```bash
node --version
```

Si necesitas gestionar múltiples versiones de Node, considera usar nvm (Node Version Manager).

### Errores de ESLint

Si `npm run lint` muestra errores, puedes corregir algunos automáticamente:

```bash
npm run lint -- --fix
```

No todos los errores pueden corregirse automáticamente; algunos pueden requerir cambios manuales.

## Licencia

MIT

