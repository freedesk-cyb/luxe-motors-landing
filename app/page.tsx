import Hero from "@/components/Hero";
import Modelos from "@/components/Modelos";
import Caracteristicas from "@/components/Caracteristicas";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-[#0f3460]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold text-white">
            <span className="text-[#e94560]">LUXE</span> Motors
          </h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#modelos" className="hover:text-[#e94560] transition-colors">Modelos</a>
            <a href="#caracteristicas" className="hover:text-[#e94560] transition-colors">Características</a>
            <a href="#testimonios" className="hover:text-[#e94560] transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-[#e94560] transition-colors">Contacto</a>
          </div>
          <button className="bg-[#e94560] text-white px-6 py-2 text-sm font-semibold rounded-lg hover:bg-[#d63d55] transition-colors">
            Reservar
          </button>
        </div>
      </nav>
      <Hero />
      <Modelos />
      <Caracteristicas />
      <Testimonios />
      <Contacto />
      <footer className="bg-[#0f0f1a] py-8 border-t border-[#0f3460]">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>&copy; 2026 LUXE Motors. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
