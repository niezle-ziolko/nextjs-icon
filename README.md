# nextjs-icon

Lightweight and efficient React component for rendering SVG icons in a Next.js project, supporting both **local** SVGs (via SVGR) and **remote** SVGs with caching through `SWR`.

## Features

- Inline rendering of SVG with full styling support.
- Automatic caching and fetching of remote SVGs using `SWR`.
- Fallback to Next.js `<Image>` for errors or while SVG is loading.
- Supports `width`, `height`, `alt`, `className`, and `style` props.
- Optimized for performance and minimal re-renders.

## Installation

1. Install Next.js dependencies (if not already installed):

```bash
npm install react react-dom next swr
```

or

```bash
pnpm add react react-dom next swr
```

2. Install Next.js dependencies (if not already installed):

```bash
npm install nextjs-icon
```

or

```bash
pnpm add nextjs-icon
```

## Usage

### Import the component:

```javascript
import Icon from "nextjs-icon";
```

### Using a remote SVG:

```jsx
<Icon
  src="/icons/external-icon.svg"
  width={48}
  height={48}
  alt="Example Icon"
  className="example-icon-class"
/>
```

### Props

| Name        | Type      | Description                                    |
|-------------|-----------|------------------------------------------------|
| `src`       | string    | Path to the SVG (local or remote).             |
| `width`     | number    | Width of the icon (default: 24).               |
| `height`    | number    | Height of the icon (default: 24).              |
| `alt`       | string    | Alternative text for accessibility.            |
| `className` | string    | CSS class for the wrapper.                     |
| `style`     | object    | Inline style for the wrapper.                  |

## Optimization

- **SWR** provides caching and avoids unnecessary fetches.
- **Next.js Image** in fallback mode enables lazy loading and image optimization.
- Inline styling ensures responsive and scalable SVG icons.

## Example

```jsx
<Icon
  src="/icons/logo.svg"
  width={64}
  height={64}
  alt="Company Logo"
/>

<Icon
  src="https://example.com/icon.svg"
  width={32}
  height={32}
  alt="Remote Icon"
/>
```

## Notes

- For local SVGs, consider using **SVGR** to import them as React components instead of fetching at runtime.
- The component automatically removes XML declarations and comments from SVGs to prevent rendering issues.

---

**License:** MIT

#### Authors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/niezle-ziolko">
        <img src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2024/08/4I7EgETWU4MsmODA.jpg@300w_0e.webp" width="100px;" alt=""/>
        <br><sub><b>_realNormanik</b></sub></br>
      </a>
      <br></br>
      <a href="https://github.com/niezle-ziolko" title="Code">💻</a>
    </td>
    <td>
      <p>I don't like my current job so I do programming as a hobby. If you want to support my passion and help me get away from my full-time job at an outsourcing hotline then I encourage you to buy me a coffee 😃. </p>
   <a href="https://www.buymeacoffee.com/_realNormanik" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="150px"></a>
    </td>
  </tr>
</table>