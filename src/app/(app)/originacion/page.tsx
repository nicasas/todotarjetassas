import Link from "next/link";
import { ShieldCheck, Clock, FileX } from "lucide-react";
import { Screen } from "@/components/Screen";

export default function OriginacionLanding() {
  return (
    <Screen>
      <div className="px-6 pt-8 pb-4">
        <div
          className="w-8 h-1 rounded-full mb-6"
          style={{ background: "var(--primary)" }}
        />
        <h1 className="text-[32px] font-bold tracking-tight leading-tight mb-3">
          Solicita y usa tu tarjeta hoy
        </h1>
        <p className="text-[13px] text-[var(--text-muted)]">
          Obtén tu tarjeta virtual en minutos. Sin papeleo, sin filas, sin complicaciones.
        </p>
      </div>

      <div className="px-5 mt-2">
        <Link href="/originacion/registro" className="btn-primary mb-5">
          Comenzar →
        </Link>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <Stat icon={<ShieldCheck size={16} />} title="100% Seguro" />
          <Stat icon={<Clock size={16} />} title="5 min" />
          <Stat icon={<FileX size={16} />} title="Sin Papeleo" />
        </div>

        {/* Indicador de paso */}
        <div className="mb-2">
          <p
            className="text-center text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
            style={{ color: "var(--text-dim)" }}
          >
            PASO 1 DE 7
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 rounded-full"
                style={{ background: i === 0 ? "var(--primary)" : "var(--border-strong)" }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto px-5 pb-6 pt-4">
        <p className="text-center text-[13px]" style={{ color: "var(--text-dim)" }}>
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/servicio"
            className="font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </Screen>
  );
}

function Stat({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="card p-3 flex flex-col items-center text-center">
      <div className="w-8 h-8 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mb-1.5">
        {icon}
      </div>
      <p className="text-[12px] font-bold leading-tight">{title}</p>
    </div>
  );
}
