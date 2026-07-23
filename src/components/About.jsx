import { FaCode, FaBug, FaRocket } from 'react-icons/fa';

const cards = [
  {
    icon: <FaCode className="text-2xl" />,
    title: 'Nascidos da Paixão',
    text: 'Tudo começou com a vontade de criar algo que as pessoas realmente se conectassem. Cada receita carrega um pedado de história e dedicação.',
    color: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: <FaBug className="text-2xl" />,
    title: 'Receitas Aperfeiçoadas',
    text: 'Foram muitas tentativas até chegarmos na fórmula ideal. Ingredientes simples — ovos, cacau, farinha, óleo e açúcar — combinados com paciência e técnica.',
    color: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: <FaRocket className="text-2xl" />,
    title: 'Do Forno pra Você',
    text: 'Preparado sob encomenda, cada brownie sai fresquinho do forno direto para as suas mãos. Sem estoque, sem fila, sem surpresa.',
    color: 'bg-purple-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-code-green font-mono text-sm">// quem somos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Quem Somos Nós
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Por trás de cada brownie existe uma história que começou com vontade de fazer diferente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${card.color} ${card.border} border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-brownie-dark mb-3">{card.title}</h3>
              <p className="text-brownie/70 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
