import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/services#equity", label: "Equity Research" },
  { href: "/services#futures", label: "Futures Trading" },
  { href: "/services#options", label: "Options Strategy" },
  { href: "/services#commodities", label: "Commodities" },
  { href: "/services#index", label: "Index Trading" },
]

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/refund", label: "Refund Policy" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold">Capital Gainer</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              We employ a team of expert research analysts delivering data-driven insights through advanced technical analysis and proprietary indicators for informed trading decisions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  3 Amartya Bhawan, Hauzkhas,<br />
                  Delhi, IN, 110017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+91 7280980028" className="text-background/70 hover:text-primary text-sm">
                  +91 7280980028
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contact@capitalgainer.shop" className="text-background/70 hover:text-primary text-sm">
                  contact@capitalgainer.shop
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM IST
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Investor Notice */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-background/5 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-primary mb-2">Attention Investors</h4>
            <p className="text-xs text-background/60 leading-relaxed">
              Investment in securities market are subject to market risks. Read all related documents carefully before investing. 
              Registration granted by regulatory authorities does not guarantee performance or returns. Past performance is not indicative of future results.
              Capital Gainer is a NISM-Registered research analyst. Registration No: NISM-202400101361
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Capital Gainer. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
