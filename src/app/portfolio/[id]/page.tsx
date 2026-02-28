import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const projects: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    results?: string[];
  }
> = {
  "1": {
    title: "FinTech Dashboard",
    category: "Web Development",
    description: "Real-time analytics platform for financial institutions.",
    longDescription:
      "We built a comprehensive analytics dashboard that enables financial institutions to monitor real-time metrics, track portfolio performance, and make data-driven decisions. The platform processes millions of data points daily with sub-second latency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tags: ["React", "TypeScript", "Data Viz"],
    results: ["60% faster insights", "Real-time processing", "Enterprise-grade security"],
  },
  "2": {
    title: "E-Commerce Platform",
    category: "Product Design",
    description: "Seamless shopping experience with 40% conversion lift.",
    longDescription:
      "A complete redesign of the user journey from discovery to checkout. We focused on reducing friction, improving mobile experience, and implementing personalized recommendations that increased average order value.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    tags: ["UX", "UI Design", "Conversion"],
    results: ["40% conversion lift", "25% higher AOV", "90% mobile satisfaction"],
  },
  "3": {
    title: "AI-Powered SaaS",
    category: "AI Solutions",
    description: "Intelligent workflow automation for enterprise teams.",
    longDescription:
      "An AI-powered platform that automates repetitive workflows, predicts bottlenecks, and suggests optimizations. Built with enterprise-grade security and scalability to handle thousands of concurrent users.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    tags: ["AI", "SaaS", "Automation"],
    results: ["70% time saved", "3x productivity", "Scalable to 10k+ users"],
  },
  "4": {
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete brand refresh for a Series B startup.",
    longDescription:
      "A complete brand identity overhaul including logo design, visual language, brand guidelines, and marketing collateral. The new identity positioned the company for their Series B launch and market expansion.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    tags: ["Branding", "Identity", "Strategy"],
    results: ["Unified brand voice", "50+ assets created", "Successful Series B"],
  },
  "5": {
    title: "Healthcare Portal",
    category: "Web Development",
    description: "Patient-centric healthcare management platform.",
    longDescription:
      "A HIPAA-compliant patient portal that enables healthcare providers to manage appointments, share medical records securely, and communicate with patients. Built with accessibility and compliance as core requirements.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    tags: ["Healthcare", "Compliance", "React"],
    results: ["HIPAA compliant", "100k+ patients", "99.9% uptime"],
  },
  "6": {
    title: "Growth Analytics Suite",
    category: "Growth Strategy",
    description: "Data-driven growth platform with 3x ROI.",
    longDescription:
      "A comprehensive analytics platform that unifies marketing, sales, and product data. Enables growth teams to identify opportunities, optimize campaigns, and measure ROI across all channels.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    tags: ["Analytics", "Growth", "Data"],
    results: ["3x ROI", "Unified data view", "Real-time insights"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];
  if (!project) return { title: "Project | Akaar Labs" };
  return {
    title: `${project.title} | Akaar Labs Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-24 min-h-[60vh] flex items-center justify-center">
          <Container>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-primary">Project not found</h1>
              <Button href="/portfolio" variant="primary" className="mt-4">
                Back to Portfolio
              </Button>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <article className="py-16 md:py-24">
          <Container size="narrow">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted hover:text-accent text-sm font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>

            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 900px"
              />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-primary mb-4">Overview</h2>
                <p className="text-muted leading-relaxed">{project.longDescription}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Results</h2>
                <ul className="space-y-2">
                  {project.results?.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-muted">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-light text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-border">
              <Button href="/#contact" variant="primary" size="lg">
                Start Your Project
              </Button>
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
