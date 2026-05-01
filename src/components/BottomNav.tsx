import Link from "next/link";
import { Home, CreditCard, BarChart3, MessageCircle } from "lucide-react";

const items = [
  { href: "/servicio", label: "Inicio", icon: Home },
  { href: "/originacion/centro", label: "Tarjeta", icon: CreditCard },
  { href: "#", label: "Movs", icon: BarChart3 },
  { href: "/servicio/chat", label: "Soporte", icon: MessageCircle },
];

export function BottomNav({ active }: { active?: string }) {
  return (
    <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 pt-2 pb-6">
      <div className="flex justify-around items-center">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.label;
          return (
            <Link
              key={it.label}
              href={it.href as never}
              className="flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition"
              style={{ color: isActive ? "var(--primary)" : "var(--text-muted)" }}
            >
              <Icon size={22} />
              <span className="text-[10px] font-medium">{it.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
