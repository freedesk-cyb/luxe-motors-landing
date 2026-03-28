import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "7 consejos para la conducción off-road",
      categoria: "Autos",
      fecha: "05/03/2026",
      imagen: "https://revoshop.com.pe/wp-content/uploads/elementor/thumbs/beneficios-manejar-off-road-rk9y5bt6xquwfdd25yudd9dl6hyijsp7qa7rdsjubc.jpg",
      excerpt: "Descubre cómo mejorar tu experiencia en terrenos difíciles con estos consejos esenciales para la conducción off-road."
    },
    {
      id: 2,
      title: "¿Qué pasa si me excedo en el nivel de aceite para mi auto?",
      categoria: "Autos",
      fecha: "05/03/2026",
      imagen: "https://revoshop.com.pe/wp-content/uploads/elementor/thumbs/problemas-poner-aceite-motor-rk9y5avcqwtm3refbgfqsrm4l435c3lhe5k9wil8hk.jpg",
      excerpt: "Aprende sobre los riesgos y consecuencias de exceder el nivel recomendado de aceite en el motor de tu vehículo."
    },
    {
      id: 3,
      title: "¿Qué pasa si dejo mi vehículo parado durante mucho tiempo?",
      categoria: "Autos",
      fecha: "04/03/2026",
      imagen: "https://revoshop.com.pe/wp-content/uploads/elementor/thumbs/que-paso-vehiculo-parado-mucho-tiempo-rk9y59xik2sbs5fsgy1489unzq7s4ehr20wsf8mmns.jpg",
      excerpt: "Conoce los efectos que puede tener dejar tu vehículo inactivo por períodos prolongados y cómo prevenirlos."
    },
    {
      id: 4,
      title: "Diferencias entre los pony cars y los muscle cars",
      categoria: "Autos",
      fecha: "02/03/2026",
      imagen: "https://revoshop.com.pe/wp-content/uploads/elementor/thumbs/que-son-ponys-car-rk9y58zod8r1gjh5mfmhns37eccewpe0pw9axyo0u0.jpg",
      excerpt: "Explora las características distintivas que separan a los pony cars de los muscle cars en el mundo automotriz."
    },
    {
      id: 5,
      title: "¿Cuáles son los Ford Mustang más emblemáticos?",
      categoria: "Autos",
      fecha: "02/03/2026",
      imagen: "https://revoshop.com.pe/wp-content/uploads/elementor/thumbs/ford-emblematicas-historia-rk9y58zod8r1gjh5mfmhns37eccewpe0pw9axyo0u0.jpg",
      excerpt: "Un recorrido por los modelos más icónicos y representativos de la legendaria línea Ford Mustang a lo largo de los años."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Lo más reciente en nuestro Blog
          </h2>
          <Link href="/blog/" className="text-[#e94560] font-medium hover:underline">
            Ver Todo
          </Link>
        </div>

        <div className="grid gap-6">
          {/* Responsive grid: 1col, 2col md, 3col lg */}
          <div className="grid cols-1 md:cols-2 lg:cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={post.imagen}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-3 py-2 text-sm">
                    <span className="mr-2">#{post.categoria}</span>
                    <span>{post.fecha}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Leer más →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
