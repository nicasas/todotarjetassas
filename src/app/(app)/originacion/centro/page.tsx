import Link from "next/link";
import { Bell, Eye, Lock, ArrowDown, ChevronRight } from "lucide-react";
import { Screen } from "@/components/Screen";
import { BottomNav } from "@/components/BottomNav";

const movements = [
  { name: "Amazon", date: "Hoy, 16:22", amount: "-89.900", category: "Compras" },
  { name: "Spotify Premium", date: "Hoy, 12:08", amount: "-19.900", category: "Suscripciones" },
  { name: "Recarga inicial", date: "Ayer", amount: "+500.000", category: "Ingreso", positive: true },
];

export default function Centro() {
  return (
    <Screen>
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[var(--text-muted)] text-xs">Bienvenido</p>
          <h1 className="text-[22px] font-bold tracking-tight">Hola, Santiago</h1>
        </div>
        <button className="relative p-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)]">
          <Bell size={18} />
        </button>
      </div>

      <div className="px-5">
        <div
          className="rounded-2xl p-4 mb-4 relative overflow-hidden border border-[var(--border)]"
          style={{
            background: "linear-gradient(135deg, #1a1a1f 0%, #2a2a35 50%, #1a1a1f 100%)",
          }}
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--primary)] opacity-15 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)] font-bold">
                Cupo disponible
              </span>
              <button className="p-1 rounded-md hover:bg-white/5">
                <Eye size={13} />
              </button>
            </div>
            <p className="text-2xl font-bold tracking-tight mb-3">
              $2,500,000 <span className="text-xs text-[var(--text-muted)]">COP</span>
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[var(--text-muted)]">
                  Tarjeta virtual
                </p>
                <p className="font-mono text-[12px] tracking-widest">•••• 4832</p>
              </div>
              <span className="text-[10px] font-bold tracking-wide px-2 py-1 rounded-full bg-[var(--success-soft)] text-[var(--success)]">
                ACTIVA
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-5">
          <Action icon={<ArrowDown size={16} />} label="Pagar" />
          <Action icon={<Eye size={16} />} label="Ver datos" />
          <Action icon={<Lock size={16} />} label="Bloquear" />
        </div>

        <div className="card p-3.5 mb-5 bg-[var(--primary-soft)] border-[var(--primary)]/30 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center text-base">
            ⚡
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold">Tarjeta física en camino</p>
            <p className="text-[11px] text-[var(--text-muted)]">Llega aprox. el 4 de mayo</p>
          </div>
          <ChevronRight size={14} className="text-[var(--text-muted)]" />
        </div>

        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold">
            Movimientos
          </p>
          <Link href="#" className="text-[11px] text-[var(--primary)] font-semibold">
            Ver todos
          </Link>
        </div>

        <div className="space-y-2 mb-6">
          {movements.map((m, i) => (
            <div key={i} className="card p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--surface-2)] flex items-center justify-center text-[11px] font-bold">
                {m.name.slice(0, 1)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold truncate">{m.name}</p>
                <p className="text-[11px] text-[var(--text-muted)]">
                  {m.date} · {m.category}
                </p>
              </div>
              <p
                className={`text-[13px] font-bold ${
                  m.positive ? "text-[var(--success)]" : ""
                }`}
              >
                ${m.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="Tarjeta" />
    </Screen>
  );
}

function Action({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="card p-3 flex flex-col items-center gap-1.5 hover:bg-[var(--surface-2)] transition">
      <div className="w-9 h-9 rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[11px] font-semibold">{label}</span>
    </button>
  );
}
