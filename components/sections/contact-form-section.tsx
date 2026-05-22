"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactFormSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/80 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
              Secure Inquiry
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Register Now!
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Tell us a bit about yourself and we will get back to you quickly with personalized recommendations.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">1</span>
                </div>
                <p>Fill out the inquiry form</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">2</span>
                </div>
                <p>Receive a call from our expert team</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">3</span>
                </div>
                <p>Start your investment journey</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card text-card-foreground rounded-2xl p-6 md:p-8 shadow-2xl">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
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
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Optional, but helps us share details faster.</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                    <option value="">Select Capital</option>
                    <option value="below-50k">Below ₹50,000</option>
                    <option value="50k-100k">₹50,000 - ₹100,000</option>
                    <option value="100k-500k">₹100,000 - ₹500,000</option>
                    <option value="above-500k">Above ₹500,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your investment goals..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="agree-contact" className="mt-1" required />
                <label htmlFor="agree-contact" className="text-sm text-muted-foreground">
                  I agree to be contacted and accept the{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  {" & "}
                  <Link href="/terms" className="text-primary hover:underline">Terms</Link>.
                </label>
              </div>

              <div className="flex gap-4 pt-2">
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit
                </Button>
                <Button type="reset" variant="outline" className="flex-1">
                  Clear
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
