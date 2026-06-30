import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { services, categories } from '../data/services';

export function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Actualizar la búsqueda al enviar
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSearchParams({});
    setSelectedCategory('Todos');
  };

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(queryParam.toLowerCase()) || 
                            service.description.toLowerCase().includes(queryParam.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [queryParam, selectedCategory]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Catálogo de Servicios</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Encuentra y accede a todos los servicios y trámites municipales disponibles para la ciudadanía.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5 text-[var(--color-brand-secondary)]" />
              Filtros
            </h3>
            
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar servicio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-secondary)] focus:border-transparent outline-none transition-all text-sm"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
              <button type="submit" className="hidden">Buscar</button>
            </form>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Categorías</h4>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blue-50 text-[var(--color-brand-secondary)] font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {(queryParam || selectedCategory !== 'Todos') && (
              <button
                onClick={clearFilters}
                className="mt-6 w-full flex items-center justify-center gap-2 text-sm text-red-600 font-medium hover:bg-red-50 py-2.5 rounded-lg transition-colors border border-red-100"
              >
                <X className="h-4 w-4" /> Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="lg:col-span-3">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="bg-gray-50 p-6 rounded-full mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                No hay servicios que coincidan con los filtros seleccionados. Intenta cambiar la categoría o los términos de búsqueda.
              </p>
              <button
                onClick={clearFilters}
                className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                Mostrar todos los servicios
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
