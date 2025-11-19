import { Code2, Database, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          Sobre Mí
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* --- BLOQUE DE DESCRIPCIÓN --- */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Soy un **Desarrollador Fullstack** dedicado a transformar ideas en soluciones web robustas y escalables. Cuento con experiencia integral, desde la arquitectura de la base de datos hasta la creación de interfaces de usuario dinámicas y responsivas.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Mi compromiso se centra en la **calidad del código**: limpio, bien documentado y mantenible. Siempre estoy en la búsqueda activa de nuevas tecnologías y metodologías para optimizar el rendimiento y la seguridad de las aplicaciones. Mi mayor pasión reside en el desarrollo **Backend** y la eficiencia en la gestión de datos.
            </p>
          </div>
          {/* --- FIN BLOQUE DE DESCRIPCIÓN --- */}

          {/* --- BLOQUE DE HABILIDADES --- */}
          <div className="grid grid-cols-1 gap-6">
            {/* Tarjeta Frontend */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Frontend Moderno</h3>
              <p className="text-slate-600">
                **React** y **TypeScript** para crear interfaces interactivas, aplicando principios de diseño **Responsive** y las últimas características de JavaScript.
              </p>
            </div>

            {/* Tarjeta Backend */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Backend y Arquitectura</h3>
              <p className="text-slate-600">
                Desarrollo de APIs robustas con **PHP, Go y Java**, con profundo manejo de bases de datos relacionales y optimización de consultas.
              </p>
            </div>

            {/* Tarjeta Fullstack */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Desarrollo Integral (Fullstack)</h3>
              <p className="text-slate-600">
                Capacidad para gestionar y entregar el proyecto completo: desde la configuración inicial del servidor hasta el despliegue final en producción.
              </p>
            </div>
          </div>
          {/* --- FIN BLOQUE DE HABILIDADES --- */}
        </div>
      </div>
    </section>
  );
}