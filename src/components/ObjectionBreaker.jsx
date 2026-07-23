import { FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

const objections = [
  {
    objection: '"Isso e tipo brownie normal..."',
    answer: 'A diferenca esta no preparo. Feito sob encomenda, com cacau de qualidade e sem conservantes. Quando voce prova, percebe que o tempo e a dedicacao fazem toda diferenca.',
    qColor: 'text-orange-500',
    aColor: 'text-emerald-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    objection: '"Nao tenho tempo pra esperar..."',
    answer: 'O pedido e rapido pelo WhatsApp e o prazo de entrega e curto. Alem disso, voce recebe atualizacoes em tempo real. E mais pratico do que parece.',
    qColor: 'text-amber-500',
    aColor: 'text-emerald-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    objection: '"Ja comi brownie em outro lugar..."',
    answer: 'Cada lugar tem seu estilo. O nosso e feito sob encomenda, sem estoque, sem fila. Quando voce experimenta, percebe que o processo faz diferenca no resultado.',
    qColor: 'text-purple-500',
    aColor: 'text-emerald-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    objection: '"Nao sei qual sabor escolher..."',
    answer: 'Comece pelo Brownie Comum por R$ 5,00. E a forma mais simples de descobrir se o estilo e pra voce. Sem compromisso, sem pressao.',
    qColor: 'text-blue-500',
    aColor: 'text-emerald-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
];

export default function ObjectionBreaker() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-mono text-sm">// pensamentos comuns</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Tudo bem ter duvidas
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Cada pessoa que chega ate nos carrega uma expectativa diferente. Aqui vamos esclarecendo o que costuma surgir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objections.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} ${item.border} border rounded-2xl p-6 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start gap-3 mb-4">
                <FaQuestionCircle className={`${item.qColor} text-xl mt-1 flex-shrink-0`} />
                <h3 className="text-brownie-dark font-bold text-lg">{item.objection}</h3>
              </div>
              <div className="flex items-start gap-3 ml-8">
                <FaCheckCircle className={`${item.aColor} text-xl mt-1 flex-shrink-0`} />
                <p className="text-brownie/70 text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5524999518926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 transition-all duration-300"
          >
            Tirar Minhas Duvidas
          </a>
        </div>
      </div>
    </section>
  );
}
