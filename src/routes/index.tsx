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

const SITE_TITLE = "Abdelrahman Bakr Ghazy — AI & ML Engineer";
const SITE_DESCRIPTION =
  "Portfolio of Abdelrahman Bakr Ghazy — AI Engineer, Machine Learning Engineer, Data Scientist, and Software Engineer. Building AI systems, LLM-powered applications, and data-driven products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "AI Engineer, Machine Learning Engineer, Data Scientist, Software Engineer, LLM, Deep Learning, Portfolio, Abdelrahman Bakr Ghazy",
      },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Abdelrahman Bakr Ghazy" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abdelrahman Bakr Ghazy",
          jobTitle: "AI & Machine Learning Engineer",
          description: SITE_DESCRIPTION,
          knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "Deep Learning",
            "Large Language Models",
            "Data Science",
            "Software Engineering",
          ],
        }),
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
