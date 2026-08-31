import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Phone, MessageCircle } from 'lucide-react';

export default function ConventionPage() {
  const schedule = [
    { time: '4:00 PM', title: 'കുമ്പസാരം (Confession)', desc: 'Sacrament of Reconciliation by Capuchin Fathers' },
    { time: '5:00 PM', title: 'ദിവ്യകാരുണ്യ ആരാധന (Eucharistic Adoration)', desc: 'Eucharistic Holy Hour & Praise & Worship' },
    { time: '6:00 PM', title: 'വിശുദ്ധ കുർബാന (Holy Mass)', desc: 'Solemn Concelebrated Holy Mass' },
    { time: '7:30 PM', title: 'വചന പ്രഘോഷണം (Word of God)', desc: 'Spiritual Word & Gospel Message' },
    { time: '8:30 PM', title: 'രോഗശാന്തി ശുശ്രൂഷ & നൊവേന (Healing Ministry)', desc: 'Novena to St. Anthony and Eucharistic Healing Blessing' }
  ];

  return (
    <Layout
      title="സായാഹ്ന കൺവെൻഷൻ | Evening Convention | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Monthly Evening Convention - Every 1st Tuesday 4:00 PM to 9:00 PM at Assisi Renewal Center Bharananganam."
    >
      {/* Header Banner */}
      <section className="relative bg-gradient-to-b from-[#24080D] via-[#1A050A] to-[#120306] border-b border-rose-900/40 py-14 sm:py-18 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-300 bg-rose-950/80 px-3.5 py-1 rounded-md border border-rose-500/40 inline-flex items-center shadow-xs">
              <span>MONTHLY 1-DAY CONVENTION • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              സായാഹ്ന കൺവെൻഷൻ (Evening Convention)
            </h1>
            <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed font-normal">
              എല്ലാ മാസത്തെയും ആദ്യ ചൊവ്വാഴ്ച വൈകുന്നേരം 4:00 മുതൽ രാത്രി 9:00 വരെ അസ്സീസി ധ്യാനകേന്ദ്രത്തിൽ വെച്ച് നടക്കുന്ന സായാഹ്ന കൺവെൻഷൻ.
            </p>
          </div>
        </div>
      </section>

      {/* Main Timetable & Poster Grid */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden">
        
        {/* Background Image: Misty Hills */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_mist_nature_bg.webp"
            alt="Convention Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/88 to-stone-900/85" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Timetable (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-3 py-1 rounded-md border border-amber-500/40">
                  PROGRAM TIMETABLE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  കൺവെൻഷൻ ക്രമം (4:00 PM – 9:00 PM)
                </h2>
              </div>

              <div className="bg-stone-900/85 backdrop-blur-md border border-white/15 rounded-3xl divide-y divide-white/10 shadow-2xl overflow-hidden">
                {schedule.map((item, idx) => (
                  <div key={idx} className="p-5 flex items-start gap-4">
                    <div className="bg-[#7A1C1C] text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 mt-0.5 border border-amber-400/40">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 font-normal mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="tel:04822238335"
                  className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition inline-flex items-center gap-1.5 shadow-md active:scale-98"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>04822 238335 (വിളിക്കുക)</span>
                </a>
                <a
                  href="https://wa.me/918330884331?text=ഹലോ,%20സായാഹ്ന%20കൺവെൻഷനെക്കുറിച്ചുള്ള%20വിവരങ്ങൾ%20അറിയാൻ%20ആഗ്രഹിക്കുന്നു."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F5132] hover:bg-[#0B3D26] text-white text-xs sm:text-sm font-bold px-4 py-3 rounded-xl transition inline-flex items-center gap-1.5 shadow-md active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Poster (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, damping: 16 }}
              className="lg:col-span-5"
            >
              <div className="bg-stone-900/85 backdrop-blur-md border border-white/20 rounded-3xl p-4 shadow-2xl">
                <img
                  src="/assisi_assets/convension-683x1024.webp"
                  alt="സായാഹ്ന കൺവെൻഷൻ ഔദ്യോഗിക പോസ്റ്റർ"
                  className="w-full h-auto object-contain rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assisi_assets/convension.webp';
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
