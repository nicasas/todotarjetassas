import Link from "next/link";
import { ShoppingBag, Music, Plane, Coffee, ChevronRight } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

const merchants = [
  { name: "Amazon", category: "Compras", icon: ShoppingBag, color: "from-orange-500 to-amber-600" },
  { name: "Spotify", category: "Música", icon: Music, color: "from-green-500 to-emerald-600" },
  { name: "Despegar", category: "Viajes", icon: Plane, color: "from-blue-500 to-indigo-600" },
  { name: "Rappi", category: "Comida", icon: Coffee, color: "from-pink-500 to-rose-600" },
];

export default function Activacion() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/emision" step="PASO 6 DE 7" />

      <div className="px-5 pt-2 pb-4">
        <h2 className="text-2xl font-bold mb-1 tracking-tight">Haz tu primer compra</h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-5">
          Elige una categoría para empezar a usar tu tarjeta y desbloquear todos los
          beneficios.
        </p>

        <div className="card p-3.5 mb-4 flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-0.5">
              Tarjeta virtual
            </p>
            <p className="font-mono text-[13px] tracking-widest">•••• 4832</p>
          </div>
          <span className="text-[10px] font-bold tracking-wide px-2 py-1 rounded-full bg-[var(--success-soft)] text-[var(--success)]">
            LISTA
          </span>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Sugeridos para ti
        </p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {merchants.map((m) => (
            <button
              key={m.name}
              className="card p-3 flex flex-col items-start gap-2 hover:bg-[var(--surface-2)] transition"
            >
              <div
                className={`w-9 h-9 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center`}
              >
                <m.icon size={16} />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-semibold">{m.name}</p>
                <p className="text-[10px] text-[var(--text-muted)]">{m.category}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Promociones
        </p>
        <div className="card p-3.5 mb-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-lg font-bold">
            5%
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold">Cashback en la primera compra</p>
            <p className="text-[11px] text-[var(--text-muted)]">Hasta $50.000 COP</p>
          </div>
          <ChevronRight size={14} className="text-[var(--text-dim)]" />
        </div>

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
