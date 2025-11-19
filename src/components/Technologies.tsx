import { Code2, Database, Flame, Globe } from 'lucide-react';

export function Technologies() {
  const technologies = [
    // --- FRONTEND ---
    { name: 'TypeScript', category: 'Frontend', color: 'from-blue-500 to-blue-600' },
    { name: 'React', category: 'Frontend', color: 'from-cyan-500 to-cyan-600' },
    { name: 'JavaScript', category: 'Frontend', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Tailwind CSS', category: 'Frontend', color: 'from-sky-500 to-sky-600' },
    { name: 'CSS3', category: 'Frontend', color: 'from-indigo-500 to-indigo-600' },

    // --- BACKEND ---
    { name: 'PHP', category: 'Backend', color: 'from-purple-500 to-purple-600' },
    { name: 'Java', category: 'Backend', color: 'from-red-500 to-red-600' },
    { name: 'Go', category: 'Backend', color: 'from-teal-500 to-teal-600' },
    { name: 'Firebase', category: 'Backend', color: 'from-amber-500 to-amber-600' },
    { name: 'C', category: 'Backend', color: 'from-green-600 to-green-700' }, // <-- AGREGADO

    // --- DATABASE ---
    { name: 'MySQL', category: 'Database', color: 'from-orange-500 to-orange-600' },
    { name: 'Supabase', category: 'Database', color: 'from-emerald-500 to-emerald-600' },

    // --- TOOLS / METODOLOGÍAS / DIAGRAMAS ---
    { name: 'Git & GitHub', category: 'Tools', color: 'from-gray-500 to-gray-600' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Globe size={16} />;
      case 'Backend':
        return <Code2 size={16} />;
      case 'Database':
        return <Database size={16} />;
      case 'Tools':
        return <Flame size={16} />;
      default:
        return <Flame size={16} />;
    }
  };

  return (
    <section id="technologies" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-800">
          Tecnologías
        </h2>

        <p className="text-center text-slate-600 mb-16 text-lg max-w-2xl mx-auto">
          Herramientas, lenguajes y metodologías que utilizo para crear soluciones completas.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-100"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300`}
              >
                <span className="text-2xl font-bold text-white">
                  {tech.name.substring(0, 2).toUpperCase()}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 text-center mb-2">
                {tech.name}
              </h3>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                {getCategoryIcon(tech.category)}
                <span>{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
