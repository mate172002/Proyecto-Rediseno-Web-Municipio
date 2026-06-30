import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { NewsArticle } from '../types';

interface NewsCardProps {
  news: NewsArticle;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {news.imageUrl ? (
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sin imagen
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-[var(--color-brand-primary)] px-3 py-1.5 rounded-full shadow-sm">
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <Clock className="h-3.5 w-3.5" />
          <span>{news.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--color-brand-secondary)] transition-colors">
          {news.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {news.excerpt}
        </p>
        
        <Link 
          to={`/noticias/${news.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-secondary)] group-hover:text-[var(--color-brand-primary)] mt-auto"
        >
          Leer noticia <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
