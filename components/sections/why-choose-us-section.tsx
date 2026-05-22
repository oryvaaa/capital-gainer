import { Bell, Database, HeartHandshake, TrendingUp, Shield, Headphones } from "lucide-react"

const features = [
  {
    title: "Get Timely Alerts",
    description: "Stay ahead with real-time recommendations delivered via SMS, email, and our app — each with clear targets and stop-loss levels.",
    icon: Bell
  },
  {
    title: "Advice Based on Real Data",
    description: "We analyze using actual market numbers — price, volume, strength, and simple risk-reward rules. No tips. No guessing.",
    icon: Database
  },
  {
    title: "Friendly Help, Anytime",
    description: "Get quick support on chat, SMS, phone, or email — real people guiding you at every step of your trading journey.",
    icon: HeartHandshake
  },
  {
    title: "Good Quality, Steady Growth",
    description: "We aim for consistent gains. We avoid overpriced stocks and stay with the trend and strong fundamentals.",
    icon: TrendingUp
  },
  {
    title: "Set Sell Rules in Advance",
    description: "We follow a simple plan: exit quickly if a trade goes wrong, move stops up as prices rise, and stick to rules — not emotions.",
    icon: Shield
  },
  {
    title: "Quick Help When You Need It",
    description: "We reply fast during market hours and send clear follow-ups after, so you are never left waiting.",
    icon: Headphones
  }
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Market Research Analyst
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Evidence-driven ideas, risk-first execution, and responsive support — built to help you trade with clarity and confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
