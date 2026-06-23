import LegalLayout from "@/components/ui/legal-layout";
import { Section } from "@/components/ui/section";

export default function FAQ() {
  return (
    <LegalLayout
      title="Frequently Asked Questions"
      eyebrow="Support"
      lastUpdated="June 2026"
    >

      <Section title="Flow90 Support">
        <p>
          Flow90 is a minimalist deep focus timer designed to help you work with intention
          and build sustainable focus habits.
        </p>
      </Section>

      <Section title="Need Help">
        <p>
          Contact us at bav-labs@proton.me
        </p>
      </Section>

      <Section title="Common Issues">
        <div className="space-y-6">
          <div>
            <p className="text-foreground font-medium">
              Timer not working
            </p>
            <p>Restart the app and ensure it’s updated.</p>
          </div>

          <div>
            <p className="text-foreground font-medium">
              Bug report
            </p>
            <p>
              Include device, iOS version and steps to reproduce.
            </p>
          </div>

          <div>
            <p className="text-foreground font-medium">
              Feature request
            </p>
            <p>We’re always improving Flow90.</p>
          </div>
        </div>
      </Section>

      <Section title="Privacy">
        <p>
          Flow90 does not collect personal data. See Privacy Policy for details.
        </p>
      </Section>
    </LegalLayout>
  );
}