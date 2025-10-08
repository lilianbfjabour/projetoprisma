import { Button } from "@/components/ui/button";
import { Sprout, Lightbulb, Compass, MessageCircle } from "lucide-react";

const results = [
  {
    icon: Sprout,
    title: "Redução de casos de exposição e cyberbullying",
    description: "Ambiente escolar mais seguro e acolhedor para todos",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Lightbulb,
    title: "Fortalecimento da cultura digital ética e responsável",
    description: "Formação de cidadãos digitais conscientes e preparados",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Compass,
    title: "Alinhamento à LGPD e ao ECA Digital",
    description: "Conformidade legal e proteção de dados dos alunos",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: MessageCircle,
    title: "Valorização da imagem institucional",
    description: "Escola reconhecida como referência em educação digital",
    gradient: "from-destructive/20 to-destructive/5",
  },
];

const Results = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que o PRISMA entrega
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais do que informação, o PRISMA cria transformação.
            Cada ação é pensada para gerar impacto duradouro na cultura digital da escola e na formação cidadã dos alunos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={result.title}
                className={`bg-gradient-to-br ${result.gradient} rounded-2xl p-8 border border-border hover:shadow-prisma transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-card shadow-card">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                    <p className="text-muted-foreground">{result.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-prisma rounded-3xl p-12 text-center shadow-prisma animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua escola?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se às instituições que estão construindo um futuro digital mais seguro e ético para as próximas gerações.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg hover:scale-105 transition-transform">
            Levar o PRISMA para minha escola
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
