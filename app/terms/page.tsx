import { LegalPage } from "@/components/legal-page"

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="21 Jan 2023"
      sections={[
        {
          heading: "Use of Services",
          body: "Capital Gainer provides research and educational information for investors. Visitors and clients are responsible for evaluating suitability before acting on any information.",
        },
        {
          heading: "Market Risk",
          body: "Securities and derivative markets involve risk. Past performance, examples, or historical analysis do not assure future returns or profitable outcomes.",
        },
        {
          heading: "Changes",
          body: "Service information, pricing, and terms may be updated as business and compliance requirements change.",
        },
      ]}
    />
  )
}
