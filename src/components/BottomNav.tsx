import Link from "next/link";
import { Home, MessageCircle, Folder, User, CreditCard, Activity } from "lucide-react";

const servicio = [
  { href: "/servicio", label: "Home", icon: Home },
  { href: "/servicio/chat", label: "Chat", icon: MessageCircle },
  { href: "#", label: "Casos", icon: Folder },
  { href: "#", label: "Perfil", icon: User },
];

const originacion = [
  { href: "/originacion/centro", label: "Inicio", icon: Home },
  { href: "#", label: "Tarjeta", icon: CreditCard },
  { href: "#", label: "Actividad", icon: Activity },
  { href: "#", label: "Perfil", icon: User },
];

export function BottomNav({
  active,
  variant = "servicio",
}: {
  active?: string;
  variant?: "servicio" | "originacion";
}) {
  const items = variant === "originacion" ? originacion : servicio;
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
