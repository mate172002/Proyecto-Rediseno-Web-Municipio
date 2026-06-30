import { Target, Eye, Heart, Building2, ChevronRight } from 'lucide-react';
import { authorities } from '../data/municipality';

export function MunicipalityPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section className="bg-[var(--color-brand-primary)] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/loja15/800/600')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">El Municipio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trabajamos día a día con transparencia, eficiencia y compromiso para construir el futuro que los lojanos merecen.
          </p>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-[var(--color-brand-secondary)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Administrar la ciudad de forma descentralizada y participativa, brindando servicios públicos de calidad, promoviendo el desarrollo cantonal sustentable y equitativo.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-[var(--color-brand-secondary)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser el cantón pionero en ordenamiento territorial, transformación digital y cultura, siendo un referente de bienestar social y conservación ambiental en el país.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-[var(--color-brand-secondary)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Transparencia y honestidad</li>
              <li>Vocación de servicio</li>
              <li>Inclusión y equidad</li>
              <li>Responsabilidad ambiental</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Autoridades */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Nuestras Autoridades</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Conoce a quienes lideran la administración municipal de Loja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {authorities.map(authority => (
              <div key={authority.id} className="bg-white rounded-2xl overflow-hidden shadow-md group">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={authority.imageUrl} 
                    alt={authority.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <p className="text-[var(--color-brand-accent)] font-bold text-sm tracking-widest uppercase mb-1">{authority.position}</p>
                    <h3 className="text-2xl font-bold">{authority.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">{authority.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estructura Institucional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[var(--color-brand-primary)] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 opacity-10">
            <Building2 className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Estructura Organizacional</h2>
            <p className="text-blue-100 text-lg mb-8">
              Conoce cómo está conformado el Gobierno Autónomo Descentralizado Municipal del cantón Loja, sus direcciones, coordinaciones y empresas públicas adscritas.
            </p>
            <button className="bg-white text-[var(--color-brand-primary)] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              Descargar Organigrama <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
