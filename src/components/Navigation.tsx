import prismaLogo from "@/assets/prisma-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={prismaLogo} 
              alt="Projeto PRISMA" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-prisma bg-clip-text text-transparent hidden sm:inline">
              Projeto PRISMA
            </span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://wa.me/5511914527875"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
            <a
              href="https://www.instagram.com/prismaeducacaodigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
