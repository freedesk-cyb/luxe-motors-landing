"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Elegancia Redefinida",
    subtitle: "El futuro de la conducción luxury",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80",
  },
  {
    id: 2,
    title: "Potencia sin Límites",
    subtitle: "Rendimiento que supera expectativas",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80",
  },
  {
    id: 3,
    title: "Innovación Superior",
    subtitle: "Tecnología de última generación",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/80 to-[#1a1a2e]/40" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="text-[#e94560] text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Bienvenido a LUXE
            </span>
            <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              {slides[current].title}
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {slides[current].subtitle}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#e94560] text-white px-8 py-4 font-semibold rounded-lg hover:bg-[#d63d55] transition-colors">
                Explorar Colección
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Ver Video
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-[#e94560]" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        →
      </button>
    </section>
  );
}
