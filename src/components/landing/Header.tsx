import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/components/landing/Logo";
import { useTheme } from "@/components/themeContext";

const links = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Header() {
  const { dark, setDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.location.hash = hash;
      }, 50);
      return;
    }

    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-background/70 backdrop-blur-xl border-b border-border"
        : "bg-transparent"
    }`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <Link to="/" className="flex items-center gap-2.5">
          <Logo dark={dark} className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight">
            Flow90
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleScroll(l.href)}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="grid h-9 w-9 place-items-center rounded-full"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
}