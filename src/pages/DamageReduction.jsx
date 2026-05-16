import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/Toast';

const DamageReduction = () => {
  const { showToast } = useToast();
  return (
    <div className="bg-[#0A0A0A] text-on-background font-be-vietnam-pro overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-[614px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/20 via-transparent to-background"></div>
          <div className="absolute -top-1/2 -left-1/4 w-[80%] h-[150%] bg-primary-container/10 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-[80%] h-[150%] bg-secondary-container/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="font-space-grotesk text-sm tracking-[0.2em] text-secondary-fixed mb-4 block uppercase">
            A EVOLUÇÃO DO ROLÊ
          </span>
          <h1 className="font-space-grotesk text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-fixed to-secondary-fixed tracking-tighter">
            Por que o Goró?
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-on-surface-variant leading-relaxed">
            O Corre não para. Descubra por que a Mansão Maromba criou o primeiro drink tecnológico feito para quem quer o máximo de energia sem comprometer a saúde. <span className="text-secondary-container font-bold italic">Sem Erro.</span>
          </p>
        </div>
      </header>

      {/* Ticker Tape - Slanted (The Stitch Style) */}
      <div className="bg-surface-container-highest/30 border-y border-white/5 py-6 w-full rotate-[-1.5deg] scale-105 z-20 my-12 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 font-space-grotesk tracking-[0.2em] uppercase text-white/40 text-sm animate-marquee">
          {Array(6).fill([
            "MANSÃO MAROMBA EXCLUSIVE",
            "O CORRE NÃO PARA",
            "ENERGY + VITAMINS",
            "LOW CALORIE VIBES",
            "NO CRASH ZONE"
          ]).flat().map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Side A: Danger */}
          <div className="glass-card p-8 rounded-2xl border border-error/20 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-error">warning</span>
            </div>
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-error/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-error">dangerous</span>
              </div>
              <h2 className="font-space-grotesk text-2xl md:text-3xl uppercase text-error font-bold">Energético Comum + Álcool</h2>
            </div>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-error mt-1 text-2xl">heart_broken</span>
                <div>
                  <p className="font-space-grotesk font-bold text-on-surface uppercase tracking-wider text-sm mb-1">Arritmia & Taquicardia</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Coração acelerado e pressão descompensada. O corpo entra em colapso silencioso.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-error mt-1 text-2xl">battery_0_bar</span>
                <div>
                  <p className="font-space-grotesk font-bold text-on-surface uppercase tracking-wider text-sm mb-1">The Sudden Crash</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Pico de açúcar seguido por uma queda brusca. O fim do rolê antes da hora.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-error mt-1 text-2xl">bolt</span>
                <div>
                  <p className="font-space-grotesk font-bold text-on-surface uppercase tracking-wider text-sm mb-1">Overdose de Cafeína</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Nervosismo, ansiedade e desidratação severa. O "corre" que te trava.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Side B: Safety (Goró Mansão) */}
          <div className="glass-card p-10 rounded-2xl border border-secondary-container/30 relative group shadow-[0_0_40px_rgba(47,248,1,0.1)] overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[120px] text-secondary-container">verified</span>
            </div>
            <div className="mb-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center neon-glow-green">
                <span className="material-symbols-outlined text-secondary-container">shield_with_heart</span>
              </div>
              <h2 className="font-space-grotesk text-2xl md:text-3xl uppercase text-secondary-container font-bold">A Ciência do Goró</h2>
            </div>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary-container mt-1 text-2xl">ecg_heart</span>
                <div>
                  <p className="font-space-grotesk font-bold text-secondary-fixed uppercase tracking-wider text-sm mb-1">Continuous Vibe</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Fórmula balanceada que mantém a energia estável, sem estressar seu coração.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary-container mt-1 text-2xl">water_drop</span>
                <div>
                  <p className="font-space-grotesk font-bold text-secondary-fixed uppercase tracking-wider text-sm mb-1">Vitamin Hydration</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Complexo B e Eletrólitos que hidratam enquanto você curte. Menos ressaca, mais vida.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary-container mt-1 text-2xl">check_circle</span>
                <div>
                  <p className="font-space-grotesk font-bold text-secondary-fixed uppercase tracking-wider text-sm mb-1">Low Sugar Peak</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Zero picos glicêmicos. Energia limpa que respeita o seu shape e sua saúde.</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-secondary-container/20">
              <Link 
                to="/catalogo" 
                className="w-full bg-secondary-container text-on-secondary font-bold uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary-fixed hover:scale-[1.02] transition-all group active:scale-95 shadow-[0_0_20px_rgba(47,248,1,0.3)]"
              >
                PEGA O SEU AGORA
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Tech Specs - Restored from Stitch */}
      <section className="py-24 px-6 bg-surface-container-low/30 relative overflow-hidden">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="font-space-grotesk text-4xl md:text-5xl uppercase mb-16 text-center font-bold">
            Fórmula <span className="text-primary-container italic">Superior</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Main Tech */}
            <div className="md:col-span-2 glass-card p-10 border border-white/5 rounded-3xl flex flex-col md:flex-row gap-10 items-center hover:border-primary-container/50 transition-colors">
              <div className="w-full md:w-1/2">
                <span className="text-xs font-bold tracking-[0.2em] text-primary-container mb-2 block uppercase">POWERED BY TECH</span>
                <h3 className="font-space-grotesk text-3xl md:text-4xl uppercase mb-6 leading-tight font-black">O CORRE<br/>ESTRATÉGICO</h3>
                <p className="text-on-surface-variant text-lg">Utilizamos taurina purificada e extratos naturais que atuam em sinergia. Não é só bebida, é combustível de alta performance.</p>
              </div>
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  alt="drink tech" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLUuKAqnhcTtOKfWQn-Ns-g2pw6zIaDnPla7-rR13g-Fi0-fs__8sr2GBHx2vMnTx9Cz0_yLc1mq3VRkQPoANEMrPcOXCw_D8W_MUWaoe2mzF3mCsPe2kZJvXB23sCqKolkP3W7ADtatfMdTo4V5r7sLqyF_WOYZo5g2mtGCnKAoAS-KHA4HNZXpyw2UiJ2jTlja7e4sYk2TkJBISQg7ZP79B8DJjNYnF3yjVk9qTXU1rWd3Od9TQmmIC4rP2HXBkyGHUtGlQPfKiB"
                />
              </div>
            </div>
            {/* Card 2 - Impurities */}
            <div className="glass-card p-10 border border-white/5 rounded-3xl flex flex-col justify-between hover:border-secondary-container/50 transition-colors">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6">biotech</span>
              <div>
                <h3 className="font-space-grotesk text-2xl uppercase mb-3 font-bold">Zero<br/>Impurezas</h3>
                <p className="text-on-surface-variant">Filtragem tripla para garantir o sabor mais limpo do mercado nacional.</p>
              </div>
            </div>
            {/* Card 3 - Absorption */}
            <div className="glass-card p-10 border border-white/5 rounded-3xl flex flex-col justify-center hover:border-primary-container/50 transition-colors">
              <div className="mb-6 text-primary-container">
                <span className="text-6xl font-black">98%</span>
                <span className="text-xs uppercase ml-2 tracking-widest font-bold">Absorção</span>
              </div>
              <h3 className="font-space-grotesk text-2xl uppercase mb-3 font-bold">Bio-Disponibilidade</h3>
              <p className="text-on-surface-variant">Sua dose de energia começa a agir em menos de 10 minutos.</p>
            </div>
            {/* Card 4 - No Hangover */}
            <div className="md:col-span-2 glass-card p-10 border border-white/5 rounded-3xl bg-gradient-to-br from-primary-container/5 to-transparent hover:border-primary-container/50 transition-colors">
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <h3 className="font-space-grotesk text-3xl uppercase mb-4 font-bold">Sem Ressaca</h3>
                  <p className="text-on-surface-variant text-lg">Adicionamos agentes protetores gástricos que evitam aquele mal-estar clássico do dia seguinte. O foco é o próximo treino.</p>
                </div>
                <div className="hidden sm:block">
                  <span className="material-symbols-outlined text-8xl text-primary-fixed-dim opacity-30 animate-pulse">sunny</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AR Section - Restored from Stitch */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto">
        <div className="glass-card rounded-[40px] p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-[0_20px_100px_rgba(157,0,255,0.15)]">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <div className="aspect-square bg-black/40 border-2 border-primary-container p-6 rounded-3xl flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-primary-container/5 animate-pulse"></div>
                <img 
                  alt="QR Code" 
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1_HTXE3O1rRNsS7806-m4pT83YHf9CmG4rWMtFY03z1iWwctoFGG-7DOUGcB08dRaNe2A19Q2im9t-NLeCckb3VVl0EcIDrTgAhwJboOq99ylrYMbzhdmnLvXbkAyx4B32fEPWV_OJgBrC85yZ9InH7HMvKcgDSKfJoE6OIwT0aNaKdDmjNOOFpRTtTjh_mtcaZ2VjiTpEb-EbZZY69GRX9GDPbjuoraJJ2zbCmSuQNKSNpOoPm1I8at6DZGTaGjdMpMyd0SnNYPJ"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <span className="bg-primary-container text-white text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-[0.2em] mb-6 inline-block">Exclusive Content</span>
              <h2 className="font-space-grotesk text-4xl md:text-5xl uppercase mb-6 leading-tight font-black text-white">
                Holograma do <span className="text-secondary-container italic">Toguro</span>
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed">
                Escaneie o código para acessar uma mensagem exclusiva do mestre em Realidade Aumentada. O Toguro vai te explicar como o Goró mudou o jogo na Mansão.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => showToast("Câmera AR iniciando... Aguarde.")}
                  className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl flex items-center gap-3 hover:bg-secondary-container hover:text-on-secondary transition-all active:scale-95 shadow-xl"
                >
                  <span className="material-symbols-outlined">ar_on_you</span>
                  SCAN FOR AR
                </button>
                <button 
                  onClick={() => showToast("Guia técnico enviado para seu e-mail!")}
                  className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all"
                >
                  HOW IT WORKS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DamageReduction;
