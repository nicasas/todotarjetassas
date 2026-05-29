import Link from "next/link";
import { ShieldAlert, RefreshCw, Upload, Bell } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Rechazo() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/perfilamiento" step="PASO 4 DE 7" />

      {/* Barra segmentada — 3 verde + 1 rojo + 3 gris */}
      <div className="px-5 mb-5">
        <div className="flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-full"
              style={{
                background:
                  i < 3
                    ? "var(--success)"
                    : i === 3
                    ? "var(--primary)"
                    : "var(--border-strong)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="px-5 pt-0 pb-6 flex flex-col items-center text-center">
        {/* Icono */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ background: "rgba(239,68,68,0.12)", color: "var(--primary)" }}
        >
          <ShieldAlert size={28} />
        </div>

        <h2 className="text-[22px] font-bold tracking-tight mb-1.5">
          No pudimos aprobar tu solicitud
        </h2>
        <p className="text-[13px] mb-6 max-w-[280px]" style={{ color: "var(--text-muted)" }}>
          Después de analizar tu información, no fue posible aprobar tu tarjeta en este momento.
        </p>
      </div>

      <div className="px-5 pb-6">
        {/* MOTIVO */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          Motivo
        </p>
        <div className="card p-4 mb-4">
          <p className="text-[13px] mb-3">
            Nuestro análisis de riesgo no pudo confirmar suficiente historial crediticio para
            aprobar el cupo solicitado en este momento.
          </p>
          <div
            className="rounded-xl px-3 py-2.5 flex items-center gap-2"
            style={{
              background: "rgba(239,68,68,0.07)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <ShieldAlert size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
            <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
              Tu información personal y biométrica está completamente protegida.
            </p>
          </div>
        </div>

        {/* QUÉ PUEDES HACER */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          Qué puedes hacer
        </p>
        <div className="card p-1 mb-5 divide-y divide-[var(--border)]">
          <ActionRow
            icon={<RefreshCw size={16} />}
            title="Volver a intentar"
            desc="Puedes aplicar de nuevo en 30 días"
          />
          <ActionRow
            icon={<Upload size={16} />}
            title="Cargar soporte adicional"
            desc="Sube documentos que respalden tus ingresos"
          />
          <ActionRow
            icon={<Bell size={16} />}
            title="Déjanos avisarte"
            desc="Te notificamos cuando tu perfil califique"
          />
        </div>

        <Link href="/originacion" className="btn-primary mb-3">
          Volver al inicio
        </Link>
        <Link
          href="#"
          className="block text-center text-[12px] font-semibold"
          style={{ color: "var(--primary)" }}
        >
          Cargar soporte adicional →
        </Link>
      </div>
    </Screen>
  );
}

function ActionRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[13px] font-semibold">{title}</p>
        <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
          {desc}
        </p>
      </div>
      <span style={{ color: "var(--primary)" }} className="text-base">→</span>
    </div>
  );
}
