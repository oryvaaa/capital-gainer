import { Target, ListChecks, Settings, Play, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Goal & Risk Check",
    description: "We start with a consultation to understand your capital, risk tolerance, and interests — so we know what fits your investment profile.",
    icon: Target
  },
  {
    number: "02",
    title: "Right Segment Selection",
    description: "Based on your profile, we suggest the most suitable plan, share sample reports, and proceed with the approach you choose.",
    icon: ListChecks
  },
  {
    number: "03",
    title: "Trade Plan Setup",
    description: "We set clear entries, stop-loss, and targets with position sizing and risk-reward rules. You will know exactly how we communicate updates.",
    icon: Settings
  },
  {
    number: "04",
    title: "Disciplined Execution",
    description: "You receive real-time alerts during market hours. We avoid overtrading, trail winners, and stick to high-quality setups only.",
    icon: Play
  },
  {
    number: "05",
    title: "Review & Ongoing Support",
    description: "We track performance with regular reviews and post-trade notes. Quick support keeps you confident as we build a long-term partnership.",
    icon: CheckCircle
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Process That Leads to Results
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Requirement, Selection, Planning, Execution, Satisfaction — each stage is defined, accountable, and built around your objectives.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/20 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Circle */}
                <div className="relative z-10 w-20 h-20 bg-primary-foreground text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-8 h-8" />
                </div>
                
                {/* Step Number */}
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                  Step {step.number}
                </span>
                
                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
