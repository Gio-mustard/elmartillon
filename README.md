# El Martillón Industrial

Maqueta de la página de inicio de la ferretería **El Martillón**, construida con
Vite + React + TypeScript y Tailwind CSS v4.

## Scripts

```bash
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # typecheck (tsc -b) + build de producción en dist/
npm run preview  # sirve el build de producción
npm run lint     # oxlint
```

## Stack

| Pieza      | Elección                                  |
| ---------- | ----------------------------------------- |
| Bundler    | Vite 8                                    |
| UI         | React 19 + TypeScript                     |
| Estilos    | Tailwind CSS v4 (`@tailwindcss/vite`)     |
| Iconos     | `react-icons/fa6` (Font Awesome 6)        |
| Datos      | JSON local (`src/data/products.json`)     |

La home es una **maqueta estática**: no hay estado, carrito, filtros ni
paginación funcional. El buscador, las flechas del carrusel, los botones de
carrito y la paginación están maquetados y listos para conectarse.

## Estructura

```
src/
├── App.tsx                      # composición de la home
├── index.css                    # Tailwind + tokens del diseño (@theme)
├── types/product.ts             # tipo Product y sus etiquetas
├── data/
│   ├── products.json            # catálogo global de prueba
│   ├── products.ts              # carga y tipa el JSON + totales del catálogo
│   ├── catalog.ts               # categorías, marcas y banner del hero
│   └── site.ts                  # teléfono, horario, navegación, footer
├── lib/
│   ├── placeholder.ts           # genera el placeholder SVG
│   └── format.ts                # formato de precios "$67.57 usd"
└── components/
    ├── layout/                  # TopBar, Header, NavBar, Footer
    ├── home/                    # Hero, Selección, Categorías, Catálogo, Visítanos
    └── ui/                      # ProductCard, ProductImage, Badge, BrandTile, Logo
```

## Productos

Los productos viven en `src/data/products.json`. Cada objeto sigue el tipo
`Product` de `src/types/product.ts`:

```json
{
  "id": "p-001",
  "sku": "TRU-16500",
  "name": "Taladro percutor 1/2\" 750 W",
  "brand": "Truper",
  "category": "Herramientas Eléctricas",
  "price": 67.57,
  "oldPrice": 100.57,
  "currency": "usd",
  "image": null,
  "badges": ["promocion", "pocas-unidades"],
  "stock": 4
}
```

Etiquetas disponibles en `badges`:

- `promocion` → pastilla roja "Promoción"
- `mas-vendido` → pastilla azul "Más vendido"
- `pocas-unidades` → texto rojo "Pocas unidades disponibles"

### Imágenes

`image` es opcional:

- **`null`** → se dibuja un placeholder SVG generado (silueta de martillo con un
  color estable por producto).
- **Ruta definida** → se usa esa imagen. Coloca el archivo en `public/`, por
  ejemplo `public/products/taladro.jpg`, y pon `"image": "/products/taladro.jpg"`.

Si una ruta definida falla al cargar, `ProductImage` cae automáticamente al
placeholder, así que el diseño nunca se rompe.

## Tokens del diseño

Los colores viven en el bloque `@theme` de `src/index.css` y se usan como
utilidades de Tailwind (`bg-brand-600`, `text-accent-500`, `bg-danger-500`…):

| Token         | Color     | Uso                                  |
| ------------- | --------- | ------------------------------------ |
| `brand-600`   | `#1b4ea8` | header, banner, botones, iconos      |
| `brand-800`   | `#103470` | logo, pastilla "Más vendido"         |
| `accent-500`  | `#ffd100` | Buen Fin, hover del botón de carrito |
| `danger-500`  | `#d8232a` | promociones y stock bajo             |
| `surface`     | `#eef1f6` | fondo de la página                   |
| `footerbg`    | `#dae4f1` | fondo del pie de página              |
