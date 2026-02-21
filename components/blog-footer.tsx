import Link from "next/link"
import { Github, ArrowRight } from "lucide-react"

export function BlogFooter() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-[#74CBE6] dark:bg-[#2773E6]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            <span className="text-balance">Have a project? Let{"'"}s talk!</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Looking for insights on software architecture, API design, or cloud-native development? Get in touch.
          </p>
          <a
            href="https://github.com/listellodavide/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Bottom footer */}
      <div className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Adiwave<span className="text-primary">.IO</span>
                </span>
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Insights on software development, architecture, and engineering best practices from a senior solution architect.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Categories
              </h3>
              <div className="flex flex-col gap-2.5">
                {["Java", "Agile", "Architecture", "Cloud"].map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${cat.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Connect
              </h3>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com/listellodavide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Adiwave.IO. All rights reserved. Built with Next.js + React on GitHub Pages.`}
          </div>
        </div>
      </div>
    </footer>
  )
}
