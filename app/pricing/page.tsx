import { Navbar } from "@/components/navbar"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, ArrowRight, Star } from "lucide-react"

const plans = [
  {
    name: "Equity Basic",
    description: "Perfect for beginners starting their investment journey",
    price: "4,999",
    period: "month",
    features: [
      "5-7 equity cash recommendations per month",
      "Clear entry, stop-loss, and targets",
      "SMS and email alerts",
      "Weekly market outlook",
      "Basic support via email",
      "Performance tracking dashboard"
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    name: "Options Pro",
    description: "For active traders seeking derivatives expertise",
    price: "9,999",
    period: "month",
    features: [
      "10-15 options recommendations per month",
      "Call and Put strategies",
      "Greeks-aware risk analysis",
      "Real-time SMS alerts",
      "Daily market commentary",
      "Priority phone support",
      "Dedicated analyst access"
    ],
    highlighted: true,
    cta: "Most Popular"
  },
  {
    name: "Index & Futures",
    description: "Comprehensive coverage of derivatives markets",
    price: "14,999",
    period: "month",
    features: [
      "Index and stock futures calls",
      "Intraday and positional frameworks",
      "VWAP and session level analysis",
      "Instant WhatsApp alerts",
      "Weekly review calls",
      "Personalized risk framework",
      "1-on-1 monthly consultation"
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    name: "HNI Premium",
    description: "White-glove service for high net worth investors",
    price: "Custom",
    period: "",
    features: [
      "All services included",
      "Dedicated relationship manager",
      "Bespoke model portfolio",
      "Priority dealing desk",
      "Daily end-of-day reviews",
      "Unlimited phone support",
      "Quarterly in-person meetings",
      "Custom research reports"
    ],
    highlighted: false,
    cta: "Contact Us"
  }
]

const faqs = [
  {
    question: "How do I subscribe to a plan?",
    answer: "Simply click the 'Get Started' button on your preferred plan, fill out the inquiry form, and our team will contact you to complete the subscription process."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and online payment methods. For HNI plans, we offer customized billing arrangements."
  },
  {
    question: "Is there a trial period?",
    answer: "We offer a consultation call to discuss your needs before you subscribe. This helps ensure you choose the right plan for your investment goals."
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DisclaimerBanner />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
              PRICING
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Choose the plan that fits your trading style and investment goals. 
              All plans include our commitment to quality research and responsive support.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-card rounded-2xl p-6 ${
                    plan.highlighted
                      ? "border-2 border-primary shadow-xl scale-105"
                      : "border border-border"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-card-foreground">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    {plan.price === "Custom" ? (
                      <p className="text-3xl font-bold text-primary">Custom</p>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison Note */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              All plans include access to our research portal, mobile app, and basic educational resources.
              Need a custom solution? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for enterprise pricing.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Pricing FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-card-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Plan is Right for You?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Schedule a free consultation with our team to discuss your investment goals and find the perfect fit.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
