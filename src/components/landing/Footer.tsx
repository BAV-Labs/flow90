import { Link } from "react-router-dom";

import Logo from "@/components/landing/Logo";
import { useTheme } from "@/components/themeContext";

export default function Footer() {
    const { dark } = useTheme();
    
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <Logo dark={dark} className="h-5 w-5" />
          <span>Flow90 — Deep work, intentional rest.</span>
        </div>

        {/* CENTER / RIGHT LINKS */}
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/faq">FAQ</Link>

          <a
            href="mailto:bav-labs@proton.me"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>

          <a 
            href="https://github.com/BAV-Labs"
            target="_blank"
            rel="noopener noreferrer" 
            className="transition-colors hover:text-foreground"
          >
            About
          </a>
          
        </div>

        {/* COPYRIGHT */}
        <div className="text-[10px] opacity-70">
          © {new Date().getFullYear()} BAV Labs. All rights reserved.
        </div>

      </div>
    </footer>
  );
}