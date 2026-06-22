export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">

      {/* HEADER */}
      <div className="text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Legal
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: June 2026
        </p>
      </div>

      {/* INTRO */}
      <section className="mt-16 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          Flow90 Privacy Policy
        </p>

        <p>
          Your privacy is important to us. Flow90 is designed to help you focus
          while respecting your privacy. We do not collect, store, sell, or share
          any personal information.
        </p>
      </section>

      {/* BLOCKS */}
      <div className="mt-16 space-y-10">

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Information We Collect
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Flow90 does not collect personal data such as:
          </p>

          <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc pl-5">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Location</li>
            <li>Contacts</li>
            <li>Photos</li>
            <li>Usage analytics linked to your identity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Local Data Storage
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Any settings or timer preferences are stored locally on your device
            using Apple’s built-in technologies. This information never leaves your
            device and is not transmitted to us.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Third-Party Services
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Flow90 does not use third-party services to collect or process your
            personal data.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Advertising
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Flow90 does not display personalized advertising and does not sell your
            data to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Children’s Privacy
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Flow90 does not knowingly collect personal information from children or
            any users.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Changes to This Policy
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            We may update this Privacy Policy from time to time. Changes will be
            reflected on this page with an updated revision date.
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