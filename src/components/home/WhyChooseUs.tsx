import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Calidad Garantizada",
      description: "Materiales premium y acabados profesionales en cada pedido.",
    },
    {
      icon: Clock,
      title: "Entregas Rápidas",
      description: "Plazos de 24-48h para pedidos urgentes sin comprometer la calidad.",
    },
    {
      icon: Shield,
      title: "Máxima Durabilidad",
      description: "Técnicas probadas que resisten lavados y el paso del tiempo.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Te asesoramos en cada paso, desde el diseño hasta la entrega.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Años de experiencia y miles de clientes satisfechos nos avalan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
