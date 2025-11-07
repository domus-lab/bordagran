import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import dtfImage from "@/assets/dtf-process.jpg";

const ServicioDTF = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Impresión DTF
              <span className="block text-secondary mt-2">Direct To Film</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              La tecnología más avanzada para personalizar tus prendas con diseños vibrantes y duraderos
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
            <div>
              <h2 className="text-3xl font-bold mb-6">
                ¿Qué es la Impresión DTF?
              </h2>
              <p className="text-muted-foreground mb-4">
                Direct To Film (DTF) es una técnica revolucionaria que permite imprimir diseños de alta calidad directamente sobre una película especial que luego se transfiere al tejido mediante calor y presión.
              </p>
              <p className="text-muted-foreground mb-6">
                Esta tecnología ofrece una versatilidad sin precedentes, permitiendo aplicar diseños complejos con múltiples colores en prácticamente cualquier tipo de tejido, manteniendo una calidad excepcional y una durabilidad superior.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Compatible con algodón, poliéster, mezclas y tejidos técnicos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Sin límite de colores en el diseño</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Tacto suave y flexible tras el lavado</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Resistencia garantizada a más de 50 lavados</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={dtfImage} 
                alt="Proceso de impresión DTF" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de la Impresión DTF
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Versatilidad Total</h3>
                  <p className="text-muted-foreground">
                    Funciona en algodón, poliéster, nylon, lycra y cualquier mezcla. Una sola técnica para todos tus proyectos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Colores Vibrantes</h3>
                  <p className="text-muted-foreground">
                    Reproduce fielmente cualquier diseño con colores intensos y degradados suaves sin coste adicional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Máxima Durabilidad</h3>
                  <p className="text-muted-foreground">
                    Resiste el uso intensivo y múltiples lavados manteniendo la calidad del primer día.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Aplicaciones Ideales
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Merchandising y Eventos</h3>
                <p className="text-muted-foreground">
                  Camisetas promocionales, sudaderas de eventos, bolsas personalizadas para ferias y congresos.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Uniformes y Corporativo</h3>
                <p className="text-muted-foreground">
                  Ropa de trabajo con logo, uniformes de equipos, vestuario de hostelería con diseño corporativo.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Moda y Streetwear</h3>
                <p className="text-muted-foreground">
                  Colecciones de moda urbana, diseños artísticos, ediciones limitadas con detalles complejos.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Regalos Personalizados</h3>
                <p className="text-muted-foreground">
                  Prendas únicas para cumpleaños, despedidas, regalos corporativos y ocasiones especiales.
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
            Solicita tu Presupuesto Personalizado
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Cuéntanos tu proyecto y te enviaremos una propuesta sin compromiso en menos de 24 horas
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

export default ServicioDTF;
