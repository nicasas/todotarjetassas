import Link from "next/link";
import { Check } from "lucide-react";
import { Screen } from "@/components/Screen";

export default function ReporteRadicado() {
  return (
    <Screen>
      <div className="px-5 pt-8 pb-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--success-soft)] text-[var(--success)] flex items-center justify-center mb-5">
          <Check size={28} strokeWidth={3} />
        </div>
        <h2 className="text-2xl font-bold mb-1.5 tracking-tight">Reporte Radicado</h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-6 max-w-[260px]">
          Tu reporte fue registrado exitosamente. Te avisaremos por cada actualización.
        </p>

        <div className="card px-4 py-3 mb-5 w-full">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-1">
            Número de caso
          </p>
          <p className="text-lg font-mono font-bold">#RC-2024-00847</p>
        </div>
      </div>

      <div className="px-5 space-y-2 mb-6">
        <TimelineItem title="Creado" detail="Hoy, 14:32" status="done" />
        <TimelineItem
          title="Visa Platinum"
          detail="•••• 4823 — bloqueada preventivamente"
          status="info"
        />
        <TimelineItem
          title="Tiempo estimado de respuesta"
          detail="6–10 días hábiles"
          status="pending"
        />
      </div>

      <div className="px-5 mt-auto pb-4 space-y-2">
        <Link href="/servicio/caso" className="btn-primary">
          Ver estado del caso
        </Link>
        <Link href="/servicio" className="btn-outline">
          Volver al inicio
        </Link>
      </div>
    </Screen>
  );
}

function TimelineItem({
  title,
  detail,
  status,
}: {
  title: string;
  detail: string;
  status: "done" | "info" | "pending";
}) {
  const dot =
    status === "done"
      ? "bg-[var(--success)]"
      : status === "info"
      ? "bg-[var(--primary)]"
      : "bg-[var(--text-dim)]";
  return (
    <div className="card p-3 flex items-center gap-3">
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      <div className="flex-1">
        <p className="text-[13px] font-semibold">{title}</p>
        <p className="text-[11px] text-[var(--text-muted)]">{detail}</p>
      </div>
    </div>
  );
}
