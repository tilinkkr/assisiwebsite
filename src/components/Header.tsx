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
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  onOpenJubilee?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenJubilee }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const waUrl = 'https://wa.me/918330884331?text=' + encodeURIComponent('ഹലോ, ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ധ്യാന വിവരങ്ങൾ അറിയാനും ബുക്ക് ചെയ്യാനും ആഗ്രഹിക്കുന്നു.');

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
    { label: 'HOME', href: '/', mal: 'ഹോം' },
    { label: 'RETREATS 2026', href: '/retreats', mal: 'ധ്യാന കലണ്ടർ' },
    { label: 'CONVENTION', href: '/convention', mal: 'സായാഹ്ന കൺവെൻഷൻ' },
    { label: 'PRAYER', href: '/prayer', mal: 'പ്രാർത്ഥനാ സഹായം' },
    { label: 'THANKS GIVING', href: '/thanksgiving', mal: 'നന്ദി പ്രകാശനം', isHighlight: true },
    { label: 'OUR INSPIRATION', href: '/inspiration', mal: 'സ്ഥാപക പിതാക്കന്മാർ' },
    { label: 'GALLERY', href: '/gallery', mal: 'ഫോട്ടോ ഗാലറി' },
    { label: 'INSTITUTIONS', href: '/institutions', mal: 'കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ' },
    { label: 'CONTACT', href: '/contact', mal: 'ബന്ധപ്പെടുക' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && router.pathname === '/') return true;
    if (href !== '/' && router.pathname.startsWith(href)) return true;
    return false;
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (router.pathname !== href) {
      router.push(href);
    }
  };

  return (
    <header className="w-full relative z-50 select-none shadow-md">
      
      {/* 1. TOP HERITAGE BAR */}
      <div className="w-full bg-[#12100E] text-amber-100 text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 border-b border-amber-900/60">
        <div className="max-w-[1536px] mx-auto flex flex-wrap justify-between items-center gap-y-1 gap-x-3">
          
          {/* Jubilee Pill */}
          <button
            type="button"
            onClick={onOpenJubilee}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            <span className="font-bold text-amber-300 group-hover:text-white transition tracking-tight text-[11px] sm:text-xs md:text-[13px] truncate">
              സുവർണ്ണ ജൂബിലി (1976 – 2026) • 50 YEARS OF GRACE
            </span>
          </button>

          {/* Top Bar Contacts & WhatsApp Highlight */}
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs shrink-0 font-medium text-amber-100">
            
            {/* Highlighted WhatsApp Pill in Top Bar */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F5132] hover:bg-[#166534] border border-emerald-400 text-white px-2.5 py-0.5 rounded-full font-black text-[11px] inline-flex items-center gap-1.5 shadow-sm transition active:scale-95"
            >
              <MessageCircle className="w-3 h-3 fill-white" />
              <span>WhatsApp: +91 8330884331</span>
            </a>

            <span className="text-amber-700 hidden sm:inline">|</span>
            
            <a
              href="tel:04822238335"
              className="hover:text-white transition whitespace-nowrap font-bold text-amber-200 hidden md:inline"
            >
              04822 238335
            </a>
            
            <span className="text-amber-700 hidden md:inline">|</span>
            
            <span className="hidden lg:inline text-amber-200/90 whitespace-nowrap">
              ഓഫീസ്: 9:00 AM – 6:00 PM
            </span>
          </div>

        </div>
      </div>

      {/* 2. MAIN EXECUTIVE NAVBAR */}
      <nav className="w-full bg-white border-b-2 border-stone-200 shadow-sm sticky top-0">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 2xl:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 lg:gap-3 2xl:gap-5">
          
          {/* Left Brand Area */}
          <Link
            href="/"
            prefetch={true}
            onMouseEnter={() => router.prefetch('/')}
            onTouchStart={() => router.prefetch('/')}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#FAF7F0] border-2 border-[#DDD3BF] p-1 flex items-center justify-center shrink-0 shadow-xs">
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
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-950 leading-tight group-hover:text-[#7A1C1C] transition truncate">
                അസ്സീസി ധ്യാനകേന്ദ്രം
              </h1>
              <p className="text-[10px] sm:text-[11px] text-[#8C6239] font-bold truncate tracking-tight">
                ഭരണങ്ങാനം • ASSISI RENEWAL CENTER
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links with Instant Prefetching */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-1.5 2xl:gap-3 text-[12.5px] 2xl:text-[14px] font-bold text-slate-900 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              if (link.isHighlight) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    onMouseEnter={() => router.prefetch(link.href)}
                    onTouchStart={() => router.prefetch(link.href)}
                    className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap text-xs 2xl:text-[13px] font-extrabold ${
                      active
                        ? 'bg-[#7A1C1C] text-white shadow-sm'
                        : 'bg-[#181614] hover:bg-[#7A1C1C] text-amber-300 hover:text-white shadow-sm'
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
                  prefetch={true}
                  onMouseEnter={() => router.prefetch(link.href)}
                  onTouchStart={() => router.prefetch(link.href)}
                  className={`px-2 py-1.5 transition whitespace-nowrap rounded-lg ${
                    active
                      ? 'bg-[#7A1C1C] text-white font-extrabold shadow-xs'
                      : 'text-slate-900 hover:text-[#7A1C1C] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Highlighted WhatsApp CTA with Direct Malayalam Message */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs sm:text-[13px] font-black px-3.5 py-2 rounded-xl transition whitespace-nowrap shadow-md border-2 border-emerald-400 active:scale-98"
              title="WhatsApp: +91 8330884331"
            >
              <MessageCircle className="w-4 h-4 shrink-0 fill-white" />
              <span className="hidden sm:inline">WhatsApp: 8330884331</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Retreat Booking CTA */}
            <Link
              href="/retreats"
              prefetch={true}
              onMouseEnter={() => router.prefetch('/retreats')}
              onTouchStart={() => router.prefetch('/retreats')}
              className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-[13px] font-bold px-3 sm:px-3.5 py-2 rounded-xl transition whitespace-nowrap shadow-sm flex items-center gap-1.5 shrink-0 active:scale-98"
            >
              <Calendar className="w-4 h-4 shrink-0 text-amber-300" />
              <span className="hidden xs:inline">ബുക്കിംഗ്</span>
              <span className="xs:hidden">ബുക്കിംഗ്</span>
            </Link>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 text-slate-900 hover:bg-slate-100 active:bg-slate-200 rounded-xl transition shrink-0 cursor-pointer border border-slate-200"
              aria-label="മെനു തുറക്കുക"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#7A1C1C]" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Slide-Down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="xl:hidden border-t-2 border-slate-200 bg-white shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="px-4 py-5 space-y-2 text-left">
                
                {/* Highlighted WhatsApp Banner Card at top of Drawer */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 p-3.5 bg-gradient-to-r from-[#0F5132] to-[#166534] rounded-2xl border-2 border-emerald-400 flex items-center justify-between text-white shadow-md active:scale-98 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 fill-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-emerald-200">ഔദ്യോഗിക വാട്സാപ്പ്</p>
                      <p className="text-sm font-extrabold text-white">+91 8330884331 (മെസ്സേജ്)</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-emerald-300 shrink-0" />
                </a>

                {/* Jubilee Quick Card in Mobile Drawer */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenJubilee) onOpenJubilee();
                  }}
                  className="mb-3 p-3.5 bg-gradient-to-r from-amber-950 to-stone-900 rounded-2xl border-2 border-amber-500/60 flex items-center justify-between text-white cursor-pointer shadow-md"
                >
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-amber-300">സുവർണ്ണ ജൂബിലി (1976 – 2026)</p>
                    <p className="text-[11px] text-amber-100/90">50 Years of Divine Grace • വിശദാംശങ്ങൾ</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-amber-400 shrink-0" />
                </div>

                {/* Nav Links with Smooth Instant Navigation */}
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <button
                      key={link.href}
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold transition text-left cursor-pointer ${
                        active
                          ? 'bg-[#7A1C1C] text-white shadow-sm'
                          : 'text-slate-900 hover:bg-slate-100 active:bg-slate-200'
                      }`}
                    >
                      <div className="flex flex-col text-left">
                        <span className={`${active ? 'text-white' : 'text-slate-950'} font-extrabold`}>
                          {link.label}
                        </span>
                        <span className={`text-[11px] ${active ? 'text-amber-200' : 'text-slate-600'} font-medium`}>
                          {link.mal}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  );
                })}

                {/* Direct Contact Buttons in Drawer */}
                <div className="pt-4 mt-3 border-t-2 border-slate-100 space-y-2">
                  <p className="text-xs font-extrabold text-slate-700 uppercase tracking-wider px-1">
                    ഹെൽപ്പ്‌ലൈൻ & ഓഫീസ്
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:04822238335"
                      className="bg-slate-900 hover:bg-black text-white text-xs font-bold py-3 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>04822 238335</span>
                    </a>
                    <a
                      href="tel:8590124063"
                      className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs font-bold py-3 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-300" />
                      <span>8590124063</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </header>
  );
};
