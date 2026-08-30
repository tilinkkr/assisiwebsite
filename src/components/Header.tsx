import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const navLinks = [
    { label: 'HOME', href: '/', mal: 'ഹോം' },
    { label: 'RETREATS 2026', href: '/retreats', mal: 'ധ്യാനങ്ങൾ 2026' },
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

  return (
    <header className="w-full relative z-50 select-none">
      
      {/* 1. TOP LITURGICAL HERITAGE & UTILITY BAR */}
      <div className="w-full bg-[#181614] text-amber-100/90 text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-amber-900/40">
        <div className="max-w-[1536px] mx-auto flex flex-wrap justify-between items-center gap-y-1.5 gap-x-4">
          
          {/* Jubilee Commemoration Pill */}
          <button
            type="button"
            onClick={onOpenJubilee}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            <span className="font-bold text-amber-300 group-hover:text-white transition tracking-wide text-xs sm:text-[13px]">
              സുവർണ്ണ ജൂബിലി വർഷം (1976 – 2026) • 50 YEARS OF GRACE
            </span>
            <Sparkles className="w-3 h-3 text-amber-400 opacity-80 group-hover:opacity-100 shrink-0" />
          </button>

          {/* Quick Contact & Hours */}
          <div className="flex items-center gap-2.5 sm:gap-4 text-xs shrink-0 font-medium text-amber-100/80">
            <a
              href="tel:04822238335"
              className="hover:text-white transition whitespace-nowrap font-bold text-amber-200"
            >
              04822 238335
            </a>
            <span className="text-amber-800">|</span>
            <a
              href="tel:8590124063"
              className="hover:text-white text-amber-300 font-bold transition whitespace-nowrap"
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

      {/* 2. MAIN EXECUTIVE NAVBAR */}
      <nav className="w-full bg-white/98 backdrop-blur-md border-b border-[#E7E3D8] shadow-xs">
        <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6 2xl:px-8 h-20 flex items-center justify-between gap-2 lg:gap-3 2xl:gap-5">
          
          {/* Left Brand Area */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F0] border border-[#DDD3BF] p-1 flex items-center justify-center shrink-0 shadow-xs">
              <img
                src="/assisi_assets/Assisi-Renewal-Center.webp"
                alt="Assisi Emblem"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assisi_assets/Assisi-Renewal-Center-150x150.webp';
                }}
              />
            </div>
            <div className="text-left shrink-0">
              <h1 className="text-base sm:text-lg lg:text-[18px] 2xl:text-xl font-bold text-slate-950 leading-tight group-hover:text-[#7A1C1C] transition whitespace-nowrap">
                അസ്സീസി ധ്യാനകേന്ദ്രം
              </h1>
              <p className="text-[10px] sm:text-[11px] text-[#8C6239] font-bold whitespace-nowrap tracking-wide">
                ഭരണങ്ങാനം • ASSISI RENEWAL CENTER
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= xl) */}
          <div className="hidden xl:flex items-center gap-1.5 lg:gap-2 2xl:gap-3.5 text-[12px] 2xl:text-[13.5px] font-bold text-slate-800 shrink-0">
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
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* WhatsApp Quick Action */}
            <a
              href="https://wa.me/918330884331?text=ഹലോ,%20അസ്സീസി%20ധ്യാനകേന്ദ്രത്തിലെ%20വിവരങ്ങൾ%20അറിയാൻ%20ആഗ്രഹിക്കുന്നു."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs sm:text-[13px] font-bold px-3 py-2 rounded-lg transition whitespace-nowrap shadow-xs"
              title="WhatsApp Help"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Primary Retreat Booking CTA */}
            <Link
              href="/retreats"
              className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-[13px] font-bold px-3 sm:px-3.5 py-2 rounded-lg transition whitespace-nowrap shadow-xs flex items-center gap-1.5 shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>BOOKING</span>
            </Link>

            {/* Mobile / Tablet Menu Button (Visible < xl) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition shrink-0 ml-1 cursor-pointer"
              aria-label="മെനു തുറക്കുക"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Slide-Down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#E7E3D8] bg-white px-5 py-5 space-y-2 text-left shadow-xl max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm sm:text-base font-bold transition ${
                    active
                      ? 'bg-[#FDF2F4] text-[#7A1C1C] border border-[#F5D5DA]'
                      : 'text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex flex-col text-left">
                    <span>{link.label}</span>
                    <span className="text-xs text-slate-500 font-normal">{link.mal}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            {/* Quick Mobile Phone Contact */}
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-3">
              <a
                href="tel:04822238335"
                className="flex-1 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>04822 238335</span>
              </a>
              <a
                href="tel:8590124063"
                className="flex-1 bg-[#7A1C1C] text-white text-xs font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>8590124063</span>
              </a>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};
