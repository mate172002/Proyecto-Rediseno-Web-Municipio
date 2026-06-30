import { useState } from 'react';
import type { FormEvent } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  size?: 'normal' | 'large';
  className?: string;
}

export function SearchBar({ placeholder = 'Buscar...', size = 'normal', className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, you would pass this to a search endpoint
      // For this prototype, we'll navigate to services with a search param
      navigate(`/servicios?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative w-full max-w-3xl mx-auto ${className}`}>
      <div className="relative flex items-center w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 focus-within:ring-2 focus-within:ring-[var(--color-brand-secondary)] focus-within:border-transparent transition-all">
        <div className="pl-6 flex items-center pointer-events-none">
          <Search className={`${size === 'large' ? 'h-6 w-6' : 'h-5 w-5'} text-gray-400`} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`block w-full pl-4 pr-3 py-4 text-gray-900 placeholder-gray-400 bg-transparent border-0 focus:ring-0 ${
            size === 'large' ? 'text-lg sm:text-xl py-5' : 'text-base py-3'
          }`}
          placeholder={placeholder}
        />
        <div className="pr-2 sm:pr-3">
          <button
            type="submit"
            className={`bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white font-semibold rounded-xl transition-colors ${
              size === 'large' ? 'px-6 sm:px-8 py-3 text-lg' : 'px-4 sm:px-6 py-2 text-sm'
            }`}
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}
