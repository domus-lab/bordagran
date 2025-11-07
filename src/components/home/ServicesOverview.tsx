import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Scissors, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Impresión DTF",
      description: "Tecnología de última generación para diseños vibrantes y duraderos en cualquier tejido.",
      benefits: ["Colores intensos", "Alta durabilidad", "Sin límite de colores"],
      link: "/servicios/dtf",
    },
    {
      icon: Scissors,
      title: "Bordados Personalizados",
      description: "Elegancia y distinción con bordados de alta calidad que perduran en el tiempo.",
      benefits: ["Acabado premium", "Resistente al lavado", "Logo corporativo ideal"],
      link: "/servicios/bordados",
    },
    {
      icon: Palette,
      title: "Sublimación",
      description: "Perfecta para diseños complejos y fotográficos en prendas de poliéster.",
      benefits: ["Fotografías HD", "Colores brillantes", "Sin relieve"],
      link: "/servicios/sublimacion",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres técnicas profesionales para personalizar tus prendas con la máxima calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift bg-card border-none shadow-medium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Más información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
