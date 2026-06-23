import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({
  title,
  children,
}: SectionProps) {
  return (
    <section>
      <h2 className="text-sm font-semibold text-foreground">
        {title}
      </h2>

      <div className="mt-3 space-y-4 text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}