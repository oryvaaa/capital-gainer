import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesTabsSection } from "@/components/sections/services-tabs-section"
import { ServicesGridSection } from "@/components/sections/services-grid-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { ProcessSection } from "@/components/sections/process-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { BlogSection } from "@/components/sections/blog-section"
import { FAQSection } from "@/components/sections/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesTabsSection />
        <ServicesGridSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactFormSection />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
