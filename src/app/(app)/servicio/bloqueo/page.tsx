import Link from "next/link";
import { Lock, CreditCard } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Bloqueo() {
  return (
    <Screen>
      <ScreenHeader title="Seguridad" back="/servicio" />

      <div className="px-5">
        <div className="rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-[var(--border)] p-4 mb-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--primary-soft)]" />
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <CreditCard size={18} />
                <span className="text-[13px] font-semibold">Visa Platinum</span>
              </div>
              <span className="text-[10px] font-bold tracking-wide px-2 py-1 rounded-full bg-[var(--primary)] text-white">
                BLOQUEADA
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] mb-1">Tarjeta principal</p>
            <p className="font-mono text-base tracking-widest">•••• •••• •••• 4823</p>
          </div>
        </div>
      </div>

      <div className="px-5 flex flex-col items-center text-center mb-6">
        <div className="w-16 h-16 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mb-4">
          <Lock size={26} strokeWidth={2.2} />
        </div>
        <h2 className="text-xl font-bold mb-1.5 tracking-tight">Tarjeta Bloqueada</h2>
        <p className="text-[13px] text-[var(--text-muted)] max-w-[280px]">
          Tu tarjeta está temporalmente inactiva. Ningún cargo podrá efectuarse hasta que la
          desbloquees o solicites reposición.
        </p>
      </div>

      <div className="px-5 mt-auto pb-4 space-y-2">
        <Link href="/servicio" className="btn-primary">
          Desbloquear tarjeta
        </Link>
        <Link href="#" className="btn-outline">
          Solicitar reposición
        </Link>
      </div>
    </Screen>
  );
}
