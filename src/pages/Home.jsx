import React from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';

const Home = () => {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Bubbles Effect Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="bubble w-4 h-4 left-[10%] bottom-[20%]"></div>
          <div className="bubble w-8 h-8 left-[30%] bottom-[10%]"></div>
          <div className="bubble w-6 h-6 left-[60%] bottom-[40%]"></div>
          <div className="bubble w-12 h-12 left-[80%] bottom-[15%]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-center mb-6 leading-none flex flex-col items-center">
            <span className="text-white">SABOR ENERGÉTICO</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-secondary-container to-primary-container drop-shadow-[0_0_15px_rgba(157,0,255,0.6)]">
              ORIGINAL, 100% VIBE
            </span>
          </h1>
          
          <p className="font-be-vietnam-pro text-lg md:text-xl text-tertiary text-center max-w-2xl mb-12">
            O Goró do Pai: Sem cafeína, sem taurina, só o <span className="text-secondary-fixed italic font-bold">shape inexplicável</span>.
          </p>
          
          <div className="relative w-full max-w-lg aspect-square mb-[-120px] transition-transform hover:scale-105 duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent blur-[120px] rounded-full"></div>
            <img 
              alt="Goró Can" 
              className="w-full h-full object-contain relative z-20 drop-shadow-[0_0_40px_rgba(157,0,255,0.4)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPYvZ3x-OJi9hcmZ2ztH8tF4I2f-c1kR8C5jkukIndWonG_82WFNo1WHbLYZJcND2pNKf5g7HJUtihe1EFWauXHTK6fqSfjI2uJkqfSzscuTMW4K8DMPwV5GK4rZI68KfSD82gONWZGR_n6hi_CpLXBARS1EJJymTfgdbG2uTJXCYuQ8NwjFSy1AWYQdvzm-eHaFS1yjifpFZlrAN2KdkTfUlMYF3d82JhCJK9xmAX_mqzT9G81-EI-w2G0x4ofkX3tB6ytz5TTSn_" 
            />
          </div>
          
          <Link 
            to="/catalogo" 
            className="bg-primary-container text-on-primary-container font-bold uppercase tracking-widest px-12 py-5 rounded-full flex items-center gap-3 neon-glow-purple hover:scale-105 active:scale-95 transition-all z-30"
          >
            GARANTA O SEU
            <span className="material-symbols-outlined">bolt</span>
          </Link>
        </div>
        
        {/* Organic Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[120px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#131313"></path>
          </svg>
        </div>
      </section>

      <Ticker text="O Shape Inexplicável • Goró do Pai • Mansão Maromba Exclusive • Sem Cafeína" />

      {/* Bento Grid Features */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 glass-card rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold text-primary-fixed-dim mb-4">PURÊZA URBANA</h2>
                <p className="text-on-surface-variant text-lg max-w-md">Uma fórmula desenvolvida para quem busca performance sem o crash dos estimulantes sintéticos. O Goró é focado em hidratação e foco mental puro.</p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity">
                <img 
                  alt="Athletic woman" 
                  className="w-full h-full object-top object-cover" 
                  src="/assets/woman-athletic.jpg" 
                />
              </div>
            </div>
            
            <div className="md:col-span-4 bg-secondary-container rounded-3xl p-10 flex flex-col items-center justify-center text-center group">
              <span className="material-symbols-outlined text-6xl text-on-secondary-container mb-6 scale-110 group-hover:rotate-12 transition-transform">eco</span>
              <h3 className="font-space-grotesk text-2xl font-bold text-on-secondary-container mb-2">100% NATURAL</h3>
              <p className="text-on-secondary-fixed-variant">Ingredientes selecionados para o seu shape.</p>
            </div>
            
            <div className="md:col-span-4 glass-card rounded-3xl p-8 border-secondary-container/30 group">
              <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container">bolt</span>
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-white mb-4">Energia Real</h3>
              <p className="text-on-surface-variant">Sinta o pump natural sem as palpitações da taurina.</p>
            </div>
            
            <div id="community" className="md:col-span-8 glass-card rounded-3xl overflow-hidden relative group">
              <img 
                alt="Man with tattoos" 
                className="w-full h-full opacity-50 group-hover:scale-110 transition-transform duration-[2000ms] object-top object-cover" 
                src="/assets/toguro-prayer.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-10 flex flex-col justify-end">
                <h2 className="font-space-grotesk text-4xl font-bold text-white">THE MANSION LIFE</h2>
                <p className="text-tertiary">Entre para a elite maromba.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
