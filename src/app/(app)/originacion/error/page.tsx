import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function ErrorVerificacion() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/validacion" />

      <div className="px-5 pt-2 pb-4">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mb-4">
            <AlertTriangle size={28} strokeWidth={2.2} />
          </div>
          <h2 className="text-2xl font-bold mb-1.5 tracking-tight">
            No pudimos verificar tu identidad
          </h2>
          <p className="text-[13px] text-[var(--text-muted)] max-w-[280px]">
            La calidad del documento no fue suficiente para validarlo automáticamente.
          </p>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-2">
          ¿Qué puedes hacer?
        </p>
        <div className="space-y-2 mb-5">
          <Tip
            num="1"
            title="Asegúrate que el documento esté completo"
            detail="No deben faltar bordes ni datos."
          />
          <Tip
            num="2"
            title="Toma la foto en un lugar bien iluminado"
            detail="Evita reflejos y sombras fuertes sobre el documento."
          />
          <Tip
            num="3"
            title="Verifica que tu documento esté vigente"
            detail="No aceptamos documentos vencidos o deteriorados."
          />
        </div>

        <div className="card p-3.5 mb-5 bg-[var(--warning-soft)]/40 border-[var(--warning)]/30">
          <p className="text-[10px] tracking-widest uppercase text-[var(--warning)] font-bold mb-1">
            Importante
          </p>
          <p className="text-[12px]">
            Después de 3 intentos sin éxito, tu solicitud pasará a revisión manual y la
            respuesta podría tardar hasta 24 horas hábiles.
          </p>
        </div>

        <Link href="/originacion/validacion" className="btn-primary mb-2">
          <RefreshCw size={15} /> Reintentar verificación
        </Link>
        <Link href="/originacion/revision" className="btn-outline">
          Continuar con revisión manual
        </Link>
      </div>
    </Screen>
  );
}

function Tip({ num, title, detail }: { num: string; title: string; detail: string }) {
  return (
    <div className="card p-3 flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center text-[12px] font-bold flex-shrink-0">
        {num}
      </div>
      <div className="flex-1">
        <p className="text-[13px] font-semibold mb-0.5">{title}</p>
        <p className="text-[11px] text-[var(--text-muted)]">{detail}</p>
      </div>
    </div>
  );
}
