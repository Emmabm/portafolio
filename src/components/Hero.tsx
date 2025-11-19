import { Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50 opacity-70"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-8 inline-block">
          <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-scale-in">
            EB
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent animate-slide-up">
          Emmanuel Bustos
        </h1>

        <p className="text-2xl md:text-3xl text-slate-700 mb-8 animate-slide-up-delay-1">
          Desarrollador Frontend / Fullstack Junior
        </p>

        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto animate-slide-up-delay-2">
          Apasionado por crear experiencias web innovadoras con tecnologías modernas.
          Especializado en React, TypeScript y desarrollo backend.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up-delay-3">

          {/* ✅ DESCARGA REAL DE PDF */}
          <a
            href="/cv/Emmanuel Bustos.pdf"
            download="Emmanuel_Bustos_CV.pdf"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Download size={20} />
            Descargar CV
          </a>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-200"
          >
            Contactar
          </button>
        </div>

        <div className="flex gap-6 justify-center animate-slide-up-delay-4">
          <a
            href="https://github.com/Emmabm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-bustos-6a8439276/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
