import { useTheme } from "@/components/themeContext";

export default function Features(){
    const { dark } = useTheme();
    
    return (
        <section id="features" className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Features
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Everything you need. <br className="hidden md:block" />
              Nothing in your way.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { t: "90-minute cycles", d: "Built around the rhythm your brain actually runs on." },
              { t: "Distraction-free UI", d: "No streaks, no badges, no noise. Just the work." },
              { t: "Light & dark", d: "Pick the mode that helps you settle in." },
              { t: "Custom presets", d: "Tune focus, break, and cycle counts to your day." },
              { t: "Gentle reminders", d: "Calm nudges to start, pause, and return." },
              { t: "Privacy by default", d: "Local-first. Your sessions stay on your device." },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-2xl border border-border bg-background p-7"
              >
                <div className="text-sm font-semibold">{f.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
