"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"

const navItems = [
  { label: "Política", href: "#" },
  { label: "Economia", href: "#" },
  { label: "Tecnologia", href: "#" },
  { label: "Cultura", href: "#" },
  { label: "Mundo", href: "#" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span 
              className="text-4xl lg:text-5xl tracking-tight"
              style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
            >
              Atlas
            </span>
          </Link>

          {/* Navigation Links - Desktop Right */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <button 
              className="p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Search - Mobile */}
          <button 
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
