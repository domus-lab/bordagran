import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      company: "Club Deportivo Madrid",
      text: "Necesitábamos uniformes personalizados para todo el equipo y el resultado fue espectacular. La calidad del bordado es increíble y el plazo de entrega nos sorprendió gratamente.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      company: "Empresa Tech Solutions",
      text: "Para nuestra imagen corporativa buscábamos algo profesional. El servicio de DTF superó nuestras expectativas. Muy recomendable para eventos y merchandising.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      company: "Eventos Premium",
      text: "Trabajo con ellos desde hace años para todos mis eventos. Siempre cumplen los plazos, la calidad es excelente y el trato es muy cercano. Son mi primera opción.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La confianza de empresas y particulares que repiten con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift shadow-md bg-white border border-border">
              <CardContent className="p-10">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
