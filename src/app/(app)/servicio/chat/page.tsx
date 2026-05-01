import Link from "next/link";
import { Send, Sparkles, User } from "lucide-react";
import { Screen, ScreenHeader } from "@/components/Screen";

export default function ChatIA() {
  return (
    <Screen>
      <ScreenHeader title="Asistente IA" back="/servicio" />

      <div className="px-5 pt-2 pb-3 space-y-3">
        <Bubble role="ai">
          Hola Carolina, ¿en qué puedo ayudarte hoy?
        </Bubble>
        <Bubble role="user">Vi un cargo que no reconozco</Bubble>
        <Bubble role="ai">
          Encontré 3 transacciones recientes. ¿Cuál quieres revisar?
        </Bubble>

        <div className="space-y-2 pl-1">
          <Suggest title="Amazon Prime Video" subtitle="$16.99 USD" />
          <Suggest title="Spotify Premium" subtitle="$9.99 USD" />
          <Suggest title="Uber Eats" subtitle="$15.49 USD" />
        </div>

        <Bubble role="ai">
          Si ninguna corresponde, puedo iniciar el reporte ahora.
        </Bubble>
      </div>

      <div className="mt-auto px-5 pb-4 pt-3 border-t border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 px-3.5 py-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[13px] text-[var(--text-muted)]">
            Escribe tu mensaje…
          </div>
          <button className="w-10 h-10 rounded-full bg-[var(--surface-2)] flex items-center justify-center">
            <Send size={16} />
          </button>
        </div>
        <Link href="/servicio/reportar" className="btn-primary">
          Reportar cargo no reconocido
        </Link>
      </div>
    </Screen>
  );
}

function Bubble({ role, children }: { role: "user" | "ai"; children: React.ReactNode }) {
  if (role === "ai") {
    return (
      <div className="flex items-start gap-2">
        <div className="w-7 h-7 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
          <Sparkles size={13} />
        </div>
        <div className="card px-3.5 py-2.5 max-w-[85%] text-[13px]">{children}</div>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2 justify-end">
      <div
        className="px-3.5 py-2.5 rounded-2xl max-w-[85%] text-[13px] bg-[var(--primary)] text-white"
        style={{ borderBottomRightRadius: 6 }}
      >
        {children}
      </div>
      <div className="w-7 h-7 rounded-full bg-[var(--surface-2)] flex items-center justify-center flex-shrink-0">
        <User size={13} />
      </div>
    </div>
  );
}

function Suggest({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="card px-3 py-2.5 flex items-center justify-between">
      <div>
        <p className="text-[13px] font-semibold">{title}</p>
        <p className="text-[11px] text-[var(--text-muted)]">{subtitle}</p>
      </div>
      <span className="text-[11px] text-[var(--primary)] font-semibold">Reportar</span>
    </div>
  );
}
