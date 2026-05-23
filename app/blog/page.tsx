import Link from "next/link"
import { Calendar, Tag } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-posts"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              NEWS & INSIGHTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
              Company Blog
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
              Market education, strategy notes, and practical research commentary for investors and traders.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-card-foreground mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
