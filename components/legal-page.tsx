import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type LegalPageProps = {
  title: string
  updated: string
  sections: Array<{
    heading: string
    body: string
  }>
}

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Capital Gainer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
              {title}
            </h1>
            <p className="text-muted-foreground mt-4">Last updated: {updated}</p>
          </div>
        </section>
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {sections.map((section) => (
              <section key={section.heading} className="border-b border-border pb-8 last:border-b-0">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
