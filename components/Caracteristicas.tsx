const features = [
  {
    id: 1,
    titulo: "Rendimiento Extremo",
    descripcion: "Motores V8 y V12 con tecnología híbrida para una experiencia de conducción sin igual.",
    icono: "⚡",
  },
  {
    id: 2,
    titulo: "Seguridad Avanzada",
    descripcion: "Sistemas de asistencia a la conducción con inteligencia artificial de última generación.",
    icono: "🛡️",
  },
  {
    id: 3,
    titulo: "Tecnología Premium",
    descripcion: "Pantallas táctiles 4K, conectividad 5G y sistema de sonido Harmonic Reference.",
    icono: "💻",
  },
  {
    id: 4,
    titulo: "Eficiencia Superior",
    descripcion: "Modo eléctrico para viajes urbanos con autonomía de hasta 80 km.",
    icono: "🌿",
  },
];

export default function Caracteristicas() {
  return (
    <section id="caracteristicas" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-4">
            Características Premium
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-darker p-8 border border-gold/10 hover:border-gold/40 transition-colors group"
            >
              <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">
                {feature.icono}
              </span>
              <h3 className="font-playfair text-xl font-bold mb-3">
                {feature.titulo}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=80"
            alt="Interior luxury"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-transparent flex items-center">
            <div className="p-12 max-w-lg">
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Diseño que Inspira
              </h3>
              <p className="text-gray-300 mb-6">
                Cada detalle ha sido cuidadosamente diseñado para ofrecer la máxima comodidad y elegancia en cada viaje.
              </p>
              <button className="bg-gold text-dark px-6 py-3 font-semibold hover:bg-gold/90 transition-colors">
                Conoce Más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
