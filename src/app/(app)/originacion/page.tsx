import Link from "next/link";
import { Sparkles, Clock, FileX } from "lucide-react";
import { Screen } from "@/components/Screen";

export default function OriginacionLanding() {
  return (
    <Screen>
      <div className="px-5 pt-3 pb-2 flex justify-end">
        <Link href="/" className="text-[11px] text-[var(--text-muted)]">
          Cerrar
        </Link>
      </div>

      <div className="px-6 pt-6 pb-4">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--primary)] font-bold mb-3 block">
          Tarjeta Virtual Instantánea
        </span>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Solicita y usa tu tarjeta hoy
        </h1>
        <p className="text-[13px] text-[var(--text-muted)]">
          Obtén una tarjeta virtual para tus compras online en menos de 10 minutos. Sin
          papeleo, sin filas, sin complicaciones.
        </p>
      </div>

      <div className="px-5 mt-2">
        <Link href="/originacion/registro" className="btn-primary mb-5">
          Comenzar →
        </Link>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <Stat icon={<FileX size={16} />} title="Sin Papeles" />
          <Stat icon={<Clock size={16} />} title="8 min" subtitle="promedio" />
          <Stat icon={<Sparkles size={16} />} title="Sin Pagos" subtitle="iniciales" />
        </div>

        <div className="card p-4 mb-4">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
            Lo que necesitas
          </p>
          <ul className="space-y-2 text-[12px]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 flex-shrink-0" />
              <span>Documento de identidad</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 flex-shrink-0" />
              <span>Selfie con tu cámara frontal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 flex-shrink-0" />
              <span>Información básica de ingresos</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-auto px-5 pb-4">
        <p className="text-center text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold">
          Paso 0 de 7
        </p>
      </div>
    </Screen>
  );
}

function Stat({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="card p-3 flex flex-col items-center text-center">
      <div className="w-8 h-8 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mb-1.5">
        {icon}
      </div>
      <p className="text-[12px] font-bold leading-tight">{title}</p>
      {subtitle && (
        <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{subtitle}</p>
      )}
    </div>
  );
}
