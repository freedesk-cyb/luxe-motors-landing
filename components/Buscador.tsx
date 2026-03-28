import { useState } from "react";

export default function Buscador() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the search logic
    alert("Buscando autos...");
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          ¡Encuentra tu nuevo vehiculo ahora!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seleccionar marca
              </label>
              <select
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94560]"
              >
                <option value="">Todas las marcas</option>
                <option value="ford">Ford</option>
                <option value="changan">Changan</option>
                <option value="mazda">Mazda</option>
                <option value="jetour">Jetour</option>
                <option value="suzuki">Suzuki</option>
                <option value="gwm">GWM</option>
                <option value="haval">Haval</option>
                <option value="renault">Renault</option>
                <option value="jac">JAC</option>
                <option value="kyc">KYC</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seleccionar modelo
              </label>
              <select
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94560]"
              >
                <option value="">Todos los modelos</option>
                <option value="actyon">Actyon</option>
                <option value="all-new-baleno">All New Baleno</option>
                <option value="all-new-grand-vitara">All New Grand Vitara</option>
                <option value="all-new-korando">All New Korando</option>
                <option value="all-new-musso-grand">All New Musso Grand</option>
                <option value="all-new-musso-short">All New Musso Short</option>
                <option value="all-new-rexton">All New Rexon</option>
                <option value="apv-furgon">APV Furgón</option>
                <option value="apv-van">APV Van</option>
                <option value="arkana">Arkana</option>
                <option value="bronco">Bronco</option>
                <option value="bronco-sport">Bronco sport</option>
                <option value="bt-50">BT-50</option>
                <option value="cs55-plus">CS55 Plus</option>
                <option value="cs55-plus-idd">CS55 Plus IDD</option>
                <option value="cs35-plus">CS35 Plus</option>
                <option value="cs15-plus">CS15 Plus</option>
                <option value="honor-s">Honor S</option>
                <option value="grand-van-turismo">Grand Van Turismo</option>
                <option value="grand-supervan-plus">Grand Supervan Plus</option>
                <option value="f70">F70</option>
                <option value="new-alsvin">New Alsvin</option>
                <option value="new-cs35-plus">New CS35 Plus</option>
                <option value="new-cs15">New CS15</option>
                <option value="new-van">New Van</option>
                <option value="uni-t">UNI-T</option>
                <option value="uni-k">UNI-K</option>
                <option value="x7-plus">X7 Plus</option>
                <option value="fronx-smart-hybrid">Fronx Smart Hybrid</option>
                <option value="swift-smart-hybrid">Swift Smart Hybrid</option>
                <option value="xl7-smart-hybrid">XL7 Smart Hybrid</option>
                <option value="mazda-2-sedan">Mazda 2 Sedán</option>
                <option value="mazda-2-sport">Mazda 2 Sport</option>
                <option value="mazda-3-sedan">Mazda 3 Sedan</option>
                <option value="mazda-3-sport">Mazda 3 Sport</option>
                <option value="mazda-6">Mazda 6</option>
                <option value="mazda-cx-3">Mazda CX-3</option>
                <option value="mazda-cx-30">Mazda CX-30</option>
                <option value="mazda-cx-5">Mazda CX-5</option>
                <option value="mazda-cx-60">Mazda CX-60</option>
                <option value="mazda-cx-90">Mazda CX-90</option>
                <option value="mazda-mx-5">Mazda MX-5</option>
                <option value="mustang">Mustang</option>
                <option value="ranger">Ranger</option>
                <option value="ranger-raptor">Ranger Raptor</option>
                <option value="territory">Territory</option>
                <option value="expedition">Expedition</option>
                <option value="maverick">Maverick</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio mínimo ($)
              </label>
              <input
                type="number"
                value={precioMin}
                onChange={(e) => setPrecioMin(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94560]"
                placeholder="0"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio máximo ($)
              </label>
              <input
                type="number"
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e94560]"
                placeholder="100000"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#e94560] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d63d55] transition-colors"
          >
            Buscar auto
          </button>
        </form>
      </div>
    </section>
  );
}
