import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  services: [
    { href: "/#services", label: "Web Development" },
    { href: "/#services", label: "Product Design" },
    { href: "/#services", label: "AI Solutions" },
  ],
  company: [
    { href: "/#about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/#process", label: "Our Process" },
  ],
  connect: [
    { href: "/#contact", label: "Contact Us" },
    { href: "/#testimonials", label: "Testimonials" },
  ],
};

const socialLinks = [
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    href: "#",
    label: "Twitter",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    href: "#",
    label: "GitHub",
    icon: (
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-primary-foreground">
      <div className="border-t border-primary-foreground/10">
        <Container>
          <div className="py-16 md:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
              <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:pr-8">
                <Link href="/" className="inline-flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20 text-accent">
                    <span className="text-lg font-bold leading-none">∞</span>
                  </span>
                  <span className="text-2xl font-bold tracking-tight">Akaar Labs</span>
                </Link>
                <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
                  Creating infinite digital possibilities for brands that dare to innovate.
                </p>
                <div className="mt-8 flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-6">
                  Services
                </h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-6">
                  Connect
                </h4>
                <ul className="space-y-4">
                  {footerLinks.connect.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} Akaar Labs. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
