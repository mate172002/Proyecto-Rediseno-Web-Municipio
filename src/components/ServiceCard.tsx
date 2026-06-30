import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Store, Ruler, Trash2, Droplet, Calendar, Shield, GraduationCap, FileText } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Map string icon names to Lucide components
  const IconComponent = () => {
    switch (service.iconName) {
      case 'credit-card': return <CreditCard className="h-6 w-6" />;
      case 'store': return <Store className="h-6 w-6" />;
      case 'ruler': return <Ruler className="h-6 w-6" />;
      case 'trash-2': return <Trash2 className="h-6 w-6" />;
      case 'droplet': return <Droplet className="h-6 w-6" />;
      case 'calendar': return <Calendar className="h-6 w-6" />;
      case 'shield': return <Shield className="h-6 w-6" />;
      case 'graduation-cap': return <GraduationCap className="h-6 w-6" />;
      default: return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group flex flex-col h-full">
      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-[var(--color-brand-secondary)] mb-4 group-hover:bg-[var(--color-brand-secondary)] group-hover:text-white transition-colors">
        <IconComponent />
      </div>
      
      <div className="mb-2">
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">
          {service.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-secondary)] transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-6 flex-grow">
        {service.description}
      </p>
      
      <Link 
        to={`/servicios/${service.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-secondary)] group-hover:text-[var(--color-brand-primary)] mt-auto"
      >
        Ver detalles <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
