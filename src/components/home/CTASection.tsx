import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Listo para Personalizar tus Prendas?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Solicita tu presupuesto sin compromiso. Te respondemos en menos de 24 horas con una propuesta adaptada a tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Contactar Ahora
              </Button>
            </a>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                Ver Formulario
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-primary-foreground/90">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
              <span>Presupuesto sin compromiso</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
              <span>Asesoramiento gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
