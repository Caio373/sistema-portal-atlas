import type { Article } from "@/lib/articles"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FeaturedStoriesProps {
  articles: Article[]
}

export function FeaturedStories({ articles }: FeaturedStoriesProps) {
  if (articles.length === 0) {
    return null
  }

  return (
    <section className="border-t border-border/50 py-20 lg:py-32" id="destaques">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center lg:mb-24">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-foreground/40">
            Seleção do Editor
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl">Histórias em Destaque</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/50">
            Reportagens longas, análises e investigações escolhidas pela redação para uma leitura mais aprofundada.
          </p>
        </div>

        <div className="space-y-0">
          {articles.map((article, index) => (
            <StoryItem key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StoryItem({ article, index }: { article: Article; index: number }) {
  return (
    <Link
      href={article.href}
      className="group -mx-6 grid gap-6 border-t border-border/30 px-6 py-8 transition-colors duration-300 first:border-t-0 hover:bg-card/30 lg:-mx-8 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-12"
      id={article.href.replace("#", "")}
    >
      <div className="hidden items-start pt-2 lg:col-span-1 lg:flex">
        <span className="font-serif text-5xl text-foreground/10 transition-colors duration-300 group-hover:text-accent/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:col-span-3 lg:aspect-[4/3]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, 100vw"
        />
      </div>

      <article className="flex flex-col justify-center lg:col-span-7">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            {article.category}
          </span>
          <span className="h-px w-4 bg-foreground/20" />
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

        <h3 className="mb-4 text-pretty font-serif text-xl leading-tight transition-colors duration-300 group-hover:text-accent lg:text-2xl xl:text-3xl">
          {article.title}
        </h3>

        <p className="mb-4 max-w-2xl text-sm uppercase tracking-widest text-foreground/40">
          Por {article.author ?? "Redação Atlas"}
        </p>

        <p className="mb-6 line-clamp-2 max-w-2xl leading-relaxed text-foreground/50">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 text-foreground/60 transition-colors group-hover:text-foreground">
          <span className="text-xs uppercase tracking-widest">Continuar lendo</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </article>

      <div className="hidden items-center justify-end lg:col-span-1 lg:flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
