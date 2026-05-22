import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart2, TrendingUp, Users, LineChart, PieChart, Gem, Check } from "lucide-react"

const services = [
  {
    id: "equity",
    title: "Equity Service",
    subtitle: "Cash Market Research",
    description: "Comprehensive cash market research focusing on liquid large and mid-cap stocks. We provide actionable buy zones, stop-loss levels, and staged targets (T1/T2/T3) based on trend strength, volume confirmation, and proper position sizing principles.",
    icon: BarChart2,
    features: [
      "Daily and weekly stock picks in liquid large/mid caps",
      "Clear buy zones with defined stop-loss and staged targets",
      "Volume and trend analysis for entry timing",
      "Position sizing recommendations based on capital",
      "Post-trade reviews and performance tracking",
      "Real-time alerts via SMS and email"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "futures",
    title: "Futures Service",
    subtitle: "Stock Futures Trading",
    description: "Expert stock futures analysis with lot size context, margin impact assessment, and hedge notes. Our recommendations include crisp entry levels with momentum filters like ATR and VWAP to control risk effectively.",
    icon: TrendingUp,
    features: [
      "Stock futures calls with lot size guidance",
      "Margin impact and capital requirement analysis",
      "Momentum filters using ATR and VWAP",
      "Hedge strategies for risk mitigation",
      "Intraday and positional opportunities",
      "Clear entry, target, and stop-loss levels"
    ],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: "hni",
    title: "HNI Service",
    subtitle: "High Net Worth Individual",
    description: "Bespoke model portfolio management with priority dealing desk access. Enjoy dedicated relationship manager support, instant WhatsApp and phone alerts, end-of-day reviews, and capital-aligned risk frameworks tailored to your needs.",
    icon: Users,
    features: [
      "Dedicated relationship manager",
      "Priority dealing desk access",
      "Customized model portfolio",
      "Instant alerts via WhatsApp and phone",
      "Daily end-of-day performance reviews",
      "Capital-aligned risk management framework"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "index",
    title: "Index Service",
    subtitle: "Index Derivatives Trading",
    description: "Index futures analysis with both intraday and swing frameworks using market structure, VWAP bands, and session levels. We provide explicit stop-loss rules and clear re-entry criteria for disciplined trading.",
    icon: LineChart,
    features: [
      "Major index futures coverage",
      "Intraday and swing trading frameworks",
      "Market structure and VWAP band analysis",
      "Session level identification",
      "Explicit stop-loss and re-entry rules",
      "Real-time market updates during sessions"
    ],
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "options",
    title: "Options Service",
    subtitle: "Options Strategy Trading",
    description: "Call and Put intraday swings alongside structured spreads including verticals, straddles, and strangles. Our recommendations are Greeks-aware with defined max-loss parameters and time-decay management strategies.",
    icon: PieChart,
    features: [
      "Call and Put intraday swing recommendations",
      "Structured spreads: verticals, straddles, strangles",
      "Greeks-aware risk assessment",
      "Max-loss defined for every trade",
      "Time-decay management strategies",
      "Volatility analysis and IV tracking"
    ],
    color: "from-pink-500 to-pink-600"
  },
  {
    id: "commodity",
    title: "Commodity Service",
    subtitle: "Commodity Derivatives",
    description: "Comprehensive coverage of Crude Oil, Gold, Silver, and Base Metals with evening session alerts. We provide event and inventory calendar context with risk-first trade plans designed for commodity market dynamics.",
    icon: Gem,
    features: [
      "Crude Oil, Gold, Silver analysis",
      "Base Metals coverage",
      "Evening session alerts for global markets",
      "Event and inventory calendar integration",
      "Risk-first trade planning",
      "Seasonal pattern analysis"
    ],
    color: "from-amber-500 to-amber-600"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Comprehensive Research Services
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              From equity cash to derivatives, commodities to index trading — we provide 
              data-driven research and timely alerts to help you make informed decisions.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      <service.icon className="w-4 h-4" />
                      {service.subtitle}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl aspect-[4/3] flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-32 h-32 text-white/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today to discuss your investment goals and find the right service plan for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
