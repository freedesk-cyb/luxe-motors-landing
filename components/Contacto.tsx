"use client";

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias ${form.nombre}! Te contactaremos pronto.`);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase font-medium">
              Contáctanos
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Agenda Tu Prueba de Manejo
            </h2>
            <p className="text-gray-500 mb-8">
              Experimenta la excelencia de LUXE Motors en primera persona. 
              Nuestro equipo está listo para atenderte.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#d4a853]/10 flex items-center justify-center text-[#d4a853] text-xl rounded-lg">
                  📍
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Dirección</p>
                  <p className="text-gray-500">Av. Presidents 1250, Miami FL</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#d4a853]/10 flex items-center justify-center text-[#d4a853] text-xl rounded-lg">
                  📞
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-500">+1 (305) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#d4a853]/10 flex items-center justify-center text-[#d4a853] text-xl rounded-lg">
                  ✉️
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-500">contacto@luxemotors.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700 font-medium">Nombre Completo</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/20 focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/20 focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700 font-medium">Mensaje</label>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/20 focus:outline-none transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d4a853] text-white py-4 font-semibold rounded-lg hover:bg-[#c49a45] transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
