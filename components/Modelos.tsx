"use client";

import { useState } from "react";
import Image from "next/image";

interface Auto {
  id: number;
  nombre: string;
  tipo: string;
  precio: string;
  imagen: string;
  imagenes: string[];
  specs: {
    velocidad: string;
    potencia: string;
    aceleracion: string;
    motor: string;
    transmision: string;
    combustible: string;
    garantia: string;
  };
  descripcion: string;
  caracteristicas: string[];
}

interface ModalDetalleProps {
  auto: Auto;
  onClose: () => void;
}

function ModalDetalle({ auto, onClose }: ModalDetalleProps) {
  const [imagenActual, setImagenActual] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img
            src={auto.imagenes[imagenActual]}
            alt={auto.nombre}
            className="w-full h-64 md:h-80 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white transition-colors shadow-lg"
          >
            ✕
          </button>
          {auto.imagenes.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {auto.imagenes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImagenActual(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === imagenActual ? "bg-[#d4a853]" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <span className="text-[#d4a853] text-sm font-medium tracking-wider uppercase">
                {auto.tipo}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                {auto.nombre}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[#d4a853] text-2xl md:text-3xl font-bold">
                {auto.precio}
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {auto.descripcion}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(auto.specs).map(([key, value]) => (
              <div key={key} className="bg-gray-100 rounded-xl p-4">
                <span className="text-gray-500 text-sm capitalize">{key.replace("_", " ")}</span>
                <p className="text-gray-900 font-semibold mt-1">{value}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Características</h3>
            <div className="grid grid-cols-2 gap-3">
              {auto.caracteristicas.map((caract, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#d4a853]">✓</span>
                  <span className="text-gray-700">{caract}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-[#d4a853] text-white py-4 rounded-xl font-semibold hover:bg-[#c49a45] transition-colors">
              Reservar Prueba de Manejo
            </button>
            <button className="flex-1 border-2 border-[#d4a853] text-[#d4a853] py-4 rounded-xl font-semibold hover:bg-[#d4a853] hover:text-white transition-colors">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Modelos() {
  const [autoSeleccionado, setAutoSeleccionado] = useState<Auto | null>(null);

  const modelos = [
    {
      id: 1,
      nombre: "LUXE GT Phantom",
      tipo: "Sport Coupe",
      precio: "$185,000",
      imagen: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      imagenes: [
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      ],
      specs: {
        velocidad: "320 km/h",
        potencia: "650 HP",
        aceleracion: "3.2s 0-100km/h",
        motor: "V8 4.0L Biturbo",
        transmision: "Automática 8 velocidades",
        combustible: "Gasolina Premium",
        garantia: "5 años / 100,000 km",
      },
      descripcion:
        "El LUXE GT Phantom representa la cúspide del diseño automotriz moderno. Con líneas elegantes y un rendimiento excepcional, este deportivo combina lujo y potencia en perfecta armonía.",
      caracteristicas: [
        "Interior en cuero Nappa",
        "Sistema de sonido Harmonic Reference",
        "Pantalla táctil 12.3\"",
        "Asistente de conducción autónoma",
        "Techo panorámico",
        "Llantas de aleación 21\"",
      ],
    },
    {
      id: 2,
      nombre: "LUXE Executive",
      tipo: "Luxury Sedan",
      precio: "$145,000",
      imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      imagenes: [
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      ],
      specs: {
        velocidad: "280 km/h",
        potencia: "520 HP",
        aceleracion: "4.1s 0-100km/h",
        motor: "V6 3.0L Híbrido",
        transmision: "Automática 8 velocidades",
        combustible: "Híbrido",
        garantia: "5 años / 100,000 km",
      },
      descripcion:
        "El LUXE Executive redefine la elegancia en un sedán de lujo. Espacio, confort y tecnología de vanguardia se unen para ofrecer una experiencia de conducción inigualable.",
      caracteristicas: [
        "Interior en cuero premium",
        "Sistema multimedia avanzado",
        "Pantalla táctil 10.2\"",
        "Asistente de estacionamiento",
        "Climatizador automático 4 zonas",
        "Llantas de aleación 19\"",
      ],
    },
    {
      id: 3,
      nombre: "LUXE Horizon",
      tipo: "Grand Tourer",
      precio: "$220,000",
      imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      imagenes: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      ],
      specs: {
        velocidad: "340 km/h",
        potencia: "720 HP",
        aceleracion: "2.8s 0-100km/h",
        motor: "V12 6.5L Biturbo",
        transmision: "Automática 8 velocidades",
        combustible: "Gasolina Premium",
        garantia: "5 años / 100,000 km",
      },
      descripcion:
        "El LUXE Horizon es la expresión máxima del Grand Tourer. Potencia bruta y refinamiento se combinan para crear el vehículo perfecto para viajes largos con máximo placer de conducción.",
      caracteristicas: [
        "Interior en cuero Alcántara",
        "Sistema de sonido Reference",
        "Pantalla táctil 15.6\"",
        "Modo sport configurable",
        "Suspensión adaptativa",
        "Llantas de aleación 22\"",
      ],
    },
  ];

  return (
    <>
      <section id="modelos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase font-medium">
              Nuestra Colección
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Modelos Exclusivos
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Cada vehículo es una obra maestra de ingeniería y diseño
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modelos.map((auto) => (
              <div
                key={auto.id}
                className="group bg-gray-50 border border-gray-200 hover:border-[#d4a853] hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setAutoSeleccionado(auto)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={auto.imagen}
                    alt={auto.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white bg-[#d4a853] px-3 py-1 rounded-full text-sm font-medium">
                    {auto.tipo}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                    {auto.nombre}
                  </h3>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>{auto.specs.velocidad}</span>
                    <span>{auto.specs.potencia}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#d4a853] text-xl font-bold">
                      {auto.precio}
                    </span>
                    <button className="bg-[#d4a853]/10 text-[#d4a853] px-4 py-2 text-sm font-semibold rounded-lg hover:bg-[#d4a853] hover:text-white transition-colors">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {autoSeleccionado && (
        <ModalDetalle
          auto={autoSeleccionado}
          onClose={() => setAutoSeleccionado(null)}
        />
      )}
    </>
  );
}
