import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-subtle" id="fale-conosco">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Entre em contato conosco para levar o PRISMA para sua escola ou esclarecer dúvidas sobre o programa.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-prisma transition-all duration-300">
              <div className="inline-flex p-4 rounded-xl bg-gradient-subtle mb-6 text-primary">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-mail</h3>
              <a 
                href="mailto:advlilianjabour@gmail.com"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                advlilianjabour@gmail.com
              </a>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-prisma transition-all duration-300">
              <div className="inline-flex p-4 rounded-xl bg-gradient-subtle mb-6 text-secondary">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/5511914527875?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20Projeto%20PRISMA', '_blank')}
                className="text-lg"
              >
                (11) 91452-7875
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
