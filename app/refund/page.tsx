import { LegalPage } from "@/components/legal-page"

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="21 Jan 2023"
      sections={[
        {
          heading: "Service-Based Fees",
          body: "Fees for research services are generally linked to access, analysis, and support already provided. Refund eligibility depends on the specific service terms shared at enrollment.",
        },
        {
          heading: "Review Requests",
          body: "Clients may contact the support team with payment or service concerns. Requests are reviewed against the applicable plan, service period, and communication history.",
        },
        {
          heading: "Support",
          body: "Refund or billing questions can be sent to contact@capitalgainer.shop with the registered contact details and payment reference.",
        },
      ]}
    />
  )
}
