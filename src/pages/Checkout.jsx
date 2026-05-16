import React from 'react';
import { useToast } from '../components/Toast';

const Checkout = () => {
  const { showToast } = useToast();
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <div className="lg:col-span-7 space-y-12">
        <section>
          <h2 className="font-space-grotesk text-3xl mb-6 uppercase tracking-tight">Express Checkout</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onClick={() => showToast("Apple Pay carregando...")} className="flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-lg hover:opacity-90 transition-all">
              Apple Pay
            </button>
            <button onClick={() => showToast("PayPal carregando...")} className="flex items-center justify-center gap-2 bg-[#F7C033] text-[#2C2E2F] font-bold py-4 rounded-lg hover:opacity-90 transition-all">
              PayPal
            </button>
          </div>
        </section>

        <form className="space-y-10">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">1</span>
              <h2 className="font-space-grotesk text-2xl uppercase">Envio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="md:col-span-2 w-full bg-surface-container-low border-b border-purple-900/50 focus:border-secondary-container outline-none py-4" placeholder="seu@email.com" />
              <input className="md:col-span-2 w-full bg-surface-container-low border-b border-purple-900/50 focus:border-secondary-container outline-none py-4" placeholder="Endereço completo" />
            </div>
          </section>

          <button 
            type="button"
            onClick={() => showToast("Pedido enviado com sucesso! Cheque seu e-mail.")}
            className="w-full bg-primary-container text-white font-black text-2xl py-6 rounded-xl hover:brightness-110 transition-all uppercase italic"
          >
            Finalizar Compra
          </button>
        </form>
      </div>

      <div className="lg:col-span-5">
        <div className="bg-surface-container-high rounded-2xl p-8 border border-white/5 shadow-2xl">
          <h3 className="font-space-grotesk text-2xl uppercase mb-6 text-primary">Seu Pack</h3>
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="w-20 h-20 bg-surface-container-highest rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFeMUcK4TyFjtB31nTDsapTTa1-hDton5ySrWvzesj8PdQmQRjTiRnsDWDzm8MGF95tCdbp4Q3RQIRkbf1Z3GFpaSm_4fpz9EER-PUgLJTV5WxsdW6i-BDG-ZgOxlnLEVihWivH6ru01Gqg2D_3lIDV-l_aUnW5GIPAIress8JFwohKVHkU6tN5c5v1GEiqvFjohRvf9FJtAWHEfm1Q4mQdLk8NqMV5cn6y2I-7K4gq0m6TtxxrhFWMWCHzvV-ZbcF-WPvv98FtzNe" />
            </div>
            <div className="flex-grow">
              <p className="font-bold uppercase">Goró Mansão Original</p>
              <p className="text-on-surface-variant text-sm">Pack c/ 12 unidades</p>
            </div>
            <span className="font-bold">R$ 14,90</span>
          </div>
          <div className="flex justify-between text-2xl font-bold uppercase pt-4">
            <span>Total</span>
            <span className="text-secondary-container">R$ 14,90</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
