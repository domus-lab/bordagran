import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import embroideryImage from "@/assets/embroidery-detail.jpg";

const ServicioBordados = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bordados Personalizados
              <span className="block text-secondary mt-2">Premium Quality</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Elegancia y distinción en cada puntada. El acabado premium que perdura en el tiempo
            </p>
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Presupuesto
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={embroideryImage} 
                alt="Detalle de bordado de alta calidad" 
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                La Técnica Más Elegante
              </h2>
              <p className="text-muted-foreground mb-4">
                El bordado es la técnica de personalización textil más valorada por su acabado premium y su extraordinaria durabilidad. Cada puntada es un testimonio de calidad que aporta prestigio a tu marca.
              </p>
              <p className="text-muted-foreground mb-6">
                Con maquinaria de última generación y una amplia gama de hilos de alta calidad, creamos bordados que resisten el paso del tiempo y múltiples lavados sin perder un ápice de su elegancia original.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Acabado premium con relieve que destaca</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Resistencia superior a lavados intensivos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Ideal para logos corporativos y marcas</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Amplia variedad de colores y tipos de hilo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Por Qué Elegir Bordados?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Imagen Profesional</h3>
                  <p className="text-muted-foreground">
                    Transmite seriedad y calidad. Perfecto para imagen corporativa, uniformes de empresa y vestuario de representación.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Durabilidad Extrema</h3>
                  <p className="text-muted-foreground">
                    A diferencia de otras técnicas, el bordado no se desgasta con el uso ni se despega. Inversión a largo plazo garantizada.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Tacto Premium</h3>
                  <p className="text-muted-foreground">
                    El relieve del bordado aporta textura y calidad percibida. Un detalle que marca la diferencia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Types of Embroidery */}
          <div className="bg-muted rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Tipos de Bordado
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-3">Bordado Plano</h3>
                <p className="text-muted-foreground mb-4">
                  El más versátil y utilizado. Ideal para logos, textos y diseños de tamaño medio. Excelente para polos, camisas y sudaderas.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Bordado 3D</h3>
                <p className="text-muted-foreground mb-4">
                  Con relleno de espuma para crear un efecto de relieve pronunciado. Perfecto para gorras y prendas deportivas.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Bordado en Aplique</h3>
                <p className="text-muted-foreground mb-4">
                  Combina tela y bordado para crear efectos visuales únicos y reducir tiempo de producción en diseños grandes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Bordado Fotográfico</h3>
                <p className="text-muted-foreground mb-4">
                  Técnica avanzada que reproduce imágenes con alto nivel de detalle mediante puntadas estratégicamente colocadas.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Aplicaciones Principales
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Uniformes Corporativos</h3>
                <p className="text-muted-foreground">
                  Polos, camisas, chaquetas y chalecos con el logo de tu empresa. Imagen profesional garantizada.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Gorras y Complementos</h3>
                <p className="text-muted-foreground">
                  El bordado en gorras es un clásico atemporal. También en mochilas, bolsos y toallas.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Hostelería y Restauración</h3>
                <p className="text-muted-foreground">
                  Delantales, chaquetillas de chef, camisas de camareros. Resistente a lavados industriales.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg mb-2">Clubes y Asociaciones</h3>
                <p className="text-muted-foreground">
                  Chaquetas de equipos, polos de golf, sudaderas de clubes deportivos y asociaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dale a tu Marca el Acabado que Merece
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Solicita tu presupuesto de bordado sin compromiso. Te asesoramos sobre la mejor opción para tu proyecto
          </p>
          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light">
              <Phone className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicioBordados;
