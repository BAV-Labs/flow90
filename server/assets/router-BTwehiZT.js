import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, Outlet, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { Sun, Moon } from "lucide-react";
const appCss = "/flow90/assets/styles-0XVN7LsM.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logoLight = "/flow90/assets/logo_light-CzwgPrCv.png";
const logoDark = "/flow90/assets/logo_dark-CUXSrzNk.png";
function Logo({ className = "h-8 w-8", dark }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: dark ? logoDark : logoLight,
      alt: "Flow90",
      className,
      width: 64,
      height: 64
    }
  );
}
const ThemeContext = createContext(null);
function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDark(saved === "dark");
    }
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { dark, setDark }, children });
}
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
function Header() {
  const { dark, setDark } = useTheme();
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40", children: /* @__PURE__ */ jsx("div", { className: "glass border-b border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsx(Logo, { dark, className: "h-7 w-7" }),
      /* @__PURE__ */ jsx("span", { className: "text-[15px] font-semibold tracking-tight", children: "Flow90" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx("a", { href: "/#how", className: "transition-colors hover:text-foreground", children: "How it works" }),
      /* @__PURE__ */ jsx("a", { href: "/#features", className: "transition-colors hover:text-foreground", children: "Features" }),
      /* @__PURE__ */ jsx("a", { href: "/#philosophy", className: "transition-colors hover:text-foreground", children: "Philosophy" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setDark(!dark),
          "aria-label": "Toggle theme",
          className: "grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          children: dark ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://apps.apple.com/de/app/flow90/id6778360123?l=en-GB",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 sm:inline-block",
          children: "Get the app"
        }
      )
    ] })
  ] }) }) });
}
function Footer() {
  const { dark } = useTheme();
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Logo, { dark, className: "h-5 w-5" }),
      /* @__PURE__ */ jsx("span", { children: "Flow90 — Deep work, intentional rest." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "/privacy", className: "transition-colors hover:text-foreground", children: "Privacy" }),
      /* @__PURE__ */ jsx("a", { href: "/terms", className: "transition-colors hover:text-foreground", children: "Terms" }),
      /* @__PURE__ */ jsx("a", { href: "/faq", className: "transition-colors hover:text-foreground", children: "FAQ" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:bav-labs@proton.me",
          className: "transition-colors hover:text-foreground",
          children: "Contact"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/BAV-Labs",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "transition-colors hover:text-foreground",
          children: "About"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-[10px] opacity-70", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " BAV Labs. All rights reserved."
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Focus90 – Deep Work Timer" },
      { name: "description", content: "A calm productivity timer built around the 90-minute cycle your mind already follows. Work with your rhythm, not against it." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Focus90 – Deep Work Timer" },
      { property: "og:description", content: "A calm productivity timer built around the 90-minute cycle your mind already follows. Work with your rhythm, not against it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Focus90 – Deep Work Timer" },
      { name: "twitter:description", content: "A calm productivity timer built around the 90-minute cycle your mind already follows. Work with your rhythm, not against it." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c4be46d-b078-45db-b255-c0c5d34d7052/id-preview-6fa4d910--551ec135-18ef-401c-ac4d-39fbf35bafe6.lovable.app-1781446841816.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c4be46d-b078-45db-b255-c0c5d34d7052/id-preview-6fa4d910--551ec135-18ef-401c-ac4d-39fbf35bafe6.lovable.app-1781446841816.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
(function () {
  try {
    const saved = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : system;

    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(AppLayout, {}) }) });
}
function AppLayout() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$3 = () => import("./terms-Dk8KKSp0.js");
const Route$3 = createFileRoute("/terms")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./privacy-BsPTXpMv.js");
const Route$2 = createFileRoute("/privacy")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./faq-BFFlYL23.js");
const Route$1 = createFileRoute("/faq")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Di7x48rk.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$3.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$4
});
const PrivacyRoute = Route$2.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$4
});
const FaqRoute = Route$1.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  FaqRoute,
  PrivacyRoute,
  TermsRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    basepath: "/flow90",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Logo as L,
  router as r,
  useTheme as u
};
