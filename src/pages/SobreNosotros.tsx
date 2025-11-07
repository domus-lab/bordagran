import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Award, Users, Clock, Heart } from "lucide-react";
import teamImage from "@/assets/team-photo.jpg";

const SobreNosotros = () => {
  const values = [
    {
      icon: Award,
      title: "Calidad Sin Compromiso",
      description: "Utilizamos únicamente materiales premium y tecnología de última generación para garantizar resultados excepcionales.",
    },
    {
      icon: Clock,
      title: "Cumplimiento de Plazos",
      description: "Entendemos la importancia de tus fechas. Ofrecemos plazos realistas y los cumplimos religiosamente.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada cliente es único. Te acompañamos desde el diseño hasta la entrega, resolviendo todas tus dudas.",
    },
    {
      icon: Heart,
      title: "Pasión por lo que Hacemos",
      description: "Nos apasiona ver cómo tus ideas cobran vida. Cada proyecto es especial para nosotros.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Más de 10 años transformando ideas en prendas personalizadas de calidad profesional
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Nuestra Historia
              </h2>
              <p className="text-muted-foreground mb-4">
                Comenzamos en 2014 con una máquina de bordar y mucha ilusión. Hoy somos referentes en personalización textil en España, atendiendo desde pequeños pedidos personalizados hasta grandes producciones corporativas.
              </p>
              <p className="text-muted-foreground mb-4">
                Lo que nos diferencia no es solo nuestra tecnología de última generación o nuestros años de experiencia. Es nuestra filosofía: tratar cada proyecto como si fuera único, porque para nosotros lo es.
              </p>
              <p className="text-muted-foreground mb-6">
                Hemos crecido gracias a la confianza de cientos de clientes que vuelven a elegirnos proyecto tras proyecto. Esa es nuestra mejor carta de presentación.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">+10</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">+500</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">+10K</div>
                  <div className="text-sm text-muted-foreground">Proyectos Realizados</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={teamImage} 
                alt="Equipo de Textil Premium" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Nuestros Valores
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían cada proyecto que realizamos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technology */}
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Tecnología de Vanguardia
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Invertimos constantemente en la mejor maquinaria y formación para ofrecer resultados que superan expectativas
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Impresión DTF</h3>
                  <p className="text-sm text-muted-foreground">
                    Equipos profesionales de última generación con resolución 4K
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Bordadoras Industriales</h3>
                  <p className="text-sm text-muted-foreground">
                    Máquinas multicabezal de alta velocidad y precisión
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Sublimación HD</h3>
                  <p className="text-sm text-muted-foreground">
                    Planchas profesionales y tintas de máxima calidad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Hablamos de tu Proyecto?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Nos encantaría conocer tu idea y ayudarte a hacerla realidad
          </p>
          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light">
              <Phone className="mr-2 h-5 w-5" />
              Contactar Ahora
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNosotros;
