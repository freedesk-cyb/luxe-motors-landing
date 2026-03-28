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
    <section id="contacto" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Contáctanos
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-4 mb-6">
              Agenda Tu Prueba de Manejo
            </h2>
            <p className="text-gray-400 mb-8">
              Experimenta la excelencia de LUXE Motors en primera persona. 
              Nuestro equipo está listo para atenderte.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold text-xl">
                  📍
                </span>
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-gray-400">Av. Presidents 1250, Miami FL</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold text-xl">
                  📞
                </span>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-400">+1 (305) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold text-xl">
                  ✉️
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">contacto@luxemotors.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-darker p-8 border border-gold/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Nombre Completo</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full bg-dark border border-gold/30 px-4 py-3 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-dark border border-gold/30 px-4 py-3 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Mensaje</label>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  rows={4}
                  className="w-full bg-dark border border-gold/30 px-4 py-3 focus:border-gold focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-dark py-4 font-semibold hover:bg-gold/90 transition-colors"
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
