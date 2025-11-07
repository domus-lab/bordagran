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
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tres técnicas profesionales para personalizar tus prendas con la máxima calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift bg-white shadow-md animate-fade-in-up border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm font-medium">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link}>
                    <Button variant="outline" className="w-full font-semibold">
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
