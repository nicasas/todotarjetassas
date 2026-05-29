import Link from "next/link";
import { Paperclip } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function ReportarDetalles() {
  return (
    <Screen>
      <ScreenHeader title="Detalles del Reporte" back="/servicio/reportar" />
      <div className="px-5 pt-2 pb-4">
        <div className="card p-4 mb-4">
          <p className="text-[11px] text-[var(--text-muted)] mb-1">2 cargos seleccionados</p>
          <div className="flex items-end justify-between mb-2">
            <span className="text-[13px] font-semibold">Total reportado</span>
            <span className="text-2xl font-bold tracking-tight">
              $26.98 <span className="text-xs font-medium text-[var(--text-muted)]">USD</span>
            </span>
          </div>
          <div className="h-px bg-[var(--border)] my-2" />
          <ul className="space-y-1 text-[12px]">
            <li className="flex justify-between text-[var(--text-muted)]">
              <span>Amazon Prime Video</span>
              <span>$16.99</span>
            </li>
            <li className="flex justify-between text-[var(--text-muted)]">
              <span>Spotify Premium</span>
              <span>$9.99</span>
            </li>
          </ul>
        </div>

        <Field label="Describe el problema">
          <textarea
            className="w-full bg-transparent outline-none text-[13px] resize-none"
            rows={3}
            placeholder="Explica brevemente por qué no reconoces estos cargos..."
          />
        </Field>

        <button className="card w-full p-3 flex items-center gap-2.5 mb-5 hover:bg-[var(--surface-2)] transition">
          <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] flex items-center justify-center">
            <Paperclip size={14} />
          </div>
          <div className="flex-1 text-left">
            <p className="text-[13px] font-semibold">Capturar evidencia</p>
            <p className="text-[11px] text-[var(--text-muted)]">Captura de pantalla o foto</p>
          </div>
        </button>

        <Link href="/servicio/reportar/revisar" className="btn-primary">
          Revisar y confirmar
        </Link>
      </div>
    </Screen>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="card p-3 mb-3">
      <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-1.5">
        {label}
      </p>
      {children}
    </div>
  );
}
