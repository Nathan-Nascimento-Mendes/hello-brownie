import { FaGift, FaCheck } from 'react-icons/fa';

const bonuses = [
  {
    title: 'Cafe Especial Cortesia',
    description: 'Em pedidos acima de R$ 300,00, ganhe um cafe artesanal para acompanhar seu brownie. Um complemento que valoriza o momento.',
    value: 'R$ 35,00',
    color: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Cupom de 10% OFF',
    description: 'Use o cupom HELLO10 no primeiro pedido. Um gesto simples para quem esta experimentando pela primeira vez.',
    value: 'R$ 12,00',
    color: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Embalagem Personalizada',
    description: 'Para encomendas acima de 20 unidades, a embalagem pode ser personalizada com nome ou mensagem. Ideal para presentes e eventos.',
    value: 'R$ 10,00',
    color: 'bg-purple-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

export default function Bonus() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-code-green font-mono text-sm">// vantagens inclusas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Vai mais alem do brownie
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Algumas coisas extras que fazem parte do experiencia. Sem custo adicional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${bonus.color} ${bonus.border} border rounded-2xl p-6 mb-4 hover:shadow-md transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${bonus.iconBg} flex items-center justify-center flex-shrink-0`}>
                <FaGift className={`${bonus.iconColor} text-xl`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-brownie-dark font-bold text-lg">{bonus.title}</h3>
                  <span className="text-code-green font-mono text-sm font-bold">GRATIS</span>
                </div>
                <p className="text-brownie/70 text-sm mb-2">{bonus.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-brownie/40 text-sm line-through">Valor: {bonus.value}</span>
                  <span className="text-code-green text-sm font-bold">= R$ 0,00</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-brownie/60 mb-2">Valor total dos bonus:</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-brownie/40 text-2xl line-through">R$ 57,00</span>
            <span className="text-code-green text-3xl font-bold">R$ 0,00</span>
          </div>
          <p className="text-caramel mt-2 font-mono text-sm">Incluso no seu pedido!</p>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5524999518926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-code-green text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-code-green/30 hover:shadow-xl hover:shadow-code-green/40 transition-all duration-300"
          >
            <FaCheck className="text-xl" />
            Garantir Meus Bonus
          </a>
        </div>
      </div>
    </section>
  );
}
