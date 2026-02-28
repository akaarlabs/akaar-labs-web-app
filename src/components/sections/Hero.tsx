import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background image + light overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/45 to-transparent" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Premium Digital Agency
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-primary">
              Building Infinite Digital Possibilities
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              We help brands transform ideas into scalable digital experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/#contact" variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-muted" />
              Trusted by 50+ brands worldwide
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-md ml-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
                alt="Creative workspace and digital innovation"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2">
                <span className="text-4xl font-bold text-white/90">∞</span>
                <span className="text-sm font-medium text-white/80">
                  Infinite solutions, limitless creativity
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted">
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted/50 flex justify-center pt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-muted/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
