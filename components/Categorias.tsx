export default function Categorias() {
  const categorias = [
    { id: 1, nombre: 'SUV', icono: '🚙' },
    { id: 2, nombre: 'Sedán', icono: '🚗' },
    { id: 3, nombre: 'Hatchback', icono: '🚘' },
    { id: 4, nombre: 'Pick Up', icono: '🚛' },
    { id: 5, nombre: 'Híbridos', icono: '⚡' },
    { id: 6, nombre: 'Van', icono: '🚐' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          O encuentra tu categoría favorita
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#e94560] hover:shadow-md transition-colors"
            >
              <span className="text-4xl mb-3">{categoria.icono}</span>
              <span className="font-medium text-gray-700">{categoria.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
