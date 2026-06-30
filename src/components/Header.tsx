import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Search, Landmark } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Municipio', path: '/municipio' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Ciudad', path: '/ciudad' },
  { name: 'Transparencia', path: '/transparencia' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Contacto', path: '/contacto' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="bg-[var(--color-brand-primary)] p-2 rounded-lg group-hover:bg-[var(--color-brand-secondary)] transition-colors">
              <Landmark className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--color-brand-primary)] leading-none">Municipio</span>
              <span className="text-sm font-medium text-gray-500 leading-none mt-1">de Loja</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-blue-50 text-[var(--color-brand-secondary)]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--color-brand-primary)]'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-[var(--color-brand-primary)] transition-colors rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/servicios"
              className="bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Trámites en línea
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-[var(--color-brand-primary)] hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-3 rounded-md text-base font-medium',
                    isActive
                      ? 'bg-blue-50 text-[var(--color-brand-secondary)]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--color-brand-primary)]'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                to="/servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[var(--color-brand-secondary)] text-white px-4 py-3 rounded-lg font-semibold"
              >
                Trámites en línea
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
