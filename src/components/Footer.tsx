import { Instagram } from "lucide-react";
import prismaLogo from "@/assets/prisma-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={prismaLogo} 
                alt="Projeto PRISMA" 
                className="h-12 w-auto"
              />
              <h3 className="text-2xl font-bold bg-gradient-prisma bg-clip-text text-transparent">
                Projeto PRISMA
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Educação Digital e Cidadania On-line
            </p>
            <p className="text-sm text-muted-foreground">
              Uma iniciativa dedicada a formar gerações mais conscientes, seguras e empáticas no mundo digital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre o PRISMA
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-muted-foreground hover:text-primary transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="text-muted-foreground hover:text-primary transition-colors">
                  Diagnóstico Digital
                </a>
              </li>
              <li>
                <a href="#fale-conosco" className="text-muted-foreground hover:text-primary transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Siga-nos</h4>
            <a
              href="https://www.instagram.com/prismaeducacaodigital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-3 bg-gradient-prisma text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 shadow-card"
              aria-label="Instagram do Projeto PRISMA"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Projeto PRISMA | Todos os direitos reservados.</p>
          <a href="#privacidade" className="hover:text-primary transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
