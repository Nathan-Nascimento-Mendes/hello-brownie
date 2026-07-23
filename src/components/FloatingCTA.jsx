import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingCTA() {
  return (
    <a
      href="https://wa.me/5524999518926?text=Ol%C3%A1!%20Vim%20pela%20landing%20page%20e%20quero%20fazer%20um%20pedido!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl shadow-emerald-300 hover:shadow-emerald-400 transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
