export default function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(37,99,235,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-slate-950/80" />
    </div>
  );
}
