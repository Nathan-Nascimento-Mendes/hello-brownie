import { FaTimes } from 'react-icons/fa';

const objections = [
  {
    question: '"Achei caro..."',
    answer: 'Cada brownie é preparado sob encomenda com ingredientes selecionados. Quando você compara com confeitarias artesanais, percebe que o cuidado reflete no preço — e no sabor.',
    color: 'bg-red-50',
    border: 'border-red-200',
  },
  {
    question: '"Não atende minha região..."',
    answer: 'Estamos em constante expansão. Mande sua região no WhatsApp e verificamos na hora. Novas áreas são adicionadas semanalmente.',
    color: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    question: '"Não sei se vou gostar..."',
    answer: 'O Brownie Comum por R$ 5,00 é uma forma simples de experimentar. Sem compromisso, sem risco. Se agradar, a gente sabe que você volta.',
    color: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    question: '"Tenho restrição alimentar..."',
    answer: 'Todas as informações nutricionais estão disponíveis. Mande sua restrição no WhatsApp e orientamos com transparência.',
    color: 'bg-purple-50',
    border: 'border-purple-200',
  },
];

export default function Objections() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-mono text-sm">// tirando suas dúvidas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Pensamentos que talvez você tenha
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            É natural ter dúvidas antes de um primeiro pedido. Vamos esclarecer o que pode estar passando pela sua cabeça.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objections.map((obj, i) => (
            <div
              key={i}
              className={`${obj.color} ${obj.border} border rounded-2xl p-6 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-500 flex-shrink-0 mt-1">
                  <FaTimes className="text-sm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brownie-dark mb-3">{obj.question}</h3>
                  <p className="text-brownie/70 leading-relaxed">{obj.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
