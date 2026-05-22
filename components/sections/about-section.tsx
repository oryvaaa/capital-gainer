import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Experience Badge */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <div className="flex items-center gap-6">
                <div className="text-7xl md:text-8xl font-bold">15</div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold">Years of Experience</p>
                  <p className="text-primary-foreground/70 mt-1">Proven Strategies for Quality Investments</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-lg font-medium">Capital Gainer</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Trusted Research Partner</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">WE ARE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We are Capital Gainer 
            </h2>
            <p className="text-accent font-medium">
              Registered Research Analyst
            </p>
            <p className="text-lg text-muted-foreground">
              Guiding Your Investments with Precision Research
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Capital Gainer is a registered research analyst firm providing clear, data-driven trading and 
              investment recommendations. We focus on quality, efficiency, and smart innovation to help 
              clients make informed decisions, with timely insights, disciplined risk management, and responsive support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our roots in market analysis to our current position serving investors globally, 
              our team offers professional, specialized, and highly experienced analysis to help clients 
              navigate opportunities with confidence.
            </p>
            <Button asChild variant="outline" className="group">
              <Link href="/about">
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
