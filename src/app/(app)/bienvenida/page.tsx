import Link from "next/link";
import { CreditCard, ShieldCheck, Zap, Globe } from "lucide-react";
import { Screen } from "@/components/Screen";

export default function Bienvenida() {
  return (
    <Screen>
      <div className="flex flex-col min-h-full px-6">
        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center pt-16 pb-8">
          {/* Logo mark */}
          <div className="mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "var(--primary)" }}
            >
              <CreditCard size={26} color="white" />
            </div>
            <p
              className="text-[11px] tracking-[0.25em] uppercase font-bold mb-2"
              style={{ color: "var(--primary)" }}
            >
              Todo Tarjetas S.A.
            </p>
            <h1 className="text-[34px] font-black tracking-tight leading-tight">
              Tu tarjeta,<br />
              <span style={{ color: "var(--primary)" }}>tu ritmo.</span>
            </h1>
            <p className="text-[14px] mt-3" style={{ color: "var(--text-muted)" }}>
              Banca digital para los que no paran.
            </p>
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Chip icon={<Zap size={11} />} label="Virtual instantánea" />
            <Chip icon={<ShieldCheck size={11} />} label="Encriptación bancaria" />
            <Chip icon={<Globe size={11} />} label="Compras en todo el mundo" />
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <Link href="/originacion" className="btn-primary">
              Solicitar mi tarjeta →
            </Link>
            <Link href="/servicio" className="btn-outline">
              Ya tengo cuenta · Iniciar sesión
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p
          className="text-center text-[11px] pb-8 leading-relaxed"
          style={{ color: "var(--text-dim)" }}
        >
          Al continuar aceptas los{" "}
          <span style={{ color: "var(--primary)" }}>Términos y Condiciones</span>{" "}
          y la{" "}
          <span style={{ color: "var(--primary)" }}>Política de Privacidad</span>.
        </p>
      </div>
    </Screen>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        color: "var(--text-muted)",
      }}
    >
      <span style={{ color: "var(--primary)" }}>{icon}</span>
      {label}
    </span>
  );
}
