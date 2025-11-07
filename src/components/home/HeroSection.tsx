import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Personalización Textil de
            <span className="block text-secondary mt-2">Máxima Calidad</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Expertos en DTF, bordados y sublimación. Transformamos tu idea en realidad con acabados profesionales y entregas rápidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
            </a>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary mb-2">+500</div>
              <div className="text-white/90 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary mb-2">24-48h</div>
              <div className="text-white/90 text-sm">Entrega Express</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-white/90 text-sm">Garantía de Calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
