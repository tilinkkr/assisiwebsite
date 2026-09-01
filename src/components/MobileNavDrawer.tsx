import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Home,
  Calendar,
  Clock,
  HeartHandshake,
  Heart,
  Users,
  Image,
  Building2,
  Phone,
  MessageCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenJubilee?: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  onOpenJubilee
}) => {
  const router = useRouter();
  const waUrl = 'https://wa.me/918330884331?text=' + encodeURIComponent('ഹലോ, ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ധ്യാന വിവരങ്ങൾ അറിയാനും ബുക്ക് ചെയ്യാനും ആഗ്രഹിക്കുന്നു.');

  const navigationItems = [
    { label: 'HOME', mal: 'പ്രധാന പേജ് (Home)', href: '/', icon: Home },
    { label: 'RETREATS 2026', mal: 'ധ്യാന കലണ്ടർ (Schedule)', href: '/retreats', icon: Calendar, badge: 'BOOKING' },
    { label: 'EVENING CONVENTION', mal: 'സായാഹ്ന കൺവെൻഷൻ', href: '/convention', icon: Clock },
    { label: 'PRAYER REQUESTS', mal: 'പ്രാർത്ഥനാ സഹായം', href: '/prayer', icon: HeartHandshake },
    { label: 'THANKS GIVING', mal: 'നന്ദി പ്രകാശനം & സാക്ഷ്യങ്ങൾ', href: '/thanksgiving', icon: Heart },
    { label: 'OUR INSPIRATION', mal: 'സ്ഥാപക പിതാക്കന്മാർ', href: '/inspiration', icon: Users },
    { label: 'PHOTO GALLERY', mal: 'ഫോട്ടോ ഗാലറി (60+ ചിത്രങ്ങൾ)', href: '/gallery', icon: Image },
    { label: 'INSTITUTIONS', mal: 'കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ', href: '/institutions', icon: Building2 },
    { label: 'CONTACT & MAP', mal: 'ബന്ധപ്പെടുക & റൂട്ട് മാപ്പ്', href: '/contact', icon: Phone }
  ];

  const isActive = (href: string) => {
    if (href === '/' && router.pathname === '/') return true;
    if (href !== '/' && router.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Slide-out Full Height Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-sm sm:max-w-md h-full bg-[#14110E] border-l-2 border-amber-500/50 shadow-2xl flex flex-col justify-between z-10 text-left overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 bg-[#1C1814] border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] p-1 flex items-center justify-center shrink-0 shadow-sm border border-amber-400/40">
                  <img
                    src="/assisi_assets/Assisi-Renewal-Center-150x150.webp"
                    alt="Assisi Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-base font-black text-white leading-tight">
                    അസ്സീസി ധ്യാനകേന്ദ്രം
                  </h2>
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wide">
                    ഭരണങ്ങാനം • MAIN MENU
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center justify-center transition active:scale-95 cursor-pointer border border-stone-600"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              
              {/* WhatsApp Quick Action Banner */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-gradient-to-r from-[#0F1D38] to-[#1E3A8A] rounded-2xl border-2 border-amber-400 flex items-center justify-between text-white shadow-md active:scale-98 transition mb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-amber-300 fill-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-amber-300">ഔദ്യോഗിക വാട്സാപ്പ്</p>
                    <p className="text-xs font-black text-white">+91 8330884331 (മെസ്സേജ്)</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-300 shrink-0" />
              </a>

              {/* Jubilee Celebration Quick Link */}
              <div
                onClick={() => {
                  onClose();
                  if (onOpenJubilee) onOpenJubilee();
                }}
                className="p-3.5 bg-gradient-to-r from-amber-950 to-stone-900 rounded-2xl border-2 border-amber-500/60 flex items-center justify-between text-white cursor-pointer shadow-md mb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-amber-300">സുവർണ്ണ ജൂബിലി (1976 – 2026)</p>
                    <p className="text-[11px] text-stone-200">50 Years of Grace • വിശദാംശങ്ങൾ</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
              </div>

              {/* Main Nav Links */}
              <p className="text-[11px] font-black text-amber-400 uppercase tracking-wider px-1 pt-1">
                പേജുകൾ (ALL SECTIONS)
              </p>

              {navigationItems.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm font-bold transition shadow-sm ${
                      active
                        ? 'bg-[#7A1C1C] text-white border-2 border-amber-400'
                        : 'bg-[#181412] hover:bg-[#221D1A] text-stone-200 border border-stone-800 active:bg-black'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${active ? 'bg-black/30 text-amber-300' : 'bg-stone-800 text-stone-300'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-extrabold text-white text-xs">{item.label}</span>
                        <span className={`text-[11px] ${active ? 'text-amber-200' : 'text-stone-400'}`}>{item.mal}</span>
                      </div>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Quick Call Strip */}
            <div className="p-4 bg-[#181412] border-t border-stone-800 space-y-2">
              <p className="text-[11px] font-black text-amber-400 uppercase tracking-wider">
                ഹെൽപ്പ്‌ലൈൻ & ഓഫീസ്
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:04822238335"
                  className="bg-stone-900 hover:bg-black text-white text-xs font-bold py-2.5 px-2 rounded-xl text-center flex items-center justify-center gap-1.5 border border-stone-700 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>04822 238335</span>
                </a>
                <a
                  href="tel:8590124063"
                  className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs font-bold py-2.5 px-2 rounded-xl text-center flex items-center justify-center gap-1.5 border border-rose-800 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>8590124063</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
