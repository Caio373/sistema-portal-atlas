export type Article = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  datetime: string
  imageUrl: string
  href: string
  featured?: boolean
  author?: string
  readingTime?: string
}

export const heroArticle: Article = {
  id: "hero-cidades-inteligentes",
  title: "O Futuro das Cidades Inteligentes Começa Agora",
  excerpt:
    "Como sensores, dados públicos e arquitetura humana estão redesenhando a mobilidade, a segurança e a vida em comunidade nas grandes metrópoles.",
  category: "Tecnologia",
  date: "3 Jun 2026",
  datetime: "2026-06-03",
  imageUrl: "/images/hero-main.jpg",
  href: "#cidades-inteligentes",
  author: "Redação Atlas",
  readingTime: "6 min",
}

export const latestArticles: Article[] = [
  {
    id: "ia-medicina",
    title: "A Nova Era da Inteligência Artificial na Medicina",
    excerpt:
      "Pesquisadores desenvolvem algoritmos que prometem acelerar diagnósticos e apoiar tratamentos personalizados com mais transparência clínica.",
    category: "Inovação",
    date: "3 Jun 2026",
    datetime: "2026-06-03",
    imageUrl: "/images/news-tech.jpg",
    href: "#ia-medicina",
    featured: true,
    author: "Luiza Ramos",
    readingTime: "5 min",
  },
  {
    id: "energia-limpa-industria",
    title: "Energia Limpa Redesenha a Competitividade Industrial",
    excerpt:
      "Empresas combinam contratos renováveis, baterias e eficiência operacional para reduzir custos e ganhar previsibilidade.",
    category: "Ambiente",
    date: "3 Jun 2026",
    datetime: "2026-06-03",
    imageUrl: "/images/news-environment.jpg",
    href: "#energia-limpa-industria",
    author: "Bruno Teixeira",
    readingTime: "4 min",
  },
  {
    id: "economia-global-transformacao",
    title: "Economia Global em Transformação",
    excerpt:
      "Análise das tendências que moldam cadeias produtivas, inflação e decisões de investimento nos próximos meses.",
    category: "Economia",
    date: "2 Jun 2026",
    datetime: "2026-06-02",
    imageUrl: "/images/news-economy.jpg",
    href: "#economia-global-transformacao",
    author: "Marina Azevedo",
    readingTime: "7 min",
  },
  {
    id: "streaming-cultura",
    title: "A Revolução Cultural do Streaming",
    excerpt:
      "Como as plataformas digitais estão redefinindo o consumo de arte, entretenimento e a descoberta de novos criadores.",
    category: "Cultura",
    date: "2 Jun 2026",
    datetime: "2026-06-02",
    imageUrl: "/images/news-culture.jpg",
    href: "#streaming-cultura",
    author: "Helena Duarte",
    readingTime: "4 min",
  },
  {
    id: "diplomacia-seculo-xxi",
    title: "Diplomacia no Século XXI",
    excerpt:
      "Os novos desafios das relações internacionais em um cenário de redes, dados e negociações multilaterais constantes.",
    category: "Mundo",
    date: "1 Jun 2026",
    datetime: "2026-06-01",
    imageUrl: "/images/news-world.jpg",
    href: "#diplomacia-seculo-xxi",
    author: "Renato Lima",
    readingTime: "6 min",
  },
  {
    id: "congresso-agenda-digital",
    title: "Congresso Debate Nova Agenda Digital",
    excerpt:
      "Parlamentares e especialistas discutem governança de dados, inclusão conectada e regras para serviços públicos digitais.",
    category: "Política",
    date: "31 Mai 2026",
    datetime: "2026-05-31",
    imageUrl: "/images/news-politics.jpg",
    href: "#congresso-agenda-digital",
    author: "Camila Nogueira",
    readingTime: "5 min",
  },
  {
    id: "cidades-verdes",
    title: "Cidades Verdes Avançam com Infraestrutura Azul",
    excerpt:
      "Projetos de parques lineares e drenagem inteligente reduzem ilhas de calor e ampliam áreas de convivência.",
    category: "Ambiente",
    date: "30 Mai 2026",
    datetime: "2026-05-30",
    imageUrl: "/images/news-environment.jpg",
    href: "#cidades-verdes",
    author: "Joana Prado",
    readingTime: "3 min",
  },
  {
    id: "startups-deep-tech",
    title: "Startups de Deep Tech Atraem Capital Paciente",
    excerpt:
      "Fundos especializados buscam pesquisas com ciclos mais longos e potencial de impacto em saúde, clima e indústria.",
    category: "Tecnologia",
    date: "29 Mai 2026",
    datetime: "2026-05-29",
    imageUrl: "/images/news-innovation.jpg",
    href: "#startups-deep-tech",
    author: "Pedro Martins",
    readingTime: "4 min",
  },
  {
    id: "educacao-midiatica",
    title: "Educação Midiática Ganha Espaço nas Escolas",
    excerpt:
      "Redes de ensino incorporam checagem de fontes, leitura crítica e produção responsável de conteúdo ao currículo.",
    category: "Cultura",
    date: "28 Mai 2026",
    datetime: "2026-05-28",
    imageUrl: "/images/news-culture.jpg",
    href: "#educacao-midiatica",
    author: "Sofia Campos",
    readingTime: "5 min",
  },
]

export const featuredStories: Article[] = [
  {
    id: "renascimento-cidades-europeias",
    title: "O Renascimento das Cidades Europeias Pós-Pandemia",
    excerpt:
      "Uma análise profunda sobre como metrópoles europeias estão se reinventando com sustentabilidade, moradia de uso misto e novos modelos de convivência urbana.",
    category: "Especial",
    date: "3 Jun 2026",
    datetime: "2026-06-03",
    imageUrl: "/images/news-world.jpg",
    href: "#renascimento-cidades-europeias",
    author: "Maria Santos",
    readingTime: "9 min",
  },
  {
    id: "corrida-ia",
    title: "A Batalha Silenciosa pelo Domínio da Inteligência Artificial",
    excerpt:
      "Estados Unidos, China e Europa competem pela liderança em IA; a reportagem mostra como regulação, chips e talentos definem esta corrida.",
    category: "Investigação",
    date: "2 Jun 2026",
    datetime: "2026-06-02",
    imageUrl: "/images/news-innovation.jpg",
    href: "#corrida-ia",
    author: "João Silva",
    readingTime: "11 min",
  },
  {
    id: "arte-nfts-blockchain",
    title: "O Mercado de Arte em Tempos de NFTs e Blockchain",
    excerpt:
      "Galerias tradicionais se adaptam à realidade digital enquanto colecionadores redefinem autenticidade, propriedade e comunidade artística.",
    category: "Cultura",
    date: "1 Jun 2026",
    datetime: "2026-06-01",
    imageUrl: "/images/news-culture.jpg",
    href: "#arte-nfts-blockchain",
    author: "Ana Costa",
    readingTime: "8 min",
  },
  {
    id: "seguranca-alimentar-clima",
    title: "Segurança Alimentar Entra na Agenda Climática",
    excerpt:
      "Produtores, cientistas e gestores públicos testam modelos de previsão para proteger safras e reduzir desperdícios.",
    category: "Ambiente",
    date: "31 Mai 2026",
    datetime: "2026-05-31",
    imageUrl: "/images/news-environment.jpg",
    href: "#seguranca-alimentar-clima",
    author: "Rafael Neri",
    readingTime: "10 min",
  },
]
