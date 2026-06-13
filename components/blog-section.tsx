import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { blogPosts } from "@/lib/blog-data"

// Homepage previews the latest few posts; the full list lives on /blog.
const RECENT_COUNT = 3

export function BlogSection() {
  const recent = blogPosts.slice(0, RECENT_COUNT)

  return (
    <section id="blog" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <SectionEyebrow path="blog" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Blog</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Notes, deep-dives, and things I&apos;m figuring out as I build.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group relative block overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  post.color,
                )}
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {post.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>

                <div className="mt-5 flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>read article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="mt-10 lg:mt-12 animate-fade-in-up stagger-4">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"
          >
            <span className="underline-animate">read all blogs</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
