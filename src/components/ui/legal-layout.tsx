import { ReactNode, useEffect } from "react";

interface LegalLayoutProps {
  pageTitle: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function LegalLayout({
  pageTitle,
  eyebrow,
  title,
  children,
}: LegalLayoutProps) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <header className="text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>
      </header>

      <div className="mt-16 space-y-12">
        {children}
      </div>
    </main>
  );
}