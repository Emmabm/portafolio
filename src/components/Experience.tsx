import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          Experiencia & Formación
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* EXPERIENCIA */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Experiencia</h3>
            </div>

            <div className="space-y-6">

              {/* Freelance */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-slate-800">Desarrollador Freelance</h4>
                  <span className="text-sm text-slate-500 font-medium">2025</span>
                </div>
                <p className="text-slate-600 mb-3">Proyectos Independientes</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Sistema de organización de eventos para Salón Las Rocas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Página informativa para constructora Maprind</span>
                  </li>
                </ul>
              </div>

              {/* Proyectos académicos */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-600">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-slate-800">Proyectos Académicos & Personales</h4>
                  <span className="text-sm text-slate-500 font-medium">2023 - presente</span>
                </div>
                <p className="text-slate-600 mb-3">Universidad & Desarrollo Independiente</p>
                <ul className="space-y-2 text-slate-600">

                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Desarrollo de algoritmos en Go, Java, PHP y JavaScript</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Proyectos de bases de datos relacionales</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Aplicaciones web fullstack</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Desarrollo de sistemas: gestión de clientes, plataforma de encuestas, e-commerce de auriculares, tienda de ropa y tienda de sneakers</span>
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* FORMACIÓN */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Formación</h3>
            </div>

            <div className="space-y-6">

              {/* Universidad */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-slate-800">Licenciatura en Sistemas de Información</h4>
                  <span className="text-sm text-slate-500 font-medium">En curso</span>
                </div>
                <p className="text-slate-600 mb-3">Universidad Champagnat</p>
                <p className="text-slate-600">
                  Formación en programación, arquitectura de computadoras, bases de datos, 
                  redes, análisis de sistemas y estructuras de datos.
                </p>
              </div>

              {/* CoderHouse */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-pink-600">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Carrera de Frontend</h4>
                <span className="text-sm text-slate-500 font-medium">2023</span>
                <p className="text-slate-600 mb-3">CoderHouse</p>
                <p className="text-slate-600">
                  Formación en desarrollo web orientada a HTML, CSS, JavaScript, React, Git y buenas prácticas.
                </p>
              </div>

              {/* Fundamentos Técnicos */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Fundamentos Técnicos</h4>
                <ul className="space-y-2 text-slate-600">

                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>UML: diagramas de clases, secuencia, estados, casos de uso y actividad</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>Metodologías ágiles: Scrum y Kanban</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>Redes informáticas: Packet Tracer, Cisco y modelo OSI/TCP-IP</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>Arquitectura de computadoras</span>
                  </li>

                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
