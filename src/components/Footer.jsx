import { FaTerminal } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 bg-brownie-dark border-t border-brownie-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 text-code-green font-mono text-lg font-bold mb-2">
          <FaTerminal />
          <span>&lt;HelloBrownie/&gt;</span>
        </div>
        <p className="text-white/60 text-sm mb-6">Brownies artesanais com temática de informática.</p>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {['#inicio', '#sobre', '#produtos', '#depoimentos', '#faq', '#contato'].map((href) => {
            const labels = { '#inicio': 'Início', '#sobre': 'Sobre', '#produtos': 'Cardápio', '#depoimentos': 'Depoimentos', '#faq': 'FAQ', '#contato': 'Contato' };
            return (
              <a key={href} href={href} className="text-white/50 hover:text-code-green transition-colors text-sm">
                {labels[href]}
              </a>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-xs">&copy; 2026 Hello Brownie. Todos os direitos reservados.</p>
          <p className="text-white/30 text-xs font-mono mt-1">// feito com {'<3'} e cafe</p>
        </div>
      </div>
    </footer>
  );
}
