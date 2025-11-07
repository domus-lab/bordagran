import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workshop-v2.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Background Image with Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Decorative gradient circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
              Personalización que inspira.
            </span>
            <span className="block text-foreground mt-3">
              Calidad que permanece.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Expertos en DTF, bordados y sublimación. Transformamos tu idea en realidad con acabados profesionales y entregas rápidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="accent" className="text-lg px-10 py-7 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
            </a>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-3">+500</div>
              <div className="text-foreground/80 font-medium">Clientes Satisfechos</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-3">24-48h</div>
              <div className="text-foreground/80 font-medium">Entrega Express</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-foreground/80 font-medium">Garantía de Calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
