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

      {/* Main Timetable & Poster Grid with Cross at Dawn Background */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden">
        
        {/* Background Image: Cross at Dawn */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_cross_dawn.webp"
            alt="Convention Hilltop Cross Background"
            className="w-full h-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/96 via-stone-950/90 to-stone-900/85" />
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
                <h2 className="text-2xl font-bold text-white">
                  ശുശ്രൂഷാ ക്രമം (Timetable & Program)
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 font-normal mt-1">
                  ഓരോ മാസത്തെയും ആദ്യ ചൊവ്വാഴ്ച താഴെ കാണുന്ന ക്രമത്തിലാണ് ശുശ്രൂഷകൾ നടക്കുന്നത്:
                </p>
              </div>

              <div className="bg-stone-900/85 backdrop-blur-md border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl divide-y divide-white/10 space-y-2">
                {schedule.map((item, idx) => (
                  <div key={idx} className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-left">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded">
                          {item.time}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 font-normal mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons (Marian & Franciscan: Franciscan Burgundy & Marian Blue) */}
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
                  className="bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition inline-flex items-center gap-2 shadow-md active:scale-98 border border-amber-400"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp: +91 8330884331</span>
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
              <div className="bg-stone-900/85 backdrop-blur-md border border-white/20 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
                <img
                  src="/assisi_assets/convension-683x1024.webp"
                  alt="സായാഹ്ന കൺവെൻഷൻ ഔദ്യോഗിക പോസ്റ്റർ"
                  className="w-full h-auto object-contain rounded-2xl"
                  decoding="async"
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
