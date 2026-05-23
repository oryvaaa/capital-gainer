import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-posts"

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = blogPosts.find((item) => item.id === id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <article className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-5">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
