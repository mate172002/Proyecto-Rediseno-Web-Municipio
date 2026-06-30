import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle, BarChart3, Users, Building } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { ServiceCard } from '../components/ServiceCard';
import { NewsCard } from '../components/NewsCard';
import { services } from '../data/services';
import { newsArticles } from '../data/news';

export function HomePage() {
  const topServices = services.slice(0, 4);
  const recentNews = newsArticles.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-[var(--color-brand-primary)] overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/loja13/800/600")' }}
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold mb-6">
            Bienvenido al portal ciudadano
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Loja más cerca de ti
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Descubre la nueva experiencia digital. Encuentra servicios, realiza trámites y mantente informado sobre tu ciudad, todo en un solo lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              to="/servicios"
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-brand-accent)] hover:bg-yellow-400 text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Consultar Trámites
            </Link>
            <Link 
              to="/ciudad"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl transition-all border border-white/30"
            >
              Conocer la Ciudad
            </Link>
          </div>
          
          <div className="w-full max-w-3xl mx-auto">
            <SearchBar placeholder="¿Qué trámite o servicio necesitas?" size="large" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-[var(--color-brand-secondary)]" />
              </div>
              <span className="text-3xl font-bold text-gray-900 mb-1">+200k</span>
              <span className="text-sm text-gray-500 font-medium">Ciudadanos Atendidos</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <FileText className="h-8 w-8 text-[var(--color-brand-secondary)]" />
              </div>
              <span className="text-3xl font-bold text-gray-900 mb-1">150+</span>
              <span className="text-sm text-gray-500 font-medium">Trámites en Línea</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <Building className="h-8 w-8 text-[var(--color-brand-secondary)]" />
              </div>
              <span className="text-3xl font-bold text-gray-900 mb-1">85</span>
              <span className="text-sm text-gray-500 font-medium">Obras en Ejecución</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <BarChart3 className="h-8 w-8 text-[var(--color-brand-secondary)]" />
              </div>
              <span className="text-3xl font-bold text-gray-900 mb-1">98%</span>
              <span className="text-sm text-gray-500 font-medium">Eficiencia Digital</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios más utilizados</h2>
              <p className="text-gray-600 max-w-2xl">Accede rápidamente a los trámites y servicios municipales más solicitados por los ciudadanos de Loja.</p>
            </div>
            <Link 
              to="/servicios"
              className="inline-flex items-center gap-2 text-[var(--color-brand-secondary)] font-semibold hover:text-[var(--color-brand-primary)] transition-colors"
            >
              Ver todos los servicios <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Section */}
      <section className="py-24 bg-[var(--color-brand-primary)] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-brand-secondary)] rounded-l-full opacity-20 -mr-64 transform -rotate-12"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-brand-accent)] font-bold tracking-wider uppercase text-sm mb-4 block">
                Transformación Digital
              </span>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                Un Municipio moderno, transparente y a tu alcance
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Estamos trabajando para digitalizar el 100% de nuestros procesos. Menos filas, menos papel y más tiempo para ti. Nuestro compromiso es brindarte un servicio eficiente y de calidad.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Firma electrónica habilitada en procesos',
                  'Pagos seguros mediante tarjeta o transferencia',
                  'Seguimiento en tiempo real de tus trámites',
                  'Atención ciudadana multicanal'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-blue-50">
                    <CheckCircle className="h-6 w-6 text-[var(--color-brand-accent)] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/municipio"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-brand-primary)] px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors"
              >
                Conoce más sobre la iniciativa <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/loja14/800/600" 
                alt="Transformación Digital" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl">100% Seguro</p>
                  <p className="text-gray-500 text-sm">Plataforma encriptada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimas Noticias</h2>
              <p className="text-gray-600 max-w-2xl">Mantente informado sobre las obras, proyectos y eventos que se desarrollan en el cantón Loja.</p>
            </div>
            <Link 
              to="/noticias"
              className="inline-flex items-center gap-2 text-[var(--color-brand-secondary)] font-semibold hover:text-[var(--color-brand-primary)] transition-colors"
            >
              Ver todas las noticias <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
