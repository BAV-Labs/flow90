import {
  Apple,
} from "lucide-react";
import { useTheme } from "@/components/themeContext";

export default function Features(){
    const { dark } = useTheme();
    
    return (
        <section id="download" className="px-6 pb-24">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-20 text-center md:px-16">
                  <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                    Start working with your <span className="underline-accent">natural rhythm.</span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-md text-balance text-base text-muted-foreground">
                    Flow90 is available on iPhone. Be the first to try it out.
                  </p>
        
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://apps.apple.com/de/app/flow90/id6778360123?l=en-GB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      <Apple className="h-4 w-4" fill="currentColor" />
                      Download on App Store
                    </a>
                  </div>
                </div>
              </section>
    )
}
