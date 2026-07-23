import { FaClock, FaExclamationTriangle, FaFire } from 'react-icons/fa';

export default function Scarcity() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-red-100/50 to-orange-100/50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaExclamationTriangle className="text-orange-500 text-2xl animate-bounce" />
            <span className="text-orange-500 font-mono text-sm uppercase tracking-wider font-bold">Atencao</span>
            <FaExclamationTriangle className="text-orange-500 text-2xl animate-bounce" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mb-4">
            Oferta por tempo limitado!
          </h2>

          <p className="text-brownie/80 text-lg mb-8 max-w-2xl mx-auto">
            Brownie Classic por apenas <span className="text-orange-600 font-bold">R$ 9,90</span> (era R$ 12,00). 
            Aproveite enquanto o estoque durar!
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-white font-mono">02</div>
              <div className="text-white/80 text-sm">Dias</div>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-white font-mono">14</div>
              <div className="text-white/80 text-sm">Horas</div>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-white font-mono">37</div>
              <div className="text-white/80 text-sm">Minutos</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <FaFire className="text-red-500" />
            <span className="text-red-500 font-mono text-sm font-bold">Restam apenas 23 unidades nesta semana!</span>
            <FaFire className="text-red-500" />
          </div>

          <a
            href="https://wa.me/5524999518926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 transition-all duration-300 animate-pulse"
          >
            <FaClock />
            Aproveitar Oferta Agora
          </a>
        </div>
      </div>
    </section>
  );
}
