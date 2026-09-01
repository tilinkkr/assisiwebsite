import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

interface JubileeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSchedule: () => void;
}

export const JubileeModal: React.FC<JubileeModalProps> = ({
  isOpen,
  onClose,
  onNavigateToSchedule
}) => {
  const waUrl = 'https://wa.me/918330884331?text=' + encodeURIComponent('ഹലോ, ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ സുവർണ്ണ ജൂബിലി മഹാധ്യാനത്തിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്നു.');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          
          {/* Smooth Deep Backdrop - Click outside closes immediately */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs cursor-pointer"
          />

          {/* Premium Executive Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-left border-2 border-amber-400"
          >
            {/* Top Banner Image with Floating Close Button */}
            <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden">
              <img
                src="/assisi_assets/jubilee_celebration_banner.webp"
                alt="Assisi Golden Jubilee Celebration"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assisi_assets/2018-05-26.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Large, High-Visibility Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 hover:bg-rose-800 text-white flex items-center justify-center backdrop-blur-md transition cursor-pointer active:scale-95 border border-white/40 shadow-lg"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Location Tag */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/60 px-2.5 py-0.5 rounded-md backdrop-blur-xs border border-amber-400/40">
                  1976 – 2026 • 50 YEARS
                </span>
                <span className="text-xs font-bold text-stone-200">
                  ഭരണങ്ങാനം
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-6 space-y-4">
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
                  സുവർണ്ണ ജൂബിലി മഹാധ്യാനം
                </h3>
                <p className="text-xs font-bold text-[#8C6239] tracking-wide">
                  ASSISI RENEWAL CENTER • GRAND RETREAT
                </p>
              </div>

              {/* Minimal Schedule Box */}
              <div className="p-3.5 bg-[#FAF7F0] border border-[#DDD3BF] rounded-2xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7A1C1C]">
                    സമാപന ധ്യാന തീയതി
                  </p>
                  <p className="text-sm font-black text-slate-950">
                    2026 ആഗസ്റ്റ് 27 – 30
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium">
                    വ്യാഴം 4:30 PM മുതൽ ഞായർ 1:30 PM വരെ
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-300 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#7A1C1C]" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateToSchedule();
                    onClose();
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-bold py-3 px-3 rounded-xl transition shadow-md cursor-pointer active:scale-98"
                >
                  <span>ധ്യാന കലണ്ടർ</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs sm:text-sm font-bold py-3 px-3 rounded-xl transition shadow-md border border-amber-400 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 fill-white" />
                  <span>വാട്സാപ്പ് ബുക്കിംഗ്</span>
                </a>
              </div>

              {/* Dismiss link */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-stone-500 hover:text-stone-900 font-bold underline cursor-pointer"
                >
                  സൈറ്റിലേക്ക് തുടരുക (Continue to Website)
                </button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
