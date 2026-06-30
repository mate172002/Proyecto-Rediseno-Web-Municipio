import { Link } from 'react-router-dom';
import { Landmark, MapPin, Phone, Mail, MessageCircle, Share2, Video, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-primary)] text-white pt-16 pb-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Landmark className="h-6 w-6 text-[var(--color-brand-primary)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">Municipio</span>
                <span className="text-sm font-medium text-blue-200 leading-none mt-1">de Loja</span>
              </div>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              Trabajamos por una ciudad más ordenada, segura y próspera. Juntos construimos el futuro de Loja.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Video className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/municipio" className="text-blue-100 hover:text-white transition-colors text-sm">El Municipio</Link></li>
              <li><Link to="/servicios" className="text-blue-100 hover:text-white transition-colors text-sm">Servicios Ciudadanos</Link></li>
              <li><Link to="/transparencia" className="text-blue-100 hover:text-white transition-colors text-sm">Transparencia (LOTAIP)</Link></li>
              <li><Link to="/noticias" className="text-blue-100 hover:text-white transition-colors text-sm">Sala de Prensa</Link></li>
              <li><Link to="/contacto" className="text-blue-100 hover:text-white transition-colors text-sm">Contáctanos</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Trámites Frecuentes</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Pago de Impuestos</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Patente Municipal</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Permiso de Construcción</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Línea de Fábrica</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Consulta de Multas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span>Bolívar y José Antonio Eguiguren, Esquina.<br/>Loja - Ecuador</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span>(07) 257-0407</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span>info@loja.gob.ec</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row items-center justify-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} Municipio de Loja. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
