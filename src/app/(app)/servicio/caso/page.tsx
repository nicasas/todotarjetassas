import Link from "next/link";
import { CreditCard, Check, Clock, FileText } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function DetalleCaso() {
  return (
    <Screen>
      <ScreenHeader title="Detalle del Caso" back="/servicio" />

      <div className="px-5 pt-2 pb-4">
        <div className="card p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold">
                Número de caso
              </p>
              <p className="text-base font-mono font-bold">#RC-2024-00847</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[var(--warning-soft)] text-[var(--warning)]">
              EN ANÁLISIS
            </span>
          </div>
          <div className="h-px bg-[var(--border)] mb-3" />
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
              <CreditCard size={16} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold">Visa Platinum</p>
              <p className="text-[11px] text-[var(--text-muted)]">•••• 4823</p>
            </div>
          </div>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Historial de transacción
        </p>
        <div className="card p-4 mb-4 space-y-3.5">
          <Step done icon={<Check size={11} strokeWidth={3} />} title="Creado" detail="Hoy, 14:32" />
          <Step done icon={<Check size={11} strokeWidth={3} />} title="Validación" detail="14:35 — automática" />
          <Step
            current
            icon={<Clock size={11} />}
            title="En análisis"
            detail="Pendiente de revisión"
          />
          <Step icon={<FileText size={11} />} title="Resolución" detail="Estimada en 6–10 días" />
        </div>

        <div className="card p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold">
              SLA
            </p>
            <p className="text-[11px] font-mono font-bold text-[var(--warning)]">8 hrs</p>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--surface-2)] overflow-hidden">
            <div
              className="h-full bg-[var(--warning)]"
              style={{ width: "65%" }}
            />
          </div>
          <p className="text-[11px] text-[var(--text-muted)] mt-2">
            Cargo de $26.98 USD bajo análisis. Recibirás respuesta en máximo 8 horas hábiles.
          </p>
        </div>

        <div className="card p-4 mb-4">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
            Información del canal
          </p>
          <div className="space-y-2 text-[12px]">
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Canal de origen</span>
              <span>Chat IA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Responsable actual</span>
              <span>Ana García</span>
            </div>
          </div>
        </div>

        <Link href="/servicio/escalamiento" className="btn-outline">
          Contactar agente
        </Link>
      </div>
    </Screen>
  );
}

function Step({
  done,
  current,
  icon,
  title,
  detail,
}: {
  done?: boolean;
  current?: boolean;
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  const bg = done
    ? "bg-[var(--success)] text-white"
    : current
    ? "bg-[var(--primary)] text-white"
    : "bg-[var(--surface-2)] text-[var(--text-dim)]";
  const titleClass = done || current ? "text-[var(--text)]" : "text-[var(--text-muted)]";
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${bg}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className={`text-[13px] font-semibold ${titleClass}`}>{title}</p>
        <p className="text-[11px] text-[var(--text-muted)]">{detail}</p>
      </div>
    </div>
  );
}
