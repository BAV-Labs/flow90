import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Play,
  Pause,
  Square,
  Moon,
  Sun,
  Sliders,
  Bell,
  Sparkles,
  Brain,
  Coffee,
  Repeat,
  Apple,
  ArrowRight,
} from "lucide-react";
import logoLight from "@/assets/logo_light.png.asset.json";
import logoDark from "@/assets/logo_dark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flow90 — Deep work. Intentional rest. Better focus." },
      {
        name: "description",
        content:
          "Flow90 is a calm, minimal focus timer built around 90-minute deep work cycles. Work with your natural rhythm, not against it.",
      },
      { property: "og:title", content: "Flow90 — Deep work. Intentional rest." },
      {
        property: "og:description",
        content:
          "A focus app for 90-minute deep work cycles. Calm, minimal, distraction-free.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(m.matches);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, setDark };
}

function Logo({ className = "h-8 w-8", dark }: { className?: string; dark: boolean }) {
  return (
    <img
      src={dark ? logoDark.url : logoLight.url}
      alt="Flow90"
      className={className}
      width={64}
      height={64}
    />
  );
}

/* ───────── Phone mockup rendered in pure HTML to match the app UI ───────── */

function TimerDial({ variant = "light" }: { variant?: "light" | "dark" }) {
  const ticks = Array.from({ length: 60 });
  const dark = variant === "dark";
  return (
    <div className="relative aspect-square w-full">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {ticks.map((_, i) => {
          const angle = (i * 360) / 60 - 90;
          const rad = (angle * Math.PI) / 180;
          const r1 = 88;
          const r2 = i % 5 === 0 ? 78 : 82;
          const x1 = 100 + r1 * Math.cos(rad);
          const y1 = 100 + r1 * Math.sin(rad);
          const x2 = 100 + r2 * Math.cos(rad);
          const y2 = 100 + r2 * Math.sin(rad);
          const isTop = i === 0;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={
                isTop
                  ? "var(--accent)"
                  : dark
                  ? "rgba(255,255,255,0.35)"
                  : "rgba(0,0,0,0.22)"
              }
              strokeWidth={isTop ? 2.5 : 1.2}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}

type Screen = "timer-light" | "timer-dark" | "break" | "settings";

function PhoneFrame({
  screen,
  className = "",
}: {
  screen: Screen;
  className?: string;
}) {
  const isDark = screen === "timer-dark" || screen === "break";
  return (
    <div
      className={`relative mx-auto aspect-[9/19.5] w-full max-w-[280px] rounded-[2.6rem] border border-border bg-foreground/10 p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[2.2rem] ${
          isDark ? "bg-[#0c0c0d] text-white" : "bg-[#fbfaf6] text-neutral-900"
        }`}
      >
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        {/* Status bar */}
        <div
          className={`flex items-center justify-between px-6 pt-2.5 text-[10px] font-medium ${
            isDark ? "text-white/80" : "text-neutral-700"
          }`}
        >
          <span>10:38</span>
          <span />
        </div>

        {screen === "settings" ? (
          <SettingsScreen />
        ) : (
          <TimerScreen
            dark={isDark}
            paused={screen === "break"}
            time={screen === "break" ? "18:30" : "90:00"}
            showBreakToast={screen === "break"}
          />
        )}
      </div>
    </div>
  );
}

function TimerScreen({
  dark,
  paused,
  time,
  showBreakToast,
}: {
  dark: boolean;
  paused: boolean;
  time: string;
  showBreakToast?: boolean;
}) {
  return (
    <div className="flex h-full flex-col px-5 pb-6 pt-6">
      <div
        className={`text-center text-[11px] tracking-wide ${
          dark ? "text-white/55" : "text-neutral-500"
        }`}
      >
        Start focusing
      </div>

      <div className="relative mt-3 flex-1">
        <TimerDial variant={dark ? "dark" : "light"} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-[38px] font-light tracking-tight tabular-nums">
            {time}
          </div>
          <div className="mt-1 flex items-center gap-1.5">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className={`text-[10px] ${
                dark ? "text-white/55" : "text-neutral-500"
              }`}
            >
              Cycle 1 of 3
            </span>
          </div>
        </div>
      </div>

      {showBreakToast && (
        <div className="mb-4 rounded-2xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10">
          <div className="text-[11px] font-medium">Take a real break</div>
          <div className="mt-0.5 text-[10px] text-white/55">
            Step away, take your mind off — come back stronger.
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-center gap-5">
        <button
          className={`grid h-14 w-14 place-items-center rounded-full ${
            dark ? "bg-white text-black" : "bg-neutral-900 text-white"
          }`}
        >
          {paused ? (
            <Pause className="h-5 w-5" fill="currentColor" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
          )}
        </button>
        <button
          className={`grid h-14 w-14 place-items-center rounded-full ${
            dark ? "bg-white/10 text-white" : "bg-neutral-200 text-neutral-900"
          }`}
        >
          <Square className="h-4 w-4" fill="currentColor" />
        </button>
      </div>

      {/* Bottom tabs */}
      <div
        className={`mt-5 flex items-center justify-around text-[11px] ${
          dark ? "text-white/45" : "text-neutral-400"
        }`}
      >
        <Sliders className="h-4 w-4" />
        <Sparkles className="h-4 w-4" />
        <Bell className="h-4 w-4" />
      </div>
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="flex h-full flex-col px-5 pb-6 pt-6 text-neutral-900">
      <div className="text-center text-[11px] tracking-wide text-neutral-500">
        Focus Settings
      </div>
      <div className="mt-5 space-y-5">
        {[
          { label: "Focus", value: "90 min", pos: "85%" },
          { label: "Break", value: "20 min", pos: "30%" },
          { label: "Cycles", value: "3", pos: "55%" },
        ].map((r) => (
          <div key={r.label}>
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-medium">{r.label}</span>
              <span className="text-neutral-500">{r.value}</span>
            </div>
            <div className="relative mt-2 h-1 rounded-full bg-neutral-200">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-neutral-900"
                style={{ width: r.pos }}
              />
              <div
                className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-neutral-900 bg-white shadow-sm"
                style={{ left: `calc(${r.pos} - 6px)` }}
              />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-neutral-100 px-3 py-2.5">
          <span className="text-[11px] font-medium">Auto-start next phase</span>
          <div className="relative h-4 w-7 rounded-full bg-neutral-900">
            <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <div className="mt-5 text-[10px] uppercase tracking-wider text-neutral-400">
        Presets
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          ["Focus", "90 / 20 x 1"],
          ["Flow", "90 / 20 x 2"],
          ["Starter", "60 / 15 x 1"],
          ["Marathon", "90 / 20 x 3"],
        ].map(([n, v], i) => (
          <div
            key={n}
            className={`rounded-xl px-3 py-2 ${
              i === 0 ? "bg-neutral-200" : "bg-neutral-100"
            }`}
          >
            <div className="text-[11px] font-medium">{n}</div>
            <div className="text-[9px] text-neutral-500">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────── Page ───────────────────────────── */

function Landing() {
  const { dark, setDark } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40">
        <div className="glass border-b border-border/60">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo dark={dark} className="h-7 w-7" />
              <span className="text-[15px] font-semibold tracking-tight">
                Flow90
              </span>
            </a>
            <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
              <a href="#how" className="transition-colors hover:text-foreground">
                How it works
              </a>
              <a href="#features" className="transition-colors hover:text-foreground">
                Features
              </a>
              <a href="#philosophy" className="transition-colors hover:text-foreground">
                Philosophy
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
                className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a
                href="#download"
                className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 sm:inline-block"
              >
                Get the app
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24 lg:gap-16">
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
              Flow90 is a calm focus timer built around 90-minute deep work
              cycles — designed to work with your natural rhythm, not against
              it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#download"
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

          <div className="relative">
            <div
              className="absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 40%, color-mix(in oklab, var(--accent) 20%, transparent), transparent)",
              }}
            />
            <PhoneFrame screen="timer-light" className="max-w-[300px] rotate-[-3deg]" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
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
            harder, not deeper. Burnout becomes the cost of doing meaningful
            work.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border text-left md:grid-cols-3">
            {[
              { t: "Shallow attention", d: "Average focus session ends after 11 minutes." },
              { t: "Constant context-switching", d: "It takes 23 minutes to return to deep work." },
              { t: "Burnout, not output", d: "More hours rarely mean better thinking." },
            ].map((b) => (
              <div key={t} className="bg-surface p-7">
                <div className="text-sm font-medium">{b.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
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
            <PhoneFrame screen="timer-dark" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
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

      {/* APP PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            The app
          </div>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Clear. Minimal. <span className="underline-accent">Built for focus.</span>
          </h2>
          <p className="mt-5 text-balance text-base text-muted-foreground">
            Every screen earns its place. Nothing competes for your attention.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {([
            ["timer-light", "Start focusing"],
            ["timer-dark", "Dark mode"],
            ["break", "Guided break"],
            ["settings", "Customize"],
          ] as const).map(([s, label]) => (
            <div key={s} className="flex flex-col items-center">
              <PhoneFrame screen={s} />
              <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
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

      {/* PHILOSOPHY */}
      <section id="philosophy" className="mx-auto max-w-3xl px-6 py-32 text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Philosophy
        </div>
        <p className="mt-8 text-balance text-2xl font-light leading-snug tracking-tight md:text-[32px]">
          Productivity should be{" "}
          <span className="text-foreground">sustainable.</span> Rest isn't the
          opposite of work — it's part of it. And focus, like anything else, is
          a skill you can train.
        </p>
        <div className="mt-10 flex justify-center">
          <Logo dark={dark} className="h-10 w-10 opacity-70" />
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="px-6 pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-20 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Start working with your <span className="underline-accent">natural rhythm.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-base text-muted-foreground">
            Flow90 is coming to iPhone. Be the first to know when it ships.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Apple className="h-4 w-4" fill="currentColor" />
              Download on App Store
            </a>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-background p-1.5 pl-5"
          >
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
            >
              Notify me
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Logo dark={dark} className="h-5 w-5" />
            <span>Flow90 — Deep work, intentional rest.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
