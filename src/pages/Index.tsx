import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyPrisma from "@/components/WhyPrisma";
import Methodology from "@/components/Methodology";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WhyPrisma />
      <Methodology />
      <Results />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
