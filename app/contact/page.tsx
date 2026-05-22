import { Navbar } from "@/components/navbar"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    value: "+91 700",
    href: "tel:+1-555-123-4567"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed inquiry",
    value: "contact@capitalgainer.shop",
    href: "mailto:contact@capitalgainer.shop"
  },
  {
    icon: MapPin,
    title: "Office",
    value: "3 AMARTYA BHAWAN, HAUZKHAS, DELHI, IN 110017",
    href: "#"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "When we are available",
    value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    href: "#"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DisclaimerBanner />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions about our services? Ready to start your investment journey? 
              Our team is here to help you every step of the way.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {method.description}
                  </p>
                  <p className="text-primary font-medium text-sm">
                    {method.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    REACH OUT
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Fill out the form and our team will get back to you within 24 hours. 
                    We are committed to providing exceptional service and personalized attention to every inquiry.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quick Response</h3>
                      <p className="text-muted-foreground text-sm">
                        Our team responds to all inquiries within 24 business hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Personal Consultation</h3>
                      <p className="text-muted-foreground text-sm">
                        Schedule a one-on-one call with our research analysts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Detailed Information</h3>
                      <p className="text-muted-foreground text-sm">
                        Receive comprehensive details about our services and pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="+91 9999999999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Interested In
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition">
                      <option value="">Select a service</option>
                      <option value="equity">Equity Research</option>
                      <option value="futures">Futures Trading</option>
                      <option value="options">Options Strategy</option>
                      <option value="index">Index Trading</option>
                      <option value="commodity">Commodity Research</option>
                      <option value="hni">HNI Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your investment goals and how we can help..."
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="agree-contact" className="mt-1" required />
                    <label htmlFor="agree-contact" className="text-sm text-muted-foreground">
                      I agree to be contacted and accept the{" "}
                      <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      {" & "}
                      <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="h-96 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Interactive Map Placeholder</p>
            <p className="text-sm text-muted-foreground/70">3 AMARTYA BHAWAN, HAUZKHAS, DELHI, IN 1110017</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
