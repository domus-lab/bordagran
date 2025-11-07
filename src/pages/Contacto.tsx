import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría la lógica de envío del formulario
    toast({
      title: "Mensaje enviado",
      description: "Te responderemos en menos de 24 horas. Gracias por tu interés.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contacta con Nosotros
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Estamos aquí para ayudarte. Cuéntanos tu proyecto y te responderemos en menos de 24 horas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Información de Contacto
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Teléfono</h3>
                        <a href="tel:+34655368125" className="text-muted-foreground hover:text-secondary transition-smooth">
                          +34 655 368 125
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a 
                          href="https://wa.me/34655368125" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-secondary transition-smooth"
                        >
                          Chatear ahora
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:info@bordagran.com" className="text-muted-foreground hover:text-secondary transition-smooth">
                          info@bordagran.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Ubicación</h3>
                        <p className="text-muted-foreground">
                          Calle Jerez bajo comercial<br />
                          18004 Granada, España
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-xl">
                  <h3 className="font-bold mb-3">Horario de Atención</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span className="font-semibold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="font-semibold">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos:</span>
                      <span className="font-semibold">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card shadow-medium rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-muted-foreground mb-8">
                  Rellena el formulario y te responderemos lo antes posible
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto: tipo de servicio que necesitas, cantidad, plazos, etc."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary-light">
                      Enviar Mensaje
                    </Button>
                    <a href="https://wa.me/34655368125" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button type="button" variant="outline" size="lg" className="w-full">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Chatear por WhatsApp
                      </Button>
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    * Campos obligatorios. Tus datos están protegidos y no serán compartidos con terceros.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
