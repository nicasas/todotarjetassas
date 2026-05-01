import Link from "next/link";
import { Hourglass, Check, Clock } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Revision() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/error" />

      <div className="px-5 pt-2 pb-4">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[var(--warning-soft)] text-[var(--warning)] flex items-center justify-center mb-4">
            <Hourglass size={26} strokeWidth={2.2} />
          </div>
          <h2 className="text-2xl font-bold mb-1.5 tracking-tight">
            Tu solicitud está en revisión
          </h2>
          <p className="text-[13px] text-[var(--text-muted)] max-w-[280px]">
            Necesitamos validar algunos datos manualmente. La respuesta llega en máximo 24
            horas hábiles.
          </p>
        </div>

        <div className="card p-3.5 mb-4">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-3">
            Estado de la solicitud
          </p>
          <div className="space-y-3">
            <Step
              done
              title="Solicitud recibida"
              detail="Hace 1 hora"
            />
            <Step
              done
              title="Documentos cargados"
              detail="Hace 50 min"
            />
            <Step
              current
              title="Verificación adicional"
              detail="En proceso · Tiempo estimado: 24 hrs"
            />
            <Step title="Decisión final" detail="Pendiente" />
          </div>
        </div>

        <div className="card p-3.5 mb-5">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
            Documentos solicitados
          </p>
          <ul className="space-y-2">
            <DocItem label="Cédula original (frente y reverso)" status="done" />
            <DocItem label="Selfie con detección de vida" status="done" />
            <DocItem label="Comprobante de ingresos" status="pending" />
          </ul>
        </div>

        <Link href="#" className="btn-primary mb-2">
          Cargar documento adicional
        </Link>
        <Link href="/" className="btn-outline">
          Notificarme cuando esté listo
        </Link>
      </div>
    </Screen>
  );
}

function Step({
  done,
  current,
  title,
  detail,
}: {
  done?: boolean;
  current?: boolean;
  title: string;
  detail: string;
}) {
  const bg = done
    ? "bg-[var(--success)] text-white"
    : current
    ? "bg-[var(--warning)] text-white"
    : "bg-[var(--surface-2)] text-[var(--text-dim)]";
  const titleClass = done || current ? "text-[var(--text)]" : "text-[var(--text-muted)]";
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${bg}`}>
        {done ? <Check size={11} strokeWidth={3} /> : <Clock size={11} />}
      </div>
      <div className="flex-1">
        <p className={`text-[13px] font-semibold ${titleClass}`}>{title}</p>
        <p className="text-[11px] text-[var(--text-muted)]">{detail}</p>
      </div>
    </div>
  );
}

function DocItem({ label, status }: { label: string; status: "done" | "pending" }) {
  return (
    <li className="flex items-center gap-2.5">
      <span
        className={`w-4 h-4 rounded-full flex items-center justify-center ${
          status === "done"
            ? "bg-[var(--success-soft)] text-[var(--success)]"
            : "bg-[var(--warning-soft)] text-[var(--warning)]"
        }`}
      >
        {status === "done" ? <Check size={9} strokeWidth={3} /> : <Clock size={9} />}
      </span>
      <span className="text-[12px] flex-1">{label}</span>
      <span className="text-[10px] font-bold text-[var(--text-muted)]">
        {status === "done" ? "LISTO" : "PENDIENTE"}
      </span>
    </li>
  );
}
