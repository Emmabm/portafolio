import { Github, Linkedin} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                EB
              </div>
              <span className="text-xl font-bold">Emmanuel Bustos</span>
            </div>
            <p className="text-slate-400">
              Desarrollador apasionado por crear experiencias web excepcionales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-slate-400 hover:text-white transition-colors">
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Emmabm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-bustos-6a8439276/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Emmanuel Bustos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
