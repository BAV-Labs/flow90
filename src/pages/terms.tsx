export default function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">

      {/* HEADER */}
      <div className="text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Legal
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: June 2026
        </p>
      </div>

      {/* INTRO */}
      <section className="mt-16 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          Flow90 Terms of Service
        </p>

        <p>
          By using Flow90, you agree to use the app responsibly and in accordance
          with these terms.
        </p>
      </section>

      {/* BLOCKS */}
      <div className="mt-16 space-y-10">

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Use of the App
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Flow90 is provided for personal productivity and focus purposes only.
            You agree not to misuse or attempt to disrupt the service.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Availability
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We may update, modify, or discontinue parts of the app at any time.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Liability
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Flow90 is provided “as is” without warranties of any kind. We are not
            responsible for any damages resulting from use of the app.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Contact
          </h2>

          <a
            href="mailto:bav-labs@proton.me"
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            bav-labs@proton.me
          </a>
        </div>

      </div>
    </div>
  );
}