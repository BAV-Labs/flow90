import { useTheme } from "@/components/themeContext";

export default function HowItWorks(){
    const { dark, setDark } = useTheme();

    return (
        <section id="how" className="border-y border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              How it works
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              One cycle at a time.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {[
              { n: "01", t: "Start a session", d: "Pick a preset. Press play. That's it." },
              { n: "02", t: "Focus for 90 min", d: "One uninterrupted block of deep work." },
              { n: "03", t: "Take a real break", d: "A guided pause — step away properly." },
              { n: "04", t: "Repeat", d: "Two or three cycles is a remarkable day." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="text-xs font-medium text-muted-foreground">
                  {s.n}
                </div>
                <div className="mt-6 text-base font-semibold">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
