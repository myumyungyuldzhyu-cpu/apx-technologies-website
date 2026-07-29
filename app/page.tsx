import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGlow from "@/components/MouseGlow";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white">
      <LoadingScreen />
      <ScrollProgress />
      <MouseGlow />
      <ParallaxBackground />

      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}