import Link from "next/link";
import { AlertTriangle, Edit3, CheckCircle2 } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

const selectedCharges = [
  { name: "Amazon Prime Video", amount: "$14.99" },
  { name: "Spotify Premium", amount: "$9.99" },
];

const totalUSD = "$24.98";

export default function RevisarReporte() {
  return (
    <Screen>
      <ScreenHeader title="Confirmar Reporte" back="/servicio/reportar/detalles" />

      <div className="px-5 pt-2 pb-4">
        {/* ── Alerta visual ── */}
        <div
          className="flex items-start gap-3 rounded-2xl p-4 mb-5"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.25)",
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(239,68,68,0.15)" }}
          >
            <AlertTriangle size={18} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <p className="text-[13px] font-bold mb-0.5" style={{ color: "var(--primary)" }}>
              Vas a reportar {selectedCharges.length} cargos por {totalUSD} USD
            </p>
            <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
              Una vez enviado, se iniciará la investigación. El proceso puede tardar 6–10 días hábiles.
            </p>
          </div>
        </div>

        {/* ── Lista de cargos seleccionados ── */}
        <p className="text-[10px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--text-dim)" }}>
          Cargos a reportar
        </p>
        <div className="card mb-5">
          {selectedCharges.map((charge, i) => (
            <div key={charge.name}>
              {i > 0 && <div className="h-px mx-4" style={{ background: "var(--border)" }} />}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--surface-2)" }}
                  >
                    <CheckCircle2 size={14} style={{ color: "var(--primary)" }} />
                  </div>
                  <p className="text-[13px] font-semibold">{charge.name}</p>
                </div>
                <span className="text-[13px] font-bold">{charge.amount}</span>
              </div>
            </div>
          ))}
          <div
            className="mx-4 h-px"
            style={{ background: "var(--border)" }}
          />
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>
              Total reportado
            </span>
            <span className="text-[15px] font-bold">{totalUSD} <span className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>USD</span></span>
          </div>
        </div>

        {/* ── Aviso ── */}
        <p className="text-[11px] text-center mb-5" style={{ color: "var(--text-dim)" }}>
          Al confirmar aceptas que estos cargos son fraudulentos o no autorizados.
        </p>

        {/* ── Botones ── */}
        <div className="space-y-3">
          <Link href="/servicio/reportar/confirmacion" className="btn-primary flex items-center justify-center gap-2">
            <CheckCircle2 size={16} />
            Confirmar Reporte
          </Link>
          <Link href="/servicio/reportar/detalles" className="btn-outline flex items-center justify-center gap-2">
            <Edit3 size={15} />
            Editar antes de enviar
          </Link>
        </div>
      </div>
    </Screen>
  );
}
