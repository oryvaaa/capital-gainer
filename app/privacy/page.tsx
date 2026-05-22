import { LegalPage } from "@/components/legal-page"

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="21 Jan 2023"
      sections={[
        {
          heading: "Information We Collect",
          body: "Capital Gainer may collect contact details and inquiry information that visitors submit through forms, phone calls, or email so the team can respond to service requests.",
        },
        {
          heading: "How Information Is Used",
          body: "Submitted information is used to communicate about research services, respond to questions, maintain service records, and improve client support. It is not sold as a customer list.",
        },
        {
          heading: "Contact",
          body: "Questions about privacy practices can be sent to contact@capitalgainer.shop or raised through the contact page.",
        },
      ]}
    />
  )
}
