import type { Article } from "@/lib/articles"
import { ArrowUpRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NewsGridProps {
  articles: Article[]
}

export function NewsGrid({ articles }: NewsGridProps) {
  if (articles.length === 0) {
    return null
  }

  const featuredArticle = articles.find((article) => article.featured) ?? articles[0]
  const regularArticles = articles.filter((article) => article.id !== featuredArticle.id)

  return (
    <section className="py-20 lg:py-32" id="ultimas">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-foreground/40">
              Atualizado hoje
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl">Últimas Notícias</h2>
          </div>
          <Link
            href="#destaques"
            className="text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground"
          >
            Ver seleção do editor
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ArticleFeature article={featuredArticle} />

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {regularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArticleFeature({ article }: { article: Article }) {
  return (
    <Link
      href={article.href}
      className="group relative overflow-hidden rounded-lg lg:row-span-2"
      id={article.href.replace("#", "")}
    >
      <div className="relative min-h-[520px] lg:h-full">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <article className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <ArticleMeta article={article} className="mb-4" />
        <h3 className="mb-4 text-balance font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-accent lg:text-3xl xl:text-4xl">
          {article.title}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-foreground/60">
          {article.excerpt}
        </p>
      </article>
    </Link>
  )
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={article.href} className="group flex flex-col" id={article.href.replace("#", "")}>
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-background/20 transition-colors duration-300 group-hover:bg-transparent" />

        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      <ArticleMeta article={article} className="mb-3" />
      <h3 className="text-balance font-serif text-lg leading-snug transition-colors duration-300 group-hover:text-foreground/80 lg:text-xl">
        {article.title}
      </h3>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/50">
        {article.excerpt}
      </p>
    </Link>
  )
}

function ArticleMeta({ article, className = "" }: { article: Article; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
        {article.category}
      </span>
      <time
        className="text-[10px] uppercase tracking-widest text-foreground/40"
        dateTime={article.datetime}
      >
        {article.date}
      </time>
      {article.readingTime && (
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-foreground/40">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {article.readingTime}
        </span>
      )}
    </div>
  )
}
