import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import {
  Calendar,
  ExternalLink,
  MapPin,
  Phone,
  Quote,
  Send,
  ZoomIn,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle
} from 'lucide-react';

const springEntrance = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
};

const RETREAT_CALENDAR = {
  august: [
    { dates: 'August 07 - 10', type: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'August 14 - 17', type: 'Marian & Family Deliverance Retreat (കുടുംബ നവീകരണ ധ്യാനം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'August 21 - 24', type: 'Charismatic Spiritual Renewal (കരിസ്മാറ്റിക് ധ്യാനം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'August 28 - 31', type: 'Youth & Vocation Discernment Retreat (യുവജന ധ്യാനം)', director: 'Capuchin Youth Ministry', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' }
  ],
  september: [
    { dates: 'September 04 - 07', type: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'September 11 - 14', type: 'Holy Spirit & Deliverance Retreat (വിശുദ്ധാത്മാവിൽ നവീകരണം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'September 18 - 21', type: 'Couples & Family Sanctity Retreat (ദമ്പതി ധ്യാനം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'September 25 - 28', type: 'Inner Peace & Healing Retreat (ശാന്തിയും സൗഖ്യവും)', director: 'Capuchin Preachers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' }
  ],
  october: [
    { dates: 'October 02 - 05', type: 'St. Francis Feast Special Retreat (ഫ്രാൻസിസ്കൻ തിരുനാൾ ധ്യാനം)', director: 'Provincial & Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'October 09 - 12', type: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'October 16 - 19', type: 'Rosary & Marian Intercession Retreat (ജപമാല മാസ ധ്യാനം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'October 23 - 26', type: 'Deliverance & Grace Renewal (വിടുതൽ ധ്യാനം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' }
  ]
};

const GALLERY_PREVIEW = [
  { id: '1', title: 'ദിവ്യകാരുണ്യ ചാപ്പൽ (Holy Chapel)', src: '/assisi_assets/gallery/IMG20230605154002-460x1024.webp', tag: 'Chapel' },
  { id: '2', title: 'മാതാവിന്റെ ഗ്രോട്ടോ (Our Lady Grotto)', src: '/assisi_assets/gallery/IMG20230605154859-461x1024.webp', tag: 'Grotto' },
  { id: '3', title: 'വലിയ ധ്യാന ഹാൾ (Main Retreat Hall)', src: '/assisi_assets/gallery/IMG20230605155121-461x1024.webp', tag: 'Hall' },
  { id: '4', title: 'സുവർണ്ണ ജൂബിലി ആശ്രമം (50 Years)', src: '/assisi_assets/2018-05-26.webp', tag: 'Jubilee' }
];

const CAPUCHIN_INSTITUTIONS = [
  { name: 'Assisi Magazine', mal: 'അസ്സീസി മാസിക', url: 'https://magazine.assisijeevan.com/' },
  { name: 'Jeevan Books', mal: 'ജീവൻ ബുക്സ്', url: 'https://shop.assisijeevan.com/' },
  { name: 'Assisi Ashram Bharananganam', mal: 'അസ്സീസി ആശ്രമം', url: 'https://www.assisiashram.org/' },
  { name: 'Assisi Language Institute (AIFL)', mal: 'ഭാഷാ ഇൻസ്റ്റിറ്റ്യൂട്ട്', url: 'https://www.assisiinstitute.org/' },
  { name: 'Vimalagiri Retreat Center Iritty', mal: 'വിമലഗിരി ധ്യാനകേന്ദ്രം', url: 'https://www.vimalagiriretreatcenter.in/' },
  { name: 'Sinai Retreat Center Palakkad', mal: 'സീനായ് മുണ്ടൂർ', url: 'https://santhomecaps.org/our-ministry/retreat-centers/sinai-renewal-centre-mundoor/' },
  { name: 'Gagultha Retreat Center', mal: 'ഗാഗുൽത്താ ധ്യാനകേന്ദ്രം', url: 'https://gagultharetreatcentre.com/' }
];

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<keyof typeof RETREAT_CALENDAR>('august');

  // Thanksgiving form state
  const [thanksForm, setThanksForm] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    subject: '',
    description: '',
    agreePublish: 'yes'
  });
  const [thanksSubmitted, setThanksSubmitted] = useState(false);

  const handleThanksSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*THANKS GIVING (നന്ദി പ്രകാശനം)*\nപേര്: ${thanksForm.firstName} ${thanksForm.lastName}\nഫോൺ: ${thanksForm.contact}\nEmail: ${thanksForm.email}\nവിഷയം: ${thanksForm.subject}\nവെബ്‌സൈറ്റിൽ പ്രസിദ്ധീകരിക്കാൻ അനുമതി: ${thanksForm.agreePublish === 'yes' ? 'Yes' : 'No'}\n\nസാക്ഷ്യം / അനുഭവം:\n${thanksForm.description}\n\n(Assisi Retreat Centre Bharananganam)`
    );
    window.open(`https://wa.me/918330884331?text=${waText}`, '_blank');
    setThanksSubmitted(true);
  };

  return (
    <Layout>
      {/* ========================================================================= */}
      {/* 1. HERO: MAXIMUM VISIBILITY WITH SOLID FROSTED DARK CARD OVERLAY */}
      {/* ========================================================================= */}
      <section className="relative min-h-[600px] sm:min-h-[660px] flex items-center justify-center text-left py-12 sm:py-16 overflow-hidden">
        
        {/* Background Sanctuary Image with Strong Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_sanctuary_bg.webp"
            alt="Assisi Sanctuary Background"
            className="w-full h-full object-cover scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assisi_assets/IMG20230605153946-1024x460.webp';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/96 via-black/85 to-black/65" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Card - SOLID HIGH CONTRAST FROSTED CARD */}
            <motion.div
              {...springEntrance}
              className="lg:col-span-7 bg-stone-950/85 backdrop-blur-xl border border-amber-500/40 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-5 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-amber-400 text-stone-950 font-black text-xs sm:text-sm px-3.5 py-1 rounded-full shadow-md">
                <span>ST. JOSEPH CAPUCHIN PROVINCE • 1976 – 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം
              </h1>

              <p className="text-base sm:text-lg text-stone-100 leading-relaxed font-medium max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                വിശുദ്ധ അൽഫോൻസാമ്മയുടെ പുണ്യഭൂമിയിൽ, കപ്പൂച്ചിൻ സന്യാസിമാരുടെ ആത്മീയ നേതൃത്വത്തിൽ കഴിഞ്ഞ 50 വർഷങ്ങളായി പതിനായിരങ്ങൾക്ക് ദൈവാനുഭവവും ആന്തരിക സൗഖ്യവും പകരുന്ന ആത്മീയ തണൽ.
              </p>

              <div className="p-4 bg-amber-950/80 rounded-2xl border border-amber-500/50 shadow-md space-y-1 max-w-xl text-left">
                <p className="text-xs font-black text-amber-300 uppercase tracking-wider">
                  ഫ്രാൻസിസ്കൻ ആപ്തവാക്യം (FRANCISCAN MOTTO)
                </p>
                <p className="text-sm sm:text-base font-extrabold text-amber-100">
                  "സമാധാനവും നന്മയും" (Pax et Bonum • Peace and Goodness)
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/retreats"
                  className="bg-[#7A1C1C] hover:bg-[#902222] text-white text-sm sm:text-base font-extrabold px-6 py-3.5 rounded-xl transition shadow-xl inline-flex items-center gap-2 border border-amber-400/40 active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>ധ്യാന കലണ്ടർ 2026</span>
                </Link>

                <Link
                  href="/gallery"
                  className="bg-stone-900/90 hover:bg-stone-800 text-amber-300 border-2 border-stone-600 text-sm sm:text-base font-extrabold px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2 active:scale-98 shadow-xl"
                >
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                  <span>ഫോട്ടോ ഗാലറി</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Framed Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-stone-950/90 backdrop-blur-xl p-3 sm:p-4 rounded-3xl shadow-2xl border-2 border-amber-500/40 relative group">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="/assisi_assets/2018-05-26.webp"
                    alt="അസ്സീസി ധ്യാനകേന്ദ്രം പ്രധാന ദേവാലയം"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/IMG20230605153946-1024x460.webp';
                    }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 text-left">
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-white">
                      അസ്സീസി ആശ്രമവും ധ്യാനകേന്ദ്രവും
                    </p>
                    <p className="text-xs text-amber-300 font-bold">
                      സുവർണ്ണ ജൂബിലി വർഷം (1976 – 2026)
                    </p>
                  </div>
                  <span className="text-xs font-black bg-amber-400 text-slate-950 px-3 py-1 rounded-lg">
                    ഭരണങ്ങാനം
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. RETREATS SECTION: CANDLELIT ADORATION BACKGROUND */}
      {/* ========================================================================= */}
      <section id="retreats" className="relative py-16 sm:py-20 text-left overflow-hidden">
        
        {/* Background Image with Deep Crimson Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_adoration_candles_bg.webp"
            alt="Adoration Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C0E10]/96 via-[#180A0C]/92 to-[#14080A]/96" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div {...springEntrance} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 bg-amber-950 px-3.5 py-1 rounded-md border border-amber-500 inline-block shadow-sm">
                RESIDENTIAL RETREATS 2026
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                RETREAT PROGRAMES (ധ്യാനങ്ങൾ 2026)
              </h2>
            </div>
            <Link
              href="/retreats"
              className="text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition inline-flex items-center gap-1.5"
            >
              <span>മുഴുവൻ കലണ്ടറും മാർഗ്ഗനിർദ്ദേശങ്ങളും കാണുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Month selector tabs */}
          <motion.div {...springEntrance} className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
            {(['august', 'september', 'october'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMonth(m)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
                  selectedMonth === m
                    ? 'bg-[#7A1C1C] text-white shadow-lg border-2 border-amber-400'
                    : 'bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-600'
                }`}
              >
                {m} 2026
              </button>
            ))}
          </motion.div>

          {/* Retreat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RETREAT_CALENDAR[selectedMonth].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.08 }}
                className="bg-stone-950/90 backdrop-blur-md border-2 border-stone-700/80 rounded-2xl p-5 shadow-2xl hover:border-amber-400 transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-950 bg-amber-400 px-3 py-1 rounded-md">
                      {item.dates}
                    </span>
                    <span className="text-xs font-extrabold text-white bg-stone-800 px-2.5 py-1 rounded border border-stone-600">
                      {item.fee}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white pt-1 leading-snug">
                    {item.type}
                  </h3>
                  <p className="text-xs text-stone-200 font-medium">
                    നയിക്കുന്നത്: <strong className="text-amber-300 font-bold">{item.director}</strong>
                  </p>
                  <p className="text-[11px] text-stone-300 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.timing}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
                  <a
                    href="tel:8590124063"
                    className="text-xs font-bold text-amber-300 hover:text-white transition flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>8590124063</span>
                  </a>
                  <a
                    href={`https://wa.me/918330884331?text=${encodeURIComponent(`ഹലോ, ${item.dates} തീയതിയിലെ ${item.type} ധ്യാനത്തിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്നു.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0F5132] hover:bg-[#0B3D26] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1 shadow-sm"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONVENTION SECTION: KERALA MIST BACKGROUND WITH GLASS PANELS */}
      {/* ========================================================================= */}
      <section id="convention" className="relative py-16 sm:py-20 text-left overflow-hidden">
        
        {/* Background Image: Misty Dawn Hills */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_mist_nature_bg.webp"
            alt="Misty Hills Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/96 via-stone-950/90 to-stone-900/85" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div {...springEntrance} className="lg:col-span-7 space-y-5">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-rose-300 bg-rose-950 px-3.5 py-1 rounded-md border border-rose-600 inline-block shadow-sm">
                MONTHLY 1-DAY CONVENTION • ഭരണങ്ങാനം
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                സായാഹ്ന കൺവെൻഷൻ (Evening Convention)
              </h2>
              <p className="text-sm sm:text-base text-stone-200 font-medium leading-relaxed">
                എല്ലാ മാസത്തെയും ആദ്യ ചൊവ്വാഴ്ച വൈകുന്നേരം 4:00 മുതൽ രാത്രി 9:00 വരെ അസ്സീസി ധ്യാനകേന്ദ്രത്തിൽ വെച്ച് നടക്കുന്ന സായാഹ്ന കൺവെൻഷൻ.
              </p>
              
              {/* Timetable Panel */}
              <div className="bg-stone-950/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-5 divide-y divide-stone-800 shadow-2xl space-y-1">
                <div className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-black text-slate-950 bg-amber-400 px-3 py-1 rounded-md">4:00 PM</span>
                  <span className="font-bold text-white">കുമ്പസാരം (Sacrament of Confession)</span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-black text-slate-950 bg-amber-400 px-3 py-1 rounded-md">5:00 PM</span>
                  <span className="font-bold text-white">ദിവ്യകാരുണ്യ ആരാധന (Eucharistic Adoration)</span>
                </div>
                <div className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-black text-slate-950 bg-amber-400 px-3 py-1 rounded-md">6:00 PM</span>
                  <span className="font-bold text-white">വിശുദ്ധ കുർബാന & വചന പ്രഘോഷണം (Holy Mass)</span>
                </div>
              </div>

              <div>
                <Link
                  href="/convention"
                  className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2 shadow-lg active:scale-98"
                >
                  <span>മുഴുവൻ വിവരങ്ങളും പോസ്റ്ററും കാണുക</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 16 }}
              className="lg:col-span-5"
            >
              <div className="bg-stone-950/90 backdrop-blur-md border border-stone-700 rounded-3xl p-3.5 shadow-2xl max-w-sm mx-auto">
                <img
                  src="/assisi_assets/convension-683x1024.webp"
                  alt="സായാഹ്ന കൺവെൻഷൻ പോസ്റ്റർ"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GALLERY PREVIEW SECTION: MARIAN MIDNIGHT CERULEAN */}
      {/* ========================================================================= */}
      <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-[#09111E] via-[#0E1B30] to-[#070D18] text-left border-y border-blue-900/50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...springEntrance} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-300 bg-blue-950 px-3.5 py-1 rounded-md border border-blue-600 inline-block shadow-sm">
                PHOTO ARCHIVES • ഭരണങ്ങാനം
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                ഫോട്ടോ ഗാലറി (Photo Gallery)
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs sm:text-sm font-bold text-blue-300 hover:text-white transition inline-flex items-center gap-1.5"
            >
              <span>മുഴുവൻ ഫോട്ടോകളും (60+ ചിത്രങ്ങൾ) കാണുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_PREVIEW.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.08 }}
              >
                <Link
                  href="/gallery"
                  className="group bg-slate-900/90 backdrop-blur-md rounded-2xl border-2 border-blue-900/60 overflow-hidden shadow-2xl hover:border-blue-400 transition block"
                >
                  <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-white text-[10px] font-black px-2.5 py-0.5 rounded border border-white/30">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs sm:text-sm font-extrabold text-white group-hover:text-blue-300 transition line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THANKSGIVING SECTION: CANDLELIT WARM OCHRE GLOW */}
      {/* ========================================================================= */}
      <section id="thanksgiving" className="relative py-16 sm:py-20 text-left overflow-hidden">
        
        {/* Background Image: Adoration Candles Glow */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_adoration_candles_bg.webp"
            alt="Testimonials Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/96 via-stone-950/90 to-stone-900/85" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column */}
            <motion.div {...springEntrance} className="lg:col-span-7 bg-stone-950/90 backdrop-blur-md border-2 border-amber-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5 text-white">
              <div>
                <span className="text-xs font-black text-slate-950 bg-amber-400 px-3 py-1 rounded">
                  WRITE TO US
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                  THANKS GIVING (നന്ദി പ്രകാശനം)
                </h2>
                <p className="text-xs sm:text-sm text-stone-200 mt-1">
                  Please make your Thanks Giving Message for all the benefits you have received through Our Lord Jesus Christ...
                </p>
              </div>

              {thanksSubmitted ? (
                <div className="p-5 bg-emerald-950/90 border border-emerald-500 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold text-emerald-200">നന്ദി പ്രകാശനം സമർപ്പിച്ചു!</p>
                </div>
              ) : (
                <form onSubmit={handleThanksSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={thanksForm.firstName}
                      onChange={(e) => setThanksForm({ ...thanksForm, firstName: e.target.value })}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border-2 border-stone-600 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={thanksForm.lastName}
                      onChange={(e) => setThanksForm({ ...thanksForm, lastName: e.target.value })}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border-2 border-stone-600 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={thanksForm.contact}
                      onChange={(e) => setThanksForm({ ...thanksForm, contact: e.target.value })}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border-2 border-stone-600 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={thanksForm.email}
                      onChange={(e) => setThanksForm({ ...thanksForm, email: e.target.value })}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border-2 border-stone-600 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                    />
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Subject (വിഷയം)"
                    value={thanksForm.subject}
                    onChange={(e) => setThanksForm({ ...thanksForm, subject: e.target.value })}
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl border-2 border-stone-600 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                  />

                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your testimony (Type Here...)"
                    value={thanksForm.description}
                    onChange={(e) => setThanksForm({ ...thanksForm, description: e.target.value })}
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl border-2 border-stone-600 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                  />

                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-black px-6 py-3.5 rounded-xl transition shadow-xl flex items-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT THANKS GIVING</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Testimonials Column */}
            <motion.div {...springEntrance} className="lg:col-span-5 space-y-5">
              <div className="border-b border-amber-900/60 pb-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Quote className="w-5 h-5 text-amber-400" />
                  <span>TESTIMONIALS (സാക്ഷ്യങ്ങൾ)</span>
                </h3>
              </div>

              <div className="bg-stone-950/90 backdrop-blur-md border border-stone-700 p-5 rounded-2xl shadow-xl space-y-2 text-stone-100">
                <p className="text-xs sm:text-sm leading-relaxed font-normal">
                  "We attended a retreat last month and my mother had prayed for her sister who had a debt of Rs 21 lakhs... God miraculously cleared the debt through divine providence."
                </p>
                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs">
                  <strong className="text-white font-bold">Abraham Jacob</strong>
                  <span className="text-amber-400 font-bold">October 2023</span>
                </div>
              </div>

              <div className="bg-stone-950/90 backdrop-blur-md border border-stone-700 p-5 rounded-2xl shadow-xl space-y-2 text-stone-100">
                <p className="text-xs sm:text-sm leading-relaxed font-normal">
                  "I had attended the retreat last year... blessed with a baby boy overcoming PCOD. All glory to Jesus!"
                </p>
                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs">
                  <strong className="text-white font-bold">Dona Jose</strong>
                  <span className="text-amber-400 font-bold">June 2024</span>
                </div>
              </div>

              <Link
                href="/thanksgiving"
                className="text-xs font-bold text-amber-300 hover:text-white transition inline-flex items-center gap-1.5"
              >
                <span>കൂടുതൽ അനുഭവ സാക്ഷ്യങ്ങൾ വായിക്കുക</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR INSPIRATION: CAPUCHIN MONASTERY EARTH */}
      {/* ========================================================================= */}
      <section id="inspiration" className="py-16 sm:py-20 bg-gradient-to-b from-[#1C1815] via-[#241F1A] to-[#181412] text-left border-y border-stone-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...springEntrance} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 bg-amber-950 px-3.5 py-1 rounded-md border border-amber-600 inline-block shadow-sm">
                FOUNDING FATHERS • സ്ഥാപക പിതാക്കന്മാർ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                OUR INSPIRATION (സ്ഥാപക പിതാക്കന്മാർ)
              </h2>
            </div>
            <Link
              href="/inspiration"
              className="text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition inline-flex items-center gap-1.5"
            >
              <span>പൂർണ്ണ ജീവചരിത്രം വായിക്കുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Fr. Armond */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="bg-stone-950/90 backdrop-blur-md border-2 border-stone-700 p-6 rounded-3xl shadow-xl flex items-start gap-4"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-stone-800 border-2 border-amber-400/60 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                <img
                  src="/assisi_assets/fr_armond_madhavath.webp"
                  alt="Fr Armond Madhavath Capuchin"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-[11px] font-black text-slate-950 bg-amber-400 px-2 py-0.5 rounded">
                  1957 – 2001
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Fr. Armond Madhavath Capuchin
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  മലയാളത്തിലെ ആദ്യ കരിസ്മാറ്റിക് ധ്യാനം ഭരണങ്ങാനത്ത് ആരംഭിച്ച പുണ്യപിതാവ്.
                </p>
              </div>
            </motion.div>

            {/* Fr. Gratian */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="bg-stone-950/90 backdrop-blur-md border-2 border-stone-700 p-6 rounded-3xl shadow-xl flex items-start gap-4"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-stone-800 border-2 border-amber-400/60 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                <img
                  src="/assisi_assets/fr_gratian_pallipurath.webp"
                  alt="Fr. Gratian Pallipurath Capuchin"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-[11px] font-black text-slate-950 bg-amber-400 px-2 py-0.5 rounded">
                  1926 – 2014
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Fr. Gratian Pallipurath Capuchin
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-normal">
                  ഫ്രാൻസിസ്കൻ മൂന്നാം സഭയുടെയും മിഷൻ ധ്യാനങ്ങളുടെയും അടിയുറച്ച പ്രഘോഷകൻ.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR INSTITUTIONS: CAPUCHIN EMERALD */}
      {/* ========================================================================= */}
      <section id="institutions" className="py-16 sm:py-20 bg-gradient-to-b from-[#061810] via-[#0B2519] to-[#04120C] text-left border-y border-emerald-900/50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...springEntrance} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3.5 py-1 rounded-md border border-emerald-600 inline-block shadow-sm">
                MINISTRIES & ASHRAMS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                OUR INSTITUTIONS (കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ)
              </h2>
            </div>
            <Link
              href="/institutions"
              className="text-xs sm:text-sm font-bold text-emerald-300 hover:text-white transition inline-flex items-center gap-1.5"
            >
              <span>എല്ലാ സ്ഥാപനങ്ങളുടെയും വിവരങ്ങൾ കാണുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CAPUCHIN_INSTITUTIONS.map((inst, idx) => (
              <motion.a
                key={idx}
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.05 }}
                className="bg-emerald-950/80 backdrop-blur-md border-2 border-emerald-800/60 p-4 rounded-2xl shadow-xl hover:border-emerald-400 transition text-left group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition line-clamp-1">
                    {inst.mal}
                  </h3>
                  <p className="text-[11px] text-emerald-200/80 font-medium line-clamp-1">
                    {inst.name}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-emerald-400 group-hover:text-white transition">
                  <span>സന്ദർശിക്കുക</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PRAYER REQUESTS: MARIAN CERULEAN */}
      {/* ========================================================================= */}
      <section id="prayer" className="py-16 sm:py-20 bg-gradient-to-b from-[#08152A] via-[#0E2040] to-[#061020] text-left border-y border-blue-900/50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div {...springEntrance} className="lg:col-span-6 space-y-4">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-300 bg-blue-950 px-3.5 py-1 rounded-md border border-blue-600 inline-block shadow-sm">
                INTERCESSORY PRAYER
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                PRAYER REQUESTS (പ്രാർത്ഥനാ സഹായം)
              </h2>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">
                നിങ്ങളുടെ ആത്മീയ-ശാരീരിക നിയോഗങ്ങൾ അസ്സീസി ആശ്രമത്തിലെ കപ്പൂച്ചിൻ വൈദികർ വിശുദ്ധ കുർബാനയിലും ദിവ്യകാരുണ്യ സന്നിധിയിലും സമർപ്പിച്ച് പ്രാർത്ഥിക്കുന്നു.
              </p>
              <div>
                <Link
                  href="/prayer"
                  className="bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-lg inline-flex items-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>പ്രാർത്ഥനാ ഫോം തുറക്കുക</span>
                </Link>
              </div>
            </motion.div>

            <motion.div {...springEntrance} className="lg:col-span-6 bg-slate-950/90 backdrop-blur-md border-2 border-blue-500/40 p-6 rounded-3xl shadow-2xl space-y-3 text-white">
              <h3 className="text-base sm:text-lg font-bold text-white">
                ഹെൽപ്പ്‌ലൈൻ നമ്പറുകൾ
              </h3>
              <p className="text-xs sm:text-sm text-stone-200">
                അടിയന്തര പ്രാർത്ഥനാ സഹായങ്ങൾക്ക് നേരിട്ട് വിളിക്കാം:
              </p>
              <div className="flex flex-wrap gap-4 font-bold text-sm text-amber-300 pt-1">
                <a href="tel:04822238335" className="hover:underline flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>04822 238335 (ഓഫീസ്)</span>
                </a>
                <a href="tel:8590124063" className="hover:underline flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+91 8590124063</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CONTACT US: CLEAN SANCTUARY SLATE */}
      {/* ========================================================================= */}
      <section id="contact" className="py-16 sm:py-20 bg-[#12100E] text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div {...springEntrance} className="lg:col-span-6 space-y-4">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 bg-stone-900 px-3.5 py-1 rounded-md border border-amber-600 inline-block">
                OFFICE & LOCATION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                CONTACT US (ബന്ധപ്പെടുക)
              </h2>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">
                Fr. Director, Assisi Renewal Center, Bharananganam P.O., Kottayam Dist., Kerala - 686578.<br />
                പാലാ – ഈരാറ്റുപേട്ട റൂട്ടിൽ ഭരണങ്ങാനം ജംഗ്ഷനിൽ നിന്ന് 600 മീറ്റർ.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition shadow-lg inline-flex items-center gap-1.5 active:scale-98"
                >
                  <MapPin className="w-4 h-4" />
                  <span>റൂട്ടും മാപ്പും കാണുക</span>
                </Link>
                <a
                  href="tel:04822238335"
                  className="bg-stone-800 hover:bg-stone-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition inline-flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>04822 238335</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 16 }}
              className="lg:col-span-6"
            >
              <div className="bg-stone-950 border-2 border-stone-800 rounded-3xl p-3 shadow-2xl">
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden">
                  <iframe
                    title="Assisi Renewal Center Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.228784110825!2d76.7166311!3d9.6974972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cb679ba2bb6b%3A0xb35a7702f23cf0a6!2sAssisi%20Renewal%20Center!5e0!3m2!1sen!2sin!4v1694241078167!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
