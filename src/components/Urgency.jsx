import { useState, useEffect } from 'react';

function getTimeLeft() {
  const end = new Date();
  end.setDate(end.getDate() + 5);
  end.setHours(end.getHours() + 12);

  return function calc() {
    const diff = end - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };
}

export default function Urgency() {
  const [time, setTime] = useState({ days: 5, hours: 12, minutes: 34, seconds: 56 });

  useEffect(() => {
    const calc = getTimeLeft();
    setTime(calc());
    const interval = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-amber-50 to-purple-50 border border-emerald-200 rounded-2xl p-8 md:p-12 text-center">
          <span className="text-code-green font-mono text-sm">// condição especial</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brownie-dark mt-4 mb-4">
            Uma oportunidade que tem prazo
          </h2>
          <p className="text-brownie/70 text-lg mb-8 max-w-xl mx-auto">
            Durante esta semana, utilize o cupom{' '}
            <span className="text-caramel font-mono font-bold bg-amber-100 px-2 py-1 rounded">HELLO10</span>{' '}
            e ganhe <span className="text-code-green font-bold">10% de desconto</span> em qualquer pedido.
          </p>

          <div className="flex justify-center gap-4 mb-10">
            {[
              { value: time.days, label: 'Dias', color: 'from-emerald-400 to-teal-500' },
              { value: time.hours, label: 'Horas', color: 'from-amber-400 to-orange-500' },
              { value: time.minutes, label: 'Min', color: 'from-purple-400 to-pink-500' },
              { value: time.seconds, label: 'Seg', color: 'from-blue-400 to-cyan-500' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`text-3xl md:text-4xl font-bold font-mono text-white bg-gradient-to-br ${item.color} rounded-xl px-4 py-3 min-w-[70px] shadow-lg`}>
                  {pad(item.value)}
                </div>
                <div className="text-brownie/50 text-xs font-mono mt-2 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5524999518926"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-code-green text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-code-green/30 hover:shadow-xl hover:shadow-code-green/40 transition-all duration-300"
          >
            Aproveitar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
