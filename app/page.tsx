import { FeaturedStories } from "@/components/featured-stories"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { NewsGrid } from "@/components/news-grid"
import { featuredStories, heroArticle, latestArticles } from "@/lib/articles"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection article={heroArticle} />
      <NewsGrid articles={latestArticles} />
      <FeaturedStories articles={featuredStories} />
      <Footer />
    </main>
  )
}
