const testimonios = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    rol: "Empresario",
    texto: "El LUXE GT Phantom supera todas mis expectativas. La combinación de potencia y elegancia es simplemente perfecta.",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 2,
    nombre: "Ana García",
    rol: "Directora de Arte",
    texto: "El diseño interior es una obra de arte. Cada detalle refleja calidad y sofisticación. Totalmente recomendado.",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 3,
    nombre: "Roberto Silva",
    rol: "Piloto Profesional",
    texto: "He conducido muchos autos de lujo, pero la experiencia LUXE es incomparable. Rendimiento excepcional.",
    imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase font-medium">
            Clientes Satisfechos
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Lo Que Dicen de Nosotros
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#d4a853] transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#d4a853]"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonio.nombre}</h4>
                  <p className="text-[#d4a853] text-sm">{testimonio.rol}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                &ldquo;{testimonio.texto}&rdquo;
              </p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#d4a853] text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
