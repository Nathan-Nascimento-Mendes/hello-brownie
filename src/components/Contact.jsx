import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaWhatsapp className="text-2xl" />,
    label: 'WhatsApp',
    value: '(24) 99951-8926',
    href: 'https://wa.me/5524999518926',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    label: 'E-mail',
    value: 'contato@hellobrownie.com',
    href: 'mailto:contato@hellobrownie.com',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl" />,
    label: 'Endereco',
    value: 'Sua cidade, Estado',
    href: null,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
];

const socials = [
  { icon: <FaInstagram />, label: 'Instagram', href: '#', hover: 'hover:text-pink-500 hover:border-pink-300' },
  { icon: <FaFacebook />, label: 'Facebook', href: '#', hover: 'hover:text-blue-500 hover:border-blue-300' },
  { icon: <FaTiktok />, label: 'TikTok', href: '#', hover: 'hover:text-cyan-500 hover:border-cyan-300' },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-code-green font-mono text-sm">// fale conosco</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-2 mb-4">
            Contato
          </h2>
          <p className="text-brownie/60 max-w-2xl mx-auto">
            Tire dúvidas, faça encomendas ou simplesmente nos cumprimente. Estamos disponíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, i) => (
            <div
              key={i}
              className={`${c.bg} ${c.border} border rounded-2xl p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`${c.color} mb-3 flex justify-center`}>{c.icon}</div>
              <div className="text-brownie-dark font-bold mb-1">{c.label}</div>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-brownie/60 text-sm hover:text-emerald-600 transition-colors">
                  {c.value}
                </a>
              ) : (
                <span className="text-brownie/60 text-sm">{c.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-cream border border-brownie/10 flex items-center justify-center text-brownie/50 transition-all duration-300 text-lg shadow-sm ${s.hover}`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
