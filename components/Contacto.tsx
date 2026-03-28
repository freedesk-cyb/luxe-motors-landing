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
    <section id="contacto" className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#e94560] text-sm tracking-[0.3em] uppercase font-medium">
              Contáctanos
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Agenda Tu Prueba de Manejo
            </h2>
            <p className="text-gray-400 mb-8">
              Experimenta la excelencia de LUXE Motors en primera persona. 
              Nuestro equipo está listo para atenderte.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#0f3460] flex items-center justify-center text-[#e94560] text-xl rounded-lg">
                  📍
                </span>
                <div>
                  <p className="font-semibold text-white">Dirección</p>
                  <p className="text-gray-400">Av. Presidents 1250, Miami FL</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#0f3460] flex items-center justify-center text-[#e94560] text-xl rounded-lg">
                  📞
                </span>
                <div>
                  <p className="font-semibold text-white">Teléfono</p>
                  <p className="text-gray-400">+1 (305) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#0f3460] flex items-center justify-center text-[#e94560] text-xl rounded-lg">
                  ✉️
                </span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-400">contacto@luxemotors.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16213e] p-8 rounded-2xl border border-[#0f3460]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300 font-medium">Nombre Completo</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full bg-[#1a1a2e] border border-[#0f3460] px-4 py-3 rounded-lg text-white focus:border-[#e94560] focus:ring-2 focus:ring-[#e94560]/20 focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-300 font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#1a1a2e] border border-[#0f3460] px-4 py-3 rounded-lg text-white focus:border-[#e94560] focus:ring-2 focus:ring-[#e94560]/20 focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-300 font-medium">Mensaje</label>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  rows={4}
                  className="w-full bg-[#1a1a2e] border border-[#0f3460] px-4 py-3 rounded-lg text-white focus:border-[#e94560] focus:ring-2 focus:ring-[#e94560]/20 focus:outline-none transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#e94560] text-white py-4 font-semibold rounded-lg hover:bg-[#d63d55] transition-colors"
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
