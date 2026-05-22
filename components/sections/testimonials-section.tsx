"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    location: "California",
    quote: "Summit Analytics has transformed my trading approach. Their research is thorough, timely, and the risk management guidance has been invaluable for my portfolio.",
    avatar: "MC"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "New York",
    quote: "The level of support and expertise from the Summit team is exceptional. I appreciate how they explain their analysis and help me understand market movements.",
    avatar: "SJ"
  },
  {
    id: 3,
    name: "David Park",
    location: "Texas",
    quote: "Being a client of Summit Analytics, I can confidently say they provide some of the best research in the industry. Their disciplined approach to trading has helped me grow.",
    avatar: "DP"
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          {/* Quote Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What Happy Clients Say
          </h2>

          {/* Testimonial Quote */}
          <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 min-h-[120px]">
            &ldquo;{activeTestimonial.quote}&rdquo;
          </blockquote>

          {/* Avatar Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  index === activeIndex
                    ? "bg-primary text-primary-foreground scale-110 ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {testimonial.avatar}
              </button>
            ))}
          </div>

          {/* Client Info */}
          <div className="mb-8">
            <p className="text-lg font-semibold text-foreground">{activeTestimonial.name}</p>
            <p className="text-muted-foreground">{activeTestimonial.location}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
