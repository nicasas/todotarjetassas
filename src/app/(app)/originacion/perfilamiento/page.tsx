import Link from "next/link";
import { Check, CreditCard } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

const ocupaciones = ["Estudiante", "Empleado", "Independ.", "Otro"] as const;
const ingresos = ["$1M – $2M COP", "$2M – $4M COP", "$4M+ COP"] as const;
const propositos = ["Compras online", "Suscripciones", "Viajes", "Diario"] as const;

const activeOcupacion = "Estudiante";
const activeIngreso = "$1M – $2M COP";
const activePropositos: string[] = ["Compras online", "Suscripciones"];

export default function Perfilamiento() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/validacion" step="PASO 4 DE 7" />

      {/* Barra segmentada */}
      <div className="px-5 mb-4">
        <div className="flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-full"
              style={{ background: i < 4 ? "var(--primary)" : "var(--border-strong)" }}
            />
          ))}
        </div>
      </div>

      <div className="px-5 pt-0 pb-6">
        <h2 className="text-[24px] font-bold tracking-tight mb-1">
          Cuéntanos sobre ti
        </h2>
        <p className="text-[13px] mb-5" style={{ color: "var(--text-muted)" }}>
          Responde unas preguntas rápidas para personalizar tu experiencia
        </p>

        {/* OCUPACIÓN */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          Ocupación
        </p>
        <div className="flex gap-2 mb-4">
          {ocupaciones.map((o) => (
            <button
              key={o}
              className="flex-1 px-2 py-1.5 rounded-xl text-[11px] font-semibold transition"
              style={{
                background: o === activeOcupacion ? "var(--primary)" : "var(--surface)",
                border: o === activeOcupacion ? "none" : "1px solid var(--border)",
                color: o === activeOcupacion ? "#fff" : "var(--text-muted)",
              }}
            >
              {o}
            </button>
          ))}
        </div>

        {/* RANGO DE INGRESOS */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          Rango de ingresos
        </p>
        <div className="space-y-2 mb-4">
          {ingresos.map((opt) => {
            const active = opt === activeIngreso;
            return (
              <div
                key={opt}
                className="flex items-center justify-between rounded-xl px-4 py-3"
                style={{
                  background: "var(--surface)",
                  border: active
                    ? "1.5px solid var(--primary)"
                    : "1px solid var(--border)",
                }}
              >
                <div>
                  <p className="text-[13px] font-semibold">{opt}</p>
                  <p
                    className="text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Ingreso mensual
                  </p>
                </div>
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: active ? "var(--primary)" : "transparent",
                    border: active ? "none" : "1.5px solid var(--border-strong)",
                  }}
                >
                  {active && (
                    <Check size={10} strokeWidth={3} color="white" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* PROPÓSITO */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
          style={{ color: "var(--text-dim)" }}
        >
          Propósito
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {propositos.map((p) => {
            const active = activePropositos.includes(p);
            return (
              <button
                key={p}
                className="px-3 py-1.5 rounded-xl text-[12px] font-semibold transition"
                style={{
                  background: active ? "var(--primary)" : "var(--surface)",
                  border: active ? "none" : "1px solid var(--border)",
                  color: active ? "#fff" : "var(--text-muted)",
                }}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* LÍMITE DE CRÉDITO ESTIMADO */}
        <div
          className="rounded-2xl p-4 mb-4"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2"
            style={{ color: "var(--text-dim)" }}
          >
            Límite de crédito estimado
          </p>
          <p className="text-[32px] font-black tracking-tight leading-none mb-0.5">
            $2.500.000
          </p>
          <p
            className="text-[12px] mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            COP / mes
          </p>
          <div
            className="h-1.5 rounded-full overflow-hidden mb-1.5"
            style={{ background: "var(--surface-2)" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "50%", background: "var(--primary)" }}
            />
          </div>
          <p className="text-[10px]" style={{ color: "var(--text-dim)" }}>
            Basado en tu perfil y datos proporcionados
          </p>
        </div>

        {/* ¡APROBADO! */}
        <div
          className="flex items-center gap-3 rounded-2xl p-3.5 mb-5"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.25)",
          }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(34,197,94,0.15)" }}
          >
            <Check
              size={16}
              strokeWidth={3}
              style={{ color: "var(--success)" }}
            />
          </div>
          <div>
            <p
              className="text-[14px] font-bold"
              style={{ color: "var(--success)" }}
            >
              ¡Aprobado!
            </p>
            <p
              className="text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              Tu crédito ha sido pre-aprobado
            </p>
          </div>
        </div>

        <Link
          href="/originacion/explicacion"
          className="btn-primary flex items-center gap-2"
        >
          <CreditCard size={16} /> Ver mi tarjeta
        </Link>
      </div>
    </Screen>
  );
}
