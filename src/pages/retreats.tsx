import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

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

export default function RetreatsPage() {
  const [selectedMonth, setSelectedMonth] = useState<keyof typeof RETREAT_CALENDAR>('august');

  return (
    <Layout
      title="ധ്യാന കലണ്ടർ 2026 | Retreat Schedule | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Official 2026 Residential Retreat Schedule at Assisi Renewal Center Bharananganam. Booking, timings and preachers."
    >
      {/* Header Banner: Franciscan Crimson Atmosphere */}
      <section className="relative bg-[#1E080C] border-b border-stone-800 py-12 sm:py-16 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-3.5 py-1 rounded-md border border-amber-500 inline-flex items-center shadow-xs">
              <span>RESIDENTIAL RETREATS 2026 • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              ധ്യാന കലണ്ടർ 2026 (RETREAT SCHEDULE)
            </h1>
            <p className="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
              അസ്സീസി ധ്യാനകേന്ദ്രത്തിൽ നടക്കുന്ന താമസിച്ചുള്ള ധ്യാനങ്ങളുടെ തീയതികളും വിവരങ്ങളും.
            </p>
          </div>
        </div>
      </section>

      {/* Main Retreats Content with Subtle Ambient Texture */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden bg-[#0F0C0B]">
        
        {/* Subtle background */}
        <div className="absolute inset-0 z-0 bg-[#0F0C0B]">
          <img
            src="/assisi_assets/backgrounds/retreat_eucharist_glow.webp"
            alt="Eucharistic Adoration Sanctuary"
            className="w-full h-full object-cover opacity-15 filter blur-[0.5px]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C0B]/98 via-[#0F0C0B]/90 to-[#0F0C0B]/98" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Month Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 border-b border-stone-800 mb-10">
            {(['august', 'september', 'october'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMonth(m)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition shadow-sm cursor-pointer ${
                  selectedMonth === m
                    ? 'bg-[#7A1C1C] text-white shadow-md border-2 border-amber-400'
                    : 'bg-[#181412] hover:bg-[#221D1A] text-stone-200 border border-stone-700'
                }`}
              >
                {m} 2026
              </button>
            ))}
          </div>

          {/* Cards Grid - SOLID OPAQUE HIGH-CONTRAST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RETREAT_CALENDAR[selectedMonth].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.05 }}
                className="bg-[#181412] border-2 border-stone-700 rounded-2xl p-6 shadow-xl hover:border-amber-400 transition space-y-4 text-left"
              >
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-xs sm:text-sm font-bold text-amber-300 bg-amber-950 px-3 py-1 rounded-md border border-amber-500">
                    {item.dates}
                  </span>
                  <span className="text-xs font-bold text-stone-200 bg-stone-800 px-2.5 py-1 rounded border border-stone-700">
                    രജിസ്ട്രേഷൻ ഫീസ്: {item.fee}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.type}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 mt-1 font-medium">
                    നയിക്കുന്നത്: <strong className="text-amber-300">{item.director}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-300 font-medium">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item.timing}</span>
                </div>

                {/* Card Action CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:8590124063"
                    className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition inline-flex items-center gap-1.5 shadow-md active:scale-98"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>സീറ്റ് ബുക്ക് ചെയ്യാൻ വിളിക്കുക</span>
                  </a>
                  <a
                    href={`https://wa.me/918330884331?text=${encodeURIComponent(`ഹലോ, ${item.dates} തീയതിയിലെ ${item.type} ധ്യാനത്തിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്നു.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition inline-flex items-center gap-1.5 shadow-md active:scale-98 border border-amber-400"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp വഴി ബുക്കിംഗ്</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guidelines info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="mt-12 bg-[#181412] border-2 border-stone-700 rounded-3xl p-6 sm:p-8 text-left space-y-4 text-white shadow-2xl"
          >
            <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
              <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                ധ്യാനത്തിൽ പങ്കെടുക്കുന്നവർ ശ്രദ്ധിക്കേണ്ട പ്രധാന കാര്യങ്ങൾ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <p>ധ്യാനം വ്യാഴാഴ്ച വൈകുന്നേരം 4:30 ന് ആരംഭിച്ചു ഞായറാഴ്ച ഉച്ചയ്ക്ക് 1:30 ന് സമാപിക്കുന്നു.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <p>ബൈബിൾ (സത്യവേദപുസ്തകം), നോട്ട്ബുക്ക്, പേന, കുടിവെള്ള ബോട്ടിൽ എന്നിവ കരുതുക.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <p>താമസവും ഭക്ഷണവും ആശ്രമത്തിൽ ക്രമീകരിച്ചിരിക്കുന്നു. ആവശ്യമായ ബെഡ്ഷീറ്റ്, മരുന്നുകൾ കരുതുക.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <p>മുൻകൂട്ടി സീറ്റ് ഉറപ്പാക്കാൻ ഫോൺ വഴിയോ വാട്സാപ്പ് വഴിയോ രജിസ്റ്റർ ചെയ്യേണ്ടതാണ്.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
