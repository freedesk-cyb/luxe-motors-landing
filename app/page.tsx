import Hero from "@/components/Hero";
import Modelos from "@/components/Modelos";
import Caracteristicas from "@/components/Caracteristicas";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold text-gold">
            LUXE Motors
          </h1>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#modelos" className="hover:text-gold transition-colors">Modelos</a>
            <a href="#caracteristicas" className="hover:text-gold transition-colors">Características</a>
            <a href="#testimonios" className="hover:text-gold transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
          </div>
          <button className="bg-gold text-dark px-6 py-2 text-sm font-semibold hover:bg-gold/90 transition-colors">
            Reservar
          </button>
        </div>
      </nav>
      <Hero />
      <Modelos />
      <Caracteristicas />
      <Testimonios />
      <Contacto />
      <footer className="bg-darker py-8 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 LUXE Motors. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
