import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo Tarjetas S.A. — App Cliente",
  description:
    "Prototipo high-fidelity de la app del tarjetahabiente. Línea Verde 1: Asistente GenAI Omnicanal + Autoservicio. Línea Verde 2: Originación 100% Digital + Tarjeta Virtual Instantánea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}
