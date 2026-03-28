const modelos = [
  {
    id: 1,
    nombre: "LUXE GT Phantom",
    tipo: "Sport Coupe",
    precio: "$185,000",
    imagen: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    specs: { velocidad: "320 km/h", potencia: "650 HP" },
  },
  {
    id: 2,
    nombre: "LUXE Executive",
    tipo: "Luxury Sedan",
    precio: "$145,000",
    imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    specs: { velocidad: "280 km/h", potencia: "520 HP" },
  },
  {
    id: 3,
    nombre: "LUXE Horizon",
    tipo: "Grand Tourer",
    precio: "$220,000",
    imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    specs: { velocidad: "340 km/h", potencia: "720 HP" },
  },
];

export default function Modelos() {
  return (
    <section id="modelos" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            Nuestra Colección
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-4">
            Modelos Exclusivos
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Cada vehículo es una obra maestra de ingeniería y diseño
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modelos.map((auto) => (
            <div
              key={auto.id}
              className="group bg-dark border border-gold/20 hover:border-gold/50 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={auto.imagen}
                  alt={auto.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                <span className="absolute bottom-4 left-4 text-gold text-sm">
                  {auto.tipo}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {auto.nombre}
                </h3>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                  <span>{auto.specs.velocidad}</span>
                  <span>{auto.specs.potencia}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gold text-xl font-semibold">
                    {auto.precio}
                  </span>
                  <button className="bg-gold/10 text-gold px-4 py-2 text-sm hover:bg-gold hover:text-dark transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
