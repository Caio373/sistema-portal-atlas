import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  imageUrl: string
  href: string
  author?: string
}

interface FeaturedStoriesProps {
  articles: Article[]
}

export function FeaturedStories({ articles }: FeaturedStoriesProps) {
  return (
    <section className="py-20 lg:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-foreground/40 block mb-4">
            Seleção do Editor
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif">
            Histórias em Destaque
          </h2>
        </div>

        {/* Stories List */}
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
      className="group grid lg:grid-cols-12 gap-6 lg:gap-12 py-8 lg:py-12 border-t border-border/30 first:border-t-0 hover:bg-card/30 transition-colors duration-300 -mx-6 px-6 lg:-mx-8 lg:px-8"
    >
      {/* Number */}
      <div className="lg:col-span-1 hidden lg:flex items-start pt-2">
        <span className="text-5xl font-serif text-foreground/10 group-hover:text-accent/30 transition-colors duration-300">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Image */}
      <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
            {article.category}
          </span>
          <span className="w-4 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-widest uppercase text-foreground/40">
            {article.date}
          </span>
        </div>

        <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif leading-tight mb-4 group-hover:text-accent transition-colors duration-300 text-pretty">
          {article.title}
        </h3>

        <p className="text-foreground/50 leading-relaxed line-clamp-2 mb-6 max-w-2xl">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 text-foreground/60 group-hover:text-foreground transition-colors">
          <span className="text-xs tracking-widest uppercase">Continuar lendo</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Arrow - Desktop */}
      <div className="lg:col-span-1 hidden lg:flex items-center justify-end">
        <div className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  )
}
