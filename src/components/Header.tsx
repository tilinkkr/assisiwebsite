import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Menu,
  MessageCircle,
  X,
  Phone,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  onOpenJubilee?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenJubilee }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', href: '/', mal: 'ഹോം', icon: '🏠' },
    { label: 'RETREATS 2026', href: '/retreats', mal: 'ധ്യാന കലണ്ടർ', icon: '🗓️' },
    { label: 'CONVENTION', href: '/convention', mal: 'സായാഹ്ന കൺവെൻഷൻ', icon: '⛪' },
    { label: 'PRAYER', href: '/prayer', mal: 'പ്രാർത്ഥനാ സഹായം', icon: '🙏' },
    { label: 'THANKS GIVING', href: '/thanksgiving', mal: 'നന്ദി പ്രകാശനം', icon: '🕊️', isHighlight: true },
    { label: 'OUR INSPIRATION', href: '/inspiration', mal: 'സ്ഥാപക പിതാക്കന്മാർ', icon: '✝️' },
    { label: 'GALLERY', href: '/gallery', mal: 'ഫോട്ടോ ഗാലറി', icon: '🖼️' },
    { label: 'INSTITUTIONS', href: '/institutions', mal: 'കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ', icon: '🏛️' },
    { label: 'CONTACT', href: '/contact', mal: 'ബന്ധപ്പെടുക', icon: '📍' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && router.pathname === '/') return true;
    if (href !== '/' && router.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="w-full relative z-40 select-none">
      
      {/* 1. TOP LITURGICAL HERITAGE & UTILITY BAR */}
      <div className="w-full bg-[#181614] text-amber-100/90 text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 border-b border-amber-900/40">
        <div className="max-w-[1536px] mx-auto flex flex-wrap justify-between items-center gap-y-1 gap-x-3">
          
          {/* Jubilee Commemoration Pill */}
          <button
            type="button"
            onClick={onOpenJubilee}
            className="flex items-center gap-1.5 sm:gap-2 text-left group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            <span className="font-bold text-amber-300 group-hover:text-white transition tracking-tight text-[11px] sm:text-xs md:text-[13px] truncate">
              സുവർണ്ണ ജൂബിലി (1976 – 2026) • 50 YEARS OF GRACE
            </span>
            <Sparkles className="w-3 h-3 text-amber-400 opacity-80 group-hover:opacity-100 shrink-0 hidden sm:inline" />
          </button>

          {/* Quick Contact & Hours */}
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs shrink-0 font-medium text-amber-100/80">
            <a
              href="tel:04822238335"
              className="hover:text-white transition whitespace-nowrap font-bold text-amber-200"
            >
              04822 238335
            </a>
            <span className="text-amber-800 hidden xs:inline">|</span>
            <a
              href="tel:8590124063"
              className="hover:text-white text-amber-300 font-bold transition whitespace-nowrap hidden xs:inline"
            >
              +91 8590124063
            </a>
            <span className="hidden lg:inline text-amber-800">|</span>
            <span className="hidden lg:inline text-amber-100/70 whitespace-nowrap">
              ഓഫീസ്: 9:00 AM – 6:00 PM
            </span>
          </div>

        </div>
      </div>

      {/* 2. MAIN EXECUTIVE NAVBAR (STICKY WITH SMOOTH GLASSMORPHISM) */}
      <nav
        className={`w-full sticky top-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#E0DBD0]'
            : 'bg-white/98 backdrop-blur-sm border-b border-[#E8E4DC]'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 2xl:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 lg:gap-3 2xl:gap-5">
          
          {/* Left Brand Area */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F0] border border-[#DDD3BF] p-1 flex items-center justify-center shrink-0 shadow-xs">
              <img
                src="/assisi_assets/Assisi-Renewal-Center.webp"
                alt="Assisi Emblem"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assisi_assets/Assisi-Renewal-Center-150x150.webp';
                }}
              />
            </div>
            <div className="text-left shrink min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-[18px] 2xl:text-xl font-bold text-slate-950 leading-tight group-hover:text-[#7A1C1C] transition truncate">
                അസ്സീസി ധ്യാനകേന്ദ്രം
              </h1>
              <p className="text-[9px] sm:text-[10px] md:text-[11px] text-[#8C6239] font-bold truncate tracking-tight">
                ഭരണങ്ങാനം • ASSISI RENEWAL CENTER
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= xl: 1280px) */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-1.5 2xl:gap-3 text-[12px] 2xl:text-[13.5px] font-bold text-slate-800 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              if (link.isHighlight) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 py-1 rounded-md transition whitespace-nowrap text-xs 2xl:text-[13px] ${
                      active
                        ? 'bg-[#7A1C1C] text-white shadow-xs'
                        : 'bg-[#181614] hover:bg-[#7A1C1C] text-amber-200 hover:text-white shadow-xs'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-1.5 py-1 transition whitespace-nowrap rounded hover:bg-slate-50 ${
                    active
                      ? 'text-[#7A1C1C] font-extrabold border-b-2 border-[#7A1C1C]'
                      : 'text-slate-700 hover:text-[#7A1C1C]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* WhatsApp Quick Action */}
            <a
              href="https://wa.me/918330884331?text=ഹലോ,%20അസ്സീസി%20ധ്യാനകേന്ദ്രത്തിലെ%20വിവരങ്ങൾ%20അറിയാൻ%20ആഗ്രഹിക്കുന്നു."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs sm:text-[13px] font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg transition whitespace-nowrap shadow-xs"
              title="WhatsApp Help"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Primary Retreat Booking CTA */}
            <Link
              href="/retreats"
              className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-[13px] font-bold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg transition whitespace-nowrap shadow-xs flex items-center gap-1.5 shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline">BOOKING</span>
              <span className="xs:hidden">ബുക്കിംഗ്</span>
            </Link>

            {/* Mobile / Tablet Menu Button (Always visible < xl) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-800 hover:bg-slate-100 active:bg-slate-200 rounded-lg transition shrink-0 cursor-pointer"
              aria-label="മെനു തുറക്കുക"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#7A1C1C]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Full-Screen Slide-Down Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="xl:hidden border-t border-[#E8E4DC] bg-white shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="px-4 py-5 space-y-1.5 text-left">
                
                {/* Jubilee Quick Card in Mobile Drawer */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenJubilee) onOpenJubilee();
                  }}
                  className="mb-3 p-3 bg-gradient-to-r from-amber-950 to-stone-900 rounded-xl border border-amber-500/50 flex items-center justify-between text-white cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-amber-300">സുവർണ്ണ ജൂബിലി (1976 – 2026)</p>
                      <p className="text-[10px] text-amber-100/80">50 Years of Divine Grace • വിശദാംശങ്ങൾ</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </div>

                {/* Nav Links */}
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold transition ${
                        active
                          ? 'bg-[#FDF2F4] text-[#7A1C1C] border border-[#F5D5DA]'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{link.icon}</span>
                        <div className="flex flex-col text-left">
                          <span className="text-slate-950 font-bold">{link.label}</span>
                          <span className="text-[11px] text-slate-500 font-normal">{link.mal}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}

                {/* Direct Contact Buttons in Drawer */}
                <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
                    ഹെൽപ്പ്‌ലൈൻ & ഓഫീസ്
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:04822238335"
                      className="bg-slate-900 hover:bg-black text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>04822 238335</span>
                    </a>
                    <a
                      href="tel:8590124063"
                      className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-300" />
                      <span>8590124063</span>
                    </a>
                  </div>
                  <a
                    href="https://wa.me/918330884331?text=ഹലോ,%20അസ്സീസി%20ധ്യാനകേന്ദ്രത്തിലെ%20വിവരങ്ങൾ%20അറിയാൻ%20ആഗ്രഹിക്കുന്നു."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp സന്ദേശം അയക്കുക (+91 8330884331)</span>
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </header>
  );
};
