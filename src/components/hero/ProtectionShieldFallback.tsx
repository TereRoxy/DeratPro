export function ProtectionShieldFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center"
    >
      <div className="relative grid size-56 place-items-center rounded-full border border-sky-400/30 bg-sky-400/5 shadow-glow sm:size-72">
        <div className="absolute inset-[14%] rounded-full border border-teal-400/30" />
        <div className="absolute inset-[28%] rounded-full border border-sky-300/25" />
        <span className="size-3 rounded-full bg-brand-silkyBlue shadow-[0_0_22px_rgba(56,189,248,0.8)]" />
      </div>
    </div>
  );
}