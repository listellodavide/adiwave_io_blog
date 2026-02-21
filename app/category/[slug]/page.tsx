import { notFound } from "next/navigation"
import { blogPosts, getAllCategories } from "@/lib/blog-data"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { BlogCard } from "@/components/blog-card"
import { CategoryFilter } from "@/components/category-filter"
import type { Metadata } from "next"

const categoryMap: Record<string, string> = {
  java: "Java",
  agile: "Agile",
  scrum: "Scrum",
  architecture: "Architecture",
  cloud: "Cloud",
  kubernetes: "Kubernetes",
  microservices: "Microservices",
  "api-gateway": "API Gateway",
  "best-practices": "Best Practices",
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((cat) => ({ slug: cat.toLowerCase() }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const displayName = categoryMap[slug] || slug
  return {
    title: `${displayName} Articles | Adiwave.IO`,
    description: `Browse all ${displayName} articles on Adiwave.IO`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const displayName = categoryMap[slug] || slug

  const posts = blogPosts.filter((post) =>
    post.categories.some((c) => c.toLowerCase() === slug.toLowerCase())
  )

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BlogHeader />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-6 pb-2 pt-10">
            <nav aria-label="Breadcrumb">
              <span className="text-sm font-medium text-primary">The Blog</span>
            </nav>
          </div>
        </section>

        {/* Title */}
        <section className="bg-card pb-10">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-3xl font-bold text-foreground lg:text-5xl">
              {displayName}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              {posts.length} {posts.length === 1 ? "article" : "articles"} in this category
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6">
            <CategoryFilter />
          </div>
        </section>

        {/* Posts */}
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  )
}
