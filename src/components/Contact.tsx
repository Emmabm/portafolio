import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ✔ tu service_id
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ✔ tu template_id
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY     // ✔ tu public_key
      )
      .then(() => {
        alert('¡Mensaje enviado correctamente!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert('Hubo un error al enviar el mensaje.');
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-800">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">emmanuelbustosm@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Teléfono</h4>
                    <p className="text-slate-600">+54 2615938449</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Ubicación</h4>
                    <p className="text-slate-600">Mendoza, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Disponibilidad</h4>
              <p className="text-slate-600 mb-4">
                Actualmente abierto a nuevas oportunidades y proyectos freelance.
                Respondo en menos de 24 horas.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-700 font-medium">Disponible para trabajar</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-700 font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
