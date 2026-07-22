import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/portfolio/Nav";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { Experience } from "../components/portfolio/Experience";
import { Projects } from "../components/portfolio/Projects";
import { Achievements } from "../components/portfolio/Achievements";
import { Education } from "../components/portfolio/Education";
import { Gallery } from "../components/portfolio/Gallery";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdelrahman Bakr Ghazy — AI & ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Abdelrahman Bakr Ghazy — AI Engineer, Machine Learning Engineer, Data Scientist, and Software Engineer. Building AI systems, LLM-powered applications, and data-driven products.",
      },
      { property: "og:title", content: "Abdelrahman Bakr Ghazy — AI & ML Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Abdelrahman Bakr Ghazy — AI Engineer, ML Engineer, Data Scientist, and Software Engineer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-foreground">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(220,20,60,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 30%, rgba(220,20,60,0.08), transparent 70%), #050505",
        }}
      />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
