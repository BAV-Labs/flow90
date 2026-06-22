import PhoneFrame from "@/components/landing/PhoneFrame";
import { Apple, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/themeContext";

export default function Hero() {
    const { dark } = useTheme();
    
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-28 md:grid-cols-2 md:pt-36 lg:gap-16">

        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Inspired by scientific research
          </div>

          <h1 className="mt-6 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight md:text-[64px]">
            Focus <span className="underline-accent">deeper.</span>
            <br />
            Not faster.
          </h1>

          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Flow90 is a calm focus timer built around 90-minute deep work cycles —
            designed to work with your natural rhythm, not against it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
                href="https://apps.apple.com/de/app/flow90/id6778360123?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"              
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Apple className="h-4 w-4" fill="currentColor" />
              Download on App Store
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              See how it works
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>90-min cycles</span>
            <span className="h-3 w-px bg-border" />
            <span>Distraction-free</span>
            <span className="h-3 w-px bg-border" />
            <span>Light & dark</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div
            className="absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 40%, color-mix(in oklab, var(--accent) 20%, transparent), transparent)",
            }}
          />

          <div className="relative flex items-center justify-center">
            {/* glow duplicate */}
            <div
              className="absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 40%, color-mix(in oklab, var(--accent) 20%, transparent), transparent)",
              }}
            />

            {/* LEFT (light) */}
            <div className="relative z-10 rotate-y-6 translate-y-6">
              <PhoneFrame screen="timer1" dark={false} />
            </div>

            {/* RIGHT (dark) */}
            <div className="relative z-20 -ml-6 rotate-1 -translate-y-4 scale-[0.98]">
              <PhoneFrame screen="timer2" dark={true} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}