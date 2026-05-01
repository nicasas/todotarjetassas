import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur bg-[var(--bg)]/85 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition"
          >
            <ArrowLeft size={16} />
            <span>Todo Tarjetas · App Cliente</span>
          </Link>
          <span className="hidden sm:inline text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-semibold">
            Prototipo High Fidelity
          </span>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-10 px-4">
        <PhoneFrame>{children}</PhoneFrame>
      </main>
    </div>
  );
}
