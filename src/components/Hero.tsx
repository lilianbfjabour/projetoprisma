import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero pt-20">
      {/* Prismatic background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-prisma text-primary-foreground rounded-full text-sm font-semibold shadow-prisma">
                Educação Digital Inovadora
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Construindo uma nova geração{" "}
              <span className="bg-gradient-prisma bg-clip-text text-transparent">
                digital
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
              O Projeto PRISMA conecta escolas, professores e famílias em uma jornada de educação digital que une empatia, segurança e responsabilidade on-line.
            </p>
            
            <div className="p-6 bg-card rounded-2xl shadow-card border border-border">
              <p className="text-lg font-medium">
                <span className="text-primary font-semibold">PRISMA</span> é o primeiro programa educacional brasileiro com metodologia estruturada para ensinar, desde os 6 anos de idade, o uso ético, consciente e seguro da Internet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-prisma hover:opacity-90 transition-opacity shadow-prisma"
                onClick={() => window.open('https://wa.me/5511914527875?text=Quero%20levar%20o%20Projeto%20PRISMA%20para%20minha%20escola.%20Podemos%20marcar%20uma%20apresentacao%3F', '_blank')}
              >
                Levar o PRISMA para minha escola
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2"
                onClick={() => window.open('https://www.instagram.com/prismaeducacaodigital', '_blank')}
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-prisma opacity-20 rounded-3xl blur-2xl" />
            <img
              src={heroImage}
              alt="Crianças e professores usando tecnologia em ambiente educacional seguro"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
