"use client";
import Link from "next/link";
import { Send, FileText, Bot } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

/** Si HAS_OPEN_CASE = true el primer chip muestra el seguimiento del caso abierto */
const HAS_OPEN_CASE = true;
const OPEN_CASE = { id: "RC-2847", status: "En análisis", href: "/servicio/caso" };

export default function ChatIA() {
  return (
    <Screen>
      {/* Header con ícono bot en rojo */}
      <ScreenHeader
        title="Asistente IA"
        back="/servicio"
        right={
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <Bot size={15} color="white" />
          </div>
        }
      />

      {/* Contenido del chat */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-2 pb-3 space-y-3">
        {/* ── Burbuja IA 1 ── */}
        <AiBlock>
          <p className="text-[13px]">Hola Carolina, ¿en qué puedo ayudarte hoy?</p>
        </AiBlock>

        {/* ── Fila chips contextuales ── */}
        <div>
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Sugerencias para ti
            </span>
            <span className="text-[10px]" style={{ color: "var(--text-dim)" }}>
              Basado en tu historial
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {/* Chip caso abierto — aparece cuando HAS_OPEN_CASE = true */}
            {HAS_OPEN_CASE && (
              <Link
                href={OPEN_CASE.href}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap"
                style={{
                  background: "rgba(245,158,11,0.12)",
                  border: "1px solid rgba(245,158,11,0.35)",
                  color: "var(--warning)",
                }}
              >
                <FileText size={11} />
                Seguimiento #{OPEN_CASE.id}
              </Link>
            )}
            {/* Chips genéricos */}
            <button
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition"
              style={{
                border: "1px solid var(--border-strong)",
                background: "var(--surface-2)",
                color: "var(--text-muted)",
              }}
            >
              Reportar cargo
            </button>
            <button
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition"
              style={{
                border: "1px solid var(--border-strong)",
                background: "var(--surface-2)",
                color: "var(--text-muted)",
              }}
            >
              Facturación
            </button>
            <button
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition"
              style={{
                border: "1px solid var(--border-strong)",
                background: "var(--surface-2)",
                color: "var(--text-muted)",
              }}
            >
              Bloqueo
            </button>
          </div>
        </div>

        {/* ── Burbuja usuario ── */}
        <div className="flex justify-end">
          <div
            className="px-3.5 py-2.5 rounded-2xl max-w-[80%] text-[13px] text-white"
            style={{
              background: "var(--primary)",
              borderBottomRightRadius: 6,
            }}
          >
            Quiero reportar un cargo que no reconozco
          </div>
        </div>

        {/* ── Burbuja IA 2 — transacciones con checkboxes ── */}
        <AiBlock>
          <p className="text-[13px] mb-2.5">
            He encontrado 3 transacciones recientes:
          </p>
          <div className="space-y-2">
            <TxCheck
              name="Amazon MX"
              date="05 Mar 2026"
              amount="$1,299.00 MXN"
              checked
            />
            <TxCheck
              name="Uber Eats"
              date="03 Mar 2026"
              amount="$487.50 MXN"
              checked={false}
            />
          </div>
        </AiBlock>

        {/* ── Botón Reportar seleccionados ── */}
        <Link href="/servicio/reportar" className="btn-primary block text-center">
          Reportar seleccionados
        </Link>

        {/* ── Acción registrada ── */}
        <div
          className="rounded-xl p-3 flex items-start gap-2.5"
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.22)",
          }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: "rgba(239,68,68,0.14)" }}
          >
            <FileText size={13} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <p className="text-[12px] font-semibold leading-snug">
              Acción registrada: Reporte de cargo iniciado
            </p>
            <p className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>
              10 Mar 2026 · 14:32
            </p>
          </div>
        </div>
      </div>

      {/* ── Input bar ── */}
      <div
        className="px-4 pb-6 pt-3"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="flex-1 px-4 py-2.5 rounded-full text-[13px]"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            Escribe tu mensaje…
          </div>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--primary)" }}
          >
            <Send size={15} color="white" />
          </button>
        </div>
      </div>
    </Screen>
  );
}

/* Wrapper burbuja IA con label "ASISTENTE IA" */
function AiBlock({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p
        className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5"
        style={{ color: "var(--primary)" }}
      >
        Asistente IA
      </p>
      <div
        className="rounded-2xl px-3.5 py-3"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* Fila de transacción con checkbox */
function TxCheck({
  name,
  date,
  amount,
  checked,
}: {
  name: string;
  date: string;
  amount: string;
  checked: boolean;
}) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
      style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
    >
      {/* Checkbox */}
      <div
        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
        style={{
          background: checked ? "var(--primary)" : "transparent",
          border: checked ? "none" : "1.5px solid var(--border-strong)",
        }}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-semibold">{name}</p>
        <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
          {date}
        </p>
      </div>
      <span className="text-[12px] font-bold flex-shrink-0">{amount}</span>
    </div>
  );
}
