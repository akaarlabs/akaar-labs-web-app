"use client";

import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Akaar Labs transformed our digital presence. Their attention to detail and strategic approach exceeded our expectations.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
  },
  {
    quote:
      "Working with Akaar Labs felt like having an extension of our team. They delivered on time and the results speak for themselves.",
    author: "Marcus Johnson",
    role: "Founder, ScaleUp",
  },
  {
    quote:
      "From concept to launch, the team was professional and innovative. Our conversion rate increased by 40% within the first quarter.",
    author: "Elena Rodriguez",
    role: "Marketing Director, GrowthCo",
  },
];

export function Testimonials() {
  const headerRef = useScrollReveal<HTMLDivElement>({});
  const gridRef = useScrollReveal<HTMLDivElement>({});

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <Container>
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted">
            Trusted by brands who value quality and results.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 md:p-8 bg-light rounded-xl border border-border hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              <svg
                className="w-10 h-10 text-accent/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-muted leading-relaxed">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
