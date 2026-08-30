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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white border-2 border-amber-400 rounded-3xl p-5 sm:p-8 shadow-2xl z-10 overflow-hidden text-left my-auto max-h-[92vh] flex flex-col justify-between"
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200 transition-colors z-20 cursor-pointer shadow-xs"
              aria-label="Close Jubilee Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 overflow-y-auto pr-1">
              
              {/* Header Badge */}
              <div className="flex items-center gap-3 pr-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF7F0] border border-[#DDD3BF] p-1.5 flex items-center justify-center shrink-0 shadow-xs">
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
                  <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100/80 px-2.5 py-0.5 rounded-md border border-amber-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500 animate-pulse" />
                    <span>GOLDEN JUBILEE CELEBRATION • 1976 – 2026</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-950 leading-tight mt-1">
                    അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം
                  </h3>
                </div>
              </div>

              {/* Jubilee Celebration Image Banner */}
              <div className="relative border-2 border-amber-300 rounded-2xl overflow-hidden shadow-sm bg-slate-900">
                <img
                  src="/assisi_assets/jubilee_celebration_banner.webp"
                  alt="Assisi Golden Jubilee Celebration"
                  className="w-full h-44 sm:h-56 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assisi_assets/2018-05-26.webp';
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-left">
                  <p className="text-xs sm:text-sm font-bold text-amber-200">
                    ✨ 50 വർഷത്തെ കൃപാസമൃദ്ധി (50 Years of Divine Grace)
                  </p>
                </div>
              </div>

              {/* Jubilee Announcement Text */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p>
                  വിശുദ്ധ അൽഫോൻസാമ്മയുടെ പുണ്യഭൂമിയിൽ, ഫ്രാൻസിസ്കൻ കപ്പൂച്ചിൻ സന്യാസിമാരുടെ ആത്മീയ നേതൃത്വത്തിൽ പതിനായിരങ്ങൾക്ക് രോഗശാന്തിയും സാന്ത്വനവും പകർന്നുനൽകുന്ന അസ്സീസി ധ്യാനകേന്ദ്രം സുവർണ്ണ ജൂബിലി വർഷത്തിലേക്ക് പ്രവേശിച്ചിരിക്കുന്നു.
                </p>

                {/* Grand Retreat Highlight Box */}
                <div className="p-4 bg-gradient-to-br from-[#FFF9FA] to-[#FFF1F2] border-2 border-[#F0D5D8] rounded-2xl space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#7A1C1C] font-bold text-xs sm:text-sm">
                    <Heart className="w-4 h-4 fill-[#7A1C1C]" />
                    <span>സുവർണ്ണ ജൂബിലി സമാപന മഹാധ്യാനം (Grand Jubilee Retreat):</span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-950">
                    2026 ആഗസ്റ്റ് 27 വ്യാഴം വൈകുന്നേരം 4:30 മുതൽ ആഗസ്റ്റ് 30 ഞായർ ഉച്ചയ്ക്ക് 1:30 വരെ
                  </p>
                  <p className="text-xs text-slate-600">
                    റസിഡൻഷ്യൽ സൗകര്യങ്ങളോടെയുള്ള പ്രത്യേക ആന്തരികസൗഖ്യ ജൂബിലി ധ്യാനം.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateToSchedule();
                    onClose();
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl transition shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>ധ്യാന കലണ്ടർ കാണുക (Schedule)</span>
                </button>

                <a
                  href="https://wa.me/918330884331?text=ഹലോ,%20സുവർണ്ണ%20ജൂബിലി%20ധ്യാനത്തിൽ%20പങ്കെടുക്കാൻ%20ആഗ്രഹിക്കുന്നു."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs sm:text-sm font-bold py-3.5 px-5 rounded-xl transition shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
