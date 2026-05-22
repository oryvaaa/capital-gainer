import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Options Trading: A Practical Guide for Beginners",
    excerpt: "Learn the fundamentals of call and put options, how payoffs work, and which strategies make sense for new traders entering the derivatives market.",
    category: "Education",
    date: "May 18, 2026",
    featured: true
  },
  {
    id: 2,
    title: "Risk Management Strategies for Volatile Markets",
    excerpt: "Discover how to protect your portfolio during market uncertainty with proven risk management techniques.",
    category: "Strategy",
    date: "May 15, 2026",
    featured: false
  },
  {
    id: 3,
    title: "IPO Analysis: From Application to Listing Day Decisions",
    excerpt: "A comprehensive guide to evaluating IPO opportunities and making informed decisions on new listings.",
    category: "Analysis",
    date: "May 12, 2026",
    featured: false
  }
]

export function BlogSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            NEWS & INSIGHTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Company Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                {post.featured && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">We have articles on a range of topics</p>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
