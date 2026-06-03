import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { NewsGrid } from "@/components/news-grid"
import { FeaturedStories } from "@/components/featured-stories"
import { Footer } from "@/components/footer"

// Mock data - Em produção viria de uma API/CMS
const heroArticle = {
  title: "O Futuro das Cidades Inteligentes Começa Agora",
  subtitle: "Como a tecnologia está transformando a maneira como vivemos, trabalhamos e nos conectamos nas metrópoles ao redor do mundo.",
  category: "Tecnologia",
  date: "5 Mai 2026",
  imageUrl: "/images/hero-main.jpg",
  href: "#",
}

const latestArticles = [
  {
    id: "1",
    title: "A Nova Era da Inteligência Artificial na Medicina",
    excerpt: "Pesquisadores desenvolvem algoritmos que prometem revolucionar diagnósticos médicos e tratamentos personalizados.",
    category: "Inovação",
    date: "5 Mai 2026",
    imageUrl: "/images/news-tech.jpg",
    href: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Economia Global em Transformação",
    excerpt: "Análise das principais tendências que moldarão os mercados financeiros nos próximos anos.",
    category: "Economia",
    date: "5 Mai 2026",
    imageUrl: "/images/news-economy.jpg",
    href: "#",
  },
  {
    id: "3",
    title: "A Revolução Cultural do Streaming",
    excerpt: "Como as plataformas digitais estão redefinindo o consumo de arte e entretenimento.",
    category: "Cultura",
    date: "4 Mai 2026",
    imageUrl: "/images/news-culture.jpg",
    href: "#",
  },
  {
    id: "4",
    title: "Diplomacia no Século XXI",
    excerpt: "Os novos desafios das relações internacionais em um mundo cada vez mais conectado.",
    category: "Mundo",
    date: "4 Mai 2026",
    imageUrl: "/images/news-world.jpg",
    href: "#",
  },
  {
    id: "5",
    title: "Sustentabilidade Corporativa",
    excerpt: "Grandes empresas adotam metas ambiciosas para reduzir impacto ambiental.",
    category: "Ambiente",
    date: "3 Mai 2026",
    imageUrl: "/images/news-environment.jpg",
    href: "#",
  },
]

const featuredStories = [
  {
    id: "f1",
    title: "O Renascimento das Cidades Europeias Pós-Pandemia",
    excerpt: "Uma análise profunda sobre como as principais metrópoles europeias estão se reinventando, abraçando a sustentabilidade e criando novos modelos de convivência urbana que podem inspirar o resto do mundo.",
    category: "Especial",
    date: "5 Mai 2026",
    imageUrl: "/images/news-world.jpg",
    href: "#",
    author: "Maria Santos",
  },
  {
    id: "f2",
    title: "A Batalha Silenciosa pelo Domínio da Inteligência Artificial",
    excerpt: "Estados Unidos, China e Europa competem pela liderança em IA. Nossa investigação revela os bastidores desta corrida tecnológica que definirá o futuro da humanidade.",
    category: "Investigação",
    date: "4 Mai 2026",
    imageUrl: "/images/news-innovation.jpg",
    href: "#",
    author: "João Silva",
  },
  {
    id: "f3",
    title: "O Mercado de Arte em Tempos de NFTs e Blockchain",
    excerpt: "Galerias tradicionais enfrentam o desafio de se adaptar a uma nova realidade digital enquanto colecionadores redefinem o conceito de propriedade artística.",
    category: "Cultura",
    date: "3 Mai 2026",
    imageUrl: "/images/news-culture.jpg",
    href: "#",
    author: "Ana Costa",
  },
]

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
