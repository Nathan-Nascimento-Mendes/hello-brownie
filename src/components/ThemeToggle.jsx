import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const THEMES = {
  light: FaSun,
  dark: FaMoon,
};

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('hb-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hb-theme', theme);
  }, [theme]);

  const NextIcon = THEMES[theme === 'light' ? 'dark' : 'light'];

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
      title={theme === 'light' ? 'Tema escuro 🌙' : 'Tema claro ☀️'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-brownie/20 bg-cream hover:bg-caramel/20 text-brownie transition-all duration-300 ${className}`}
    >
      <NextIcon className="text-base" />
    </button>
  );
}
