import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/landing/Logo";
import { useTheme } from "@/components/themeContext";

const links = [
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "Philosophy", href: "/#philosophy" },
];

export default function Header() {
  const { dark, setDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    if (window.location.pathname !== "/flow90/") {
      window.location.href = `/flow90/${id}`;
      return;
    }
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
        >
          <Logo dark={dark} className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight">
            Flow90
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="https://apps.apple.com/de/app/flow90/id6778360123?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"                    
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 sm:inline-block"
            >
              Get the app
            </a>
          </div>
      </div>
    </header>
  );
}