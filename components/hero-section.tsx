import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroArticle {
  title: string
  subtitle: string
  category: string
  date: string
  imageUrl: string
  href: string
}

interface HeroSectionProps {
  article: HeroArticle
}

export function HeroSection({ article }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-end pb-20 lg:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
              {article.category}
            </span>
            <span className="w-8 h-px bg-foreground/30" />
            <span className="text-xs tracking-widest uppercase text-foreground/50">
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] tracking-tight mb-6 text-balance"
          >
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8 max-w-2xl">
            {article.subtitle}
          </p>

          {/* CTA */}
          <Link
            href={article.href}
            className="inline-flex items-center gap-3 group"
          >
            <span className="text-sm tracking-widest uppercase text-foreground/80 group-hover:text-foreground transition-colors">
              Ler matéria completa
            </span>
            <div className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
