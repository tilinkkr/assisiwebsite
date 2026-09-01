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
  ChevronRight,
  Sparkles,
  Home,
  Clock,
  HeartHandshake,
  Heart,
  Users,
  Image,
  Building2,
  MapPin,
  BookmarkCheck
} from 'lucide-react';

interface HeaderProps {
  onOpenJubilee?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenJubilee }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const waUrl = 'https://wa.me/918330884331?text=' + encodeURIComponent('ഹലോ, ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ധ്യാന വിവരങ്ങൾ അറിയാനും ബുക്ക് ചെയ്യാനും ആഗ്രഹിക്കുന്നു.');

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.pathname]);

  const navLinks = [
    { label: 'HOME', href: '/', mal: 'ഹോം', icon: Home },
    { label: 'RETREATS 2026', href: '/retreats', mal: 'ധ്യാനങ്ങൾ', icon: Calendar },
    { label: 'BOOKING', href: '/retreats', mal: 'ബുക്കിംഗ്', icon: BookmarkCheck },
    { label: 'CONVENTION', href: '/convention', mal: 'കൺവെൻഷൻ', icon: Clock },
    { label: 'PRAYER', href: '/prayer', mal: 'പ്രാർത്ഥന', icon: HeartHandshake },
    { label: 'THANKS GIVING', href: '/thanksgiving', mal: 'നന്ദി', icon: Heart },
    { label: 'OUR INSPIRATION', href: '/inspiration', mal: 'സ്ഥാപകർ', icon: Users },
    { label: 'GALLERY', href: '/gallery', mal: 'ഗാലറി', icon: Image },
    { label: 'INSTITUTIONS', href: '/institutions', mal: 'സ്ഥാപനങ്ങൾ', icon: Building2 },
    { label: 'CONTACT', href: '/contact', mal: 'ബന്ധപ്പെടുക', icon: MapPin },
  ];

  const isActive = (href: string) => {
    if (href === '/' && router.pathname === '/') return true;
    if (href !== '/' && router.pathname.startsWith(href)) return true;
    return false;
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
              className="bg-[#1E3A8A] hover:bg-[#1D4ED8] border border-amber-400 text-white px-3 py-0.5 rounded-full font-black text-[11px] inline-flex items-center gap-1.5 shadow-sm transition active:scale-95"
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
      <nav className="w-full bg-white border-b border-stone-200 shadow-sm sticky top-0">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-4 lg:px-6 2xl:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 lg:gap-3">
          
          {/* Left Brand Area */}
          <Link
            href="/"
            prefetch={true}
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

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-1.5 2xl:gap-2.5 text-[12px] 2xl:text-[13.5px] font-bold text-slate-900 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={true}
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

          {/* Right Action CTA Buttons - Perfectly Fitted Without Truncation */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs sm:text-[13px] font-black px-3 sm:px-3.5 py-2 rounded-xl transition whitespace-nowrap shadow-md border-2 border-amber-400 active:scale-98"
              title="WhatsApp: +91 8330884331"
            >
              <MessageCircle className="w-4 h-4 shrink-0 fill-white" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Retreat Booking CTA Button */}
            <Link
              href="/retreats"
              prefetch={true}
              className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-[13px] font-bold px-3 sm:px-4 py-2 rounded-xl transition whitespace-nowrap shadow-md flex items-center gap-1.5 shrink-0 active:scale-98 border border-amber-400"
            >
              <Calendar className="w-4 h-4 shrink-0 text-amber-300" />
              <span>ബുക്കിംഗ്</span>
            </Link>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="xl:hidden p-2 text-slate-900 hover:bg-slate-100 active:bg-slate-200 rounded-xl transition shrink-0 cursor-pointer border-2 border-slate-300 flex items-center justify-center shadow-xs"
              aria-label="മെനു തുറക്കുക"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#7A1C1C]" /> : <Menu className="w-6 h-6 text-slate-950" />}
            </button>
          </div>

        </div>

        {/* 3. ALWAYS-VISIBLE HORIZONTAL SCROLL SUB-NAVBAR FOR MOBILE */}
        <div className="xl:hidden w-full bg-[#181412] border-b border-amber-900/60 px-3 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none whitespace-nowrap shadow-inner">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                className={`px-3 py-1 rounded-full text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
                  active
                    ? 'bg-[#7A1C1C] text-white border border-amber-400 shadow-xs'
                    : 'bg-[#261E1A] text-stone-200 hover:text-white hover:bg-stone-800 border border-stone-700'
                }`}
              >
                <span>{link.mal}</span>
              </Link>
            );
          })}
        </div>

        {/* 4. MOBILE / TABLET SLIDE-DOWN ACCORDION DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="xl:hidden border-b-4 border-amber-500 bg-[#161311] shadow-2xl overflow-hidden max-h-[calc(100vh-8rem)] overflow-y-auto"
            >
              <div className="p-4 sm:p-5 space-y-2 text-left">
                
                {/* Jubilee Quick Card in Mobile Drawer */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJubilee?.();
                  }}
                  className="p-3.5 bg-gradient-to-r from-amber-950/80 to-amber-900/40 border border-amber-500/50 rounded-2xl flex items-center justify-between cursor-pointer mb-3"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                      GOLDEN JUBILEE • 1976 – 2026
                    </span>
                    <h4 className="text-sm font-bold text-white">സുവർണ്ണ ജൂബിലി വിവരങ്ങൾ</h4>
                  </div>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>

                {/* 2-Column Responsive Card Grid for Links */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {navLinks.map((item) => {
                    const active = isActive(item.href);
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        prefetch={true}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`p-3 rounded-xl border flex flex-col justify-between space-y-2 transition ${
                          active
                            ? 'bg-[#7A1C1C] border-amber-400 text-white shadow-md'
                            : 'bg-[#221B17] border-stone-800 text-stone-200 hover:border-amber-400/50 hover:bg-[#2A221D]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <Icon className={`w-4 h-4 ${active ? 'text-amber-300' : 'text-amber-400'}`} />
                          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">{item.mal}</p>
                          <p className="text-[10px] text-stone-400 font-medium truncate uppercase tracking-wider">
                            {item.label}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Direct Helplines */}
                <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#1E3A8A] border border-amber-400 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:04822238335"
                    className="p-2.5 bg-stone-800 border border-stone-700 rounded-xl text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>വിളിക്കുക</span>
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
