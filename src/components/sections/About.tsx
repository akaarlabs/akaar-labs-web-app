"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const ref = useScrollReveal<HTMLDivElement>({});

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div
          ref={ref}
          className="reveal grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-primary/10 order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Creative team collaboration - innovation and limitless creativity"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-2xl font-bold text-white">100+</p>
              <p className="text-sm text-white/90">Projects Delivered</p>
            </div>
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-sm text-white/90">Happy Clients</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
              The Meaning of Akaar
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              <span className="font-semibold text-primary">Akaar</span> represents
              creating infinite solutions and limitless creativity. We believe
              every brand has untapped potential—our mission is to unlock it
              through innovative, scalable digital experiences.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We combine strategic thinking with cutting-edge technology to
              deliver solutions that don&apos;t just meet expectations—they exceed
              them. From concept to launch, we partner with you to transform
              ideas into reality.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
