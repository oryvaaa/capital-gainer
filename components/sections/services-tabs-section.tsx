"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, BarChart3, LineChart, DollarSign, PieChart } from "lucide-react"

const serviceCategories = [
  {
    id: "equity",
    label: "Equity & Derivatives",
    icon: TrendingUp,
    title: "Equity & Derivatives",
    description: "Research-driven ideas across cash equities and derivatives. We focus on clear entries, targets, and stop-losses to help you capture momentum, hedge risk, and manage positions with discipline.",
    features: [
      "Actionable entries with defined targets and stop-losses to remove guesswork",
      "Capital efficiency using derivatives for hedging and leverage with risk limits",
      "Fits your style - intraday, swing, or positional frameworks with clear rules",
      "Risk discipline via position sizing, max-loss caps, and post-trade reviews"
    ]
  },
  {
    id: "commodity",
    label: "Commodity Derivatives",
    icon: BarChart3,
    title: "Commodity Derivatives",
    description: "Expert analysis on commodities including precious metals, energy, and agricultural products. Real-time alerts with event calendars and risk-first trade plans.",
    features: [
      "Coverage of Gold, Silver, Crude Oil, Natural Gas and Base Metals",
      "Evening session alerts for global market movements",
      "Event and inventory calendar context for informed decisions",
      "Risk-first trade plans with clear entry and exit levels"
    ]
  },
  {
    id: "currency",
    label: "Currency Trading",
    icon: DollarSign,
    title: "Currency Trading",
    description: "Navigate the forex markets with our currency trading insights. Technical and fundamental analysis combined for optimal trading opportunities.",
    features: [
      "Major and minor currency pair analysis",
      "Central bank policy impact assessment",
      "Technical chart patterns and momentum indicators",
      "Risk management with proper position sizing"
    ]
  },
  {
    id: "ipo",
    label: "IPO Opportunities",
    icon: LineChart,
    title: "IPO Opportunities",
    description: "Get ahead with our IPO analysis and recommendations. We evaluate new listings for potential short and long-term opportunities.",
    features: [
      "Pre-IPO company analysis and valuation assessment",
      "Subscription recommendations based on fundamentals",
      "Listing day strategy and price targets",
      "Post-listing monitoring and follow-up calls"
    ]
  },
  {
    id: "mutual",
    label: "Mutual Funds",
    icon: PieChart,
    title: "Mutual Funds",
    description: "Build wealth systematically with our mutual fund recommendations. Diversified portfolio strategies for different risk appetites.",
    features: [
      "Curated fund selection across categories",
      "SIP and lump sum investment strategies",
      "Portfolio rebalancing recommendations",
      "Tax-efficient investment planning"
    ]
  }
]

export function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState("equity")

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            GLOBALLY RENOWNED & TRUSTED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Quality Services With Difference
          </h2>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
            {serviceCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border data-[state=active]:border-primary transition-all"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                  <category.icon className="w-24 h-24 text-primary/50" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-0.5">»</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
