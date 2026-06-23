import LegalLayout from "@/components/ui/legal-layout";
import { Section } from "@/components/ui/section";

export default function Privacy() {
  return (
    <LegalLayout
      pageTitle="Privacy Policy — Flow90"
      eyebrow="Legal"
      title="Privacy Policy"
    >
      <Section title="Overview">
        <p>
          Your privacy is important to us. Flow90 is designed to help you stay
          focused without collecting personal information. We do not sell,
          share or monetize your data.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          Flow90 does not require an account and does not collect personal
          information such as your name, email address, phone number, location,
          contacts, photos or other identifying information.
        </p>
      </Section>

      <Section title="Local Data">
        <p>
          Your timer settings, preferences and app data are stored locally on
          your device using Apple's built-in technologies. This information
          never leaves your device and is not transmitted to BAV Labs.
        </p>
      </Section>

      <Section title="Analytics & Third-Party Services">
        <p>
          Flow90 does not use third-party analytics, advertising SDKs or
          tracking services to collect information about you.
        </p>
      </Section>

      <Section title="Advertising">
        <p>
          Flow90 does not display personalized advertising and does not sell
          user data to third parties.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          Flow90 is intended for general audiences and does not knowingly
          collect personal information from children or any other users.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update this Privacy Policy as Flow90 evolves. Any changes will
          be published on this page together with the updated revision date.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this Privacy Policy?
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