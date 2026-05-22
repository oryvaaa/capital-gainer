import { Navbar } from "@/components/navbar"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Users, TrendingUp, Shield, CheckCircle } from "lucide-react"

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Active Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every recommendation is backed by thorough research and clear risk-reward analysis."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We prioritize your interests with transparent communication and ethical practices."
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "Continuous improvement in our methodologies to deliver superior research quality."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build long-term relationships focused on your financial success."
  }
]

const team = [
  {
    name: "Robert Mitchell",
    role: "Chief Research Officer",
    bio: "20+ years in equity research and portfolio management.",
    initials: "RM"
  },
  {
    name: "Jennifer Adams",
    role: "Head of Derivatives",
    bio: "Former institutional trader with expertise in options strategies.",
    initials: "JA"
  },
  {
    name: "Michael Chen",
    role: "Senior Technical Analyst",
    bio: "Specialist in advanced charting and market structure analysis.",
    initials: "MC"
  },
  {
    name: "Sarah Williams",
    role: "Client Relations Director",
    bio: "Dedicated to ensuring exceptional client experience and support.",
    initials: "SW"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DisclaimerBanner />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
                  ABOUT US
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Your Trusted Partner in Market Research
                </h1>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Capital Gainer is a NISM-Registered research analyst firm dedicated to providing 
                  clear, data-driven trading and investment recommendations for discerning investors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                    <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <Award className="w-32 h-32 text-primary/30" />
              </div>
              <div className="space-y-6">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  OUR STORY
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Building Trust Through Excellence
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded over 15 years ago, Capital Gainer began with a simple mission: to provide 
                  individual investors with the same quality of research and analysis that was previously 
                  available only to institutional clients.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we serve thousands of clients across the country, offering comprehensive research 
                  services spanning equity, derivatives, commodities, and more. Our team of experienced 
                  analysts combines fundamental and technical analysis to deliver actionable insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a registered research analyst, we adhere to strict regulatory standards and ethical 
                  guidelines. Our commitment to transparency, accuracy, and client success has made us 
                  a trusted name in market research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower investors with high-quality, research-driven insights that enable 
                  informed decision-making. We strive to demystify the markets and provide clear, 
                  actionable recommendations backed by rigorous analysis and disciplined risk management.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and respected research partner for individual investors, 
                  known for our accuracy, transparency, and commitment to client success. We aim to 
                  set the industry standard for quality and integrity in market research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                WHAT DRIVES US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Our Core Values
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                OUR TEAM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our team combines decades of experience in financial markets, research, and client service.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Regulatory Compliance
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Capital Gainer operates as a NISM-Registered Research Analyst in full compliance 
                    with regulatory requirements. We maintain the highest standards of professional 
                    conduct and transparent communication.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">NISM-Registered Research Analyst</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">Strict compliance protocols</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">Transparent fee structure</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">Regular audits and reviews</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center lg:text-right">
                  <p className="text-sm text-muted-foreground mb-2">Registration Number</p>
                  <p className="text-2xl font-bold text-primary mb-6">NISM-202400101361</p>
                  <Button asChild variant="outline">
                    <Link href="/disclaimer">
                      View Full Disclaimer
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of investors who trust Capital Gainer for their research needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/services">
                  View Services
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
