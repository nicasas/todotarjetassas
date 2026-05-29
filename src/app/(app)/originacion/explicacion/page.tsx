import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

const profileItems = [
  { label: "Ocupación", value: "Estudiante" },
  { label: "Ingresos", value: "$1M–$2M" },
  { label: "Propósito", value: "Compras online" },
];

export default function ExplicacionLimite() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/perfilamiento" step="PASO 4.5 DE 7" />

      {/* Barra segmentada */}
      <div className="px-5 mb-5">
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
        {/* Ícono IA con estrella */}
        <div className="flex justify-center mb-5">
          <div
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "var(--primary-soft)",
              border: "1.5px solid rgba(239,68,68,0.35)",
            }}
          >
            <MessageCircle size={28} style={{ color: "var(--primary)" }} />
            <div
              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "var(--primary)" }}
            >
              <Sparkles size={11} color="white" />
            </div>
          </div>
        </div>

        <h2 className="text-[24px] font-bold tracking-tight text-center mb-1">
          ¿Por qué este límite?
        </h2>
        <p
          className="text-[13px] text-center mb-5"
          style={{ color: "var(--text-muted)" }}
        >
          Te explicamos cómo calculamos tu crédito
        </p>

        {/* Explicación lenguaje natural */}
        <div
          className="rounded-2xl p-4 mb-4"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p className="text-[13px] leading-relaxed">
            Con base en tu perfil como{" "}
            <span className="font-semibold">
              Estudiante con ingresos entre $1M y $2M COP
            </span>{" "}
            y tu propósito de{" "}
            <span className="font-semibold">compras online</span>, nuestro
            modelo de IA te asignó un límite inicial de{" "}
            <span className="font-black" style={{ color: "var(--primary)" }}>
              $2.500.000 COP
            </span>
            . Este límite puede crecer con el uso responsable de tu tarjeta.
          </p>
        </div>

        {/* Perfil evaluado */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2.5"
          style={{ color: "var(--text-dim)" }}
        >
          Tu perfil evaluado
        </p>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {profileItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-3 flex flex-col gap-1"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-[9px] uppercase tracking-widest leading-tight"
                style={{ color: "var(--text-dim)" }}
              >
                {item.label}
              </p>
              <p className="text-[11px] font-semibold leading-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Badge aprobado */}
        <div className="flex justify-center mb-6">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold"
            style={{
              background: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.30)",
              color: "var(--success)",
            }}
          >
            <Sparkles size={10} />
            Aprobado en 28 segundos
          </div>
        </div>

        <Link href="/originacion/emision" className="btn-primary">
          Ver mi tarjeta
        </Link>
      </div>
    </Screen>
  );
}
