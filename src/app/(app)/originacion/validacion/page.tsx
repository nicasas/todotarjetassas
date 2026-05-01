import Link from "next/link";
import { ScanLine, UserCircle2, Check } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function Validacion() {
  return (
    <Screen>
      <ScreenHeader title="Atrás" back="/originacion/registro" step="PASO 2 DE 7" />

      <div className="px-5 pt-2 pb-4">
        <h2 className="text-2xl font-bold mb-1.5 tracking-tight">
          Verifica tu identidad
        </h2>
        <p className="text-[13px] text-[var(--text-muted)] mb-5">
          Captura tu documento y un selfie. Lo verificamos en segundos con biometría.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <UploadCard
            icon={<ScanLine size={26} />}
            title="Documento"
            done
          />
          <UploadCard
            icon={<UserCircle2 size={26} />}
            title="Selfie"
            pending
          />
        </div>

        <div className="card p-3.5 mb-4">
          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
            <span className="text-[var(--text)] font-semibold">
              Captura biométrica segura.
            </span>{" "}
            Usamos liveness detection para asegurar que eres tú. Tus datos viajan cifrados y
            no se almacenan imágenes una vez verificada tu identidad.
          </p>
        </div>

        <Link href="/originacion/perfilamiento" className="btn-primary">
          Verificar identidad →
        </Link>
      </div>
    </Screen>
  );
}

function UploadCard({
  icon,
  title,
  done,
  pending,
}: {
  icon: React.ReactNode;
  title: string;
  done?: boolean;
  pending?: boolean;
}) {
  return (
    <div
      className={`card p-4 flex flex-col items-center text-center aspect-[4/5] justify-center ${
        done ? "border-[var(--success)]/40" : ""
      }`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2.5 ${
          done
            ? "bg-[var(--success-soft)] text-[var(--success)]"
            : "bg-[var(--surface-2)] text-[var(--text-muted)]"
        }`}
      >
        {icon}
      </div>
      <p className="text-[13px] font-semibold mb-1">{title}</p>
      {done && (
        <span className="text-[10px] font-bold flex items-center gap-1 text-[var(--success)]">
          <Check size={10} strokeWidth={3} /> LISTO
        </span>
      )}
      {pending && (
        <span className="text-[10px] font-bold text-[var(--text-muted)]">PENDIENTE</span>
      )}
    </div>
  );
}
