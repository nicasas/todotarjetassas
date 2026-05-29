import Link from "next/link";
import { Check } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Registro() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion" step="PASO 2 DE 7" />

      {/* Barra segmentada */}
      <div className="px-5 mb-4">
        <div className="flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-full"
              style={{ background: i < 2 ? "var(--primary)" : "var(--border-strong)" }}
            />
          ))}
        </div>
      </div>

      <div className="px-5 pt-0 pb-4">
        <h2 className="text-2xl font-bold mb-1.5 tracking-tight">
          Registro y Consentimiento
        </h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-5">
          Solo necesitamos algunos datos personales para iniciar tu solicitud.
        </p>

        <div className="space-y-3 mb-4">
          <Field label="Nombres" value="Juan Andrés" />
          <Field label="Apellidos" value="Mendoza" />
          <Field label="Cédula" value="1.023.456.789" />
          <Field label="Celular" value="+57 318 432 7896" />
          <Field label="Correo electrónico" value="juan.mendoza@email.com" />
        </div>

        <div className="card p-3 mb-4 space-y-2.5">
          <Consent label="Acepto la política de tratamiento de datos" checked />
          <Consent label="Acepto recibir notificaciones por correo y app" checked />
          <Consent
            label="Acepto consulta en centrales de información financiera"
            checked
          />
        </div>

        <Link href="/originacion/validacion" className="btn-primary">
          Continuar →
        </Link>
      </div>
    </Screen>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-3">
      <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-1">
        {label}
      </p>
      <p className="text-[13px] font-semibold">{value}</p>
    </div>
  );
}

function Consent({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <span
        className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border ${
          checked
            ? "bg-[var(--primary)] border-[var(--primary)]"
            : "border-[var(--border-strong)]"
        }`}
      >
        {checked && <Check size={13} strokeWidth={3} />}
      </span>
      <span className="text-[12px]">{label}</span>
    </label>
  );
}
