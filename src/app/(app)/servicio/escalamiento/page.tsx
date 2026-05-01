import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Escalamiento() {
  return (
    <Screen>
      <ScreenHeader title="Escalamiento" back="/servicio/caso" />

      <div className="px-5 pt-2 pb-4">
        <div className="card border-[var(--warning)]/40 bg-[var(--warning-soft)] p-3.5 flex items-start gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-[var(--warning)]/30 text-[var(--warning)] flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={16} />
          </div>
          <div>
            <p className="text-[13px] font-bold mb-0.5">
              Caso requiere atención especializada
            </p>
            <p className="text-[11px] text-[var(--text-muted)]">
              Detectamos un patrón inusual en la transacción. Un agente lo revisará contigo.
            </p>
          </div>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Caso #RC-2024-00847
        </p>

        <div className="card p-4 mb-4">
          <div className="space-y-3.5">
            <Row label="Contexto" value="Cargo no reconocido — Spotify $9.99 USD" />
            <Row
              label="Validación"
              value="Coincide con merchant histórico"
              tone="success"
            />
            <Row label="Riesgo" value="Patrón anómalo en geolocalización" tone="warning" />
            <Row label="Requiere" value="Revisión de un especialista en fraude" />
          </div>
        </div>

        <div className="card p-4 mb-4">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
            Agente asignado
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
              MG
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold">Mario González</p>
              <p className="text-[11px] text-[var(--text-muted)]">Especialista de fraude</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[var(--success-soft)] text-[var(--success)]">
              EN LÍNEA
            </span>
          </div>
        </div>

        <Link href="/servicio/cierre" className="btn-primary mb-2">
          <Phone size={16} /> Contactar especialista
        </Link>
        <Link href="/servicio/caso" className="btn-outline">
          Volver al detalle
        </Link>
      </div>
    </Screen>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "success" | "warning";
}) {
  const dot =
    tone === "success"
      ? "bg-[var(--success)]"
      : tone === "warning"
      ? "bg-[var(--warning)]"
      : "bg-[var(--text-dim)]";
  return (
    <div className="flex items-start gap-3">
      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${dot}`} />
      <div className="flex-1">
        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-0.5">
          {label}
        </p>
        <p className="text-[12px]">{value}</p>
      </div>
    </div>
  );
}
