import { ReactNode, useEffect } from "react";

interface LegalLayoutProps {
  title: string;
  eyebrow: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  eyebrow,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  useEffect(() => {
    document.title = `${title} — Flow90`;
  }, [title]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {/* HEADER */}
      <header className="text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>

        {lastUpdated && (
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        )}
      </header>

      {/* CONTENT */}
      <div className="mt-16 space-y-12">
        {children}
      </div>
    </main>
  );
}