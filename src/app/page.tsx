import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { PhonePreview } from "@/components/PhonePreview";

const cvp1Screens = [
  { num: "0", title: "Bienvenida · entrada unificada ✦", href: "/bienvenida" },
  { num: "1", title: "Home de servicio", href: "/servicio" },
  { num: "1b", title: "Notificación Proactiva ✦ nuevo", href: "/servicio/alerta" },
  { num: "2", title: "Chat IA", href: "/servicio/chat" },
  { num: "3", title: "Reportar Cargo · selección", href: "/servicio/reportar" },
  { num: "4", title: "Reporte Cargo · detalles", href: "/servicio/reportar/detalles" },
  { num: "4b", title: "Confirmar Reporte ✦ nuevo", href: "/servicio/reportar/revisar" },
  { num: "5", title: "Reporte Radicado", href: "/servicio/reportar/confirmacion" },
  { num: "6", title: "Bloqueo / Tarjeta Bloqueada", href: "/servicio/bloqueo" },
  { num: "7", title: "Trazabilidad del caso", href: "/servicio/caso" },
  { num: "8", title: "Escalamiento", href: "/servicio/escalamiento" },
  { num: "9", title: "Cierre y resolución", href: "/servicio/cierre" },
];

const cvp2Screens = [
  { num: "O0", title: "Recuperación de abandono ✦ nuevo", href: "/originacion/recuperacion" },
  { num: "O1", title: "Landing", href: "/originacion" },
  { num: "O2", title: "Registro y Consentimiento", href: "/originacion/registro" },
  { num: "O3", title: "Validación de identidad", href: "/originacion/validacion" },
  { num: "O4", title: "Perfilamiento", href: "/originacion/perfilamiento" },
  { num: "O4b", title: "Explicación de límite ✦ nuevo", href: "/originacion/explicacion" },
  { num: "O5", title: "Emisión virtual", href: "/originacion/emision" },
  { num: "O6", title: "Activación primer compra", href: "/originacion/activacion" },
  { num: "O7", title: "Centro post-alta", href: "/originacion/centro" },
  { num: "O9", title: "Error de verificación", href: "/originacion/error" },
  { num: "O10", title: "Solicitud en revisión", href: "/originacion/revision" },
  { num: "O11", title: "Solicitud rechazada ✦ nuevo", href: "/originacion/rechazo" },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-start justify-between mb-3">
            <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--primary)] font-bold">
              Architecting Digital Enterprise
            </span>
            <PhonePreview />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Todo Tarjetas S.A. <span className="text-[var(--text-muted)]">·</span>{" "}
            <span className="text-[var(--text-muted)]">App Cliente</span>
          </h1>
          <p className="text-[var(--text-muted)] text-base max-w-2xl">
            Prototipo high-fidelity de la app del tarjetahabiente. Implementa las dos líneas
            verdes priorizadas: asistente GenAI omnicanal con autoservicio, y originación 100%
            digital con tarjeta virtual instantánea.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-12">
          <FlowCard
            tag="Línea Verde 1 · CVP 1"
            title="Asistente GenAI Omnicanal + Autoservicio"
            desc="Resolver solicitudes frecuentes en minutos, 24/7, con escalamiento contextual cuando aplique."
            icon={<Sparkles size={20} />}
            href="/servicio"
            count={11}
          />
          <FlowCard
            tag="Línea Verde 2 · CVP 2"
            title="Originación 100% Digital + Tarjeta Virtual"
            desc="Onboarding completo y emisión virtual instantánea para maximizar conversión en el segmento 18–25."
            icon={<ShieldCheck size={20} />}
            href="/originacion"
            count={13}
          />
        </div>

        <Section title="Línea Verde 1 · Servicio" screens={cvp1Screens} />
        <Section title="Línea Verde 2 · Originación" screens={cvp2Screens} />

        <footer className="mt-20 pt-10 border-t border-[var(--border)] text-[var(--text-dim)] text-sm">
          <p>
            Universidad de Los Andes · Architecting Digital Enterprise · 2026 ·{" "}
            <span className="text-[var(--text-muted)]">
              Esteban Castelblanco · Julián Baquero · Nicolás Casas
            </span>
          </p>
        </footer>
      </div>
    </main>
  );
}

function FlowCard({
  tag,
  title,
  desc,
  icon,
  href,
  count,
}: {
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
  count: number;
}) {
  return (
    <Link
      href={href}
      className="card p-6 hover:border-[var(--primary)] transition group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-[11px] tracking-widest text-[var(--text-muted)] uppercase font-bold mb-1.5">
            {tag}
          </p>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-[var(--text-muted)] mb-3">{desc}</p>
          <div className="flex items-center gap-2 text-[var(--primary)] text-sm font-semibold">
            {count} pantallas
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

function Section({
  title,
  screens,
}: {
  title: string;
  screens: { num: string; title: string; href: string }[];
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-5">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {screens.map((s) => (
          <Link
            key={s.num}
            href={s.href}
            className="card p-4 flex items-center gap-3 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)] transition"
          >
            <span className="font-mono text-xs text-[var(--text-dim)] w-8 flex-shrink-0">
              {s.num}
            </span>
            <span className="text-sm font-medium flex-1">{s.title}</span>
            <ArrowRight size={14} className="text-[var(--text-dim)]" />
          </Link>
        ))}
      </div>
    </section>
  );
}
