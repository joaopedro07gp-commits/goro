import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useToast } from './Toast';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const { showToast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    showToast("Logout realizado com sucesso.");
  };

  // Fecha o menu ao mudar de rota ou redimensionar para desktop
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToCommunity = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#community';
    } else {
      document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black/20 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/10 shadow-[0_4_20px_rgba(157,0,255,0.1)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-black italic text-purple-500 drop-shadow-[0_0_10px_rgba(157,0,255,0.8)] font-space-grotesk tracking-tighter uppercase">
          Goró Mansão
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/catalogo" className="font-space-grotesk tracking-tighter uppercase text-white/70 hover:text-green-400 transition-all duration-300">Shop</Link>
          <Link to="/reducao-de-danos" className="font-space-grotesk tracking-tighter uppercase text-white/70 hover:text-green-400 transition-all duration-300">Redução de Danos</Link>
          <a onClick={scrollToCommunity} className="font-space-grotesk tracking-tighter uppercase text-white/70 hover:text-green-400 transition-all duration-300 cursor-pointer">Community</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/checkout" className="material-symbols-outlined text-white/70 hover:text-green-400 scale-95 active:opacity-80 transition-all">shopping_bag</Link>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="material-symbols-outlined text-white/70 hover:text-red-400 scale-95 active:opacity-80 transition-all">
              logout
            </button>
          ) : (
            <Link to="/login" className="material-symbols-outlined text-white/70 hover:text-green-400 scale-95 active:opacity-80 transition-all">
              person
            </Link>
          )}
          <button className="md:hidden material-symbols-outlined text-white z-[60]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] bg-black/95 backdrop-blur-2xl z-50 p-8 flex flex-col gap-8 md:hidden animate-in fade-in slide-in-from-top-10 duration-300">
          <Link to="/catalogo" className="text-3xl font-space-grotesk font-black uppercase text-white hover:text-green-400">Shop</Link>
          <Link to="/reducao-de-danos" className="text-3xl font-space-grotesk font-black uppercase text-white hover:text-green-400">Redução de Danos</Link>
          <a onClick={scrollToCommunity} className="text-3xl font-space-grotesk font-black uppercase text-white hover:text-green-400 cursor-pointer">Community</a>
          <div className="mt-auto pb-20 border-t border-white/10 pt-10">
            <p className="text-purple-500 font-bold uppercase tracking-widest text-xs mb-4">Follow the Mansion</p>
            <div className="flex gap-6">
              <span className="material-symbols-outlined text-white/50">brand_awareness</span>
              <span className="material-symbols-outlined text-white/50">campaign</span>
              <span className="material-symbols-outlined text-white/50">share</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
