"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Star } from "lucide-react";
import { Screen } from "@/components/Screen";

export default function Cierre() {
  const [rating, setRating] = useState(4);
  const [score, setScore] = useState<number | null>(8);

  return (
    <Screen>
      <div className="px-5 pt-8 pb-5 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--success-soft)] text-[var(--success)] flex items-center justify-center mb-4">
          <Check size={28} strokeWidth={3} />
        </div>
        <h2 className="text-2xl font-bold mb-1.5 tracking-tight">Caso Resuelto</h2>
        <p className="text-[13px] text-[var(--text-muted)] max-w-[280px]">
          El cargo de $26.98 USD fue revertido. Verás el reembolso en tu próximo extracto.
        </p>
      </div>

      <div className="px-5">
        <div className="card p-3.5 mb-4">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-dim)] font-bold mb-1">
            Resumen de resolución
          </p>
          <p className="text-[13px] font-semibold mb-3">#RC-2024-00847</p>
          <div className="space-y-2 text-[12px]">
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Categoría</span>
              <span>Cargo no reconocido</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Resolución</span>
              <span className="text-[var(--success)]">Reembolso aprobado</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Cierre</span>
              <span>Hoy, 16:08</span>
            </div>
          </div>
        </div>

        <div className="card p-4 mb-3">
          <p className="text-[13px] font-semibold mb-3 text-center">
            ¿Cómo calificas la atención?
          </p>
          <div className="flex justify-center gap-2.5 mb-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setRating(n)}
                className="p-1"
              >
                <Star
                  size={26}
                  fill={n <= rating ? "var(--warning)" : "transparent"}
                  stroke={n <= rating ? "var(--warning)" : "var(--border-strong)"}
                  strokeWidth={2}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="card p-4 mb-5">
          <p className="text-[13px] font-semibold mb-1.5 text-center">
            ¿Recomendarías este servicio?
          </p>
          <p className="text-[11px] text-[var(--text-muted)] text-center mb-3">
            Del 1 al 10
          </p>
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 10 }).map((_, i) => {
              const n = i + 1;
              const active = score === n;
              return (
                <button
                  key={n}
                  onClick={() => setScore(n)}
                  className="aspect-square rounded-md text-[11px] font-bold transition"
                  style={{
                    background: active
                      ? "var(--primary)"
                      : "var(--surface-2)",
                    color: active ? "white" : "var(--text-muted)",
                  }}
                >
                  {n}
                </button>
              );
            })}
          </div>
        </div>

        <Link href="/servicio" className="btn-primary">
          Finalizar
        </Link>
      </div>
    </Screen>
  );
}
