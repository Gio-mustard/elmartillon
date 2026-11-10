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
├── icons/                       # logo e iconos exportados por diseño
└── categories/*.png             # mosaicos de las 5 categorías

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
    ├── icons/                   # Material Symbols inlineados
    ├── layout/                  # TopBar, Header, NavBar, Footer
    ├── home/                    # Hero, Selección, Categorías, Catálogo, Visítanos
    └── ui/                      # ProductCard, ProductImage, CategoryIcon, Badge,
                                 #   BrandTile, Logo
```

## Recursos de diseño

### Categorías — listo

`public/categories/*.png` son los mosaicos **ya terminados** (cuadro azul +
glifo, 53×53 sin transparencia), así que se pintan tal cual a 48 px: el CSS no
les pone ningún fondo. Las rutas están en el campo `illustration` de cada
categoría en `src/data/catalog.ts`.

| Archivo                                     | Categoría               |
| ------------------------------------------- | ----------------------- |
| `herramientasElectricas.png`                | Herramientas Eléctricas |
| `tornilleriaYFijacion.png`                  | Tornillería y Fijación  |
| `seguridadYProteccion.png`                  | Seguridad y Protección  |
| `plomeriaYGasiteria.png`                    | Plomería y gasfitería   |
| `cerrajeriaYHerrajes.png`                   | Cerrajería y herrajes   |

Son PNG a 1x, así que en pantallas retina se ven algo suaves; si los
reexportas a 106 px (2x) o a SVG, se vuelven nítidos sin tocar código.

### Iconos de la app — listo

`public/icons/*.svg` (Material Symbols) están inlineados en
`src/components/icons/index.tsx` con `fill="currentColor"`: los archivos traen
`fill="#0D47A1"` fijo y hay que teñirlos de blanco sobre el botón azul del
carrito y de rojo en "Pocas unidades". Se usan en el carrito y la cuenta del
header, el botón de carrito de cada producto, el aviso de stock bajo y el
correo del pie. **Si reexportas alguno, copia su atributo `d` al componente.**

### Logo — listo

`public/icons/EL MARTILLON VERSION FINAL.png` es el mosaico terminado (cuadro
azul + martillo blanco, 47×47) y se usa en dos lugares:

- el logo del header y del pie, vía `brandAssets.hammer` en `src/data/site.ts`;
- el icono de la pestaña, en el `<link rel="icon">` de `index.html`.

Como el nombre lleva espacios, ambas rutas van codificadas (`%20`). Si lo
renombras sin espacios, hay que actualizar esos dos lugares. Si el archivo
falta, el logo cae a un martillo de react-icons.

El PNG trae esquinas redondeadas sobre blanco, así que la clase `rounded-lg`
las recorta para que no se vean contra el fondo azul claro del pie.

## Mapa

`VisitSection` incrusta Google Maps sin API key. Las dos URLs están en
`site.mapUrl` (el enlace corto que abre la app) y `site.mapEmbedUrl` (el
iframe), en `src/data/site.ts`.

El atajo `https://www.google.com/maps?q=…&output=embed` **no sirve**: responde
un 301 que lleva `X-Frame-Options: SAMEORIGIN` y el iframe queda en blanco. Hay
que usar la URL `/maps/embed?pb=…` a la que ese atajo redirige, que no manda
esa cabecera. Para cambiar de dirección, abre el enlace corto nuevo, sigue su
redirección y copia el `pb=…` resultante.

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

Los 12 productos y el banner ya tienen foto real en `public/products/` y
`public/banners/`, todas recortadas a **800×500** (el 16:10 de la tarjeta).

`image` sigue siendo opcional:

- **Ruta definida** → se usa esa imagen. El archivo va en `public/`, por
  ejemplo `public/products/taladro-percutor.jpg`, con
  `"image": "/products/taladro-percutor.jpg"`.
- **`null`** → se dibuja un placeholder SVG generado (silueta de martillo con
  un color estable por producto).

Si una ruta definida falla al cargar, `ProductImage` cae automáticamente al
placeholder, así que el diseño nunca se rompe.

**Procedencia:** las fotos se bajaron de [Openverse](https://openverse.org) y
cada una queda registrada —título, autor, licencia y página de origen— en
`public/CREDITOS-IMAGENES.json`. Son fotos de archivo para la maqueta, no
producto real de la tienda: para producción hay que sustituirlas por fotos
propias. Para reemplazar una basta con pisar el archivo en `public/products/`
manteniendo el nombre.

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
