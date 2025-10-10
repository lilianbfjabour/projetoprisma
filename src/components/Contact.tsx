import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, e-mail e mensagem.",
        variant: "destructive"
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Criar o corpo do email formatado
    const emailSubject = "Contato - Projeto PRISMA";
    const emailBody = `Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}

Mensagem:
${formData.message}`;
    
    // Abrir cliente de email
    window.location.href = `mailto:advlilianjabour@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para seu cliente de e-mail."
    });

    // Limpar formulário após pequeno delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="fale-conosco" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Fale{" "}
            <span className="bg-gradient-prisma bg-clip-text text-transparent">
              Conosco
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Estamos prontos para levar o Projeto PRISMA para sua escola.
            Entre em contato e vamos juntos construir um ambiente digital mais seguro!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  maxLength={100}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  maxLength={20}
                />
              </div>
              
              <div>
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar sua escola?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-prisma hover:opacity-90 transition-opacity shadow-prisma"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>

          {/* Botões de contato direto */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border hover:shadow-prisma transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                  <p className="text-muted-foreground">Fale conosco agora</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-prisma hover:opacity-90 transition-opacity shadow-prisma"
                onClick={() => window.open('https://wa.me/5511914527875?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Projeto%20PRISMA.', '_blank')}
              >
                Abrir WhatsApp
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border hover:shadow-prisma transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">E-mail</h3>
                  <p className="text-muted-foreground">Envie diretamente</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-prisma hover:opacity-90 transition-opacity shadow-prisma"
                onClick={() => window.location.href = 'mailto:advlilianjabour@gmail.com'}
              >
                Abrir e-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
