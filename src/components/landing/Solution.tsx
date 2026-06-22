import PhoneFrame from "@/components/landing/PhoneFrame";
import {
  Brain,
  Coffee,
  Repeat,
} from "lucide-react";
import { useTheme } from "@/components/themeContext";

export default function Solution() {
    const { dark } = useTheme();
    
    return (
        <section className="mx-auto max-w-6xl px-6 py-28">
                <div className="grid items-center gap-16 md:grid-cols-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      The approach
                    </div>
                    <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                      Work with your <span className="underline-accent">natural rhythm.</span>
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                      Your brain moves through 90-minute cycles of higher and lower
                      alertness — the Basic Rest-Activity Cycle. Flow90 turns that
                      rhythm into a simple, repeatable practice.
                    </p>
        
                    <div className="mt-10 space-y-5">
                      {[
                        {
                          i: <Brain className="h-4 w-4" />,
                          t: "Matches your biology",
                          d: "90 minutes of focus aligns with your ultradian rhythm.",
                        },
                        {
                          i: <Coffee className="h-4 w-4" />,
                          t: "Real rest, not scrolling",
                          d: "Guided breaks help your mind actually recover.",
                        },
                        {
                          i: <Repeat className="h-4 w-4" />,
                          t: "Sustainable depth",
                          d: "Repeat the cycle — keep energy across the day.",
                        },
                      ].map((f) => (
                        <div key={f.t} className="flex gap-4">
                          <div
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
                            style={{
                              backgroundColor:
                                "color-mix(in oklab, var(--accent) 22%, transparent)",
                              color: "var(--foreground)",
                            }}
                          >
                            {f.i}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium">{f.t}</div>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {f.d}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
        
                  <div className="relative">
                    <PhoneFrame screen="timer2" dark={dark} />
                  </div>
                </div>
              </section>
    )
}