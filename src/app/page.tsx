import {
  Navbar,
  Hero,
  Services,
  About,
  Process,
  Testimonials,
  CTA,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
