import { FaCookieBite, FaBirthdayCake, FaBoxes, FaPhoneAlt } from 'react-icons/fa';

const products = [
  {
    name: 'Brownie Comum',
    description: 'O clássico que nunca sai de moda. Massa densa com cacau, textura macia por dentro e crocante nas bordas.',
    price: 'R$ 5,00',
    pricePer: 'unidade',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    tag: 'Clássico',
    tagBg: 'bg-amber-500',
  },
  {
    name: 'Brownie Recheado',
    description: 'Escolha entre Ninho com leite condensado ou Chocolate belga. Uma camada generosa de recheio sobre a massa.',
    price: 'R$ 15,00',
    pricePer: 'unidade',
    image: 'https://images.unsplash.com/photo-1607114910221-3b4b6d77b049?w=400&h=300&fit=crop',
    tag: 'Favorito',
    tagBg: 'bg-orange-500',
    featured: true,
    options: ['Ninho', 'Chocolate'],
  },
  {
    name: 'Copo da Felicidade',
    description: 'Camadas de brownie triturado, cream cheese, Nutella e finalizado com raspas de chocolate. Uma sobremesa completa.',
    price: 'R$ 20,00',
    pricePer: 'unidade',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    tag: 'Especial',
    tagBg: 'bg-purple-500',
  },
];

const extras = [
  {
    name: 'Bolo de Brownie',
    description: 'Bolo de brownie personalizado para ocasiões especiais. Sabores e tamanhos sob consulta.',
    icon: <FaBirthdayCake className="text-3xl" />,
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Encomenda em Lote',
    description: 'Quantidades a partir de 30 unidades. Desconto progressivo conforme a quantidade. Ideal para eventos e empresas.',
    icon: <FaBoxes className="text-3xl" />,
    gradient: 'from-blue-400 to-purple-500',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 relative bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-purple-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-code-green font-mono text-sm">// nosso cardápio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Cardápio{' '}
            <span className="gradient-text">{'{ }'}</span>
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Feitos com ingredientes selecionados e preparo artesanal. Cada pedaço carrega a essência de quem ama o que faz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                product.featured ? 'ring-2 ring-emerald-400/50 shadow-lg shadow-emerald-100' : 'shadow-md border border-brownie/10'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-3 right-3 ${product.tagBg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                  {product.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-brownie-dark mb-2">{product.name}</h3>
                <p className="text-brownie/60 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                {product.options && (
                  <div className="flex gap-2 mb-4">
                    {product.options.map((opt) => (
                      <span key={opt} className="text-xs bg-brownie/5 border border-brownie/10 text-brownie/70 px-2 py-1 rounded-full">
                        {opt}
                      </span>
                    ))}
                  </div>
                )}

                <div className="border-t border-brownie/10 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-caramel">{product.price}</span>
                    <span className="text-brownie/40 text-sm ml-1">/ {product.pricePer}</span>
                  </div>
                  <a
                    href="https://wa.me/5524999518926"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-xl font-mono text-sm hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-code-green font-mono text-sm">// encomendas</span>
            <h3 className="text-2xl font-bold text-brownie-dark mt-2">Planejamento Sob Medida</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {extras.map((extra, index) => (
              <div
                key={index}
                className="bg-cream border border-brownie/10 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${extra.gradient} flex items-center justify-center text-white mb-4 shadow-md`}>
                  {extra.icon}
                </div>
                <h4 className="text-lg font-bold text-brownie-dark mb-2">{extra.name}</h4>
                <p className="text-brownie/60 text-sm leading-relaxed mb-4">{extra.description}</p>
                <a
                  href="https://wa.me/5524999518926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-mono text-sm hover:text-emerald-700 transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                  Solicitar orçamento
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://wa.me/5524999518926"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-amber-50 via-orange-50 to-pink-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-all duration-300"
          >
            <div className="text-5xl">☕</div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-amber-700 mb-1">Bônus: Café Especial</h3>
              <p className="text-brownie/60 text-sm">
                Pedidos acima de <span className="text-caramel font-bold">R$ 300,00</span> ganham um café artesanal cortesia. Um complemento que valoriza o momento.
              </p>
            </div>
            <FaCookieBite className="text-amber-400 text-2xl hidden md:block ml-auto" />
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5524999518926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-code-green text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-code-green/30 hover:shadow-xl hover:shadow-code-green/40 transition-all duration-300"
          >
            Ver Cardápio Completo
          </a>
        </div>
      </div>
    </section>
  );
}
