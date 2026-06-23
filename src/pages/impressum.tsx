import LegalLayout from "@/components/ui/legal-layout";
import { Section } from "@/components/ui/section";

export default function Impressum() {
  return (
    <LegalLayout
      title="Impressum"
      eyebrow="Legal"
      lastUpdated="June 2026"
    >
      <Section title="Information">
        <p>BAV Labs</p>
        <p>Independent design and development studio</p>
      </Section>

      <Section title="Team">
        <p>Benjamin Sparwasser</p>
        <p>Alex Jäger Peña</p>
        <p>Valeriia Bilous</p>
      </Section>

      <Section title="Contact">
        <a
          href="mailto:bav-labs@proton.me"
          className="text-foreground underline underline-offset-4 hover:opacity-80"
        >
          bav-labs@proton.me
        </a>
      </Section>

      <Section title="Responsible Content">
        <p>BAV Labs</p>
      </Section>

      <Section title="Disclaimer">
        <p>
          Flow90 is an independent application. It is not affiliated with any third parties.
        </p>
      </Section>
    </LegalLayout>
  );
}