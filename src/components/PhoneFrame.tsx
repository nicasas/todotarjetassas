import { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto" style={{ width: 390 }}>
      <div
        className="relative bg-[var(--bg)] overflow-hidden border border-[var(--border)] shadow-2xl"
        style={{ width: 390, height: 844, borderRadius: 48 }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-32 h-7 bg-black rounded-full" />
        <div className="absolute inset-0 flex flex-col">{children}</div>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="flex justify-between items-center px-7 pt-3 pb-1 text-[13px] font-semibold tracking-tight">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
      <rect x="0" y="7" width="3" height="4" rx="0.5" fill="currentColor" />
      <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="currentColor" />
      <rect x="9" y="3" width="3" height="8" rx="0.5" fill="currentColor" />
      <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
      <path
        d="M7.5 0C9.66 0 11.7 0.83 13.27 2.32L11.83 3.76C10.66 2.65 9.13 2 7.5 2C5.87 2 4.34 2.65 3.17 3.76L1.73 2.32C3.3 0.83 5.34 0 7.5 0Z"
        fill="currentColor"
      />
      <path
        d="M7.5 4C8.74 4 9.92 4.49 10.79 5.36L9.36 6.79C8.86 6.29 8.2 6 7.5 6C6.8 6 6.14 6.29 5.64 6.79L4.21 5.36C5.08 4.49 6.26 4 7.5 4Z"
        fill="currentColor"
      />
      <circle cx="7.5" cy="9.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="22"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <rect x="2" y="2" width="19" height="9" rx="1.5" fill="currentColor" />
      <rect x="24" y="4" width="2" height="5" rx="1" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
