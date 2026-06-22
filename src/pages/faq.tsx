export default function FAQ() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">

      {/* HEADER */}
      <div className="text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Support
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: June 2026
        </p> 
      </div>

      {/* INTRO */}
      <section className="mt-16 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          Flow90 Support
        </p>

        <p>
          Flow90 is a minimalist deep focus timer designed to help you work with intention
          and build sustainable focus habits.
        </p>
      </section>

      {/* HELP */}
      <div className="mt-16 space-y-10">

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Need Help?
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            If you experience issues, have questions, or feature requests, contact us:
          </p>

          <a
            href="mailto:bav-labs@proton.me"
            className="mt-3 inline-block text-sm text-foreground underline underline-offset-4 hover:opacity-80"
          >
            bav-labs@proton.me
          </a>
        </div>

        {/* FAQ ITEMS */}
        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Common Issues
          </h2>

          <div className="mt-4 space-y-8 text-sm text-muted-foreground">

            <div>
              <p className="text-foreground font-medium">
                The timer is not working correctly.
              </p>
              <p className="mt-2">
                Make sure you are using the latest version of Flow90 and restart the app.
                If the issue persists, please contact us with your device details.
              </p>
            </div>

            <div>
              <p className="text-foreground font-medium">
                I found a bug.
              </p>
              <p className="mt-2">
                Please include your device model, iOS version, Flow90 version,
                a description of the issue, and screenshots if available.
              </p>
            </div>

            <div>
              <p className="text-foreground font-medium">
                I have a feature request.
              </p>
              <p className="mt-2">
                We’re always improving Flow90. Feel free to send your ideas anytime.
              </p>
            </div>

          </div>
        </div>

        {/* PRIVACY NOTE */}
        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Privacy
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Flow90 respects your privacy. Please refer to the Privacy Policy for details.
          </p>
        </div>        
      </div>
    </div>
  );
}