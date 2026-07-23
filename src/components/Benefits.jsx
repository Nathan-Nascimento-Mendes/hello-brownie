import { FaTruck, FaFlask, FaUtensils, FaCreditCard, FaHeart, FaLaptop } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaTruck className="text-2xl" />,
    title: 'Entrega no Prazo',
    text: 'Preparado sob encomenda e entregue com agilidade. Você acompanha cada etapa pelo WhatsApp.',
    color: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: <FaFlask className="text-2xl" />,
    title: 'Ingredientes Selecionados',
    text: 'Cacau de qualidade, ovos frescos e insumos cuidadosamente escolhidos. A diferença está nos detalhes.',
    color: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: <FaUtensils className="text-2xl" />,
    title: 'Preparo Artesanal',
    text: 'Feito à mão, com atenção em cada etapa. Sem industrialização, sem atalhos. O tempo que cada receita merece.',
    color: 'bg-purple-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: <FaCreditCard className="text-2xl" />,
    title: 'Pagamento Flexível',
    text: 'Pix, cartão ou dinheiro. Escolha o método que funciona melhor para o seu momento.',
    color: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: <FaHeart className="text-2xl" />,
    title: 'Feito com Intenção',
    text: 'Cada pedido é tratado como único. A preocupação com a experiência do começo ao fim faz parte do processo.',
    color: 'bg-pink-50',
    border: 'border-pink-200',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: <FaLaptop className="text-2xl" />,
    title: 'Pedido Simplificado',
    text: 'Um clique no WhatsApp e tudo se resolve. Sem cadastro, sem complicação, sem etapas desnecessárias.',
    color: 'bg-cyan-50',
    border: 'border-cyan-200',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-code-green font-mono text-sm">// por que a hello brownie</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            O que faz a diferença
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Existem muitas opções no mercado. Aqui estão alguns dos motivos pelos quais nossos clientes retornam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`${benefit.color} ${benefit.border} border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.iconBg} flex items-center justify-center ${benefit.iconColor} mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-brownie-dark mb-2">{benefit.title}</h3>
              <p className="text-brownie/70 text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
