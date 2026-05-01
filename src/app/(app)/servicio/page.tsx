import Link from "next/link";
import {
  Bell,
  Lock,
  AlertCircle,
  Zap,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import { Screen } from "@/components/Screen";
import { BottomNav } from "@/components/BottomNav";

export default function ServicioHome() {
  return (
    <Screen>
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[var(--text-muted)] text-xs">Bienvenido</p>
          <h1 className="text-[22px] font-bold tracking-tight">Hola, Carolina</h1>
        </div>
        <button className="relative p-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)]">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--primary)]" />
        </button>
      </div>

      <div className="px-5">
        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Tu Tarjeta
        </p>
        <div className="card p-4 mb-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <CreditCard size={16} />
              </div>
              <div>
                <p className="text-[13px] font-semibold">Visa Platinum</p>
                <p className="text-[11px] text-[var(--text-muted)]">•••• 4823</p>
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-wide px-2 py-1 rounded-full bg-[var(--success-soft)] text-[var(--success)]">
              ACTIVA
            </span>
          </div>
          <div>
            <p className="text-[11px] text-[var(--text-muted)] mb-0.5">Saldo disponible</p>
            <p className="text-2xl font-bold tracking-tight">$45,200.00</p>
          </div>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          Acciones rápidas
        </p>
        <div className="grid grid-cols-4 gap-2 mb-5">
          <QuickAction icon={<Lock size={18} />} label="Bloquear" href="/servicio/bloqueo" />
          <QuickAction
            icon={<AlertCircle size={18} />}
            label="Reportar cargo"
            href="/servicio/reportar"
          />
          <QuickAction icon={<Zap size={18} />} label="Activación" href="#" />
          <QuickAction icon={<CreditCard size={18} />} label="Activar" href="#" />
        </div>

        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold">
            Casos abiertos
          </p>
          <span className="text-[11px] text-[var(--text-muted)]">2</span>
        </div>

        <div className="space-y-2 mb-6">
          <CaseRow
            id="#RC-2024-00847"
            label="Cargo no reconocido — Spotify $9.99 USD"
            status="En análisis"
            href="/servicio/caso"
          />
          <CaseRow
            id="#RC-2024-00819"
            label="Reposición de tarjeta"
            status="Aprobado"
            statusColor="success"
            href="#"
          />
        </div>

        <Link href="/servicio/chat" className="btn-primary mb-4">
          Abrir asistente IA
        </Link>
      </div>

      <BottomNav active="Inicio" />
    </Screen>
  );
}

function QuickAction({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1.5 p-2.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)] transition"
    >
      <div className="w-9 h-9 rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[10px] text-center leading-tight font-medium">{label}</span>
    </Link>
  );
}

function CaseRow({
  id,
  label,
  status,
  statusColor = "warning",
  href,
}: {
  id: string;
  label: string;
  status: string;
  statusColor?: "warning" | "success";
  href: string;
}) {
  const colorClass =
    statusColor === "success"
      ? "bg-[var(--success-soft)] text-[var(--success)]"
      : "bg-[var(--warning-soft)] text-[var(--warning)]";
  return (
    <Link
      href={href}
      className="card p-3 flex items-center gap-3 hover:bg-[var(--surface-2)] transition"
    >
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-[var(--text-muted)] font-mono">{id}</p>
        <p className="text-[13px] font-medium truncate">{label}</p>
      </div>
      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${colorClass}`}>
        {status}
      </span>
      <ChevronRight size={14} className="text-[var(--text-dim)]" />
    </Link>
  );
}
