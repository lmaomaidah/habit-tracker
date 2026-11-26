// grey placeholder shaped like the detail page while the habit loads
export default function Loading() {
  return (
    <div role="status" className="max-w-2xl motion-safe:animate-pulse">
      <span className="sr-only">Loading habit...</span>
      <div className="mb-8 h-72 rounded-3xl bg-ink/10" />
      <div className="mb-3 h-5 w-3/4 rounded-full bg-ink/10" />
      <div className="h-5 w-1/3 rounded-full bg-ink/10" />
    </div>
  );
}
