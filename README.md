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

**Funcionan:** el buscador del header, los filtros de la barra lateral y la
paginación del catálogo (ver [Búsqueda y filtros](#búsqueda-y-filtros)).

**Siguen maquetados:** el carrito, las flechas del carrusel y los enlaces del
pie de página.

## Estructura

```
public/
├── brand/martillo.svg           # icono del logo (ver "Recursos por exportar")
└── categories/*.svg             # ilustraciones de las 5 categorías

src/
├── App.tsx                      # composición de la home + estado del catálogo
├── index.css                    # Tailwind + tokens del diseño (@theme)
├── types/product.ts             # tipo Product y sus etiquetas
├── data/
│   ├── products.json            # catálogo global de prueba
│   ├── products.ts              # carga y tipa el JSON + opciones de filtro
│   ├── catalog.ts               # categorías, marcas y banner del hero
│   └── site.ts                  # contacto, navegación, footer, brandAssets
├── hooks/useCatalog.ts          # estado de búsqueda, filtros y paginación
├── lib/
│   ├── search.ts                # searchProducts() y matchesQuery()
│   ├── placeholder.ts           # genera el placeholder SVG
│   └── format.ts                # formato de precios "$67.57 usd"
└── components/
    ├── layout/                  # TopBar, Header, NavBar, Footer
    ├── home/                    # Hero, Selección, Categorías, Catálogo, Visítanos
    └── ui/                      # ProductCard, ProductImage, CategoryIcon, Badge,
                                 #   BrandTile, Logo
```

## Recursos por exportar

Los SVG van en `public/` con estos nombres exactos. En cuanto el archivo
existe se usa solo; mientras no exista, el componente dibuja un icono de
respaldo (por eso la consola muestra un 404 por cada archivo pendiente).

| Archivo                                      | Qué es                      |
| -------------------------------------------- | --------------------------- |
| `public/brand/martillo.svg`                  | martillo del logo           |
| `public/categories/herramientas-electricas.svg` | Herramientas Eléctricas  |
| `public/categories/tornilleria-fijacion.svg` | Tornillería y Fijación      |
| `public/categories/seguridad-proteccion.svg` | Seguridad y Protección      |
| `public/categories/plomeria-gasfiteria.svg`  | Plomería y gasfitería       |
| `public/categories/cerrajeria-herrajes.svg`  | Cerrajería y herrajes       |

Formato: **SVG, trazo blanco, fondo transparente, lienzo cuadrado** (p. ej.
`viewBox="0 0 64 64"`). Van dentro del cuadro azul, ocupando el 58% de su
ancho. Si prefieres exportarlos a todo color sin cuadro azul, dilo y se quita
el fondo en `CategoriesSection` y `Logo`.

Las rutas se declaran en `brandAssets.hammer` (`src/data/site.ts`) y en el
campo `illustration` de cada categoría (`src/data/catalog.ts`).

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

## Búsqueda y filtros

Toda la lógica vive en dos archivos:

- `src/lib/search.ts` — funciones puras, sin React.
- `src/hooks/useCatalog.ts` — el estado, que vive en `App` y se comparte con el
  header y el catálogo.

```ts
searchProducts(products, {
  query: 'truper taladro', // todas las palabras deben aparecer, en cualquier orden
  category: 'Herramientas Eléctricas', // o ALL_CATEGORIES
  brands: ['Truper'], // vacío = todas
  badges: ['promocion'], // vacío = todas
  maxPrice: 80, // null = sin tope
})
```

La coincidencia es por palabras sobre `name + brand + sku + category`, sin
distinguir mayúsculas ni acentos: `plomeria` encuentra *Plomería y gasfitería*.

El selector de categoría del header y los radios de la barra lateral son el
mismo estado, así que se mantienen sincronizados. Al cambiar cualquier filtro
la paginación vuelve a la página 1, y si los resultados caben en menos páginas
que la actual, la página se ajusta sola. Las marcas y categorías de los filtros
se derivan del propio `products.json`, no hay listas duplicadas.

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
