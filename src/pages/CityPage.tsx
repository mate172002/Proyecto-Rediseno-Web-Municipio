import { MapPin, Music, Landmark, Camera } from 'lucide-react';

export function CityPage() {
  const places = [
    {
      name: 'Puerta de la Ciudad',
      image: 'https://picsum.photos/seed/loja4/800/600',
      desc: 'Símbolo arquitectónico y puerta de entrada al centro histórico.'
    },
    {
      name: 'Parque Nacional Podocarpus',
      image: 'https://picsum.photos/seed/loja5/800/600',
      desc: 'Reserva megadiversa, jardín botánico de América.'
    },
    {
      name: 'Valle de Vilcabamba',
      image: 'https://picsum.photos/seed/loja6/800/600',
      desc: 'Conocido mundialmente como el valle de la longevidad.'
    },
    {
      name: 'Santuario de El Cisne',
      image: 'https://picsum.photos/seed/loja7/800/600',
      desc: 'Hogar de la "Churonita", centro de la mayor romería del país.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/loja8/800/600")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">Descubre Loja</h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">Capital Musical y Cultural del Ecuador</p>
        </div>
      </section>

      {/* Historia y Cultura */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[var(--color-brand-accent)] pb-2 inline-block">Nuestra Historia</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fundada en 1548, la Inmaculada Concepción de Loja destaca por su rica arquitectura colonial, su aporte invaluable a las artes y las letras ecuatorianas, y por ser la primera ciudad del país en contar con energía eléctrica generada hidráulicamente.
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                <Music className="text-[var(--color-brand-secondary)] h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Capital Musical</h4>
                  <p className="text-sm text-gray-600">Cuna de los más grandes músicos y compositores del Ecuador.</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                <Landmark className="text-[var(--color-brand-secondary)] h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Patrimonio Cultural</h4>
                  <p className="text-sm text-gray-600">Centro histórico preservado con hermosa arquitectura tradicional.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/loja9/800/600" alt="Loja Histórica" className="rounded-2xl shadow-lg h-64 object-cover w-full" />
            <img src="https://picsum.photos/seed/loja10/800/600" alt="Parque Loja" className="rounded-2xl shadow-lg h-64 object-cover w-full mt-8" />
          </div>
        </div>
      </section>

      {/* Lugares Representativos */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-brand-secondary)] font-bold tracking-wider uppercase text-sm mb-2 block">Turismo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Lugares Inolvidables</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.map((place, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-[var(--color-brand-secondary)]">
                    <Camera className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virgen del Cisne */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[var(--color-brand-secondary)] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">La Virgen del Cisne</h2>
            <p className="text-blue-50 text-lg mb-6 leading-relaxed">
              Cada mes de agosto, Loja se llena de fe al recibir a la Virgen del Cisne en una de las romerías marianas más grandes de América. Más de 3 millones de devotos acompañan a la "Churonita" en su recorrido de 72 kilómetros.
            </p>
            <div className="flex items-center gap-2 text-[var(--color-brand-accent)] font-semibold">
              <MapPin className="h-5 w-5" /> De El Cisne a Loja (20 de Agosto)
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img 
              src="https://picsum.photos/seed/loja11/800/600" 
              alt="Romería Virgen del Cisne" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
