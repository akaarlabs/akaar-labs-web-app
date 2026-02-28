import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Footer,
} from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Portfolio | Akaar Labs",
  description: "Explore our recent work - digital experiences that drive results.",
};

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Development",
    description: "Real-time analytics platform for financial institutions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "Data Viz"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Product Design",
    description: "Seamless shopping experience with 40% conversion lift.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["UX", "UI Design", "Conversion"],
  },
  {
    id: 3,
    title: "AI-Powered SaaS",
    category: "AI Solutions",
    description: "Intelligent workflow automation for enterprise teams.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "SaaS", "Automation"],
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete brand refresh for a Series B startup.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Branding", "Identity", "Strategy"],
  },
  {
    id: 5,
    title: "Healthcare Portal",
    category: "Web Development",
    description: "Patient-centric healthcare management platform.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Healthcare", "Compliance", "React"],
  },
  {
    id: 6,
    title: "Growth Analytics Suite",
    category: "Growth Strategy",
    description: "Data-driven growth platform with 3x ROI.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["Analytics", "Growth", "Data"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="py-16 md:py-24">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-primary">
                Our Work
              </h1>
              <p className="mt-4 text-lg text-muted">
                Digital experiences that drive results. Explore our recent projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="group block"
                >
                  <article className="overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-muted text-sm">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-md bg-light text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button href="/#contact" variant="primary" size="lg">
                Start Your Project
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
