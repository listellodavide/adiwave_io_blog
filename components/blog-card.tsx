import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  if (featured) {
    return (
      <Link href={`/blog/${post.id}`} className="group block">
        <article className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-lg hover:ring-primary/30">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary lg:text-2xl">
                <span className="text-balance">{post.title}</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {formattedDate}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-lg hover:ring-primary/30 md:flex-row">
        <div className="relative aspect-[16/10] shrink-0 md:aspect-auto md:w-[280px]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6">
          <div className="flex flex-wrap items-center gap-2">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 className="mt-3 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary lg:text-lg">
            <span className="text-pretty">{post.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
