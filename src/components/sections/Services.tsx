"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for performance and scale.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Product Design",
    description: "User-centered design that delights users and drives conversion through intuitive interfaces.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Branding",
    description: "Strategic brand identity that resonates with your audience and stands out in the market.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Solutions",
    description: "Intelligent automation and AI integration to future-proof your digital products.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "SaaS Development",
    description: "Scalable software solutions with subscription models and robust infrastructure.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Growth Strategy",
    description: "Data-driven strategies to accelerate user acquisition and revenue growth.",
  },
];

export function Services() {
  const headerRef = useScrollReveal<HTMLDivElement>({});
  const gridRef = useScrollReveal<HTMLDivElement>({});

  return (
    <section id="services" className="py-24 md:py-32 bg-light">
      <Container>
        <div ref={headerRef} className="reveal mb-16">
          <div className="relative aspect-[21/9] max-w-4xl mx-auto rounded-2xl overflow-hidden mb-10 shadow-lg ring-1 ring-primary/10">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Data-driven digital solutions and innovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-white/30">∞</span>
            </div>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-muted">
              End-to-end digital solutions that help you achieve your business goals.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 bg-background rounded-xl shadow-sm border border-border hover:shadow-lg hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
