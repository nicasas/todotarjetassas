# Todo Tarjetas S.A. — App Cliente

Prototipo high-fidelity de la app del tarjetahabiente para el caso de estudio **Todo Tarjetas S.A.** (Architecting Digital Enterprise · Universidad de Los Andes · 2026).

Implementa las dos líneas verdes priorizadas en el documento de Crear Valor (Punto 1):

- **Línea Verde 1 · CVP 1** — Asistente GenAI Omnicanal + Autoservicio (tarjetahabiente y comercio).
- **Línea Verde 2 · CVP 2** — Originación 100% Digital + Tarjeta Virtual Instantánea (segmento 18–25).

> Este repo contiene únicamente la **app del cliente**. La visual del administrador (backoffice) se desarrolla por separado.

## Pantallas

### Línea Verde 1 · Servicio

| # | Pantalla | Ruta |
| --- | --- | --- |
| 1 | Home de servicio | `/servicio` |
| 2 | Chat IA | `/servicio/chat` |
| 3 | Reportar Cargo · selección | `/servicio/reportar` |
| 4 | Reporte Cargo · detalles | `/servicio/reportar/detalles` |
| 5 | Reporte Radicado | `/servicio/reportar/confirmacion` |
| 6 | Bloqueo / Tarjeta Bloqueada | `/servicio/bloqueo` |
| 7 | Trazabilidad del caso | `/servicio/caso` |
| 8 | Escalamiento | `/servicio/escalamiento` |
| 9 | Cierre y resolución | `/servicio/cierre` |

### Línea Verde 2 · Originación

| # | Pantalla | Ruta |
| --- | --- | --- |
| O1 | Landing | `/originacion` |
| O2 | Registro y Consentimiento | `/originacion/registro` |
| O3 | Validación de identidad | `/originacion/validacion` |
| O4 | Perfilamiento | `/originacion/perfilamiento` |
| O5 | Emisión virtual | `/originacion/emision` |
| O6 | Activación primer compra | `/originacion/activacion` |
| O7 | Centro post-alta | `/originacion/centro` |
| O9 | Error de verificación | `/originacion/error` |
| O10 | Solicitud en revisión | `/originacion/revision` |

## Stack

- [Next.js 16](https://nextjs.org) · App Router · Turbopack
- TypeScript
- Tailwind CSS 4
- [lucide-react](https://lucide.dev) · iconos

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

En desktop, las pantallas se renderizan dentro de un *phone frame*. En móvil, se ven a pantalla completa.

## Estructura

```
src/
├── app/
│   ├── page.tsx              · Índice de pantallas
│   └── (app)/                · Route group con phone frame
│       ├── servicio/         · Flujo CVP 1
│       └── originacion/      · Flujo CVP 2
└── components/
    ├── PhoneFrame.tsx
    ├── Screen.tsx
    └── BottomNav.tsx
```

## Autores

Esteban Castelblanco · Julián Baquero · Nicolás Casas
