/**
 * Genera screenshots de todas las pantallas del prototipo a 390×844 (iPhone 14)
 * y los guarda en figma-export/ listos para importar en Figma.
 *
 * USO:
 *   1. En una terminal: npm run dev
 *   2. En otra terminal: node scripts/screenshot.mjs
 */

import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const BASE_URL = "http://localhost:3000";
const OUT_DIR = path.resolve("figma-export");

const SCREENS = [
  // ── Entrada unificada ─────────────────────────────────────
  { file: "00-bienvenida",               path: "/bienvenida" },

  // ── CVP 1 · Servicio ──────────────────────────────────────
  { file: "cvp1-01-home",                path: "/servicio" },
  { file: "cvp1-01b-alerta",             path: "/servicio/alerta" },
  { file: "cvp1-02-chat",                path: "/servicio/chat" },
  { file: "cvp1-03-reportar",            path: "/servicio/reportar" },
  { file: "cvp1-04-detalles",            path: "/servicio/reportar/detalles" },
  { file: "cvp1-04b-revisar",            path: "/servicio/reportar/revisar" },
  { file: "cvp1-05-confirmacion",        path: "/servicio/reportar/confirmacion" },
  { file: "cvp1-06-bloqueo",             path: "/servicio/bloqueo" },
  { file: "cvp1-07-caso",                path: "/servicio/caso" },
  { file: "cvp1-08-escalamiento",        path: "/servicio/escalamiento" },
  { file: "cvp1-09-cierre",              path: "/servicio/cierre" },

  // ── CVP 2 · Originación ───────────────────────────────────
  { file: "cvp2-00-recuperacion",        path: "/originacion/recuperacion" },
  { file: "cvp2-01-landing",             path: "/originacion" },
  { file: "cvp2-02-registro",            path: "/originacion/registro" },
  { file: "cvp2-03-validacion",          path: "/originacion/validacion" },
  { file: "cvp2-04-perfilamiento",       path: "/originacion/perfilamiento" },
  { file: "cvp2-04b-explicacion",        path: "/originacion/explicacion" },
  { file: "cvp2-05-emision",             path: "/originacion/emision" },
  { file: "cvp2-06-activacion",          path: "/originacion/activacion" },
  { file: "cvp2-07-centro",              path: "/originacion/centro" },
  { file: "cvp2-08-rechazo",             path: "/originacion/rechazo" },
  { file: "cvp2-09-error",               path: "/originacion/error" },
  { file: "cvp2-10-revision",            path: "/originacion/revision" },
];

// iPhone 14 — mismo viewport que usamos en el diseño
const VIEWPORT = { width: 390, height: 844 };

async function waitForServer(retries = 20, delayMs = 1500) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(BASE_URL);
      if (res.ok || res.status === 404) return; // server up
    } catch {
      // not ready yet
    }
    console.log(`  Esperando servidor… (intento ${i + 1}/${retries})`);
    await new Promise((r) => setTimeout(r, delayMs));
  }
  throw new Error(`No se pudo conectar con ${BASE_URL}. ¿Está corriendo 'npm run dev'?`);
}

async function run() {
  console.log("\n📱  Todo Tarjetas — Screenshot export para Figma");
  console.log("─".repeat(50));

  await waitForServer();

  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2, // retina → imágenes nítidas en Figma
    colorScheme: "dark",
  });

  const page = await context.newPage();

  // Silenciar errores de consola del servidor de dev (no nos interesan)
  page.on("console", () => {});
  page.on("pageerror", () => {});

  let ok = 0;
  let fail = 0;

  for (const screen of SCREENS) {
    const url = `${BASE_URL}${screen.path}`;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 15_000 });
      // Breve pausa para que terminen animaciones CSS
      await page.waitForTimeout(400);

      const filePath = path.join(OUT_DIR, `${screen.file}.png`);
      await page.screenshot({ path: filePath, fullPage: false });

      console.log(`  ✓  ${screen.file}.png`);
      ok++;
    } catch (err) {
      console.warn(`  ✗  ${screen.file}  →  ${err.message}`);
      fail++;
    }
  }

  await browser.close();

  console.log("─".repeat(50));
  console.log(`\n✅  ${ok} screenshots guardados en: ${OUT_DIR}`);
  if (fail > 0) console.warn(`⚠️   ${fail} pantalla(s) fallaron (ruta no existe aún)`);
  console.log("\n💡  En Figma: File → Import… y selecciona todos los PNG.");
  console.log("    Cada imagen queda como un frame de 390×844 px.\n");
}

run().catch((err) => {
  console.error("\n❌ Error:", err.message);
  process.exit(1);
});
