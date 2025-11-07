import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 leading-tight">
            ¿Listo para Personalizar tus Prendas?
          </h2>
          <p className="text-xl text-primary-foreground/95 mb-12 max-w-2xl mx-auto leading-relaxed">
            Solicita tu presupuesto sin compromiso. Te respondemos en menos de 24 horas con una propuesta adaptada a tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-8 font-semibold shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Contactar Ahora
              </Button>
            </a>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="text-lg px-12 py-8 font-semibold border-2 border-white text-white hover:bg-white hover:text-primary">
                Ver Formulario
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-10 text-primary-foreground/95">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="font-medium">Presupuesto sin compromiso</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="font-medium">Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="font-medium">Asesoramiento gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
