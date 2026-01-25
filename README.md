# AceUI

> Modern React UI component library for building beautiful user interfaces. Production-ready, accessible, and easy to customize.

AceUI provides a comprehensive collection of production-ready React components that are easy to install, customize, and use.

## Features

- 🎨 **Beautiful design** - Modern, clean component aesthetics
- ⚡ **Easy to use** - Install via npm and start building immediately
- 🎯 **Fully customizable** - Adaptable to your design system
- ♿ **Accessible** - Built with accessibility best practices
- 📦 **Lightweight** - Optimized bundle size
- 🔧 **Developer friendly** - Great TypeScript support and documentation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aceuidev/aceui.git
cd aceui
```

2. Install dependencies (from root):
```bash
npm install
```

This installs all workspace dependencies. The demo's `postinstall` script automatically builds all components.

3. Start the demo application:
```bash
cd demo
npm run dev
```

Or from root:
```bash
npm run demo
```

The demo will be available at `http://localhost:5173` (or next available port).

## 📁 Project Structure

This is an **npm workspaces** monorepo:

```
aceui/
├── packages/
│   └── components/
│       ├── button/          # @aceuidev/button package
│       └── chip/            # @aceuidev/chip package
├── demo/                    # Demo application
│   └── src/
│       └── App.tsx         # Demo showcase
└── package.json            # Root workspace config
```

Workspaces are configured in the root `package.json`:
- `packages/components/*` - Component packages
- `demo` - Demo application

## 🛠️ Development

### Working on Components

Each component is an independent package. Work directly from component directories:

**Button Component:**
```bash
cd packages/components/button
npm run dev    # Watch mode - rebuilds on changes
npm run build  # Build once
npm run clean  # Remove dist folder
```

**Chip Component:**
```bash
cd packages/components/chip
npm run dev    # Watch mode - rebuilds on changes
npm run build  # Build once
npm run clean  # Remove dist folder
```

### Creating a New Component

When creating a new component (e.g., `alert`, `accordion`, etc.):

1. **Create component in `/packages/components/` folder:**
   ```bash
   packages/components/alert/
   ├── src/
   │   ├── Alert.tsx
   │   └── index.ts
   ├── package.json
   └── tsconfig.json
   ```

2. **Update `demo/vite.config.ts`:**
   Add the new component to `optimizeDeps.exclude`:
   ```typescript
   optimizeDeps: {
     exclude: ['@aceuidev/button', '@aceuidev/chip', '@aceuidev/alert'], // Add new component here
   },
   ```

3. **Update `demo/package.json`:**
   - Add to `dependencies`:
     ```json
     "@aceuidev/alert": "*"
     ```
   - Add build script:
     ```json
     "build:alert": "npm run build --workspace=@aceuidev/alert"
     ```
   - Add dev script:
     ```json
     "dev:alert": "npm run dev --workspace=@aceuidev/alert"
     ```
   - Update `build:all` script:
     ```json
     "build:all": "npm run build --workspace=@aceuidev/button && npm run build --workspace=@aceuidev/chip && npm run build --workspace=@aceuidev/alert"
     ```
   - Update `dev:all` script (if using parallel):
     ```json
     "dev:all": "npm-run-all --parallel dev:button dev:chip dev:alert dev"
     ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

### Demo Application Scripts

All scripts are run from the `demo/` directory:

#### Development

```bash
# Run demo only (components auto-build if missing)
npm run dev

# Watch button component + run demo (parallel)
npm run dev:with:button

# Watch chip component + run demo (parallel)
npm run dev:with:chip

# Watch all components + run demo (parallel)
npm run dev:all

# Watch individual components (separate terminals)
npm run dev:button    # Terminal 1
npm run dev:chip      # Terminal 2
npm run dev           # Terminal 3
```

#### Building

```bash
# Build all components
npm run build:all

# Build individual components
npm run build:button
npm run build:chip

# Build demo (includes components)
npm run build
```

#### Cleaning

```bash
# Remove all component dist folders
npm run clean
```

#### Preview

```bash
# Preview production build
npm run preview
```

## 📦 Available Scripts

### Root Scripts (`package.json`)

| Script | Description |
|--------|-------------|
| `build:all` | Build all workspaces |
| `clean` | Clean all workspace dist folders |
| `demo` | Run demo application |

### Demo Scripts (`demo/package.json`)

| Script | Description |
|--------|-------------|
| `postinstall` | Automatically builds all components |
| `dev` | Start Vite dev server |
| `dev:button` | Watch button component in watch mode |
| `dev:chip` | Watch chip component in watch mode |
| `dev:with:button` | Watch button + run demo (parallel) |
| `dev:with:chip` | Watch chip + run demo (parallel) |
| `dev:all` | Watch all components + run demo (parallel) |
| `build:all` | Build all components |
| `build:button` | Build button component only |
| `build:chip` | Build chip component only |
| `build` | Build all components + demo |
| `clean` | Remove all component `dist/` folders |
| `preview` | Preview production build |

### Component Scripts

Each component (`packages/components/*/package.json`) has:

| Script | Description |
|--------|-------------|
| `dev` | Watch mode - rebuilds on file changes |
| `build` | Build component (ESM + CJS + types) |
| `clean` | Remove `dist/` folder |
| `prepublishOnly` | Clean + build before publishing |

## 🎯 Development Workflow

### Recommended Workflow (Option 1: Parallel)

**Watch all components + demo:**
```bash
cd demo
npm run dev:all
```

**Watch button + demo:**
```bash
cd demo
npm run dev:with:button
```

**Watch chip + demo:**
```bash
cd demo
npm run dev:with:chip
```

These commands run component watch mode and demo in parallel.

### Recommended Workflow (Option 2: Separate Terminals)

**Terminal 1 - Watch button:**
```bash
cd packages/components/button
npm run dev
```

**Terminal 2 - Watch chip:**
```bash
cd packages/components/chip
npm run dev
```

**Terminal 3 - Run demo:**
```bash
cd demo
npm run dev
```

Changes to components will auto-rebuild, and the demo will hot-reload.

## 🔧 First-Time Setup

When cloning the repository:

1. `dist/` folders are gitignored (not in repo)
2. Run `npm install` from root (installs all workspace dependencies)
3. The demo's `postinstall` script automatically builds all components
4. You're ready to go! 🎉

**Note:** This project uses npm workspaces. All dependencies are hoisted to the root `node_modules`, and components are linked via workspace protocol (`*`).

## 📝 Notes

- **Monorepo**: Uses npm workspaces for dependency management
- Components are built with **tsup** (ESM + CJS + TypeScript declarations)
- Demo uses **Vite** for fast HMR
- Components use **React 19.2.3** (peer dependency: React ^18.0.0 || ^19.0.0)
- All components support TypeScript out of the box
- Workspace commands use `--workspace` flag instead of `--prefix`

## 📄 License

MIT

## 🔗 Links

- [Homepage](https://aceui.dev)
- [GitHub](https://github.com/aceuidev/aceui)
- [Issues](https://github.com/aceuidev/aceui/issues)
