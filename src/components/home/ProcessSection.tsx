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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cómo Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proceso simple y transparente en 4 pasos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line (hidden on mobile, shown on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -z-10" />
                  )}
                  
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-24 h-24 bg-muted rounded-2xl flex items-center justify-center shadow-sm">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-md">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
