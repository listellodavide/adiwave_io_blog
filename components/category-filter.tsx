"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const categories = [
  { label: "All categories", href: "/" },
  { label: "Java", href: "/category/java" },
  { label: "Agile", href: "/category/agile" },
  { label: "Architecture", href: "/category/architecture" },
  { label: "Cloud", href: "/category/cloud" },
]

export function CategoryFilter() {
  const pathname = usePathname()

  return (
    <div className="-mb-px flex gap-1 overflow-x-auto">
      {categories.map((cat) => {
        const isActive = pathname === cat.href || (cat.href === "/" && pathname === "/")
        return (
          <Link
            key={cat.href}
            href={cat.href}
            className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              isActive
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            {cat.label}
          </Link>
        )
      })}
    </div>
  )
}
