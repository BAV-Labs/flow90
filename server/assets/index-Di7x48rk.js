import { jsx, jsxs } from "react/jsx-runtime";
import { u as useTheme, L as Logo } from "./router-BTwehiZT.js";
import { Apple, ArrowRight, Brain, Coffee, Repeat } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
const timerLight1 = "/flow90/assets/timer-light1-DKpq6wTT.png";
const timerLight2 = "/flow90/assets/timer-light2-BANgs6Vc.png";
const timerDark1 = "/flow90/assets/timer-dark1-_L0wwL4o.png";
const timerDark2 = "/flow90/assets/timer-dark2-Ch9yidO9.png";
const timerCancel = "/flow90/assets/timer-cancel-DdTVk5v1.png";
const timerCancelDark = "/flow90/assets/timer-cancel-dark-BCstM8Ur.png";
const settingsLight = "/flow90/assets/settings-light-hjBYIySM.png";
const settingsDark = "/flow90/assets/settings-dark-cH7xQgSD.png";
const aboutLight = "/flow90/assets/about-light-B8piLE3G.png";
const aboutDark = "/flow90/assets/about-dark-ChkoY27l.png";
const infoLight = "/flow90/assets/info-light-CzepgWla.png";
const infoDark = "/flow90/assets/info-dark-DhHMsSYV.png";
const onboarding1 = "/flow90/assets/onboarding1-4IYcUg1O.png";
const onboarding2 = "/flow90/assets/onboarding2-DNZQpXL9.png";
const onboarding3 = "/flow90/assets/onboarding3-LbZKEsyk.png";
const splashscreen = "/flow90/assets/splashscreen-sTKH3TwY.png";
const themeLight = "/flow90/assets/theme-light-YvjSkJwx.png";
const themeDark = "/flow90/assets/theme-dark-BYXa3t8R.png";
function PhoneFrame({
  screen,
  dark,
  className = ""
}) {
  const images = {
    timer1: dark ? timerDark1 : timerLight1,
    timer2: dark ? timerDark2 : timerLight2,
    timerCancel: dark ? timerCancelDark : timerCancel,
    settings: dark ? settingsDark : settingsLight,
    about: dark ? aboutDark : aboutLight,
    info: dark ? infoDark : infoLight,
    theme: dark ? themeDark : themeLight,
    onboarding1,
    onboarding2,
    onboarding3,
    splash: splashscreen
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `relative mx-auto w-full max-w-[300px] rounded-[42px] p-[10px]
      bg-gradient-to-b from-neutral-100 to-neutral-200
      dark:from-neutral-800 dark:to-neutral-900
      shadow-[0_30px_80px_rgba(0,0,0,0.25)]
      ring-1 ring-black/5 dark:ring-white/10
      ${className}`,
      children: /* @__PURE__ */ jsx("div", { className: "rounded-[34px] overflow-hidden bg-white dark:bg-black", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: images[screen],
          alt: screen,
          className: "block w-full",
          loading: "lazy"
        }
      ) })
    }
  );
}
function Hero() {
  const { dark } = useTheme();
  return /* @__PURE__ */ jsx("section", { id: "top", className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24 lg:gap-16", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-block h-1.5 w-1.5 rounded-full",
            style: { backgroundColor: "var(--accent)" }
          }
        ),
        "Inspired by scientific research"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight md:text-[64px]", children: [
        "Focus ",
        /* @__PURE__ */ jsx("span", { className: "underline-accent", children: "deeper." }),
        /* @__PURE__ */ jsx("br", {}),
        "Not faster."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-balance text-base leading-relaxed text-muted-foreground md:text-lg", children: "Flow90 is a calm focus timer built around 90-minute deep work cycles — designed to work with your natural rhythm, not against it." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://apps.apple.com/de/app/flow90/id6778360123?l=en-GB",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90",
            children: [
              /* @__PURE__ */ jsx(Apple, { className: "h-4 w-4", fill: "currentColor" }),
              "Download on App Store"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#how",
            className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted",
            children: [
              "See how it works",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-6 text-[11px] uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: "90-min cycles" }),
        /* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-border" }),
        /* @__PURE__ */ jsx("span", { children: "Distraction-free" }),
        /* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-border" }),
        /* @__PURE__ */ jsx("span", { children: "Light & dark" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl",
          style: {
            background: "radial-gradient(60% 50% at 50% 40%, color-mix(in oklab, var(--accent) 20%, transparent), transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl",
            style: {
              background: "radial-gradient(60% 50% at 50% 40%, color-mix(in oklab, var(--accent) 20%, transparent), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 rotate-y-6 translate-y-6", children: /* @__PURE__ */ jsx(PhoneFrame, { screen: "timer1", dark: false }) }),
        /* @__PURE__ */ jsx("div", { className: "relative z-20 -ml-6 rotate-1 -translate-y-4 scale-[0.98]", children: /* @__PURE__ */ jsx(PhoneFrame, { screen: "timer2", dark: true }) })
      ] })
    ] })
  ] }) });
}
function Problem() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-surface/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 py-24 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "The problem" }),
    /* @__PURE__ */ jsxs("h2", { className: "mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl", children: [
      "We're constantly busy. ",
      /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
      "Rarely ",
      /* @__PURE__ */ jsx("span", { className: "underline-accent", children: "focused." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground", children: "Notifications fracture attention. Rigid productivity tools push us harder, not deeper. Burnout becomes the cost of doing meaningful work." }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border text-left md:grid-cols-3", children: [
      { t: "Shallow attention", d: "Average focus session ends after 11 minutes." },
      { t: "Constant context-switching", d: "It takes 23 minutes to return to deep work." },
      { t: "Burnout, not output", d: "More hours rarely mean better thinking." }
    ].map((b) => /* @__PURE__ */ jsxs("div", { className: "bg-surface p-7", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: b.t }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: b.d })
    ] }, b.t)) })
  ] }) });
}
function Solution() {
  const { dark } = useTheme();
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-6xl px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-16 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "The approach" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl", children: [
        "Work with your ",
        /* @__PURE__ */ jsx("span", { className: "underline-accent", children: "natural rhythm." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground", children: "Your brain moves through 90-minute cycles of higher and lower alertness — the Basic Rest-Activity Cycle. Flow90 turns that rhythm into a simple, repeatable practice." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-5", children: [
        {
          i: /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4" }),
          t: "Matches your biology",
          d: "90 minutes of focus aligns with your ultradian rhythm."
        },
        {
          i: /* @__PURE__ */ jsx(Coffee, { className: "h-4 w-4" }),
          t: "Real rest, not scrolling",
          d: "Guided breaks help your mind actually recover."
        },
        {
          i: /* @__PURE__ */ jsx(Repeat, { className: "h-4 w-4" }),
          t: "Sustainable depth",
          d: "Repeat the cycle — keep energy across the day."
        }
      ].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
            style: {
              backgroundColor: "color-mix(in oklab, var(--accent) 22%, transparent)",
              color: "var(--foreground)"
            },
            children: f.i
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: f.t }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: f.d })
        ] })
      ] }, f.t)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(PhoneFrame, { screen: "timer2", dark }) })
  ] }) });
}
function HowItWorks() {
  const { dark, setDark } = useTheme();
  return /* @__PURE__ */ jsx("section", { id: "how", className: "border-y border-border bg-surface/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "How it works" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl", children: "One cycle at a time." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4", children: [
      { n: "01", t: "Start a session", d: "Pick a preset. Press play. That's it." },
      { n: "02", t: "Focus for 90 min", d: "One uninterrupted block of deep work." },
      { n: "03", t: "Take a real break", d: "A guided pause — step away properly." },
      { n: "04", t: "Repeat", d: "Two or three cycles is a remarkable day." }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-muted-foreground", children: s.n }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-base font-semibold", children: s.t }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.d })
    ] }, s.n)) })
  ] }) });
}
function AppPreview() {
  const { dark } = useTheme();
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-6 py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "The app" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-3xl font-semibold", children: [
        "Clear. Minimal. ",
        /* @__PURE__ */ jsx("span", { className: "underline-accent", children: "Built for focus." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground", children: "Every screen earns its place." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4", children: [
      ["timer1", "Timer"],
      ["settings", "Settings"],
      ["theme", "Theme"],
      ["info", "Info"]
    ].map(([screen, label]) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx(PhoneFrame, { screen, dark }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 text-xs uppercase text-muted-foreground", children: label })
    ] }, screen)) })
  ] });
}
function Features$2() {
  const { dark } = useTheme();
  return /* @__PURE__ */ jsx("section", { id: "features", className: "border-t border-border bg-surface/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Features" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl", children: [
        "Everything you need. ",
        /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
        "Nothing in your way."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-5 md:grid-cols-3", children: [
      { t: "90-minute cycles", d: "Built around the rhythm your brain actually runs on." },
      { t: "Distraction-free UI", d: "No streaks, no badges, no noise. Just the work." },
      { t: "Light & dark", d: "Pick the mode that helps you settle in." },
      { t: "Custom presets", d: "Tune focus, break, and cycle counts to your day." },
      { t: "Gentle reminders", d: "Calm nudges to start, pause, and return." },
      { t: "Privacy by default", d: "Local-first. Your sessions stay on your device." }
    ].map((f) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-2xl border border-border bg-background p-7",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: f.t }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.d })
        ]
      },
      f.t
    )) })
  ] }) });
}
function Features$1() {
  const { dark, setDark } = useTheme();
  return /* @__PURE__ */ jsxs("section", { id: "philosophy", className: "mx-auto max-w-3xl px-6 py-32 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Philosophy" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-8 text-balance text-2xl font-light leading-snug tracking-tight md:text-[32px]", children: [
      "Productivity should be",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "sustainable." }),
      " Rest isn't the opposite of work — it's part of it. And focus, like anything else, is a skill you can train."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsx(Logo, { dark, className: "h-10 w-10 opacity-70" }) })
  ] });
}
function Features() {
  const { dark } = useTheme();
  return /* @__PURE__ */ jsx("section", { id: "download", className: "px-6 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-20 text-center md:px-16", children: [
    /* @__PURE__ */ jsxs("h2", { className: "mx-auto max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl", children: [
      "Start working with your ",
      /* @__PURE__ */ jsx("span", { className: "underline-accent", children: "natural rhythm." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-md text-balance text-base text-muted-foreground", children: "Flow90 is available on iPhone. Be the first to try it out." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://apps.apple.com/de/app/flow90/id6778360123?l=en-GB",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90",
        children: [
          /* @__PURE__ */ jsx(Apple, { className: "h-4 w-4", fill: "currentColor" }),
          "Download on App Store"
        ]
      }
    ) })
  ] }) });
}
function Landing() {
  const {
    dark
  } = useTheme();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Problem, {}),
    /* @__PURE__ */ jsx(Solution, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(AppPreview, {}),
    /* @__PURE__ */ jsx(Features$2, {}),
    /* @__PURE__ */ jsx(Features$1, {}),
    /* @__PURE__ */ jsx(Features, {})
  ] });
}
export {
  Landing as component
};
