import React from 'react';
import { useToast } from './Toast';

const Footer = () => {
  const { showToast } = useToast();

  return (
    <footer className="bg-black dark:bg-[#050505] w-full pt-20 pb-10 border-t border-purple-900/30">
      <div className="flex flex-col items-center gap-8 px-8 w-full">
        <div className="text-4xl font-black text-white opacity-20 font-space-grotesk tracking-tighter uppercase">
          GORÓ MANSÃO
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <button onClick={() => showToast("Newsletter assinada com sucesso!")} className="font-space-grotesk text-xs tracking-widest uppercase text-gray-500 hover:text-purple-400 transition-colors">Assine o Corre</button>
          <button onClick={() => showToast("Política de Privacidade em breve.")} className="font-space-grotesk text-xs tracking-widest uppercase text-gray-500 hover:text-purple-400 transition-colors">Privacy</button>
          <button onClick={() => showToast("Termos de Uso em breve.")} className="font-space-grotesk text-xs tracking-widest uppercase text-gray-500 hover:text-purple-400 transition-colors">Terms</button>
          <button onClick={() => showToast("Suporte: suporte@goromansao.com")} className="font-space-grotesk text-xs tracking-widest uppercase text-gray-500 hover:text-purple-400 transition-colors">Support</button>
        </div>
        <p className="font-space-grotesk text-xs tracking-widest uppercase text-purple-500 dark:text-green-400 mt-8 text-center">
          © 2024 GORÓ MANSÃO - EXCLUSIVO MANSÃO MAROMBA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
