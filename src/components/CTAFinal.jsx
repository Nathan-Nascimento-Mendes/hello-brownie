import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function CTAFinal() {
  return (
    <section id="pedido" className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-code-green font-mono text-sm">// próximo passo</span>
        <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-4 mb-4">
          Pronto para experimentar?
        </h2>
        <p className="text-brownie/70 text-lg mb-10 max-w-xl mx-auto">
          Um pedido simples, uma experiência que surpreende. Estamos aqui para transformar seu momento em algo especial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5524999518926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Fazer Pedido pelo WhatsApp
          </a>
          <a
            href="mailto:contato@hellobrownie.com"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300"
          >
            <FaEnvelope className="text-xl" />
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
