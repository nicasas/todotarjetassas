import Link from "next/link";
import { ReactNode } from "react";
import { ChevronLeft, Home } from "lucide-react";
import { StatusBar } from "./PhoneFrame";

export function Screen({ children, hideStatus }: { children: ReactNode; hideStatus?: boolean }) {
  return (
    <div className="flex flex-col h-full text-[var(--text)]">
      {!hideStatus && <StatusBar />}
      <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </div>
  );
}

export function ScreenHeader({
  title,
  back,
  right,
  step,
}: {
  title?: string;
  back?: string;
  right?: ReactNode;
  step?: string;
}) {
  return (
    <div className="px-5 pt-2 pb-3 flex items-center justify-between">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {back && (
          <Link
            href={back}
            className="p-1 -ml-1 rounded-full hover:bg-[var(--surface-2)] transition"
          >
            <ChevronLeft size={22} />
          </Link>
        )}
        {title && (
          <h1 className="text-[17px] font-semibold tracking-tight truncate">{title}</h1>
        )}
      </div>
      {step && (
        <span className="text-[11px] font-semibold text-[var(--text-muted)] tracking-wide">
          {step}
        </span>
      )}
      {right}
    </div>
  );
}

export function ScreenBackHome() {
  return (
    <Link
      href="/"
      className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[var(--surface-2)]/80 backdrop-blur border border-[var(--border)] hover:bg-[var(--surface-3)] transition"
      title="Volver al índice"
    >
      <Home size={14} />
    </Link>
  );
}
