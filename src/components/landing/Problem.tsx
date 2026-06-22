export default function Problem() {
  return (
    
    <section className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          The problem
        </div>

        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          We're constantly busy. <br className="hidden md:block" />
          Rarely <span className="underline-accent">focused.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground">
          Notifications fracture attention. Rigid productivity tools push us
          harder, not deeper. Burnout becomes the cost of doing meaningful work.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border text-left md:grid-cols-3">
          {[
            { t: "Shallow attention", d: "Average focus session ends after 11 minutes." },
            { t: "Constant context-switching", d: "It takes 23 minutes to return to deep work." },
            { t: "Burnout, not output", d: "More hours rarely mean better thinking." },
          ].map((b) => (
            <div key={b.t} className="bg-surface p-7">
              <div className="text-sm font-medium">{b.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{b.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}