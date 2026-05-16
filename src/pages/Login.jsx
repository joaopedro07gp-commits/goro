import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../components/Toast';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        showToast(isRegister ? "Conta criada com sucesso!" : "Login realizado com sucesso! Bem-vindo ao Corre.");
        
        setAuth(true);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        showToast(data.error || "Erro ao processar solicitação.");
      }
    } catch (err) {
      console.error(err);
      showToast("Erro de conexão com o servidor. O backend está rodando?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0A0A0A] overflow-hidden">
      {/* Left Side: Brand Image */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-screen overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A] z-10 hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10 md:hidden"></div>
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10"></div>
        
        <img 
          src="/assets/toguro-prayer.jpg" 
          alt="The Mansion Life" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5000ms] ease-out"
        />
        
        {/* Floating Brand Elements */}
        <div className="absolute bottom-12 left-12 z-20 hidden md:block">
          <div className="glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h2 className="font-space-grotesk text-3xl font-black text-white uppercase italic leading-none mb-2">
              The Mansion <span className="text-secondary-container">Life</span>
            </h2>
            <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Respeita o Corre. Foca no Progresso.</p>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 relative">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full max-w-md relative z-10">
          <div className="mb-12 text-center md:text-left">
            <Link to="/" className="inline-block text-2xl font-black italic text-purple-500 drop-shadow-[0_0_10px_rgba(157,0,255,0.8)] font-space-grotesk tracking-tighter uppercase mb-8">
              Goró Mansão
            </Link>
            <h1 className="font-space-grotesk text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
              {isRegister ? 'CRIAR' : 'BEM-VINDO'} <span className="text-secondary-container">{isRegister ? 'CONTA' : 'DE VOLTA'}</span>
            </h1>
            <p className="text-on-surface-variant font-medium">
              {isRegister ? 'Preencha os dados para entrar na família.' : 'Insira suas credenciais para entrar na Mansão Maromba.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-container ml-1">E-mail de Acesso</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/20 group-focus-within:text-secondary-container transition-colors">alternate_email</span>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:border-secondary-container focus:bg-white/10 outline-none transition-all font-be-vietnam-pro"
                  placeholder="seu@corre.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-container ml-1">Senha Secreta</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/20 group-focus-within:text-secondary-container transition-colors">key</span>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:border-secondary-container focus:bg-white/10 outline-none transition-all font-be-vietnam-pro"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center px-1">
              {!isRegister && (
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-0 focus:ring-offset-0 transition-all" />
                  <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">Lembrar de mim</span>
                </label>
              )}
              {!isRegister && (
                <button 
                  type="button" 
                  onClick={() => showToast("Enviamos as instruções para o seu e-mail!")}
                  className="text-[10px] text-white/40 hover:text-secondary-container transition-colors uppercase font-black tracking-widest"
                >
                  Esqueceu a senha?
                </button>
              )}
            </div>

            <button 
              type="submit"
              disabled={loading}
              className={`w-full bg-secondary-container text-on-secondary-container font-black text-lg py-5 rounded-xl hover:bg-secondary-fixed hover:scale-[1.01] active:scale-95 transition-all shadow-[0_10px_40px_rgba(47,248,1,0.2)] uppercase italic tracking-widest flex items-center justify-center gap-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'CARREGANDO...' : (isRegister ? 'CADASTRAR E ENTRAR' : 'ENTRAR NO CORRE')}
              {!loading && <span className="material-symbols-outlined">chevron_right</span>}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-white/40 font-be-vietnam-pro">
              {isRegister ? 'Já faz parte da família?' : 'Ainda não faz parte da família?'} {' '}
              <button 
                onClick={() => setIsRegister(!isRegister)}
                className="text-secondary-container font-black hover:text-secondary-fixed transition-colors underline-offset-4"
              >
                {isRegister ? 'FAÇA LOGIN' : 'CADASTRE-SE'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
