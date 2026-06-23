import LegalLayout from "@/components/ui/legal-layout";
import { Section } from "@/components/ui/section";

export default function Impressum() {
  return (
    <LegalLayout
      pageTitle="Impressum — Flow90"
      eyebrow="Legal"
      title="Impressum"
    >
      <Section title="Information according to § 5 DDG">
        <p>BAV Labs</p>
        <p>
          An independent design and development team creating thoughtful
          digital products.
        </p>
      </Section>
      <Section title="Developed by">
        <p>Benjamin Sparwasser</p>
        <p>Alex Jäger Peña</p>
        <p>Valeriia Bilous</p>
      </Section>
      <Section title="Contact">
        <p>
          Email:&nbsp;
          <a
            href="mailto:bav-labs@proton.me"
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            bav-labs@proton.me
          </a>
        </p>
        <p>
          GitHub:&nbsp;
          <a
            href="https://github.com/BAV-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            github.com/BAV-Labs
          </a>
        </p>
      </Section>
      <Section title="Responsible for Content">
        <p>BAV Labs</p>
      </Section>
      <Section title="About Flow90">
        <p>
          Flow90 is an independent productivity application designed and
          developed by BAV Labs. The app does not rely on external APIs or
          third-party content providers for its core functionality.
        </p>
      </Section>
      <Section title="Disclaimer">
        <p>
          Despite careful review, we assume no liability for the content of
          external websites linked from this site. Responsibility for the
          content of linked pages lies solely with their respective operators.
        </p>
      </Section>
      <Section title="Copyright">
        <p>
          Unless otherwise stated, all content, branding, designs and source
          code created by BAV Labs are protected by applicable copyright laws.
          Any reproduction or distribution requires prior written permission.
        </p>
      </Section>
    </LegalLayout>
  );
}