import { Shield, MessageCircle, Lightbulb, Heart } from "lucide-react";
import prismaLogo from "@/assets/prisma-logo.png";

const pillars = [
  {
    icon: Shield,
    title: "Segurança Digital",
    description: "Proteção e conscientização sobre riscos online",
    color: "text-primary",
  },
  {
    icon: MessageCircle,
    title: "Convivência Saudável",
    description: "Respeito e empatia nas relações digitais",
    color: "text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Pensamento Crítico",
    description: "Análise consciente de conteúdos e informações",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Educação Emocional",
    description: "Desenvolvimento socioemocional no ambiente digital",
    color: "text-destructive",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={prismaLogo} 
              alt="Projeto PRISMA Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que é o{" "}
            <span className="bg-gradient-prisma bg-clip-text text-transparent">
              Projeto PRISMA
            </span>
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O PRISMA nasceu da necessidade de proteger nossas crianças e preparar escolas e famílias para os desafios do mundo digital.
            </p>
            <p>
              O PRISMA é uma iniciativa que une tecnologia, ética e educação para desenvolver cidadãos digitais conscientes.
            </p>
            <p>
              Por meio de atividades práticas e linguagem acessível, o programa ensina crianças, adolescentes e educadores a reconhecer riscos, exercitar empatia e usar a tecnologia de forma segura, responsável e positiva.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-prisma transition-all duration-300 hover:-translate-y-2 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-subtle mb-6 ${pillar.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
