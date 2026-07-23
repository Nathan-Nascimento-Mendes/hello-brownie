import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const faqs = [
  {
    q: 'Quais são as opções de pagamento?',
    a: 'Aceitamos Pix com desconto, cartão de crédito em até 3x sem juros, cartão de débito e dinheiro na entrega.',
    color: 'border-emerald-200',
    activeColor: 'border-emerald-400',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    q: 'Qual o prazo de entrega?',
    a: 'Preparado sob encomenda, o prazo padrão é de 1 a 2 dias úteis. Regiões centrais podem receber em até 30 minutos. Acompanhe pelo WhatsApp.',
    color: 'border-amber-200',
    activeColor: 'border-amber-400',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    q: 'Vocês atendem encomendas para festas?',
    a: 'Sim. Trabalhamos com encomendas para festas, casamentos, formaturas e eventos corporativos. Cotação personalizada pelo WhatsApp.',
    color: 'border-purple-200',
    activeColor: 'border-purple-400',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    q: 'Os brownies contêm glúten?',
    a: 'A receita padrão contém glúten. Trabalhamos com opções alternativas sob encomenda. Informe sua restrição no momento do pedido.',
    color: 'border-pink-200',
    activeColor: 'border-pink-400',
    bg: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    q: 'Como acompanho meu pedido?',
    a: 'Você recebe atualizações em tempo real pelo WhatsApp. Da confirmação à entrega, cada etapa é comunicada.',
    color: 'border-blue-200',
    activeColor: 'border-blue-400',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    q: 'Preciso criar conta para comprar?',
    a: 'Não. O processo é direto: escolha seu brownie, confirme pelo WhatsApp e aguarde a entrega. Sem cadastro, sem formulário longo.',
    color: 'border-cyan-200',
    activeColor: 'border-cyan-400',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    q: 'Qual a política para encomendas em lote?',
    a: 'A partir de 30 unidades, oferecemos desconto progressivo. Quanto maior a quantidade, melhor o valor unitário. Solicite cotação pelo WhatsApp.',
    color: 'border-orange-200',
    activeColor: 'border-orange-400',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    q: 'Como entro em contato?',
    a: 'WhatsApp, e-mail ou redes sociais. Respondemos durante o horário comercial com atenção e rapidez.',
    color: 'border-teal-200',
    activeColor: 'border-teal-400',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-caramel font-mono text-sm">// dúvidas frequentes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Perguntas que costumam surgir
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Se a sua dúvida não estiver aqui, basta mandar uma mensagem. A gente responde rápido.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                active === i
                  ? `${faq.activeColor} ${faq.bg}`
                  : `${faq.color} bg-white`
              }`}
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-brownie-dark font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                <FaPlus
                  className={`${faq.iconColor} flex-shrink-0 transition-transform duration-300 ${
                    active === i ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === i ? 'max-h-40 px-6 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-brownie/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
