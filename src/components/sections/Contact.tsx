"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background: image first, then light overlay for readability */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=70"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/40" />
      </div>

      <Container>
        <div className="flex flex-col items-center justify-center w-full">
          <div ref={ref} className="reveal text-center max-w-2xl mb-14">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Let&apos;s build together
            </span>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-primary">
              Get in Touch
            </h2>
            <p className="mt-3 text-muted">
              Choose how you&apos;d like to connect—send a message or pick a time that works for you.
            </p>
          </div>

          {/* Centered contact card - unified layout */}
          <div
            ref={ref}
            className="reveal w-full max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-0 md:gap-0 rounded-2xl overflow-hidden shadow-xl border border-border bg-background">
              {/* Form column */}
              <div className="p-8 md:p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Send a message</h3>
                    <p className="text-sm text-muted">We typically respond within 24 hours</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="flex-1 min-h-[100px]">
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full rounded-xl"
                    disabled={status === "submitting" || status === "success"}
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : status === "success"
                        ? "Message sent!"
                        : "Send Message"}
                  </Button>
                  {status === "success" && (
                    <p className="text-sm text-accent font-medium text-center">
                      Thanks! We&apos;ll get back to you soon.
                    </p>
                  )}
                </form>
              </div>

              {/* Schedule + contact column */}
              <div className="bg-primary p-8 md:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground">Schedule a call</h3>
                    <p className="text-sm text-primary-foreground/70">30-min discovery call</p>
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Book a slot that works for you. We&apos;ll discuss your goals and how we can help bring your vision to life.
                </p>
                <Button
                  href={CALENDLY_URL}
                  variant="primary"
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-accent-foreground border-0 w-full rounded-xl mt-auto"
                >
                  Schedule Meeting
                </Button>

                <div className="pt-6 border-t border-primary-foreground/20">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-3">
                    Or reach us directly
                  </p>
                  <a
                    href="mailto:hello@akaarlabs.com"
                    className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@akaarlabs.com
                  </a>
                  <p className="text-xs text-primary-foreground/50 mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
