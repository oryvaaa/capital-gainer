"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Is Capital Gainer a registered research analyst?",
    answer: "Yes. We operate as a registered Research Analyst. Please refer to our Investor Charter and Disclaimer pages for complete regulatory details and compliance information."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us via email at contact@capitalgainer.shop or call our support line shown in the header and footer. Our team is available during market hours and responds to inquiries promptly."
  },
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive research services including Equity, Futures, Options, Index, Commodity, and HNI research services. Visit our Services page for detailed scope and deliverables for each category."
  },
  {
    question: "How will I receive recommendations?",
    answer: "Recommendations are delivered through your registered mobile number and email during market hours, as per your subscribed service tier. We do not operate public social media tip groups."
  },
  {
    question: "Do you guarantee profits or returns?",
    answer: "No. Markets involve inherent risk and past performance is not indicative of future results. We provide research views and analysis only; actual outcomes may vary based on market conditions and individual execution."
  },
  {
    question: "What is the minimum capital required to start?",
    answer: "Capital requirements vary by service type. We offer plans suitable for various capital levels. During our initial consultation, we help identify the most appropriate service based on your available capital and risk tolerance."
  },
  {
    question: "How do I subscribe to your services?",
    answer: "Fill out the inquiry form on our website or contact our team directly. After understanding your requirements, we will recommend a suitable plan and guide you through the subscription process."
  },
  {
    question: "What is your refund policy?",
    answer: "Please refer to our Refund Policy page for complete details. Generally, service fees are non-refundable once the subscription period has commenced, as research delivery begins immediately."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            NEED CLARITY?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-card-foreground pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              {showAll ? "Show Less" : `Show all ${faqs.length} FAQs`}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
