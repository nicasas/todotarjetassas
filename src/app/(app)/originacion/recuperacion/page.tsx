import Link from "next/link";
import { Shield } from "lucide-react";
import { Screen } from "@/components/Screen";

type StepStatus = "done" | "active" | "pending";

const steps: { num: number; label: string; status: StepStatus }[] = [
  { num: 1, label: "Inicio", status: "done" },
  { num: 2, label: "Registro", status: "done" },
  { num: 3, label: "Verificación", status: "active" },
  { num: 4, label: "Perfil", status: "pending" },
  { num: 5, label: "Tarjeta", status: "pending" },
  { num: 6, label: "Consumo", status: "pending" },
  { num: 7, label: "Confirmación", status: "pending" },
];

export default function Recuperacion() {
  return (
    <Screen>
      <div className="px-5 pt-8 pb-6">
        <span
          className="text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--primary)" }}
        >
          Todo Tarjetas
        </span>

        <h2 className="text-[24px] font-bold tracking-tight mt-2 mb-1">
          Tienes una solicitud pendiente
        </h2>
        <p className="text-[13px] mb-6" style={{ color: "var(--text-muted)" }}>
          Continuá donde lo dejaste, tu información está guardada.
        </p>

        {/* ── Stepper de progreso ── */}
        <div className="mb-6">
          <div className="grid grid-cols-7">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center">
                {/* Mitad izquierda de la línea */}
                {i > 0 && (
                  <div
                    className="absolute top-[11px] right-1/2 left-0 h-px"
                    style={{
                      background:
                        steps[i - 1].status === "done"
                          ? "var(--primary)"
                          : "var(--border-strong)",
                    }}
                  />
                )}
                {/* Mitad derecha de la línea */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-[11px] left-1/2 right-0 h-px"
                    style={{
                      background:
                        step.status === "done"
                          ? "var(--primary)"
                          : "var(--border-strong)",
                    }}
                  />
                )}
                {/* Círculo */}
                <div
                  className="relative z-10 w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      step.status === "done" || step.status === "active"
                        ? "var(--primary)"
                        : "var(--surface-2)",
                    border:
                      step.status === "pending"
                        ? "1.5px solid var(--border-strong)"
                        : "none",
                  }}
                >
                  {step.status === "active" && (
                    <span
                      className="absolute w-full h-full rounded-full animate-ping opacity-40"
                      style={{ background: "var(--primary)" }}
                    />
                  )}
                  {step.status === "done" && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5L3 5.5L8 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {step.status === "active" && (
                    <span className="relative z-10 w-2 h-2 rounded-full bg-white" />
                  )}
                  {step.status === "pending" && (
                    <span
                      className="text-[8px] font-bold"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {step.num}
                    </span>
                  )}
                </div>
                {/* Etiqueta del paso */}
                <p
                  className="text-[8px] text-center mt-1.5 leading-tight px-0.5"
                  style={{
                    color:
                      step.status === "active"
                        ? "var(--primary)"
                        : step.status === "done"
                        ? "var(--text-muted)"
                        : "var(--text-dim)",
                    fontWeight: step.status !== "pending" ? 600 : 400,
                  }}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tarjeta resumen ── */}
        <div
          className="rounded-2xl p-4 mb-4"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="space-y-3">
            <SummaryRow label="Solicitud iniciada" value="Hace 2 horas" />
            <div className="h-px" style={{ background: "var(--border)" }} />
            <SummaryRow label="Válida por" value="22 horas más" />
            <div className="h-px" style={{ background: "var(--border)" }} />
            <SummaryRow
              label="Guardado en"
              value="Paso 3 — Verificación de identidad"
              highlight
            />
          </div>
        </div>

        {/* Nota de seguridad */}
        <div className="flex items-center gap-1.5 mb-6">
          <Shield size={12} style={{ color: "var(--text-dim)" }} />
          <p className="text-[11px]" style={{ color: "var(--text-dim)" }}>
            Tu información está cifrada y protegida.
          </p>
        </div>

        <Link href="/originacion/validacion" className="btn-primary mb-3">
          Continuar en paso 3
        </Link>
        <Link href="/originacion" className="btn-outline mb-3">
          Empezar de nuevo
        </Link>
        <p
          className="text-[10px] text-center"
          style={{ color: "var(--text-dim)" }}
        >
          Si empiezas de nuevo perderás el progreso actual
        </p>
      </div>
    </Screen>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-start gap-2">
      <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>
        {label}
      </span>
      <span
        className="text-[12px] font-semibold text-right flex-shrink-0"
        style={{ color: highlight ? "var(--primary)" : "var(--text)" }}
      >
        {value}
      </span>
    </div>
  );
}
