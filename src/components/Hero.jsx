import { useState, useEffect } from 'react';
import { FaCookieBite, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Brownies artesanais de verdade...';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-code-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-code-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-code-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-20 left-10 text-brownie/5 font-mono text-9xl font-bold">{'{ }'}</div>
        <div className="absolute bottom-20 right-10 text-code-pink/5 font-mono text-9xl font-bold">{'< />'}</div>
        <div className="absolute top-1/3 right-1/3 text-code-orange/5 font-mono text-7xl font-bold">fn()</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-code-green/10 border border-code-green/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-code-green rounded-full animate-pulse"></span>
              <span className="text-code-green font-mono text-sm">// arte manual em forma de brownie</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brownie-dark mb-6 leading-tight">
              Cada pedaço carrega{' '}
              <span className="gradient-text">
                intenção
              </span>
            </h1>

            <p className="hero-lead text-xl text-brownie/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Na <span className="text-caramel font-semibold">Hello Brownie</span>, cada receita é preparada sob encomenda com{' '}
              <span className="text-code-green font-mono">cacau de qualidade</span> e ingredientes que selecionamos com cuidado.
              O resultado fala por si.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://wa.me/5524999518926"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-code-green text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-code-green/30 hover:shadow-xl hover:shadow-code-green/40 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-glow"
              >
                {'> Fazer Pedido'}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#produtos"
                className="border-2 border-brownie/20 text-brownie px-8 py-4 rounded-xl font-bold text-lg hover:bg-brownie/5 transition-all duration-300 text-center"
              >
                Ver Cardápio
              </a>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-code-green">500+</div>
                <div className="text-sm text-brownie/50 font-mono">Pedidos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-caramel">4.9</div>
                <div className="text-sm text-brownie/50 font-mono">Nota no Google</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-code-pink">100%</div>
                <div className="text-sm text-brownie/50 font-mono">Artesanal</div>
              </div>
            </div>
          </div>

          <div className="terminal-window max-w-lg mx-auto w-full animate-float">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <span className="text-white/50 text-sm font-mono ml-2">hello-brownie.js</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-code-green">$</span>
                <span className="text-white/80 ml-2">npx create-brownie@latest --sabor chocolate</span>
              </div>
              <div className="text-white/60 mb-2">
                <span className="text-code-blue">✓</span> Preparando massa...
              </div>
              <div className="text-white/60 mb-2">
                <span className="text-code-purple">✓</span> Adicionando cacau...
              </div>
              <div className="text-white/60 mb-4">
                <span className="text-code-pink">✓</span> Compilando sabor com sucesso!
              </div>
              <div className="mb-4">
                <span className="text-code-green">$</span>
                <span className="text-white/80 ml-2">echo $sabor</span>
              </div>
              <div className="text-code-green text-lg mb-4">
                {displayText}
                <span className="animate-blink">_</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <FaCookieBite className="text-2xl animate-bounce" />
                <span className="font-bold">Brownie pronto e delicioso!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
