import { blogPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog-card"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { CategoryFilter } from "@/components/category-filter"

export default function HomePage() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BlogHeader />

      <main className="flex-1">
        {/* Blog Title Section - like 6tematik breadcrumb style */}
        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-6 pb-2 pt-10">
            <nav aria-label="Breadcrumb">
              <span className="text-sm font-medium text-primary">The Blog</span>
            </nav>
          </div>
        </section>

        {/* Hero / Title */}
        <section className="bg-card pb-10">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-foreground lg:text-5xl">
              <span className="text-balance">
                Architecture, Code, and Engineering Best Practices
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Practical insights on Java, Scrum, Kubernetes, microservices, and solution architecture from the field.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6">
            <CategoryFilter />
          </div>
        </section>

        {/* Featured Post */}
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <BlogCard post={featured} featured />
        </section>

        {/* All Posts */}
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
          <div className="flex flex-col gap-6">
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  )
}
