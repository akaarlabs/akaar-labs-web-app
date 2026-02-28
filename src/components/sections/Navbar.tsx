"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-primary hover:text-primary/90 transition-colors group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <span className="text-lg font-bold leading-none">∞</span>
            </span>
            <span>Akaar Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary/90 hover:text-primary font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/#contact" variant="primary" size="sm">
              Get in Touch
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {isMobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-[var(--container-padding)] py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary hover:text-accent font-semibold py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              className="w-full"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
