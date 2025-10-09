import { Button } from "@/components/ui/button";
import { TrendingUp, AlertTriangle, Scale, Target } from "lucide-react";

const statistics = [
  {
    icon: TrendingUp,
    stat: "+70%",
    description: "das crianças e adolescentes entre 9 e 17 anos acessam a Internet todos os dias",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: AlertTriangle,
    stat: "4 em 10",
    description: "já presenciaram situações de cyberbullying",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Scale,
    stat: "Lei 13.663/2018",
    description: "exige que as escolas promovam ações de conscientização sobre o uso ético da Internet",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Target,
    stat: "PRISMA",
    description: "ajuda sua instituição a cumprir essas exigências legais, promovendo um ambiente digital mais seguro",
    color: "bg-accent/10 text-accent",
  },
];

const WhyPrisma = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O desafio é digital.{" "}
            <span className="bg-gradient-prisma bg-clip-text text-transparent">
              A solução é educacional.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hoje, a escola é o principal espaço de formação para o uso ético e seguro da tecnologia.
            Crianças e adolescentes estão conectados desde muito cedo — mas nem sempre estão preparados para lidar com os riscos do ambiente on-line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {statistics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stat}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-prisma transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 p-4 rounded-xl ${item.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-3">{item.stat}</div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-prisma hover:opacity-90 transition-opacity shadow-prisma"
            onClick={() => window.open('https://wa.me/5511914527875?text=Gostaria%20de%20agendar%20um%20diagnóstico%20digital%20para%20minha%20escola', '_blank')}
          >
            Agendar diagnóstico digital
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyPrisma;
