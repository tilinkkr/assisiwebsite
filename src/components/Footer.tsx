import React from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowUp,
  Clock,
  Building2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const institutions = [
    { name: 'Assisi Magazine (അസ്സീസി മാസിക)', url: 'https://magazine.assisijeevan.com/' },
    { name: 'Jeevan Books (ജീവൻ ബുക്സ്)', url: 'https://shop.assisijeevan.com/' },
    { name: 'Assisi Ashram Bharananganam (അസ്സീസി ആശ്രമം)', url: 'https://www.assisiashram.org/' },
    { name: 'Assisi Language Institute - AIFL (ഭാഷാ ഇൻസ്റ്റിറ്റ്യൂട്ട്)', url: 'https://www.assisiinstitute.org/' },
    { name: 'Vimalagiri Retreat Center Iritty (വിമലഗിരി)', url: 'https://www.vimalagiriretreatcenter.in/' },
    { name: 'Sinai Retreat Center Palakkad (സീനായ് മുണ്ടൂർ)', url: 'https://santhomecaps.org/our-ministry/retreat-centers/sinai-renewal-centre-mundoor/' },
    { name: 'Gagultha Retreat Center (ഗാഗുൽത്താ ധ്യാനകേന്ദ്രം)', url: 'https://gagultharetreatcentre.com/' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12100E] text-stone-300 pt-16 pb-12 border-t-4 border-[#8C6239] text-left relative overflow-hidden select-none">
      
      {/* Background Subtle Gradient Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(140,98,57,0.15),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-Column Master Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-stone-800/80">
          
          {/* Col 1: Heritage & Dedication (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-2xl bg-[#FAF7F0] border border-[#DDD3BF] p-1.5 flex items-center justify-center shrink-0 shadow-md">
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
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight tracking-wide">
                  അസ്സീസി ധ്യാനകേന്ദ്രം
                </h3>
                <p className="text-xs text-amber-400 font-bold tracking-wider">
                  ASSISI RENEWAL CENTER • BHARANANGANAM
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-normal">
              ST. JOSEPH CAPUCHIN PROVINCE, BHARANANGANAM, KERALA.<br />
              അരനൂറ്റാണ്ടുകാലമായി പതിനായിരങ്ങൾക്ക് ദൈവകൃപയും രോഗശാന്തിയും പകരുന്ന കപ്പൂച്ചിൻ ആത്മീയ നവീകരണാലയം.
            </p>

            {/* Priestly Blessing Card */}
            <div className="p-4 bg-gradient-to-r from-stone-900/90 to-stone-900/60 rounded-2xl border border-amber-900/50 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>സുവർണ്ണ ജൂബിലി ആശീർവാദം (1976 – 2026)</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed italic-none font-normal">
                "കർത്താവ് നിന്നെ അനുഗ്രഹിക്കുകയും കാത്തുപാലിക്കുകയും ചെയ്യട്ടെ; അവിടുത്തെ മുഖം നിന്റെമേൽ പ്രകാശിക്കട്ടെ."
              </p>
              <p className="text-[11px] text-amber-400/80 font-bold text-right">
                — സംഖ്യ 6:24-25
              </p>
            </div>
          </div>

          {/* Col 2: Spiritual Programs & Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-amber-800/60 pb-2 flex items-center gap-1.5">
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/retreats" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Retreats 2026</span>
                </Link>
              </li>
              <li>
                <Link href="/convention" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Evening Convention</span>
                </Link>
              </li>
              <li>
                <Link href="/thanksgiving" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Thanks Giving</span>
                </Link>
              </li>
              <li>
                <Link href="/inspiration" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Our Inspiration</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Videos</span>
                </Link>
              </li>
              <li>
                <Link href="/prayer" className="hover:text-amber-300 transition flex items-center gap-2">
                  <span>•</span> <span>Prayer Requests</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Capuchin Sister Institutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-amber-800/60 pb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Capuchin Ministries</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {institutions.map((inst, idx) => (
                <li key={idx}>
                  <a
                    href={inst.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition flex items-center justify-between group py-0.5"
                  >
                    <span className="truncate pr-2">{inst.name}</span>
                    <ExternalLink className="w-3 h-3 text-amber-500 opacity-60 group-hover:opacity-100 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Ashram Office & Direct Helpdesk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-amber-800/60 pb-2">
              Office & Helpdesk
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-relaxed">
                  Fr. Director, Assisi Renewal Center,<br />
                  Bharananganam P.O., Kottayam Dist.,<br />
                  Kerala - 686578, India
                </span>
              </p>

              <div className="pt-1 space-y-1.5">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <a href="tel:04822238335" className="hover:text-white font-bold text-stone-200">04822 238335</a> /{' '}
                    <a href="tel:8590124063" className="hover:text-white font-bold text-amber-300">+91 8590124063</a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href="https://wa.me/918330884331?text=ഹലോ,%20അസ്സീസി%20ധ്യാനകേന്ദ്രത്തിലെ%20വിവരങ്ങൾ%20അറിയാൻ%20ആഗ്രഹിക്കുന്നു."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white text-emerald-300 font-bold"
                  >
                    +91 8330884331 (WhatsApp)
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href="mailto:assisirenewalcenter@gmail.com" className="hover:text-white truncate">
                    assisirenewalcenter@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2 text-stone-400">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>ഓഫീസ് സമയം: 9:00 AM – 6:00 PM</span>
                </p>
              </div>

              {/* Magazine Subscription CTA */}
              <div className="pt-2">
                <a
                  href="https://magazine.assisijeevan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#8C6239] hover:bg-[#734126] text-white text-xs font-bold px-3 py-2 rounded-lg transition shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Subscribe Assisi Magazine</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 1976 – 2026 Assisi Renewal Center, Bharananganam. All Rights Reserved.</p>
            <p className="text-stone-500">
              St. Joseph Capuchin Province • Designed with Franciscan Serenity & Excellence
            </p>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white bg-stone-900 border border-stone-800 px-3.5 py-1.5 rounded-lg transition cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
