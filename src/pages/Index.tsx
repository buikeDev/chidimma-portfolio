import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Brands from "@/components/Brands";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Brands />
      </main>
    </div>
  );
};

export default Index;
