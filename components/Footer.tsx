"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Más Información
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/blog/" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  NFU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Derechos Arco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sistema de cumplimiento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Venta Corporativa Automotriz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Nuestras Marcas
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ford
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GWM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jac
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Haval
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jetour
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  KYC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mazda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Renault
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Suzuki
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Agenda tu prueba de manejo
            </h3>
            <a
              href="/prueba-manejo/"
              className="inline-block bg-[#e94560] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#d63d55] transition-colors"
            >
              Solicitar
            </a>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/revoshop.pe"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/revoshop.pe/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/revoshop/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Contacto
            </h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Av. Presidents 1250, Miami FL</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+1 (305) 555-0123</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>contacto@luxemotors.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col items-center text-center text-gray-500">
            <p>
              © Diseño trabajado por <a href="#" className="text-[#e94560] hover:underline">CapybaraSEO</a>
            </p>
            <p>
              <a href="#" className="text-[#e94560] hover:underline">
                Términos & Condiciones
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
