import React, { useState, createContext, useContext } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-10 right-10 z-[100] animate-in slide-in-from-right duration-300">
          <div className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold shadow-2xl border border-white/20 flex items-center gap-3">
            <span className="material-symbols-outlined">info</span>
            {toast}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};
