# What is a bundler?

You write code like this:

```js
import App from "./App";

function App() {
  return <h1>Hello</h1>;
}
```

**But the browser:**

- ❌ Does not understand JSX
- ❌ Does not handle module imports this way
- ❌ Should not load hundreds of files

Your source code is **developer-friendly**, not **browser-friendly**.

👉 Bundlers bridge this gap.

A **bundler** converts your frontend source code into **browser-ready files**.

It:

- Resolves all `import` dependencies
- Transpiles unsupported syntax (JSX, modern JavaScript)
- Bundles files for efficient browser loading
- Outputs optimized production assets

## What gets bundled

- JavaScript / JSX
- CSS / SCSS
- Images, fonts
- Third-party libraries (`node_modules`)

> Many bundlers exist (Webpack, Vite, Rollup, Parcel, esbuild, etc.).
> Below are the two most commonly used in React projects.

## How bundling works (simplified)

When you run:

```js
npm run build
```

The bundler:

- Starts from an entry file
- Follows all `import` statements
- Builds a dependency graph
- Transpiles and optimizes code
- Outputs static files for the browser

```js
Source code → Bundler → Browser-ready code
```

---

## 🔹 Webpack

- In development, compiles **all JS/JSX/CSS files upfront**, even if not used immediately
- Uses Babel and legacy polyfills by default
- In production, **bundles and optimizes the entire application**

**Result**

- ❌ Slow dev server startup
- ❌ Longer build times as the app grows
- ❌ Larger bundle size

---

## 🔹 Vite

- In development, uses **native ES modules** and compiles **only files requested by the browser**
- No full bundling in dev mode
- In production, **bundles and optimizes the entire application**

**Result**

- ✅ Instant dev startup
- ✅ Very fast rebuilds
- ✅ Smaller bundle size

## Build time & caching (important)

- First build is slow (**cold build**) because no cache exists
- Later builds are faster due to build caching
- Deleting `node_modules` removes cache → next build becomes slow again
- In deployment, builds are usually **cold** unless cache is explicitly enabled
