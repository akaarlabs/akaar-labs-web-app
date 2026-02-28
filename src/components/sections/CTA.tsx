"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTA() {
  const ref = useScrollReveal<HTMLDivElement>({});

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <Container>
        <div
          ref={ref}
          className="reveal text-center max-w-3xl mx-auto"
        >
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary-foreground">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let&apos;s turn your vision into a scalable digital reality.
          </p>
          <div className="mt-10">
            <Button
              href="/#contact"
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground border-0"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
