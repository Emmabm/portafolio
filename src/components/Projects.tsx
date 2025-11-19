import { Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Web para Salón de Eventos Las Rocas',
      description:
        'Plataforma para organizar eventos con gestión de clientes, invitados, menús y mesas, integrada a Supabase para datos en tiempo real.',
      technologies: ['TypeScript', 'React', 'TailwindCSS', 'Supabase'],
      image:
        'https://img.freepik.com/foto-gratis/reunion-seminario-renderizacion-3d-sala-banquetes_105762-1773.jpg?semt=ais_hybrid&w=740&q=80',
      code: 'https://github.com/Emmabm/web-lasrocas.git',
    },
    {
      title: 'E-commerce de Auriculares',
      description:
        'Tienda online con carrito dinámico, cálculo de totales y manejo de datos en Firebase, desarrollada sin frameworks.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      image:
        'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'https://github.com/Emmabm/pagina-auriculares.git',
    },
    {
      title: 'E-commerce de Tienda de Ropa',
      description:
        'Sistema de tienda de ropa con catálogo, carrito de compras y persistencia mediante LocalStorage.',
      technologies: ['JavaScript', 'LocalStorage', 'HTML', 'CSS'],
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/010/227/603/small/shopping-online-with-credit-card-concept-modern-e-commerce-web-page-with-woman-clothes-on-laptop-display-photo.jpg',
      code: 'https://github.com/Emmabm/proyectoJS.git',
    },
    {
      title: 'Web Informativa para Constructora Maprind',
      description:
        'Sitio institucional para presentar historia, servicios y proyectos de la constructora de forma moderna y clara.',
      technologies: ['TypeScript', 'React', 'TailwindCSS'],
      image:
        'https://seranco.es/wp-content/uploads/2019/08/%C2%BFComo-encontrar-a-la-mejor-empresa-constructora.jpg',
      code: 'https://github.com/Emmabm/maprind-project.git',
    },
    {
      title: 'E-commerce de Sneakers',
      description:
        'Tienda de sneakers con catálogo, carrito, favoritos y almacenamiento local, desarrollada en React.',
      technologies: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'LocalStorage',
        'Firebase',
      ],
      image:
        'https://images.stockcake.com/public/3/b/6/3b6adc7b-811c-4577-97f1-0c0a5b0e77c7_large/online-shoe-shopping-stockcake.jpg',
      code: 'https://github.com/Emmabm/proyectoReact.git',
    },
    {
      title: 'Sistema de Encuestas',
      description:
        'Plataforma donde usuarios envían opiniones y las empresas analizan resultados mediante gráficos interactivos.',
      technologies: ['JavaScript', 'Charts', 'HTML/CSS', 'PHP', 'MySQL'],
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: '#',
    },


    {
      title: 'Web Informativa para Estudio Jurídico',
      description:
        'Sitio profesional para un estudio jurídico, con secciones de servicios, equipo, contacto y diseño moderno pensando en la experiencia del cliente.',
      technologies: ['TypeScript', 'React', 'TailwindCSS'],
      image:
        'https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-stack-of-law-books-with-courtroom-scales-image_3721829.jpg',
      code: 'https://github.com/Emmabm/estudioJuridico.git',
    },

  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-800">
          Proyectos
        </h2>

        <p className="text-center text-slate-600 mb-16 text-lg max-w-2xl mx-auto">
          Una selección de mis trabajos más destacados
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex">
                  <a
                    href={project.code}
                    className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Github size={18} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
