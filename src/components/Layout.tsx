import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Header } from './Header';
import { Footer } from './Footer';
import { JubileeModal } from './JubileeModal';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { MobileNavDrawer } from './MobileNavDrawer';
import { Home, Calendar, MessageCircle, HeartHandshake, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം | Assisi Renewal Center',
  description = 'Assisi Retreat & Renewal Centre Bharananganam - Golden Jubilee (1976-2026). St. Joseph Capuchin Province, Bharananganam, Kerala.'
}) => {
  const [isJubileeOpen, setIsJubileeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Automatically show Jubilee Celebration Modal after initial load
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    try {
      const hasSeenJubilee = sessionStorage.getItem('assisi_jubilee_seen');
      if (!hasSeenJubilee) {
        timer = setTimeout(() => {
          setIsJubileeOpen(true);
          sessionStorage.setItem('assisi_jubilee_seen', 'true');
        }, 250);
      }
    } catch {
      // Fallback for private browsing environments
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const waUrl = 'https://wa.me/918330884331?text=' + encodeURIComponent('ഹലോ, ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ധ്യാന വിവരങ്ങൾ അറിയാനും ബുക്ക് ചെയ്യാനും ആഗ്രഹിക്കുന്നു.');

  const isCurrentRoute = (path: string) => {
    if (path === '/' && router.pathname === '/') return true;
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link rel="icon" href="/assisi_assets/Assisi-Renewal-Center-150x150.webp" />
      </Head>

      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#12100E] text-slate-100 font-sans antialiased selection:bg-[#7A1C1C] selection:text-white flex flex-col justify-between pb-20 md:pb-0">
        
        {/* Golden Jubilee Celebration Modal */}
        <JubileeModal
          isOpen={isJubileeOpen}
          onClose={() => setIsJubileeOpen(false)}
          onNavigateToSchedule={() => {
            setIsJubileeOpen(false);
            window.location.href = '/retreats';
          }}
        />

        {/* Master Full-Featured Mobile Navigation Drawer */}
        <MobileNavDrawer
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenJubilee={() => setIsJubileeOpen(true)}
        />

        {/* Master Header with responsive Navbar */}
        <Header onOpenJubilee={() => setIsJubileeOpen(true)} />

        {/* Main Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Floating WhatsApp Widget for Desktop (Hidden on mobile where bottom bar provides direct WhatsApp) */}
        <div className="hidden md:block">
          <FloatingWhatsApp />
        </div>

        {/* Master Footer */}
        <Footer />

        {/* Floating Mobile Jubilee Celebration Badge (placed right above bottom navigation bar) */}
        <div className="md:hidden fixed bottom-18 left-3 z-30">
          <button
            type="button"
            onClick={() => setIsJubileeOpen(true)}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-black py-1.5 px-3 rounded-full shadow-2xl border-2 border-amber-300 active:scale-95 transition cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            <span>സുവർണ്ണ ജൂബിലി 1976–2026</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 5-TAB EXECUTIVE MOBILE BOTTOM NAVIGATION BAR (Instant 1-Tap Navigation) */}
        {/* ========================================================================= */}
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#161310] border-t-2 border-amber-500/50 shadow-2xl safe-area-bottom"
        >
          <div className="grid grid-cols-5 items-center h-16 px-1">
            
            {/* 1. Home Tab */}
            <Link
              href="/"
              prefetch={true}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${
                isCurrentRoute('/')
                  ? 'text-amber-400 font-black'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Home className={`w-5 h-5 ${isCurrentRoute('/') ? 'text-amber-400 stroke-[2.5]' : 'text-stone-400'}`} />
              <span className="text-[10px] tracking-tight mt-0.5">ഹോം</span>
            </Link>

            {/* 2. Retreats Tab */}
            <Link
              href="/retreats"
              prefetch={true}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${
                isCurrentRoute('/retreats')
                  ? 'text-amber-400 font-black'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Calendar className={`w-5 h-5 ${isCurrentRoute('/retreats') ? 'text-amber-400 stroke-[2.5]' : 'text-stone-400'}`} />
              <span className="text-[10px] tracking-tight mt-0.5">ധ്യാനങ്ങൾ</span>
            </Link>

            {/* 3. Center Elevated WhatsApp Action */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center -mt-5 group"
              aria-label="WhatsApp Us"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white flex items-center justify-center shadow-xl border-2 border-amber-400 active:scale-95 transition">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <span className="text-[10px] font-extrabold text-amber-300 mt-1">സഹായം</span>
            </a>

            {/* 4. Prayer Requests Tab */}
            <Link
              href="/prayer"
              prefetch={true}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${
                isCurrentRoute('/prayer')
                  ? 'text-amber-400 font-black'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <HeartHandshake className={`w-5 h-5 ${isCurrentRoute('/prayer') ? 'text-amber-400 stroke-[2.5]' : 'text-stone-400'}`} />
              <span className="text-[10px] tracking-tight mt-0.5">പ്രാർത്ഥന</span>
            </Link>

            {/* 5. Complete Menu Tab (Opens Drawer) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col items-center justify-center py-1 rounded-xl text-stone-400 hover:text-stone-200 active:scale-95 transition cursor-pointer"
            >
              <Menu className="w-5 h-5 text-stone-300" />
              <span className="text-[10px] tracking-tight mt-0.5">മെനു</span>
            </button>

          </div>
        </nav>

      </div>
    </>
  );
};
