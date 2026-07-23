import { FaShieldAlt } from 'react-icons/fa';

export default function Guarantee() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-200">
            <FaShieldAlt className="text-5xl text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brownie-dark mb-4">Compromisso com a Qualidade</h2>
            <p className="text-brownie/70 leading-relaxed">
              Cada etapa do processo é cuidadosamente monitorada. Do recebimento dos ingredientes à entrega final, mantemos um padrão que nos orgulha. 
              Se algo não estiver como esperado, o canal direto no WhatsApp resolve em minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
