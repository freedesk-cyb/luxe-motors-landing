export default function Estadisticas() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Estadísticas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-[#e94560]">
              0+
            </div>
            <div className="text-sm text-gray-600">
              AUTOS VENDIDOS
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-[#e94560]">
              0+
            </div>
            <div className="text-sm text-gray-600">
              VISITANTES DIARIOS
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-[#e94560]">
              0+
            </div>
            <div className="text-sm text-gray-600">
              OPINIONES DE DISTRIBUIDORES
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-[#e94560]">
              0+
            </div>
            <div className="text-sm text-gray-600">
              DISTRIBUIDORES AUTORIZADOS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
