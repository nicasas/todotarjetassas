import Link from "next/link";
import { TriangleAlert, MessageCircle, Clock, User } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Escalamiento() {
  return (
    <Screen>
      <ScreenHeader title="Escalamiento" back="/servicio/caso" />

      <div className="px-5 pt-2 pb-4">
        {/* Nivel de riesgo */}
        <div
          className="card p-3.5 mb-4 flex items-start gap-3"
          style={{
            background: "var(--warning-soft)",
            border: "1px solid rgba(245,158,11,0.4)",
          }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(245,158,11,0.25)", color: "var(--warning)" }}
          >
            <TriangleAlert size={16} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[13px] font-bold">Nivel de riesgo: Alto</p>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(245,158,11,0.25)", color: "var(--warning)" }}
              >
                ALTO
              </span>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(245,158,11,0.2)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: "78%", background: "var(--warning)" }}
              />
            </div>
          </div>
        </div>

        {/* CONTEXTO TRANSFERIDO */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          Contexto transferido
        </p>
        <div className="card p-4 mb-4 space-y-3">
          <CtxRow label="Caso" value="#CS-20240315-0847" />
          <div className="h-px" style={{ background: "var(--border)" }} />
          <CtxRow label="Categoría" value="Cargo no reconocido" />
          <div className="h-px" style={{ background: "var(--border)" }} />
          <div>
            <p
              className="text-[10px] tracking-widest uppercase font-bold mb-1"
              style={{ color: "var(--text-dim)" }}
            >
              Resumen IA
            </p>
            <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
              Cliente reporta cargo de $26.98 USD en Spotify no reconocido. Patrón
              geolocalización anómalo detectado. Historial: primer reporte en 14 meses.
            </p>
          </div>
          <div
            className="flex items-center gap-2 rounded-xl px-3 py-2"
            style={{
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <span style={{ color: "var(--success)" }} className="text-[11px]">✓</span>
            <p className="text-[11px] font-semibold" style={{ color: "var(--success)" }}>
              Contexto transferido completamente
            </p>
          </div>
        </div>

        {/* Tu caso ha sido escalado */}
        <div className="card p-4 mb-4">
          <p
            className="text-[10px] tracking-widest uppercase font-bold mb-2"
            style={{ color: "var(--text-dim)" }}
          >
            Estado del escalamiento
          </p>
          <p className="text-[13px]">
            Tu caso ha sido escalado a un especialista en fraude. El agente ya tiene acceso
            al historial completo de tu solicitud.
          </p>
        </div>

        {/* PRÓXIMOS PASOS */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          Próximos pasos
        </p>
        <div className="card p-4 mb-5 space-y-3.5">
          <NextStep icon={<User size={14} />} label="Agente asignado" value="María González" />
          <div className="h-px" style={{ background: "var(--border)" }} />
          <NextStep icon={<Clock size={14} />} label="Tiempo estimado" value="~5 min" />
          <div className="h-px" style={{ background: "var(--border)" }} />
          <NextStep icon={<MessageCircle size={14} />} label="Canal" value="Chat en vivo" />
        </div>

        <Link href="/servicio/cierre" className="btn-primary mb-2">
          Conectar con agente
        </Link>
        <Link href="/servicio/caso" className="btn-outline">
          Volver al detalle
        </Link>
      </div>
    </Screen>
  );
}

function CtxRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <p
        className="text-[10px] tracking-widest uppercase font-bold"
        style={{ color: "var(--text-dim)" }}
      >
        {label}
      </p>
      <p className="text-[12px] font-semibold">{value}</p>
    </div>
  );
}

function NextStep({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p
          className="text-[10px] tracking-widest uppercase font-bold"
          style={{ color: "var(--text-dim)" }}
        >
          {label}
        </p>
        <p className="text-[13px] font-semibold">{value}</p>
      </div>
    </div>
  );
}
