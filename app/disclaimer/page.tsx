import { LegalPage } from "@/components/legal-page"

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="21 Jan 2023"
      sections={[
        {
          heading: "Research Notice",
          body: "Capital Gainer offers market research and trading insights. Information on this website should not be treated as a guaranteed return promise or individualized financial planning advice.",
        },
        {
          heading: "Investor Responsibility",
          body: "Investors should read all related documents carefully, understand risk, and consider their own financial position before making market decisions.",
        },
        {
          heading: "No Guarantee",
          body: "Registration or professional experience does not guarantee performance. Market outcomes can differ materially from research expectations.",
        },
      ]}
    />
  )
}
