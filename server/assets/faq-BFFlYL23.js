import { jsxs, jsx } from "react/jsx-runtime";
function FAQ() {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: "Support" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Last updated: June 2026" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-16 space-y-6 text-base leading-relaxed text-muted-foreground", children: [
      /* @__PURE__ */ jsx("p", { className: "text-foreground", children: "Flow90 Support" }),
      /* @__PURE__ */ jsx("p", { children: "Flow90 is a minimalist deep focus timer designed to help you work with intention and build sustainable focus habits." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 space-y-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Need Help?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "If you experience issues, have questions, or feature requests, contact us:" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:bav-labs@proton.me", className: "mt-3 inline-block text-sm text-foreground underline underline-offset-4 hover:opacity-80", children: "bav-labs@proton.me" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Common Issues" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-8 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "The timer is not working correctly." }),
            /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Make sure you are using the latest version of Flow90 and restart the app. If the issue persists, please contact us with your device details." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "I found a bug." }),
            /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Please include your device model, iOS version, Flow90 version, a description of the issue, and screenshots if available." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "I have a feature request." }),
            /* @__PURE__ */ jsx("p", { className: "mt-2", children: "We’re always improving Flow90. Feel free to send your ideas anytime." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Flow90 respects your privacy. Please refer to the Privacy Policy for details." })
      ] })
    ] })
  ] });
}
export {
  FAQ as component
};
