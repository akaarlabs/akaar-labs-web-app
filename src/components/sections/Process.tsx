"use client";

import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your goals, audience, and market to define the right strategy.",
  },
  {
    number: "02",
    title: "Design",
    description: "User-centered design that balances aesthetics with functionality and conversion.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Clean, scalable code built with modern technologies and best practices.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Smooth deployment, testing, and ongoing support to ensure long-term success.",
  },
];

export function Process() {
  const headerRef = useScrollReveal<HTMLDivElement>({});
  const gridRef = useScrollReveal<HTMLDivElement>({});

  return (
    <section id="process" className="py-24 md:py-32 bg-light">
      <Container>
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-muted">
            A proven approach that delivers results, from idea to launch.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step) => (
            <div key={step.title} className="relative">
              <div className="relative bg-background p-6 rounded-xl border border-border hover:shadow-md hover:border-accent/20 transition-all duration-300">
                <span className="text-4xl font-bold text-accent/30">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
