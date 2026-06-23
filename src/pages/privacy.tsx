import LegalLayout from "@/components/ui/legal-layout";
import { Section } from "@/components/ui/section";

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      eyebrow="Legal"
      lastUpdated="June 2026"
    >
      <Section title="Overview">
        <p>
          Flow90 is designed to help you stay focused without collecting personal data.
        </p>
      </Section>

      <Section title="Data Collection">
        <p>
          We do not collect, store or process any personal information such as
          name, email, contacts, location or usage tracking.
        </p>
      </Section>

      <Section title="Local Storage">
        <p>
          All settings and timer data are stored locally on your device using
          Apple’s built-in storage technologies. Nothing is transmitted to us.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p>
          Flow90 does not use analytics, advertising SDKs or tracking services.
        </p>
      </Section>

      <Section title="Advertising">
        <p>
          We do not show ads and do not sell user data.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions?
        </p>

        <a
          href="mailto:bav-labs@proton.me"
          className="text-foreground underline underline-offset-4 hover:opacity-80"
        >
          bav-labs@proton.me
        </a>
      </Section>
    </LegalLayout>
  );
}