import Link from "next/link";
import { Apple, Wallet } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Emision() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/perfilamiento" step="PASO 5 DE 7" />

      <div className="px-5 pt-2 pb-4">
        <h2 className="text-2xl font-bold mb-1 tracking-tight">¡Tu tarjeta está lista!</h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-5">
          Ya puedes usarla para tus compras online. La tarjeta física llegará en 3 días.
        </p>

        <div
          className="rounded-2xl p-5 mb-4 relative overflow-hidden border border-[var(--border)]"
          style={{
            background:
              "linear-gradient(135deg, #1a1a1f 0%, #2a2a35 50%, #1a1a1f 100%)",
          }}
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--primary)] opacity-20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-12">
              <span className="text-[11px] tracking-widest font-bold">VISA</span>
              <span className="text-[10px] font-bold tracking-wide px-2 py-1 rounded-full bg-[var(--success-soft)] text-[var(--success)]">
                ACTIVA
              </span>
            </div>
            <p className="font-mono text-base tracking-[0.25em] mb-3">
              •••• •••• •••• 4832
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[var(--text-muted)]">
                  Titular
                </p>
                <p className="text-[12px] font-semibold">JUAN ANDRÉS MENDOZA</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] uppercase tracking-widest text-[var(--text-muted)]">
                  Vence
                </p>
                <p className="text-[12px] font-mono font-semibold">04/31</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-3.5 mb-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
            <Apple size={18} fill="white" />
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold">Agregar a Apple Wallet</p>
            <p className="text-[11px] text-[var(--text-muted)]">Pagos contactless en segundos</p>
          </div>
          <span className="text-[var(--primary)] text-xl">→</span>
        </div>

        <div className="card p-3.5 mb-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <Wallet size={18} />
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold">Agregar a Google Wallet</p>
            <p className="text-[11px] text-[var(--text-muted)]">Pagos contactless en segundos</p>
          </div>
          <span className="text-[var(--primary)] text-xl">→</span>
        </div>

        <div className="card p-4 mb-4 bg-[var(--primary-soft)] border-[var(--primary)]/30">
          <p className="text-[10px] tracking-widest uppercase text-[var(--primary)] font-bold mb-1">
            Limitada al primer uso
          </p>
          <p className="text-[12px]">
            Tu primera compra debe ser online. Recibe la tarjeta física para usarla en
            comercios presenciales.
          </p>
        </div>

        <Link href="/originacion/activacion" className="btn-primary">
          Hacer mi primera compra
        </Link>
      </div>
    </Screen>
  );
}
