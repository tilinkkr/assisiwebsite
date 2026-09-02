import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';

export default function InspirationPage() {
  return (
    <Layout
      title="സ്ഥാപക പിതാക്കന്മാർ | Our Inspiration | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Founding inspiration and spiritual pioneers of Assisi Renewal Center Bharananganam - Fr. Armond Madhavath Capuchin and Fr. Gratian Pallipurath Capuchin."
    >
      {/* Header Banner: Franciscan Heritage Atmosphere */}
      <section className="relative bg-[#1A120E] border-b border-stone-800 py-12 sm:py-16 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-3.5 py-1 rounded-md border border-amber-500 inline-flex items-center shadow-xs">
              <span>CAPUCHIN SPIRITUAL HERITAGE • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              OUR INSPIRATION (സ്ഥാപക പിതാക്കന്മാർ)
            </h1>
            <p className="text-sm sm:text-base text-amber-100 leading-relaxed font-medium">
              അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ ആത്മീയ അടിത്തറ പാകിയ വിശുദ്ധരായ കപ്പൂച്ചിൻ സന്യാസിമാരുടെ പുണ്യജീവിതവും ദൈവാനുഭവവും.
            </p>
          </div>
        </div>
      </section>

      {/* Main Founders Bio Grid with Subtle Cloister Background */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden bg-[#0F0C0A]">
        
        {/* Subtle background */}
        <div className="absolute inset-0 z-0 bg-[#0F0C0A]">
          <img
            src="/assisi_assets/backgrounds/retreat_monastery_cloister.webp"
            alt="Capuchin Monastery Background"
            className="w-full h-full object-cover opacity-15 filter blur-[0.5px]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C0A]/98 via-[#0F0C0A]/90 to-[#0F0C0A]/98" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Fr. Armond Madhavath */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="bg-[#181412] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 text-white text-left"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-stone-800 border border-amber-400/60 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-lg">
                  <img
                    src="/assisi_assets/fr_armond_madhavath.webp"
                    alt="Fr. Armond Madhavath Capuchin"
                    className="w-full h-full object-cover rounded-xl"
                    decoding="async"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded">
                    1957 – 2001
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Fr. Armond Madhavath Capuchin
                  </h2>
                  <p className="text-xs sm:text-sm text-amber-300 font-bold">
                    മലയാള കരിസ്മാറ്റിക് പ്രസ്ഥാനത്തിന്റെ പ്രണേതാവ്
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-200 leading-relaxed font-normal border-t border-stone-800 pt-4">
                <p>
                  ഭരണങ്ങാനം അസ്സീസി ആശ്രമത്തിലും ധ്യാനകേന്ദ്രത്തിലും പരിശുദ്ധാത്മാവിന്റെ വലിയ കൃപാവരങ്ങൾ വർഷിക്കപ്പെടാൻ കാരണഭൂതനായ പ്രിയ പിതാവ്.
                </p>
                <p>
                  1976-ൽ അസ്സീസി ധ്യാനകേന്ദ്രത്തിന് തുടക്കം കുറിച്ചതു മുതൽ പതിനായിരക്കണക്കിന് കുടുംബങ്ങളിലേക്ക് വചനശുശ്രൂഷയും ദൈവസ്നേഹവും പകർന്നു നൽകി.
                </p>
              </div>
            </motion.div>

            {/* Fr. Gratian Pallipurath */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="bg-[#181412] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 text-white text-left"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-stone-800 border border-amber-400/60 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-lg">
                  <img
                    src="/assisi_assets/fr_gratian_pallipurath.webp"
                    alt="Fr. Gratian Pallipurath Capuchin"
                    className="w-full h-full object-cover rounded-xl"
                    decoding="async"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded">
                    1926 – 2014
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Fr. Gratian Pallipurath Capuchin
                  </h2>
                  <p className="text-xs sm:text-sm text-amber-300 font-bold">
                    ഫ്രാൻസിസ്കൻ ആത്മീയതയുടെ മഹാഗുരു
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-200 leading-relaxed font-normal border-t border-stone-800 pt-4">
                <p>
                  ഫ്രാൻസിസ്കൻ മൂന്നാം സഭയുടെ പ്രൊമോട്ടറായും, പ്രമുഖ ധ്യാനഗുരുവായും, ആത്മീയ ഗ്രന്ഥകാരനായും ദീർഘകാലം സേവനം അനുഷ്ഠിച്ച പുണ്യചരിതൻ.
                </p>
                <p>
                  അസ്സീസി മാസികയുടെയും ജീവൻ ബുക്സിന്റെയും വളർച്ചയിൽ മുഖ്യപങ്ക് വഹിച്ച അദ്ദേഹം പ്രാർത്ഥനയുടെയും ലളിതജീവിതത്തിന്റെയും മാതൃകയായിരുന്നു.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
