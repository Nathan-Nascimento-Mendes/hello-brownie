import { FaMoneyBillWave, FaCreditCard, FaIdCard, FaWallet } from 'react-icons/fa';

const methods = [
  { icon: <FaMoneyBillWave className="text-2xl" />, name: 'Pix', detail: '5% de desconto', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { icon: <FaCreditCard className="text-2xl" />, name: 'Cartão de Crédito', detail: 'Até 3x sem juros', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  { icon: <FaIdCard className="text-2xl" />, name: 'Cartão de Débito', detail: 'À vista', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
  { icon: <FaWallet className="text-2xl" />, name: 'Dinheiro', detail: 'Na entrega', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
];

export default function Payment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-code-green font-mono text-sm">// como pagar</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Formas de Pagamento
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Flexibilidade para que a experiência seja tão boa quanto o sabor.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {methods.map((m, i) => (
            <div
              key={i}
              className={`${m.bg} ${m.border} border rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`${m.color} mb-3 flex justify-center`}>{m.icon}</div>
              <div className="text-brownie-dark font-bold text-sm mb-1">{m.name}</div>
              <div className={`${m.color} text-xs font-mono`}>{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
