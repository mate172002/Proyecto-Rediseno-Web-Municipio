import { useState } from 'react';
import { Search } from 'lucide-react';
import { NewsCard } from '../components/NewsCard';
import { newsArticles } from '../data/news';

export function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...Array.from(new Set(newsArticles.map(n => n.category)))];

  const filteredNews = newsArticles.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Noticias y Actualidad</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Mantente informado sobre las últimas obras, proyectos y eventos del cantón Loja.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[var(--color-brand-secondary)] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-72 flex-shrink-0">
          <input
            type="text"
            placeholder="Buscar noticias..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-secondary)] focus:border-transparent outline-none transition-all shadow-sm"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-xl text-gray-600">No se encontraron noticias con esos criterios de búsqueda.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('Todas'); }}
            className="mt-4 text-[var(--color-brand-secondary)] font-semibold hover:underline"
          >
            Ver todas las noticias
          </button>
        </div>
      )}
    </div>
  );
}
