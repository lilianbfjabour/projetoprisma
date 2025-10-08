import { Button } from "@/components/ui/button";
import { Search, GraduationCap, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Digital Escolar",
    description: "Mapeamento das práticas, percepções e desafios digitais da comunidade escolar.",
    color: "from-primary to-primary/70",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Formação de Educadores e Famílias",
    description: "Palestras e oficinas sobre cidadania digital, ética, segurança e prevenção ao cyberbullying.",
    color: "from-secondary to-secondary/70",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementação e Acompanhamento",
    description: "Ações pedagógicas contínuas com recursos práticos, materiais educativos e suporte técnico-jurídico.",
    color: "from-accent to-accent/70",
  },
];

const Methodology = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="metodologia">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Metodologia PRISMA:{" "}
            <span className="bg-gradient-prisma bg-clip-text text-transparent">
              educar para transformar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A metodologia PRISMA foi desenvolvida para integrar teoria, prática e convivência digital de forma acessível e participativa.
            Cada escola recebe um plano adaptado à sua realidade e às faixas etárias dos alunos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-prisma transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} text-white`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Connecting line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="text-lg px-8 py-6 bg-gradient-prisma hover:opacity-90 transition-opacity shadow-prisma">
            Quero aplicar o PRISMA na minha escola
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
