import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Calendar, Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
  ],
  november: [
    { dates: 'November 06 - 09', type: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'November 13 - 16', type: 'Spiritual Renewal & Word of God (വചന പ്രഘോഷണ ധ്യാനം)', director: 'Capuchin Preachers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'November 20 - 23', type: 'Family Peace & Blessings Retreat (കുടുംബ സമാധാന ധ്യാനം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'November 27 - 30', type: 'Inner Healing & Deliverance Retreat (രോഗശാന്തി ധ്യാനം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' }
  ],
  december: [
    { dates: 'December 04 - 07', type: 'Advent Preparation Retreat (ആഗമനകാല ഒരുക്ക ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'December 11 - 14', type: 'Christmas Deliverance & Grace Retreat (ക്രിസ്തുമസ് കൃപാ ധ്യാനം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'December 18 - 21', type: 'Holy Nativity Spiritual Renewal (തിരുപ്പിറവി നവീകരണം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700' },
    { dates: 'December 28 - 31', type: 'Year-End Thanksgiving & Blessing Retreat (വർഷാവസാന നന്ദി പ്രകാശന ധ്യാനം)', director: 'Capuchin Community', timing: 'Sunday 4:30 PM to Wednesday 1:30 PM', fee: '₹700' }
  ]
};

export default function RetreatsPage() {
  const [selectedMonth, setSelectedMonth] = useState<keyof typeof RETREAT_CALENDAR>('august');

  return (
    <Layout
      title="ധ്യാന കലണ്ടർ 2026 | Retreat Programes | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Official Residential Retreat Schedule 2026 - Assisi Renewal Center Bharananganam."
    >
      {/* Header Banner: Eucharistic Sanctuary Atmosphere */}
      <section className="relative bg-gradient-to-b from-[#2A0808] via-[#1E0606] to-[#140404] text-white py-14 sm:py-18 text-left border-b border-amber-900/40 overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-md border border-amber-500/40 inline-flex items-center gap-1.5 shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>RESIDENTIAL RETREAT SCHEDULE 2026</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              RETREAT PROGRAMES (ധ്യാനങ്ങൾ 2026)
            </h1>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-normal">
              എല്ലാ മാസത്തെയും വ്യാഴാഴ്ച വൈകുന്നേരം 4:30 മുതൽ ഞായറാഴ്ച ഉച്ചയ്ക്ക് 1:30 വരെയുള്ള താമസിച്ചുള്ള റസിഡൻഷ്യൽ ധ്യാനങ്ങൾ.
            </p>
          </div>
        </div>
      </section>

      {/* Main Schedule Body with Adoration Background */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden">
        
        {/* Background Image: Adoration Candles */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_adoration_candles_bg.webp"
            alt="Adoration Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#140507]/95 via-[#100305]/92 to-[#0C0204]/96" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Month Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 border-b border-amber-900/40 mb-10 overflow-x-auto scrollbar-none">
            {(['august', 'september', 'october', 'november', 'december'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMonth(m)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
                  selectedMonth === m
                    ? 'bg-[#7A1C1C] text-white shadow-lg border border-amber-400/50'
                    : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-white/15 backdrop-blur-md'
                }`}
              >
                {m} 2026
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RETREAT_CALENDAR[selectedMonth].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.05 }}
                className="bg-stone-900/85 backdrop-blur-md border border-white/15 rounded-2xl p-6 shadow-xl hover:border-amber-500/40 transition space-y-4 text-left"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs sm:text-sm font-bold text-amber-300 bg-amber-950/80 px-3 py-1 rounded-md border border-amber-600/40">
                    {item.dates}
                  </span>
                  <span className="text-xs font-bold text-stone-200 bg-white/10 px-2.5 py-1 rounded">
                    രജിസ്ട്രേഷൻ ഫീസ്: {item.fee}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.type}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 font-medium">
                    നയിക്കുന്നത്: <strong className="text-amber-200">{item.director}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-400 font-medium">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item.timing}</span>
                </div>

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
                    className="bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs sm:text-sm font-bold px-3 py-2.5 rounded-xl transition inline-flex items-center gap-1.5 shadow-md active:scale-98"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
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
            className="mt-12 bg-stone-900/90 backdrop-blur-md border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-left space-y-4 text-white shadow-2xl"
          >
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>റസിഡൻഷ്യൽ ധ്യാനത്തിൽ പങ്കെടുക്കുന്നവർക്കുള്ള പ്രധാന നിർദ്ദേശങ്ങൾ</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-300">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>ധ്യാനം വ്യാഴാഴ്ച വൈകുന്നേരം 4:30-ന് ആരംഭിച്ച് ഞായറാഴ്ച ഉച്ചയ്ക്ക് 1:30-ന് സമാപിക്കും.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>വിശുദ്ധ ബൈബിൾ (പി.ഒ.സി.), നോട്ടുബുക്ക്, പേന, ബെഡ്ഷീറ്റ് എന്നിവ കരുതുക.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>നിത്യേന കഴിക്കുന്ന മരുന്നുകൾ ആവശ്യത്തിന് കൈവശം കരുതേണ്ടതാണ്.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>ധ്യാന സമയത്ത് മൊബൈൽ ഫോൺ ഉപയോഗം പൂർണ്ണമായി നിരോധിച്ചിരിക്കുന്നു.</span>
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
