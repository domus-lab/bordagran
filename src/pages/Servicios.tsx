import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Scissors, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Servicios = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Impresión DTF",
      subtitle: "Direct To Film",
      description: "La tecnología más avanzada en personalización textil. Impresión DTF permite reproducir cualquier diseño con colores vibrantes y detalles precisos en todo tipo de tejidos.",
      features: [
        "Sin límite de colores",
        "Tacto suave y flexible",
        "Apta para algodón, poliéster y mezclas",
        "Resistente a múltiples lavados",
        "Ideal para diseños complejos",
        "Excelente relación calidad-precio",
      ],
      ideal: "Perfecta para camisetas, sudaderas, bolsas y merchandising de alta calidad.",
      link: "/servicios/dtf",
    },
    {
      icon: Scissors,
      title: "Bordados Personalizados",
      subtitle: "Premium Quality",
      description: "Elegancia y distinción en cada puntada. Nuestros bordados aportan un acabado premium y profesional que perdura en el tiempo.",
      features: [
        "Acabado de lujo y profesional",
        "Máxima resistencia al lavado",
        "Relieve que destaca",
        "Ideal para logos corporativos",
        "Múltiples tipos de puntada",
        "Gran variedad de hilos",
      ],
      ideal: "Recomendado para uniformes corporativos, polos, gorras y prendas de gama alta.",
      link: "/servicios/bordados",
    },
    {
      icon: Palette,
      title: "Sublimación",
      subtitle: "Full Color",
      description: "Tecnología de impresión que integra la tinta en la fibra del tejido, logrando diseños fotográficos de colores brillantes y saturados.",
      features: [
        "Impresión fotográfica HD",
        "Colores ultra brillantes",
        "Sin relieve, totalmente integrada",
        "No se agrieta ni despega",
        "Ideal para diseños a todo color",
        "Perfecta para ropa deportiva",
      ],
      ideal: "Especialmente indicada para prendas de poliéster, ropa deportiva y diseños complejos.",
      link: "/servicios/sublimacion",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios de Personalización
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Tres tecnologías profesionales para dar vida a tus diseños con la máxima calidad
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-lift shadow-medium border-none"
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
                            <Icon className="w-7 h-7 text-secondary" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold">{service.title}</h2>
                            <div className="text-sm text-secondary font-semibold">{service.subtitle}</div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h3 className="font-semibold mb-3">Características:</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-muted p-4 rounded-lg mb-6">
                          <p className="text-sm">
                            <span className="font-semibold text-primary">Ideal para:</span> {service.ideal}
                          </p>
                        </div>

                        <Link to={service.link}>
                          <Button size="lg" className="bg-secondary hover:bg-secondary-light">
                            Ver más detalles
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                      </div>

                      {/* Image Placeholder */}
                      <div className={`h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        {/* Imagen se puede agregar aquí */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿No sabes cuál elegir?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y te asesoramos sin compromiso sobre la mejor técnica para tu proyecto
          </p>
          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light">
              Asesoramiento Gratuito
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
