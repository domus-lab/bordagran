import { MessageSquare, Palette, Zap, Package } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Contacta con Nosotros",
      description: "Cuéntanos tu idea por WhatsApp o email. Te respondemos en minutos.",
    },
    {
      icon: Palette,
      title: "Diseño y Presupuesto",
      description: "Preparamos una propuesta adaptada a tus necesidades sin compromiso.",
    },
    {
      icon: Zap,
      title: "Producción Express",
      description: "Iniciamos la personalización con tecnología de última generación.",
    },
    {
      icon: Package,
      title: "Recibe tu Pedido",
      description: "Envío rápido y seguro. En 24-48h lo tienes en tus manos.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y transparente en 4 pasos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line (hidden on mobile, shown on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/20 -z-10" />
                  )}
                  
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-secondary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
