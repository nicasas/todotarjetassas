import Link from "next/link";
import { ShoppingBag, Music, Car, UtensilsCrossed, CheckCircle2, Sparkles } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

const secondaryCategories = [
  {
    icon: <Music size={15} />,
    name: "Suscripciones",
    sub: "Spotify · Netflix",
  },
  {
    icon: <Car size={15} />,
    name: "Transporte",
    sub: "Uber · Cabify",
  },
  {
    icon: <UtensilsCrossed size={15} />,
    name: "Comida",
    sub: "Rappi · iFood",
  },
];

const successTransactions = [
  {
    merchant: "Amazon MX",
    date: "10 Mar 2026 · 09:42",
    amount: "$1,299.00 MXN",
    cashback: "$64.95 MXN",
    pct: "5%",
  },
  {
    merchant: "Mercado Libre",
    date: "08 Mar 2026 · 18:15",
    amount: "$549.00 MXN",
    cashback: "$27.45 MXN",
    pct: "5%",
  },
];

export default function Activacion() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/emision" step="PASO 6 DE 7" />

      {/* Barra de progreso */}
      <div className="px-5 mb-4">
        <div
          className="h-0.5 rounded-full w-full"
          style={{ background: "var(--border)" }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: "85%", background: "var(--primary)" }}
          />
        </div>
      </div>

      <div className="px-5 pt-0 pb-6">
        <h2 className="text-[26px] font-bold mb-1 tracking-tight leading-tight">
          Haz tu primer compra
        </h2>
        <p className="text-[13px] mb-5" style={{ color: "var(--text-muted)" }}>
          Elige una categoría para empezar a disfrutar tu nueva tarjeta.
        </p>

        {/* ── Sección SUGERENCIAS ── */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-px flex-1"
            style={{ background: "var(--primary)", opacity: 0.5 }}
          />
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary)" }}
          >
            Sugerencias
          </span>
          <span
            className="h-px flex-1"
            style={{ background: "var(--primary)", opacity: 0.5 }}
          />
        </div>

        {/* ── Card E-commerce DESTACADA ── */}
        <button
          className="w-full rounded-2xl p-5 mb-3 flex flex-col items-center text-center transition hover:brightness-110"
          style={{
            background: "var(--surface)",
            border: "1.5px solid rgba(239,68,68,0.45)",
          }}
        >
          {/* Ícono circular rojo */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
            style={{ background: "var(--primary)" }}
          >
            <ShoppingBag size={28} color="white" />
          </div>

          <p className="text-[18px] font-bold mb-1">E-commerce</p>
          <p className="text-[13px] mb-3" style={{ color: "var(--text-muted)" }}>
            Amazon, Mercado Libre
          </p>

          {/* Badge cashback */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black tracking-wide"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            <Sparkles size={10} />
            5% CASHBACK
          </div>
        </button>

        {/* ── 3 categorías secundarias ── */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {secondaryCategories.map((cat) => (
            <button
              key={cat.name}
              className="rounded-xl p-3 flex flex-col items-center text-center gap-2 transition hover:brightness-110"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(239,68,68,0.15)" }}
              >
                <span style={{ color: "var(--primary)" }}>{cat.icon}</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold leading-tight">{cat.name}</p>
                <p className="text-[9px] mt-0.5 leading-tight" style={{ color: "var(--text-dim)" }}>
                  {cat.sub}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ══ Sección TRANSACCIÓN EXITOSA ══ */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-px flex-1"
            style={{ background: "var(--success)", opacity: 0.45 }}
          />
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--success)" }}
          >
            Transacción exitosa
          </span>
          <span
            className="h-px flex-1"
            style={{ background: "var(--success)", opacity: 0.45 }}
          />
        </div>

        {/* Tarjeta resumen cashback total */}
        <div
          className="rounded-2xl p-4 mb-3"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(34,197,94,0.15)" }}
            >
              <Sparkles size={18} style={{ color: "var(--success)" }} />
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-semibold">Cashback acumulado</p>
              <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                5% en compras E-commerce
              </p>
            </div>
            <span
              className="text-[18px] font-black"
              style={{ color: "var(--success)" }}
            >
              $92.40
              <span className="text-[10px] font-bold ml-0.5">MXN</span>
            </span>
          </div>
        </div>

        {/* Lista transacciones exitosas */}
        <div className="space-y-2 mb-5">
          {successTransactions.map((tx) => (
            <div
              key={tx.merchant}
              className="rounded-xl px-3.5 py-3 flex items-center gap-3"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(34,197,94,0.12)" }}
              >
                <CheckCircle2 size={16} style={{ color: "var(--success)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold">{tx.merchant}</p>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                  {tx.date} · {tx.amount}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p
                  className="text-[12px] font-bold"
                  style={{ color: "var(--success)" }}
                >
                  +{tx.cashback}
                </p>
                <p className="text-[10px]" style={{ color: "var(--text-dim)" }}>
                  cashback {tx.pct}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <Link href="/originacion/centro" className="btn-primary mb-2">
          Ir al centro de mi tarjeta
        </Link>
        <Link href="/originacion/centro" className="btn-outline">
          Más tarde
        </Link>
      </div>
    </Screen>
  );
}
