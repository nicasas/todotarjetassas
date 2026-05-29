"use client";

import { useState } from "react";
import { X, Play, RotateCcw } from "lucide-react";

const ENTRY = "/bienvenida";

export function PhonePreview() {
  const [open, setOpen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  function launch() {
    setIframeKey((k) => k + 1);
    setOpen(true);
  }

  function reload() {
    setIframeKey((k) => k + 1);
  }

  return (
    <>
      <button
        onClick={launch}
        className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-[13px] transition hover:opacity-90 flex-shrink-0"
        style={{ background: "var(--primary)", color: "#fff" }}
      >
        <Play size={13} fill="white" strokeWidth={0} />
        Ejecutar prototipo
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)" }}
        >
          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={reload}
              className="flex items-center gap-1.5 h-8 px-3 rounded-lg text-[11px] font-semibold transition hover:bg-white/15"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)" }}
              title="Reiniciar desde el inicio"
            >
              <RotateCcw size={12} />
              Reiniciar
            </button>

            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition hover:bg-white/15"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)" }}
              title="Cerrar"
            >
              <X size={15} />
            </button>
          </div>

          {/* Phone shell */}
          <div
            className="phone-shell"
            style={{
              position: "relative",
              width: 390,
              height: 844,
              background: "#0d0d0d",
              borderRadius: 52,
              border: "1.5px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 0 0 9px #141414, 0 0 0 10px rgba(255,255,255,0.06), 0 50px 120px rgba(0,0,0,0.9)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* Left buttons */}
            {[140, 185, 255].map((top, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: -10,
                  top,
                  width: 4,
                  height: i === 0 ? 32 : 60,
                  background: "#1e1e1e",
                  borderRadius: 2,
                }}
              />
            ))}
            {/* Right button */}
            <div
              style={{
                position: "absolute",
                right: -10,
                top: 185,
                width: 4,
                height: 80,
                background: "#1e1e1e",
                borderRadius: 2,
              }}
            />

            {/* Dynamic Island */}
            <div
              style={{
                position: "absolute",
                top: 14,
                left: "50%",
                transform: "translateX(-50%)",
                width: 126,
                height: 37,
                background: "#000",
                borderRadius: 20,
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            {/* Screen */}
            <iframe
              key={iframeKey}
              src={ENTRY}
              title="Todo Tarjetas — Prototipo"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
                background: "#0a0a0a",
              }}
            />

            {/* Home indicator */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 134,
                height: 5,
                background: "rgba(255,255,255,0.28)",
                borderRadius: 10,
                pointerEvents: "none",
              }}
            />
          </div>

          <style>{`
            @media (max-height: 1020px) { .phone-shell { transform: scale(0.88); } }
            @media (max-height: 900px)  { .phone-shell { transform: scale(0.78); } }
            @media (max-height: 800px)  { .phone-shell { transform: scale(0.68); } }
          `}</style>
        </div>
      )}
    </>
  );
}
