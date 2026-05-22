"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/pricing", label: "PRICING" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">SPEAK TO US</span>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+1-555-123-4567" className="flex items-center gap-1 hover:underline">
              <Phone className="w-3 h-3" />
              +1-555-123-4567
            </a>
            <span className="hidden md:flex items-center gap-1 text-primary-foreground/80">
              <Clock className="w-3 h-3" />
              Opens at 9am EST
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <Link href="/about" className="hover:underline">ABOUT US</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">CONTACT US</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-foreground">
                Summit Analytics
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
