import Link from "next/link";
import { Camera, ScanFace, ShieldCheck } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Validacion() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/registro" step="PASO 3 DE 7" />

      {/* Barra segmentada */}
      <div className="px-5 mb-4">
        <div className="flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-full"
              style={{ background: i < 3 ? "var(--primary)" : "var(--border-strong)" }}
            />
          ))}
        </div>
      </div>

      <div className="px-5 pt-0 pb-6">
        {/* Sección label */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-4 h-0.5 rounded-full flex-shrink-0"
            style={{ background: "var(--primary)" }}
          />
          <p
            className="text-[10px] tracking-[0.2em] uppercase font-bold"
            style={{ color: "var(--text-dim)" }}
          >
            Verificación
          </p>
        </div>

        <h2 className="text-[24px] font-bold tracking-tight mb-1">
          Verifica tu identidad
        </h2>
        <p className="text-[13px] mb-5" style={{ color: "var(--text-muted)" }}>
          Sube fotos de tu documento y tómate una selfie para confirmar tu identidad.
        </p>

        {/* DOCUMENTO DE IDENTIDAD */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-4 h-0.5 rounded-full flex-shrink-0"
            style={{ background: "var(--primary)" }}
          />
          <p
            className="text-[10px] tracking-[0.2em] uppercase font-bold"
            style={{ color: "var(--text-dim)" }}
          >
            Documento de identidad
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Frontal — COMPLETADO */}
          <div
            className="rounded-2xl p-4 flex flex-col items-center text-center aspect-[4/5] justify-center"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(34,197,94,0.4)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2.5"
              style={{
                background: "var(--success-soft)",
                color: "var(--success)",
              }}
            >
              <Camera size={24} />
            </div>
            <p className="text-[13px] font-semibold mb-1.5">Frontal</p>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{
                background: "var(--success-soft)",
                color: "var(--success)",
              }}
            >
              ✓ COMPLETADO
            </span>
          </div>

          {/* Reverso — VALIDANDO */}
          <div
            className="rounded-2xl p-4 flex flex-col items-center text-center aspect-[4/5] justify-center"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(245,158,11,0.4)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2.5"
              style={{
                background: "var(--warning-soft)",
                color: "var(--warning)",
              }}
            >
              <Camera size={24} />
            </div>
            <p className="text-[13px] font-semibold mb-1.5">Reverso</p>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse"
              style={{
                background: "var(--warning-soft)",
                color: "var(--warning)",
              }}
            >
              ⟳ VALIDANDO
            </span>
          </div>
        </div>

        {/* SELFIE DE VERIFICACIÓN */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-4 h-0.5 rounded-full flex-shrink-0"
            style={{ background: "var(--primary)" }}
          />
          <p
            className="text-[10px] tracking-[0.2em] uppercase font-bold"
            style={{ color: "var(--text-dim)" }}
          >
            Selfie de verificación
          </p>
        </div>
        <div
          className="rounded-2xl p-5 mb-5 flex flex-col items-center text-center"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
            style={{
              background: "var(--surface-2)",
              color: "var(--text-muted)",
            }}
          >
            <ScanFace size={32} />
          </div>
          <p className="text-[13px] font-semibold mb-1">
            Toma una selfie mirando a la cámara
          </p>
          <span
            className="text-[10px] font-bold tracking-wide"
            style={{ color: "var(--text-dim)" }}
          >
            PENDIENTE
          </span>
        </div>

        {/* Shield info */}
        <div
          className="card p-3.5 mb-5 flex items-center gap-2.5"
          style={{ background: "var(--surface-2)" }}
        >
          <ShieldCheck size={16} style={{ color: "var(--success)" }} />
          <p className="text-[12px]">
            Tus datos están protegidos con encriptación de grado bancario
          </p>
        </div>

        <Link href="/originacion/perfilamiento" className="btn-primary mb-3">
          Verificar identidad →
        </Link>

        <p
          className="text-[11px] leading-relaxed text-center"
          style={{ color: "var(--text-dim)" }}
        >
          Tus datos biométricos se usan únicamente para verificar tu identidad. No se
          almacenan ni se comparten con terceros.
        </p>
      </div>
    </Screen>
  );
}
