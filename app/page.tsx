"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Buscador from "@/components/Buscador";
import Categorias from "@/components/Categorias";
import Marcas from "@/components/Marcas";
import Catalogo from "@/components/Catalogo";
import Estadisticas from "@/components/Estadisticas";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Buscador />
      <Categorias />
      <Marcas />
      <Catalogo />
      <Estadisticas />
      <Blog />
      <Footer />
    </main>
  );
}
