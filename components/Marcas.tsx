export default function Marcas() {
  const marcas = [
    { id: 1, nombre: 'Ford', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/03/Logo-Ford-negro.png' },
    { id: 2, nombre: 'Changan', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/LOGO-CHANGAN-negro.png' },
    { id: 3, nombre: 'Mazda', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/LOGO-MAZDA-negro.png' },
    { id: 4, nombre: 'Jetour', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/Jetour-Logo-scaled.png' },
    { id: 5, nombre: 'Suzuki', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/LOGO-SUZUKI-negro.png' },
    { id: 6, nombre: 'GWM', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/LOGO-GWM-negro.png' },
    { id: 7, nombre: 'Haval', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/LOGO-HAVAL-negro.png' },
    { id: 8, nombre: 'Renault', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/LOGO-RENAULT-negro.png' },
    { id: 9, nombre: 'JAC', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/01/LOGO-JAC-negro.png' },
    { id: 10, nombre: 'KYC', logo: 'https://revoshop.com.pe/wp-content/uploads/2026/03/logo-KYC.png' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Conoce nuestras marcas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {marcas.map((marca) => (
            <div
              key={marca.id}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#e94560] hover:shadow-md transition-colors"
            >
              <img
                src={marca.logo}
                alt={marca.nombre}
                className="h-16 w-auto object-contain"
              />
              <span className="mt-2 font-medium text-gray-700">{marca.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
