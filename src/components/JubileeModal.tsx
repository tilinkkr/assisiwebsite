import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Sparkles, MessageCircle, Heart } from 'lucide-react';

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
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          
          {/* Dark Sacred Backdrop with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="relative w-full max-w-lg bg-white border-2 border-amber-400 rounded-3xl p-4 sm:p-7 shadow-2xl z-10 my-auto text-left"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:text-black hover:bg-slate-200 transition-colors z-20 cursor-pointer shadow-xs active:scale-95"
              aria-label="Close Jubilee Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3.5 sm:space-y-4">
              
              {/* Header Title with Emblem */}
              <div className="flex items-center gap-2.5 sm:gap-3 pr-8">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#FAF7F0] border border-[#DDD3BF] p-1 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="/assisi_assets/Assisi-Renewal-Center.webp"
                    alt="Assisi Emblem"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/Assisi-Renewal-Center-150x150.webp';
                    }}
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100/90 px-2 py-0.5 rounded-md border border-amber-300">
                    <Sparkles className="w-3 h-3 text-amber-600 fill-amber-500 animate-pulse" />
                    <span>GOLDEN JUBILEE • 1976 – 2026</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-950 leading-tight mt-0.5">
                    അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം
                  </h3>
                </div>
              </div>

              {/* Jubilee Visual Banner */}
              <div className="relative border-2 border-amber-300 rounded-2xl overflow-hidden shadow-sm bg-slate-900 aspect-[16/9] w-full max-h-44 sm:max-h-52">
                <img
                  src="/assisi_assets/jubilee_celebration_banner.webp"
                  alt="Assisi Golden Jubilee Celebration"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assisi_assets/2018-05-26.webp';
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 sm:p-3 text-left">
                  <p className="text-xs sm:text-sm font-bold text-amber-200">
                    ✨ 50 വർഷത്തെ കൃപാസമൃദ്ധി (50 Years of Divine Grace)
                  </p>
                </div>
              </div>

              {/* Text Description */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p className="line-clamp-3 sm:line-clamp-none">
                  വിശുദ്ധ അൽഫോൻസാമ്മയുടെ പുണ്യഭൂമിയിൽ, കപ്പൂച്ചിൻ സന്യാസിമാരുടെ ആത്മീയ നേതൃത്വത്തിൽ പതിനായിരങ്ങൾക്ക് രോഗശാന്തിയും സാന്ത്വനവും പകർന്നുനൽകുന്ന അസ്സീസി ധ്യാനകേന്ദ്രം സുവർണ്ണ ജൂബിലി വർഷത്തിലേക്ക് പ്രവേശിച്ചിരിക്കുന്നു.
                </p>

                {/* Grand Retreat Highlight Box */}
                <div className="p-3 sm:p-3.5 bg-gradient-to-br from-[#FFF9FA] to-[#FFF1F2] border-2 border-[#F0D5D8] rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-[#7A1C1C] font-bold text-xs sm:text-sm">
                    <Heart className="w-3.5 h-3.5 fill-[#7A1C1C] shrink-0" />
                    <span>സുവർണ്ണ ജൂബിലി സമാപന മഹാധ്യാനം:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-950">
                    2026 ആഗസ്റ്റ് 27 വ്യാഴം 4:30 PM – ആഗസ്റ്റ് 30 ഞായർ 1:30 PM
                  </p>
                </div>
              </div>

              {/* Action Buttons (Mobile-first Touch Friendly) */}
              <div className="pt-1 flex flex-col sm:flex-row items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateToSchedule();
                    onClose();
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition shadow-md cursor-pointer active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>ധ്യാന കലണ്ടർ കാണുക (Schedule)</span>
                </button>

                <a
                  href="https://wa.me/918330884331?text=ഹലോ,%20സുവർണ്ണ%20ജൂബിലി%20ധ്യാനത്തിൽ%20പങ്കെടുക്കാൻ%20ആഗ്രഹിക്കുന്നു."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition shadow-md active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
