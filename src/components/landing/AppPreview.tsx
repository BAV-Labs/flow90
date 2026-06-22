import PhoneFrame from "@/components/landing/PhoneFrame";
import Logo from "@/components/landing/Logo";
import { useTheme } from "@/components/themeContext";


export default function AppPreview() {
    const { dark } = useTheme();
    
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          The app
        </div>

        <h2 className="mt-4 text-3xl font-semibold">
          Clear. Minimal. <span className="underline-accent">Built for focus.</span>
        </h2>

        <p className="mt-5 text-muted-foreground">
          Every screen earns its place.
        </p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["timer1", "Timer"],
          ["settings", "Settings"],
          ["theme", "Theme"],
          ["info", "Info"],
        ].map(([screen, label]) => (
          <div key={screen} className="flex flex-col items-center">
            <PhoneFrame screen={screen as any} dark={dark} />
            <div className="mt-5 text-xs uppercase text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}