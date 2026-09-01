import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const waUrl = 'https://wa.me/918330884331?text=' + encodeURIComponent('ഹലോ, ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ധ്യാന വിവരങ്ങൾ അറിയാനും ബുക്ക് ചെയ്യാനും ആഗ്രഹിക്കുന്നു.');

  useEffect(() => {
    // Show helpful tooltip after 2.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-24 md:bottom-7 right-4 md:right-7 z-40 flex items-center select-none">
      
      {/* Tooltip Popup on Desktop & Mobile */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="mr-3 bg-stone-950/95 text-white border-2 border-amber-400 rounded-2xl py-2.5 px-4 shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-2 max-w-xs text-left"
          >
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
                വാട്സാപ്പ് 24x7 സഹായം
              </span>
              <span className="text-xs font-bold text-stone-100">
                +91 8330884331 (മെസ്സേജ് അയക്കുക)
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="p-1 text-stone-400 hover:text-white rounded-md transition ml-1"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Glowing Button: Marian Blue with Sacred Gold Glow (Marian & Gold Liturgical) */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white shadow-2xl border-2 border-amber-400 transition cursor-pointer"
        aria-label="WhatsApp Us directly"
      >
        {/* Pulsing gold ring */}
        <span className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping pointer-events-none opacity-75" />
        
        {/* Direct WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-white drop-shadow-md relative z-10" />

        {/* Small live status badge on button */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-amber-400 border-2 border-slate-950 rounded-full flex items-center justify-center z-20">
          <span className="w-1.5 h-1.5 bg-slate-950 rounded-full" />
        </span>
      </motion.a>

    </div>
  );
};
