import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  imageUrl: string
  href: string
  featured?: boolean
}

interface NewsGridProps {
  articles: Article[]
}

export function NewsGrid({ articles }: NewsGridProps) {
  const featuredArticle = articles.find(a => a.featured) || articles[0]
  const regularArticles = articles.filter(a => a.id !== featuredArticle.id).slice(0, 4)

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-xs tracking-[0.3em] uppercase text-foreground/60">
              Últimas Notícias
            </h2>
            <span className="w-12 h-px bg-border" />
          </div>
          <Link 
            href="#"
            className="text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
          >
            Ver todas
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Article - Large */}
          <Link 
            href={featuredArticle.href}
            className="group relative aspect-[4/5] lg:aspect-auto lg:row-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                  {featuredArticle.category}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-foreground/50">
                  {featuredArticle.date}
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif leading-tight mb-4 group-hover:text-accent transition-colors duration-300 text-balance">
                {featuredArticle.title}
              </h3>
              
              <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2 max-w-lg">
                {featuredArticle.excerpt}
              </p>
            </div>
          </Link>

          {/* Regular Articles - Smaller Cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {regularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link 
      href={article.href}
      className="group flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
        
        {/* Hover Arrow */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
          {article.category}
        </span>
        <span className="text-[10px] tracking-widest uppercase text-foreground/40">
          {article.date}
        </span>
      </div>

      <h3 className="font-serif text-lg lg:text-xl leading-snug group-hover:text-foreground/80 transition-colors duration-300 text-balance">
        {article.title}
      </h3>
    </Link>
  )
}
