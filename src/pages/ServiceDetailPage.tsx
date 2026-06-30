import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, MapPin, CheckCircle, FileText, ExternalLink, AlertCircle } from 'lucide-react';
import { procedures } from '../data/procedures';
import { services } from '../data/services';

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [showModal, setShowModal] = useState(false);

  // Buscar si es un trámite o un servicio simple
  const procedure = procedures.find(p => p.id === id);
  const service = services.find(s => s.id === id);

  if (!procedure && !service) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicio no encontrado</h2>
        <p className="text-gray-600 mb-8">El trámite o servicio que buscas no existe o ha sido movido.</p>
        <Link to="/servicios" className="text-[var(--color-brand-secondary)] font-semibold hover:underline">
          Volver al catálogo de servicios
        </Link>
      </div>
    );
  }

  // Si no hay detalle de trámite, mostramos el servicio básico
  const data = procedure || {
    id: service?.id || '',
    title: service?.title || '',
    description: service?.description || '',
    institution: 'Municipio de Loja',
    requirements: ['Presentar cédula de identidad', 'Pago de tasas correspondientes'],
    steps: ['Solicitar información en ventanilla'],
    cost: 'Consultar en ventanilla',
    time: 'Variable',
    modality: 'Presencial' as const,
    documents: [],
    category: service?.category || ''
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/servicios" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-brand-primary)] mb-8 transition-colors font-medium">
        <ArrowLeft className="h-5 w-5" /> Volver a servicios
      </Link>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--color-brand-primary)] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-4 border border-white/30">
              {data.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{data.title}</h1>
            <p className="text-blue-100 text-lg max-w-3xl">{data.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-[var(--color-brand-secondary)]" />
                Requisitos obligatorios
              </h3>
              <ul className="space-y-4">
                {data.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-[var(--color-brand-secondary)] border border-gray-200 flex items-center justify-center font-bold text-sm shadow-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-[var(--color-brand-secondary)]" />
                Pasos a seguir
              </h3>
              <div className="border-l-2 border-blue-100 ml-4 space-y-8 pb-4">
                {data.steps.map((step: string, index: number) => (
                  <div key={index} className="relative pl-8">
                    <span className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[var(--color-brand-secondary)] text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 pt-1 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6">Información General</h4>
              
              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <DollarSign className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Costo</p>
                    <p className="font-semibold text-gray-900">{data.cost}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Tiempo Estimado</p>
                    <p className="font-semibold text-gray-900">{data.time}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Modalidad</p>
                    <p className="font-semibold text-gray-900">{data.modality}</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowModal(true)}
              className="w-full bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Iniciar Trámite <ExternalLink className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Prototipo */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl animate-in fade-in zoom-in duration-200 text-center">
            <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="h-8 w-8 text-[var(--color-brand-secondary)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aviso del Prototipo</h3>
            <p className="text-gray-600 mb-8">
              Esta plataforma es un <strong>prototipo académico no oficial</strong>. El inicio real de trámites y transacciones en línea no está disponible en esta versión de demostración.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-[var(--color-brand-primary)] text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Entendido, cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
