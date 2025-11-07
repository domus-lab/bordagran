import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoDark} 
                alt="Bordagran" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Expertos en personalización textil. Calidad profesional, entregas rápidas y atención directa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios/dtf" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Impresión DTF
                </Link>
              </li>
              <li>
                <Link to="/servicios/bordados" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Bordados Personalizados
                </Link>
              </li>
              <li>
                <Link to="/servicios/sublimacion" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Sublimación
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+34655368125" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  +34 655 368 125
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@bordagran.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  info@bordagran.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Calle Jerez bajo comercial<br />18004 Granada, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Bordagran. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                Política de Privacidad
              </Link>
              <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
