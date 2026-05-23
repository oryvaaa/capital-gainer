"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Trusted by 10,000+ Investors
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Market-Leading Research & Trading Insights
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Advanced Technical Analysis for Timely, High-Confidence Trading Decisions. 
              Data-driven strategies backed by years of market expertise.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl md:text-4xl font-bold">15+</p>
                <p className="text-primary-foreground/70 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">10K+</p>
                <p className="text-primary-foreground/70 text-sm">Active Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">98%</p>
                <p className="text-primary-foreground/70 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Inquiry Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="+91 9999999999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Segment *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                >
                  <option value="">Select Segment</option>
                  <option value="equity">Equity Cash/Intraday</option>
                  <option value="options">Options (Call-Put)</option>
                  <option value="futures">Futures (Derivatives)</option>
                  <option value="index">Index Trading</option>
                  <option value="commodity">Commodity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Trading Capital *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                >
                  <option value="">Select Trading Capital</option>
                  <option value="below-50k">Below ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹100,000</option>
                  <option value="100k-500k">₹100,000 - ₹500,000</option>
                  <option value="above-500k">Above ₹500,000</option>
                </select>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="agree" className="mt-1" required />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  I agree to be contacted and accept the{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  {" & "}
                  <Link href="/terms" className="text-primary hover:underline">Terms</Link>.
                </label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
