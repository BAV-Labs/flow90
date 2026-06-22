import Logo from "@/components/landing/Logo"
import { useTheme } from "@/components/themeContext";


export default function Features(){
    const { dark, setDark } = useTheme();
    
    return (
        <section id="philosophy" className="mx-auto max-w-3xl px-6 py-32 text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Philosophy
        </div>
        <p className="mt-8 text-balance text-2xl font-light leading-snug tracking-tight md:text-[32px]">
          Productivity should be{" "}
          <span className="text-foreground">sustainable.</span> Rest isn't the
          opposite of work — it's part of it. And focus, like anything else, is
          a skill you can train.
        </p>
        <div className="mt-10 flex justify-center">
          <Logo dark={dark} className="h-10 w-10 opacity-70" />
        </div>
      </section>
    )
}
