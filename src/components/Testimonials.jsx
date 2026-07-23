import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    stars: 5,
    text: '"Pedi o brownie recheado de Ninho para o aniversário da minha filha. Todos ficaram encantados. A textura é perfeita e o recheio generoso. Virou tradição na família."',
    name: 'Mariana Oliveira',
    role: 'Cliente desde 2024',
    avatar: 'M',
    color: 'from-emerald-400 to-teal-500',
    cardBg: 'bg-emerald-50',
    cardBorder: 'border-emerald-200',
  },
  {
    stars: 5,
    text: '"O Copo da Felicidade é surreal. Cada camada tem um sabor diferente e você não sabe por onde parar. Pedi três vezes no mesmo mês. Não me arrependo."',
    name: 'Pedro Henrique',
    role: 'Cliente recorrente',
    avatar: 'P',
    color: 'from-amber-400 to-orange-500',
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
  },
  {
    stars: 5,
    text: '"Encomendei 50 unidades para o evento da empresa. Chegou tudo certinho, embalado com cuidado e no horário combinado. O Brownie Comum agradou todo mundo."',
    name: 'Juliana Costa',
    role: 'Eventos corporativos',
    avatar: 'J',
    color: 'from-purple-400 to-pink-500',
    cardBg: 'bg-purple-50',
    cardBorder: 'border-purple-200',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-caramel font-mono text-sm">// o que dizem sobre nós</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Quem já experimentou, recomenda
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            A experiência de quem já provou fala mais do que qualquer anúncio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${t.cardBg} ${t.cardBorder} border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <FaStar key={j} className="text-caramel text-lg" />
                ))}
              </div>
              <p className="text-brownie/70 italic mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-brownie-dark font-semibold text-sm">{t.name}</div>
                  <div className="text-brownie/50 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
