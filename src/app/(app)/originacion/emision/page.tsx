import Link from "next/link";
import { Apple, Wallet, Eye, Globe, Store, Banknote, Lock } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Emision() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/explicacion" step="PASO 5 DE 7" />

      <div className="px-5 pt-2 pb-4">
        <h2 className="text-2xl font-bold mb-1 tracking-tight">¡Tu tarjeta está lista!</h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-4">
          Ya puedes usarla para tus compras online. La tarjeta física llegará en 3 días.
        </p>

        {/* Tarjeta virtual */}
        <div
          className="rounded-2xl p-5 mb-2 relative overflow-hidden border border-[var(--border)]"
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
                <p className="text-[12px] font-semibold">SANTIAGO RODRÍGUEZ</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] uppercase tracking-widest text-[var(--text-muted)]">
                  Vence
                </p>
                <p className="text-[12px] font-mono font-semibold">03/29</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ver datos protegidos */}
        <button className="flex items-center gap-1.5 text-[12px] text-[var(--primary)] font-semibold mb-5 mx-auto">
          <Eye size={13} /> Ver datos protegidos
        </button>

        {/* Wallets */}
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

        {/* CONTROLES DE SEGURIDAD */}
        <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2" style={{ color: "var(--text-dim)" }}>
          Controles de seguridad
        </p>
        <div className="card p-4 mb-4 space-y-4">
          {/* Congelar tarjeta toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Lock size={16} style={{ color: "var(--text-muted)" }} />
              <div>
                <p className="text-[13px] font-semibold">Congelar tarjeta</p>
                <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                  Desactiva temporalmente
                </p>
              </div>
            </div>
            {/* Toggle OFF */}
            <div
              className="w-10 h-6 rounded-full relative flex-shrink-0"
              style={{ background: "var(--border-strong)" }}
            >
              <div
                className="w-4 h-4 rounded-full absolute top-1 left-1 bg-white"
              />
            </div>
          </div>

          <div className="h-px" style={{ background: "var(--border)" }} />

          {/* Límite de compras */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[13px] font-semibold">Límite de compras</p>
              <p className="text-[13px] font-bold">$1.500.000</p>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ background: "var(--surface-2)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: "60%", background: "var(--primary)" }}
              />
            </div>
            <p className="text-[10px] mt-1" style={{ color: "var(--text-dim)" }}>
              COP / mensual
            </p>
          </div>
        </div>

        {/* CANAL HABILITADO */}
        <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2" style={{ color: "var(--text-dim)" }}>
          Canales habilitados
        </p>
        <div className="card p-4 mb-5 space-y-3">
          <ChannelRow icon={<Globe size={16} />} label="Compras online" active />
          <div className="h-px" style={{ background: "var(--border)" }} />
          <ChannelRow icon={<Store size={16} />} label="Comercios presenciales" active />
          <div className="h-px" style={{ background: "var(--border)" }} />
          <ChannelRow icon={<Banknote size={16} />} label="Retiros en cajeros" active={false} />
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

function ChannelRow({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5" style={{ color: active ? "var(--text)" : "var(--text-muted)" }}>
        {icon}
        <p className="text-[13px] font-semibold">{label}</p>
      </div>
      <div
        className="w-10 h-6 rounded-full relative flex-shrink-0 transition-colors"
        style={{ background: active ? "var(--primary)" : "var(--border-strong)" }}
      >
        <div
          className="w-4 h-4 rounded-full absolute top-1 bg-white transition-all"
          style={{ left: active ? "20px" : "4px" }}
        />
      </div>
    </div>
  );
}
