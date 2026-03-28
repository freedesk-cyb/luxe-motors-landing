import { useState } from "react";
import { autos } from "./data";

export default function Catalogo() {
  const [tab, setTab] = useState("mas-vistos"); // "mas-vistos" or "nuevos"
  const [favoritos, setFavoritos] = useState(new Set());

  const autosFiltrados = tab === "mas-vistos"
    ? autos.filter((a) => a.destacado)
    : autos.filter((a) => a.nuevo);

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Explora nuestros vehículos
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTab("mas-vistos")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "mas-vistos"
                  ? "bg-[#e94560] text-white rounded-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Más vistos
            </button>
            <button
              onClick={() => setTab("nuevos")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "nuevos"
                  ? "bg-[#e94560] text-white rounded-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Nuevos
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Breakpoints: 1col sm, 2col md, 3col lg, 4col xl */}
          <div className="grid cols-1 sm:cols-2 md:cols-3 lg:cols-4 gap-6">
            {autosFiltrados.map((auto) => (
              <div
                key={auto.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={auto.imagen}
                    alt={auto.nombre}
                    className="w-full h-48 object-cover"
                  />
                  {/* Favorite button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorito(auto.id);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors z-10"
                  >
                    {favoritos.has(auto.id) ? (
                      <svg className="h-5 w-5 text-[#e94560]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L10 11.364l3.682 3.682a4.5 4.5 0 006.364-6.364L15.636 10l3.682-3.682a4.5 4.5 0 00-6.364-6.364L10 6.364z" />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-[#e94560]">{auto.tipo}</span>
                    <span className="text-xs text-gray-500">{auto.km}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 truncate">
                    {auto.marca} {auto.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{auto.transmision}</p>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-bold text-xl">$${auto.precioUSD.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">S/ ${auto.precioPEN.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    {/* Here you could add a rating or other info */}
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <button
                    className="w-full bg-[#e94560] text-white py-2 rounded-md text-sm font-medium hover:bg-[#d63d55] transition-colors"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* If no results */}
          {autosFiltrados.length === 0 && (
            <div className="col-span-4 text-center py-12">
              <p className="text-gray-500">No se encontraron vehículos que coincidan con los filtros.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
