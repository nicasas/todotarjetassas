import Link from "next/link";
import { Check } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Perfilamiento() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/validacion" step="PASO 3 DE 7" />

      <div className="px-5 pt-2 pb-4">
        <h2 className="text-2xl font-bold mb-1.5 tracking-tight">
          Cuéntanos sobre ti
        </h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-5">
          Esta información nos ayuda a definir el cupo y las condiciones de tu tarjeta.
        </p>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Nivel de ingresos
        </p>
        <div className="space-y-2 mb-4">
          <Pill label="$1M – $3M COP" />
          <Pill label="$3M – $6M COP" active />
          <Pill label="$6M – $12M COP" />
          <Pill label="$12M+ COP" />
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Cupo deseado
        </p>
        <div className="card p-4 mb-4">
          <div className="flex items-end justify-between mb-3">
            <p className="text-2xl font-bold tracking-tight">$2,500,000</p>
            <span className="text-[10px] font-bold text-[var(--success)]">¡Aprobado!</span>
          </div>
          <div className="relative h-1.5 rounded-full bg-[var(--surface-2)]">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[var(--primary)]"
              style={{ width: "55%" }}
            />
            <div
              className="absolute -top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[var(--primary)]"
              style={{ left: "53%" }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[var(--text-muted)] mt-1.5">
            <span>$500K</span>
            <span>$5M</span>
          </div>
        </div>

        <div className="card p-3 mb-4 space-y-2.5">
          <Toggle label="Compras en línea" on />
          <Toggle label="Compras presenciales" on />
          <Toggle label="Avances de efectivo" />
        </div>

        <Link href="/originacion/emision" className="btn-primary">
          Ver mi tarjeta →
        </Link>
      </div>
    </Screen>
  );
}

function Pill({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`p-3 rounded-xl border text-[13px] font-semibold flex items-center justify-between ${
        active
          ? "bg-[var(--primary-soft)] border-[var(--primary)]"
          : "bg-[var(--surface)] border-[var(--border)]"
      }`}
    >
      <span>{label}</span>
      {active && <Check size={14} className="text-[var(--primary)]" strokeWidth={3} />}
    </div>
  );
}

function Toggle({ label, on }: { label: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px]">{label}</span>
      <span
        className={`w-9 h-5 rounded-full relative transition ${
          on ? "bg-[var(--primary)]" : "bg-[var(--surface-3)]"
        }`}
      >
        <span
          className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition"
          style={{ left: on ? "calc(100% - 18px)" : "2px" }}
        />
      </span>
    </div>
  );
}
