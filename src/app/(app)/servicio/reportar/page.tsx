import Link from "next/link";
import { Check } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

const transactions = [
  { id: 1, name: "Amazon Prime Video", date: "13 Mar · 14:22", amount: "16.99", checked: true },
  { id: 2, name: "Spotify Premium", date: "12 Mar · 09:08", amount: "9.99", checked: true },
  { id: 3, name: "Netflix", date: "10 Mar · 22:41", amount: "15.49", checked: false },
  { id: 4, name: "Uber Eats", date: "09 Mar · 20:15", amount: "29.30", checked: false },
];

export default function ReportarSeleccion() {
  const total = transactions.filter((t) => t.checked).reduce((s, t) => s + parseFloat(t.amount), 0);
  return (
    <Screen>
      <ScreenHeader title="Reportar Cargo" back="/servicio/chat" />
      <div className="px-5 pt-2 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px flex-shrink-0 w-4" style={{ background: "var(--primary)", opacity: 0.7 }} />
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--text-dim)" }}>
            Seleccionar transacción
          </p>
        </div>
        <div className="space-y-2 mb-5">
          {transactions.map((t) => (
            <div
              key={t.id}
              className={`card p-3 flex items-center gap-3 ${
                t.checked ? "border-[var(--primary)] bg-[var(--primary-soft)]" : ""
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border ${
                  t.checked
                    ? "bg-[var(--primary)] border-[var(--primary)]"
                    : "border-[var(--border-strong)]"
                }`}
              >
                {t.checked && <Check size={13} strokeWidth={3} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold">{t.name}</p>
                <p className="text-[11px] text-[var(--text-muted)]">{t.date}</p>
              </div>
              <p className="text-[13px] font-bold">${t.amount} <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>USD</span></p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-[var(--text-muted)] mb-1">
          2 transacciones seleccionadas
        </p>
        <p className="text-center text-2xl font-bold tracking-tight mb-5">
          ${total.toFixed(2)} <span className="text-sm font-medium text-[var(--text-muted)]">USD</span>
        </p>

        <Link href="/servicio/reportar/detalles" className="btn-primary">
          Continuar
        </Link>
      </div>
    </Screen>
  );
}
