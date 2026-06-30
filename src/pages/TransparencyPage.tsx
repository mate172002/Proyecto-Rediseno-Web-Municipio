import { useState } from 'react';
import { Download, FileText, Filter, AlertCircle } from 'lucide-react';
import { transparencyDocs, transparencyCategories } from '../data/transparency';

export function TransparencyPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showModal, setShowModal] = useState(false);

  const filteredDocs = selectedCategory === 'Todos' 
    ? transparencyDocs 
    : transparencyDocs.filter(doc => doc.category === selectedCategory);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar de filtros */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Filter className="h-5 w-5 text-[var(--color-brand-secondary)]" />
            Categorías
          </h3>
          <div className="space-y-1">
            {transparencyCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-50 text-[var(--color-brand-secondary)] font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Transparencia y LOTAIP</h1>
          <p className="text-lg text-gray-600">
            Accede a la información pública del Municipio de Loja, de acuerdo con la Ley Orgánica de Transparencia y Acceso a la Información Pública (LOTAIP).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDocs.map(doc => (
            <div key={doc.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    {doc.category}
                  </span>
                  <h3 className="font-bold text-gray-900 leading-snug group-hover:text-[var(--color-brand-secondary)] transition-colors">
                    {doc.title}
                  </h3>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xs text-gray-500 flex items-center gap-3">
                  <span>{doc.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{doc.size}</span>
                </div>
                
                <button 
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand-secondary)] hover:text-[var(--color-brand-primary)] bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Download className="h-4 w-4" /> Descargar PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-600">No hay documentos disponibles en esta categoría.</p>
          </div>
        )}
      </div>

      {/* Modal de Alerta Prototipo */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl text-center animate-in fade-in zoom-in duration-200">
            <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="h-8 w-8 text-[var(--color-brand-secondary)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Descarga Simulada</h3>
            <p className="text-gray-600 mb-8">
              Al ser un <strong>prototipo académico</strong>, los documentos reales no están alojados en esta plataforma. Esto es una simulación de la función de descarga.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-[var(--color-brand-primary)] text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
