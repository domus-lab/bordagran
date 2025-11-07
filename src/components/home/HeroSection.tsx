import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Decorative subtle circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.15] text-foreground">
            Personalización que inspira.
            <span className="block text-primary mt-4">
              Calidad que permanece.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Expertos en DTF, bordados y sublimación. Transformamos tu idea en realidad con acabados profesionales y entregas rápidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://wa.me/34655368125" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="default" className="text-lg px-12 py-8 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
            </a>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="text-lg px-12 py-8 font-semibold border-2">
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="text-5xl font-bold text-primary mb-4">+500</div>
              <div className="text-foreground font-semibold text-lg">Clientes Satisfechos</div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="text-5xl font-bold text-secondary mb-4">24-48h</div>
              <div className="text-foreground font-semibold text-lg">Entrega Express</div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="text-5xl font-bold text-accent mb-4">100%</div>
              <div className="text-foreground font-semibold text-lg">Garantía de Calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
