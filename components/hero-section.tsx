import type { Article } from "@/lib/articles"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  article: Article
}

export function HeroSection({ article }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-end pb-20 lg:pb-32" id="destaque">
      <div className="absolute inset-0">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <article className="max-w-3xl" id={article.href.replace("#", "")}>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {article.category}
            </span>
            <span className="h-px w-8 bg-foreground/30" />
            <time
              className="text-xs uppercase tracking-widest text-foreground/50"
              dateTime={article.datetime}
            >
              {article.date}
            </time>
            {article.readingTime && (
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-foreground/50">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readingTime}
              </span>
            )}
          </div>

          <h1 className="mb-6 text-balance font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            {article.title}
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
            {article.excerpt}
          </p>

          <Link href={article.href} className="group inline-flex items-center gap-3">
            <span className="text-sm uppercase tracking-widest text-foreground/80 transition-colors group-hover:text-foreground">
              Ler matéria completa
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </Link>
        </article>
      </div>
    </section>
  )
}
