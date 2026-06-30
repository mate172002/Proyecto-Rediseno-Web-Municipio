import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'consulta',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Formato de correo inválido.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es obligatorio.';
    if (formData.message.trim().length < 20) {
      newErrors.message = 'El mensaje debe tener al menos 20 caracteres.';
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar la política de privacidad.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simular envío
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: 'consulta',
          message: '',
          acceptTerms: false
        });
        setErrors({});
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section className="bg-[var(--color-brand-primary)] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Atención Ciudadana</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Estamos aquí para escucharte. Contáctanos para resolver tus dudas, enviar sugerencias o reportar incidencias.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Información de Contacto */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-[var(--color-brand-secondary)]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Edificio Matriz</h4>
                    <p className="text-gray-600">Bolívar y José Antonio Eguiguren, Esquina.<br/>Loja - Ecuador</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-[var(--color-brand-secondary)]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Líneas de Atención</h4>
                    <p className="text-gray-600">PBX: (07) 257-0407<br/>Atención ciudadana: Ext. 1102</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-[var(--color-brand-secondary)]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Correo Institucional</h4>
                    <p className="text-gray-600">info@loja.gob.ec<br/>tramites@loja.gob.ec</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-[var(--color-brand-secondary)]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Horarios de Atención</h4>
                    <p className="text-gray-600">Lunes a Viernes<br/>08:00 a 16:00 (Ininterrumpido)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Simulado */}
            <div className="bg-gray-100 rounded-2xl h-64 w-full flex items-center justify-center border border-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/loja12/800/600')] bg-cover bg-center opacity-40"></div>
              <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <MapPin className="h-6 w-6 text-red-500" />
                <span className="font-bold text-gray-900">Municipio de Loja</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative">
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/95 z-20 rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                  <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600 max-w-md">
                    Hemos recibido tu mensaje correctamente. Nuestro equipo se pondrá en contacto contigo a través del correo proporcionado.
                  </p>
                </div>
              )}

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[var(--color-brand-secondary)]'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="Ej. Juan Pérez"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  {/* Correo */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[var(--color-brand-secondary)]'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="ejemplo@correo.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Categoría y Asunto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Categoría</label>
                    <select 
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-brand-secondary)] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="consulta">Consulta General</option>
                      <option value="reclamo">Reclamo / Denuncia</option>
                      <option value="sugerencia">Sugerencia</option>
                      <option value="alcaldia">Mensaje a la Alcaldía</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[var(--color-brand-secondary)]'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="Resumen de tu mensaje"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-[var(--color-brand-secondary)]'} focus:ring-2 focus:border-transparent outline-none transition-all resize-none`}
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                {/* Términos */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="flex items-center h-5">
                      <input 
                        type="checkbox" 
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-[var(--color-brand-secondary)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--color-brand-secondary)]"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      He leído y acepto la política de privacidad y tratamiento de datos personales del Municipio de Loja.
                    </span>
                  </label>
                  {errors.acceptTerms && <p className="mt-1 text-sm text-red-500">{errors.acceptTerms}</p>}
                </div>

                {/* Botón Enviar */}
                <button 
                  type="submit"
                  className="w-full bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
