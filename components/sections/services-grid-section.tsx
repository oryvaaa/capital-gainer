import Link from "next/link"
import { ArrowRight, BarChart2, TrendingUp, Users, LineChart, PieChart, Gem } from "lucide-react"

const services = [
  {
    id: "equity",
    title: "Equity Service",
    description: "Cash market ideas in liquid large and mid-cap stocks with buy zones, stop-loss, and staged targets. Focus on trend strength, volume confirmation, and position sizing.",
    icon: BarChart2,
    href: "/services#equity"
  },
  {
    id: "futures",
    title: "Futures Service",
    description: "Stock futures calls with lot size context, margin impact, and hedge notes. Crisp levels with momentum filters to control risk effectively.",
    icon: TrendingUp,
    href: "/services#futures"
  },
  {
    id: "hni",
    title: "HNI Service",
    description: "Bespoke model portfolio and priority dealing desk. Dedicated relationship manager, instant alerts, end-of-day review, and capital-aligned risk frameworks.",
    icon: Users,
    href: "/services#hni"
  },
  {
    id: "index",
    title: "Index Service",
    description: "Index futures with intraday and swing frameworks using market structure, VWAP bands, and session levels. Explicit stop-loss and re-entry rules.",
    icon: LineChart,
    href: "/services#index"
  },
  {
    id: "options",
    title: "Options Service",
    description: "Call and Put intraday swings and structured spreads with Greeks-aware risk, max-loss defined, and time-decay management strategies.",
    icon: PieChart,
    href: "/services#options"
  },
  {
    id: "commodity",
    title: "Commodity Service",
    description: "Crude, Gold, Silver and Base Metals with evening session alerts, event and inventory calendar context, and risk-first trade plans.",
    icon: Gem,
    href: "/services#commodity"
  }
]

export function ServicesGridSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            WHAT WE PROVIDE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Get Exceptional<br />Service For Growth
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Registered research for Equity, Futures & Options, Index derivatives, and Commodities — 
            clear entries/exits, predefined stop-loss, targets, and disciplined risk management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="inline-flex items-center text-primary font-medium text-sm hover:underline group-hover:gap-2 transition-all"
              >
                Read More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
