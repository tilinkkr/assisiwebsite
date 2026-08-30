import React, { useState } from 'react';
import Link from 'next/link';
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
  CheckCircle2
} from 'lucide-react';

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
      {/* 1. HERO: WARM IVORY & LIGHT OCHRE GOLD (Christ the Light & Peace) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#FBF8F1] via-[#FAF6EC] to-[#F5EFE4] border-b border-[#E3DCCE] py-14 sm:py-18 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block bg-[#EFE8D8] text-[#6B4724] border border-[#DDD3BF] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-md">
                ST. JOSEPH CAPUCHIN PROVINCE • BHARANANGANAM
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
                അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                വിശുദ്ധ അൽഫോൻസാമ്മയുടെ പുണ്യഭൂമിയായ ഭരണങ്ങാനത്ത്, കപ്പൂച്ചിൻ സന്യാസിമാരുടെ ആത്മീയ നേതൃത്വത്തിൽ കഴിഞ്ഞ 50 വർഷങ്ങളായി (1976–2026) പതിനായിരങ്ങൾക്ക് ദൈവാനുഭവവും രോഗശാന്തിയും പകരുന്ന ആത്മീയ തണൽ.
              </p>

              <div className="p-4 bg-white rounded-2xl border border-[#E0D7C5] shadow-xs space-y-1">
                <p className="text-xs font-bold text-[#8C6239] uppercase tracking-wider">
                  ✝️ ഫ്രാൻസിസ്കൻ ആപ്തവാക്യം
                </p>
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  "സമാധാനവും നന്മയും" (Pax et Bonum • Peace and Goodness)
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/retreats"
                  className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-xl transition shadow-sm inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>ധ്യാന തീയതികൾ 2026</span>
                </Link>

                <Link
                  href="/gallery"
                  className="bg-white hover:bg-slate-100 text-slate-900 border border-[#D5CCBA] text-sm sm:text-base font-bold px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2"
                >
                  <ZoomIn className="w-4 h-4 text-[#8C6239]" />
                  <span>ഫോട്ടോ ഗാലറി</span>
                </Link>
              </div>
            </div>

            {/* Right Framed Photo */}
            <div className="lg:col-span-6">
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-[#E0D7C5] relative">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/assisi_assets/2018-05-26.webp"
                    alt="അസ്സീസി ധ്യാനകേന്ദ്രം പ്രധാന ദേവാലയം"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/IMG20230605153946-1024x460.webp';
                    }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 text-left">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-950">
                      അസ്സീസി ആശ്രമവും ധ്യാനകേന്ദ്രവും
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#8C6239] font-medium">
                      സുവർണ്ണ ജൂബിലി വർഷം (1976 – 2026)
                    </p>
                  </div>
                  <span className="text-[11px] font-bold bg-[#FAF7F0] border border-[#DDD3BF] text-[#734126] px-2.5 py-1 rounded-md">
                    ഭരണങ്ങാനം
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. RETREATS PREVIEW: EUCHARISTIC CRIMSON */}
      {/* ========================================================================= */}
      <section id="retreats" className="py-16 bg-[#FFF9FA] border-b border-[#F0D5D8] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7A1C1C] bg-white px-3 py-1 rounded-md border border-[#F0D5D8] inline-block">
                RESIDENTIAL RETREATS 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2">
                RETREAT PROGRAMES (ധ്യാനങ്ങൾ 2026)
              </h2>
            </div>
            <Link
              href="/retreats"
              className="text-xs sm:text-sm font-bold text-[#7A1C1C] hover:underline inline-flex items-center gap-1"
            >
              <span>മുഴുവൻ മാസങ്ങളിലെയും കലണ്ടർ കാണുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Month selector */}
          <div className="flex items-center gap-2 mb-6">
            {(['august', 'september', 'october'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMonth(m)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer ${
                  selectedMonth === m
                    ? 'bg-[#7A1C1C] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#F0D5D8]'
                }`}
              >
                {m} 2026
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RETREAT_CALENDAR[selectedMonth].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EED4D7] rounded-2xl p-5 shadow-xs hover:shadow-md transition space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#7A1C1C] bg-[#FDF2F4] px-2.5 py-0.5 rounded border border-[#F5D5DA]">
                    {item.dates}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 pt-1">
                    {item.type}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {item.director}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="tel:8590124063"
                    className="text-xs font-bold text-[#7A1C1C] hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>ബുക്കിംഗ്: 8590124063</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONVENTION PREVIEW: EUCHARISTIC ROSE */}
      {/* ========================================================================= */}
      <section id="convention" className="py-16 bg-[#FDF5F6] border-b border-[#ECC4C9] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7A1C1C] bg-white px-3 py-1 rounded-md border border-[#F0D5D8] inline-block">
                MONTHLY 1-DAY CONVENTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                സായാഹ്ന കൺവെൻഷൻ (Evening Convention)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                എല്ലാ മാസത്തെയും ആദ്യ ചൊവ്വാഴ്ച വൈകുന്നേരം 4:00 മുതൽ രാത്രി 9:00 വരെ അസ്സീസി ധ്യാനകേന്ദ്രത്തിൽ വെച്ച് നടക്കുന്ന സായാഹ്ന കൺവെൻഷൻ.
              </p>
              
              <div className="bg-white border border-[#EAD0D3] rounded-2xl p-4 divide-y divide-slate-100 shadow-xs">
                <div className="py-2 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-[#7A1C1C]">4:00 PM</span>
                  <span className="font-medium text-slate-800">കുമ്പസാരം (Confession)</span>
                </div>
                <div className="py-2 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-[#7A1C1C]">5:00 PM</span>
                  <span className="font-medium text-slate-800">ദിവ്യകാരുണ്യ ആരാധന (Adoration)</span>
                </div>
                <div className="py-2 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-[#7A1C1C]">6:00 PM</span>
                  <span className="font-medium text-slate-800">വിശുദ്ധ കുർബാന (Holy Mass)</span>
                </div>
              </div>

              <div>
                <Link
                  href="/convention"
                  className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition inline-flex items-center gap-2"
                >
                  <span>മുഴുവൻ സമയക്രമവും വിവരങ്ങളും</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-[#EAD0D3] rounded-3xl p-3 shadow-md max-w-sm mx-auto">
                <img
                  src="/assisi_assets/convension-683x1024.webp"
                  alt="സായാഹ്ന കൺവെൻഷൻ പോസ്റ്റർ"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GALLERY PREVIEW SECTION: MARIAN BLUE TINT */}
      {/* ========================================================================= */}
      <section id="gallery" className="py-16 bg-[#F0F7FF] border-b border-[#C7DCF1] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E3A8A] bg-white px-3 py-1 rounded-md border border-[#BFDBFE] inline-block">
                PHOTO ARCHIVES • ഭരണങ്ങാനം
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2">
                ഫോട്ടോ ഗാലറി (Photo Gallery)
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs sm:text-sm font-bold text-[#1E3A8A] hover:underline inline-flex items-center gap-1"
            >
              <span>മുഴുവൻ ഫോട്ടോകളും കാണുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_PREVIEW.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group bg-white rounded-2xl border border-[#C7DCF1] overflow-hidden shadow-xs hover:shadow-lg transition block"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>
                <div className="p-3.5">
                  <p className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-[#1E3A8A] transition line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THANKSGIVING PREVIEW: SUNRISE GOLD */}
      {/* ========================================================================= */}
      <section id="thanksgiving" className="py-16 bg-[#FFFDF7] border-b border-[#EADBBE] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 bg-white border border-[#EADBBE] p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
              <div>
                <span className="text-xs font-bold text-[#92400E] bg-[#FEFCE8] px-3 py-1 rounded border border-[#FDE68A]">
                  WRITE TO US
                </span>
                <h2 className="text-2xl font-bold text-slate-950 mt-2">
                  THANKS GIVING (നന്ദി പ്രകാശനം)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Please make your Thanks Giving Message for all the benefits you have received through Our Lord Jesus Christ...
                </p>
              </div>

              {thanksSubmitted ? (
                <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                  <p className="text-sm font-bold text-emerald-900">നന്ദി പ്രകാശനം സമർപ്പിച്ചു!</p>
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 bg-[#FAFAF8]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={thanksForm.lastName}
                      onChange={(e) => setThanksForm({ ...thanksForm, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 bg-[#FAFAF8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={thanksForm.contact}
                      onChange={(e) => setThanksForm({ ...thanksForm, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 bg-[#FAFAF8]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={thanksForm.email}
                      onChange={(e) => setThanksForm({ ...thanksForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 bg-[#FAFAF8]"
                    />
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Subject (വിഷയം)"
                    value={thanksForm.subject}
                    onChange={(e) => setThanksForm({ ...thanksForm, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 bg-[#FAFAF8]"
                  />

                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your testimony (Type Here...)"
                    value={thanksForm.description}
                    onChange={(e) => setThanksForm({ ...thanksForm, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 bg-[#FAFAF8]"
                  />

                  <button
                    type="submit"
                    className="bg-[#B45309] hover:bg-[#92400E] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition shadow-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT THANKS GIVING</span>
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="border-b border-[#EADBBE] pb-2">
                <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                  <Quote className="w-4 h-4 text-[#B45309]" />
                  <span>TESTIMONIALS (സാക്ഷ്യങ്ങൾ)</span>
                </h3>
              </div>

              <div className="bg-white border border-[#EADBBE] p-5 rounded-2xl shadow-xs space-y-2">
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  "We attended a retreat last month and my mother had prayed for her sister who a mother of five children and had a debt of Rs 21 lakhs... God miraculously cleared the debt."
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <strong className="text-slate-950">Abraham Jacob</strong>
                  <span className="text-amber-800 font-semibold">October 2023</span>
                </div>
              </div>

              <div className="bg-white border border-[#EADBBE] p-5 rounded-2xl shadow-xs space-y-2">
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  "I had attended the retreat last year... blessed with a baby boy overcoming PCOD. All glory to Jesus!"
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <strong className="text-slate-950">Dona Jose</strong>
                  <span className="text-amber-800 font-semibold">June 2024</span>
                </div>
              </div>

              <Link
                href="/thanksgiving"
                className="text-xs font-bold text-[#B45309] hover:underline inline-flex items-center gap-1"
              >
                <span>കൂടുതൽ സാക്ഷ്യങ്ങൾ വായിക്കുക</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR INSPIRATION PREVIEW: FRANCISCAN EARTH */}
      {/* ========================================================================= */}
      <section id="inspiration" className="py-16 bg-[#F7F4F0] border-b border-[#DDD3BF] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#734126] bg-white px-3 py-1 rounded-md border border-[#DDD3BF] inline-block">
                FOUNDING FATHERS • സ്ഥാപക പിതാക്കന്മാർ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2">
                OUR INSPIRATION (സ്ഥാപക പിതാക്കന്മാർ)
              </h2>
            </div>
            <Link
              href="/inspiration"
              className="text-xs sm:text-sm font-bold text-[#734126] hover:underline inline-flex items-center gap-1"
            >
              <span>പൂർണ്ണ ജീവചരിത്രം വായിക്കുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Fr. Armond */}
            <div className="bg-white border-2 border-[#DDD3BF] p-6 rounded-3xl shadow-xs flex items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#EBF7FF] border-2 border-[#BAE6FD] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                <img
                  src="/assisi_assets/fr_armond_madhavath.webp"
                  alt="Fr Armond Madhavath Capuchin"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#734126] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#EADBBE]">
                  1957 – 2001
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-950">
                  Fr. Armond Madhavath Capuchin
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  മലയാളത്തിലെ ആദ്യ കരിസ്മാറ്റിക് ധ്യാനം ഭരണങ്ങാനത്ത് ആരംഭിച്ച പുണ്യപിതാവ്.
                </p>
              </div>
            </div>

            {/* Fr. Gratian */}
            <div className="bg-white border-2 border-[#DDD3BF] p-6 rounded-3xl shadow-xs flex items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#EBF7FF] border-2 border-[#BAE6FD] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                <img
                  src="/assisi_assets/fr_gratian_pallipurath.webp"
                  alt="Fr. Gratian Pallipurath Capuchin"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#734126] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#EADBBE]">
                  1926 – 2014
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-950">
                  Fr. Gratian Pallipurath Capuchin
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ഫ്രാൻസിസ്കൻ മൂന്നാം സഭയുടെയും മിഷൻ ധ്യാനങ്ങളുടെയും അടിയുറച്ച പ്രഘോഷകൻ.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR INSTITUTIONS PREVIEW: CAPUCHIN EMERALD */}
      {/* ========================================================================= */}
      <section id="institutions" className="py-16 bg-[#F4FAF6] border-b border-[#BBE3CC] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#065F46] bg-white px-3 py-1 rounded-md border border-[#A7F3D0] inline-block">
                MINISTRIES & ASHRAMS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-2">
                OUR INSTITUTIONS (കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ)
              </h2>
            </div>
            <Link
              href="/institutions"
              className="text-xs sm:text-sm font-bold text-[#065F46] hover:underline inline-flex items-center gap-1"
            >
              <span>എല്ലാ സ്ഥാപനങ്ങളുടെയും വിവരങ്ങൾ കാണുക</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CAPUCHIN_INSTITUTIONS.map((inst, idx) => (
              <a
                key={idx}
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#C6E6D2] p-4 rounded-2xl shadow-xs hover:shadow-md transition text-left group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-emerald-800 transition line-clamp-1">
                    {inst.mal}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                    {inst.name}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                  <span>സന്ദർശിക്കുക</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PRAYER REQUESTS PREVIEW: SOFT CERULEAN */}
      {/* ========================================================================= */}
      <section id="prayer" className="py-16 bg-[#F2F7FC] border-b border-[#B8D5ED] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E3A8A] bg-white px-3 py-1 rounded-md border border-[#BFDBFE] inline-block">
                INTERCESSORY PRAYER
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                PRAYER REQUESTS (പ്രാർത്ഥനാ സഹായം)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                നിങ്ങളുടെ ആത്മീയ-ശാരീരിക നിയോഗങ്ങൾ അസ്സീസി ആശ്രമത്തിലെ കപ്പൂച്ചിൻ വൈദികർ വിശുദ്ധ കുർബാനയിലും ദിവ്യകാരുണ്യ സന്നിധിയിലും സമർപ്പിച്ച് പ്രാർത്ഥിക്കുന്നു.
              </p>
              <div>
                <Link
                  href="/prayer"
                  className="bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition shadow-xs inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>പ്രാർത്ഥനാ ഫോം തുറക്കുക</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#BFDBFE] p-6 rounded-3xl shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-950">
                ഹെൽപ്പ്‌ലൈൻ നമ്പറുകൾ
              </h3>
              <p className="text-xs text-slate-600">
                അടിയന്തര പ്രാർത്ഥനാ സഹായങ്ങൾക്ക് നേരിട്ട് വിളിക്കാം:
              </p>
              <div className="flex flex-wrap gap-4 font-bold text-sm text-blue-900 pt-1">
                <a href="tel:04822238335" className="hover:underline flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>04822 238335</span>
                </a>
                <a href="tel:8590124063" className="hover:underline flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>+91 8590124063</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CONTACT US PREVIEW */}
      {/* ========================================================================= */}
      <section id="contact" className="py-16 bg-white text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8C6239] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EADBBE] inline-block">
                OFFICE & LOCATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                CONTACT US (ബന്ധപ്പെടുക)
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Fr. Director, Assisi Renewal Center, Bharananganam P.O., Kottayam Dist., Kerala - 686578.<br />
                പാലാ – ഈരാറ്റുപേട്ട റൂട്ടിൽ ഭരണങ്ങാനം ജംഗ്ഷനിൽ നിന്ന് 600 മീറ്റർ.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition shadow-xs inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-4 h-4" />
                  <span>റൂട്ടും മാപ്പും കാണുക</span>
                </Link>
                <a
                  href="tel:04822238335"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition inline-flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>04822 238335</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF8F5] border border-[#E8E2D5] rounded-3xl p-3 shadow-sm">
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
