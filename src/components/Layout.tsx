import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from './Header';
import { Footer } from './Footer';
import { JubileeModal } from './JubileeModal';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

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

  // Automatically show Jubilee Celebration Modal after initial load
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    try {
      const hasSeenJubilee = sessionStorage.getItem('assisi_jubilee_seen');
      if (!hasSeenJubilee) {
        timer = setTimeout(() => {
          setIsJubileeOpen(true);
          sessionStorage.setItem('assisi_jubilee_seen', 'true');
        }, 1200);
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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link rel="icon" href="/assisi_assets/Assisi-Renewal-Center-150x150.webp" />
      </Head>

      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#12100E] text-slate-100 font-sans antialiased selection:bg-[#7A1C1C] selection:text-white flex flex-col justify-between pb-24 md:pb-0">
        
        {/* Golden Jubilee Celebration Modal */}
        <JubileeModal
          isOpen={isJubileeOpen}
          onClose={() => setIsJubileeOpen(false)}
          onNavigateToSchedule={() => {
            setIsJubileeOpen(false);
            window.location.href = '/retreats';
          }}
        />

        {/* Master Header with responsive Navbar */}
        <Header onOpenJubilee={() => setIsJubileeOpen(true)} />

        {/* Main Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Floating WhatsApp Widget with high-visibility Malayalam tooltip (Marian & Gold Liturgical) */}
        <FloatingWhatsApp />

        {/* Master Footer */}
        <Footer />

        {/* Floating Mobile Jubilee Celebration Badge */}
        <div className="md:hidden fixed bottom-24 left-3 z-30">
          <button
            type="button"
            onClick={() => setIsJubileeOpen(true)}
            className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-black py-2 px-3.5 rounded-full shadow-xl border border-amber-300 active:scale-95 transition cursor-pointer"
          >
            <span>സുവർണ്ണ ജൂബിലി 1976–2026</span>
          </button>
        </div>

        {/* Fixed Mobile Bottom Action Strip (Marian Sapphire & Gold, Marian & Gold) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#141210]/98 backdrop-blur-md border-t-2 border-amber-500/60 p-2 sm:p-2.5 flex items-center justify-between gap-1.5 sm:gap-2 shadow-2xl safe-area-bottom">
          <a
            href="tel:8590124063"
            className="flex-1 inline-flex items-center justify-center gap-1 bg-stone-900 text-white text-[11px] font-bold py-3 px-1.5 rounded-xl transition shadow-sm border border-stone-700 active:bg-black"
          >
            <Phone className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span>വിളിക്കുക</span>
          </a>

          {/* Highlighted WhatsApp CTA in Mobile Bottom Bar (Marian Sapphire Blue & Gold) */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.4] inline-flex items-center justify-center gap-1.5 bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs font-black py-3 px-2 rounded-xl transition shadow-lg border-2 border-amber-400 active:scale-98"
          >
            <MessageCircle className="w-4 h-4 shrink-0 fill-white" />
            <span>WhatsApp</span>
            <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded-full hidden xs:inline">
              LIVE
            </span>
          </a>

          <Link
            href="/retreats"
            className="flex-1 inline-flex items-center justify-center gap-1 bg-[#7A1C1C] text-white text-[11px] font-bold py-3 px-1.5 rounded-xl transition shadow-sm active:bg-[#601515]"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0 text-amber-300" />
            <span>ബുക്കിംഗ്</span>
          </Link>
        </div>

      </div>
    </>
  );
};
