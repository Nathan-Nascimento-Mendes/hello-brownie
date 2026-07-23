import { useState, useEffect } from 'react';
import { FaTerminal, FaTimes, FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#produtos', label: 'Cardápio' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-200/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2 text-brownie font-mono text-lg font-bold">
            <FaTerminal className="text-xl text-code-green" />
            <span>&lt;HelloBrownie/&gt;</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brownie/70 hover:text-code-green transition-colors font-mono text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5524999518926"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-code-green text-white px-5 py-2 rounded-lg font-mono text-sm font-bold hover:bg-code-green/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Pedir Agora
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brownie text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-amber-200/50">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-brownie/70 hover:text-code-green transition-colors font-mono text-sm py-2"
              >
                {'> '}{link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5524999518926"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-code-green text-white px-4 py-3 rounded-lg font-mono text-sm font-bold text-center mt-4"
            >
              Pedir Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
