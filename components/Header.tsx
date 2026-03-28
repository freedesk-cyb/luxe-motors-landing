"use client";

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const marcas = [
    { nombre: "Ford", enlace: "#" },
    { nombre: "Changan", enlace: "#" },
    { nombre: "Mazda", enlace: "#" },
    { nombre: "Jetour", enlace: "#" },
    { nombre: "Suzuki", enlace: "#" },
    { nombre: "GWM", enlace: "#" },
    { nombre: "Haval", enlace: "#" },
    { nombre: "Renault", enlace: "#" },
    { nombre: "JAC", enlace: "#" },
    { nombre: "KYC", enlace: "#" },
  ];

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://revoshop.com.pe/wp-content/uploads/2025/09/imgi_1_logo-revoshop-white.png"
              alt="LUXE Motors"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">LUXE Motors</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="space-x-8">
              <Link href="/nosotros/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Nosotros
              </Link>
              <Link href="/locales/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Nuestros Locales
              </Link>
              <div className="relative">
                <button
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Marcas
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown simple */}
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-2">
                  {marcas.map((m) => (
                    <Link
                      key={m.nombre}
                      href={m.enlace}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {m.nombre}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/servicios/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Servicio Técnico
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/cotizar/"
                className="bg-[#e94560] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#d63d55] transition-colors"
              >
                Cotizar
              </Link>
              <Link
                href="/agendar-cita/"
                className="border-2 border-[#e94560] text-[#e94560] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e94560]/10 transition-colors"
              >
                Reservar
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <nav className="space-y-2">
              <Link href="/nosotros/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Nosotros
              </Link>
              <Link href="/locales/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Nuestros Locales
              </Link>
              <div className="space-y-1">
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Marcas
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="pl-8 space-y-1">
                  {marcas.map((m) => (
                    <Link
                      key={m.nombre}
                      href={m.enlace}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {m.nombre}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/servicios/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Servicio Técnico
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/cotizar/"
                className="w-full bg-[#e94560] text-white py-2 rounded-md text-center font-medium hover:bg-[#d63d55] transition-colors"
              >
                Cotizar
              </Link>
              <Link
                href="/agendar-cita/"
                className="w-full border-2 border-[#e94560] text-[#e94560] py-2 rounded-md text-center font-medium hover:bg-[#e94560]/10 transition-colors"
              >
                Reservar
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
