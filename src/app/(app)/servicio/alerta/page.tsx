import Link from "next/link";
import { TriangleAlert, ShieldCheck } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function AlertaProactiva() {
  return (
    <Screen>
      <ScreenHeader back="/servicio" />

      <div className="px-5 pt-2 pb-6">
        {/* Etiqueta alerta */}
        <div className="flex items-center gap-2 mb-6">
          <TriangleAlert size={16} style={{ color: "var(--warning)" }} />
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--warning)" }}
          >
            Alerta Proactiva
          </span>
        </div>

        <h2 className="text-[28px] font-bold tracking-tight leading-tight mb-2">
          Detectamos actividad inusual
        </h2>
        <p className="text-[13px] mb-6" style={{ color: "var(--text-muted)" }}>
          Encontramos una transacción que podría no ser tuya
        </p>

        {/* Tarjeta transacción sospechosa */}
        <div
          className="rounded-2xl p-4 mb-3"
          style={{
            background: "var(--surface)",
            border: "1.5px solid rgba(239,68,68,0.40)",
          }}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-[16px] font-bold mb-0.5">Amazon MX</p>
              <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                05 Mar 2026 · 09:41
              </p>
            </div>
            <span
              className="text-[10px] font-black px-2.5 py-1 rounded-full tracking-wide flex-shrink-0"
              style={{ background: "var(--primary)", color: "#fff" }}
            >
              INUSUAL
            </span>
          </div>
          <p className="text-[24px] font-black tracking-tight mt-3">
            $1,299.00{" "}
            <span
              className="text-[14px] font-bold"
              style={{ color: "var(--text-muted)" }}
            >
              MXN
            </span>
          </p>
        </div>

        {/* Explicación IA */}
        <p
          className="text-[11px] leading-relaxed mb-7 px-0.5"
          style={{ color: "var(--text-dim)" }}
        >
          Nuestro sistema de IA detectó esta transacción como inusual basado en
          tu historial de compras.
        </p>

        <Link href="/servicio/reportar" className="btn-primary mb-3">
          Sí, reportar este cargo
        </Link>
        <Link href="/servicio" className="btn-outline mb-6">
          No, fui yo
        </Link>

        <div className="flex items-center justify-center gap-1.5">
          <ShieldCheck size={13} style={{ color: "var(--text-dim)" }} />
          <p className="text-[11px] text-center" style={{ color: "var(--text-dim)" }}>
            Tu tarjeta sigue activa mientras revisamos
          </p>
        </div>
      </div>
    </Screen>
  );
}
