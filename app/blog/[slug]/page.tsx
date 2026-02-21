import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { blogPosts, getPostBySlug } from "@/lib/blog-data"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { MarkdownContent } from "@/components/markdown-content"
import { BlogCard } from "@/components/blog-card"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | Adiwave.IO`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Get related posts (same category, not current post)
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.categories.some((c) => post.categories.includes(c))
    )
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BlogHeader />

      <main className="flex-1">
        {/* Breadcrumb + Header */}
        <section className="bg-card pb-10 pt-10">
          <div className="mx-auto max-w-4xl px-6">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="font-medium text-primary transition-colors hover:text-primary/80">
                The Blog
              </Link>
            </nav>

            {/* Title */}
            <h1 className="text-2xl font-bold leading-tight text-foreground lg:text-4xl">
              <span className="text-balance">{post.title}</span>
            </h1>

            {/* Meta row */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {post.categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Updated {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <div className="mx-auto max-w-4xl px-6 -mt-0">
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl shadow-md">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Introduction text */}
        <div className="mx-auto max-w-3xl px-6 pt-10">
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg lg:leading-8">
            {post.excerpt}
          </p>
        </div>

        {/* Article content */}
        <article className="mx-auto max-w-3xl px-6 pb-10 pt-6">
          <MarkdownContent content={post.content} />
        </article>

        {/* Tags */}
        <div className="mx-auto max-w-3xl border-t border-border px-6 py-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="mx-auto max-w-3xl border-t border-border px-6 py-8">
          <p className="text-sm text-muted-foreground">
            This article was written by <span className="font-semibold text-foreground">{post.author}</span>
          </p>
        </div>

        {/* Share CTA */}
        <div className="mx-auto max-w-3xl px-6 pb-10">
          <div className="rounded-2xl bg-muted p-8 text-center">
            <p className="text-sm font-medium text-foreground">Share on</p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://adiwave.io/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card px-4 py-2 text-xs font-medium text-foreground ring-1 ring-border transition-colors hover:bg-secondary"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://adiwave.io/blog/${post.id}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card px-4 py-2 text-xs font-medium text-foreground ring-1 ring-border transition-colors hover:bg-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles - like 6tematik "Articles de blog lies" */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-secondary/50 py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="mb-8 text-xl font-bold text-foreground">
                Related blog articles
              </h2>
              <div className="flex flex-col gap-6">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.id} post={related} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <BlogFooter />
    </div>
  )
}
