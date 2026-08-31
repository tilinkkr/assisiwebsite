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
      <section className="relative bg-gradient-to-b from-[#241A14] via-[#1A120E] to-[#120C08] border-b border-amber-900/40 py-14 sm:py-18 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-md border border-amber-500/40 inline-flex items-center shadow-xs">
              <span>CAPUCHIN SPIRITUAL HERITAGE • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              OUR INSPIRATION (സ്ഥാപക പിതാക്കന്മാർ)
            </h1>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-normal">
              അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ ആത്മീയ അടിത്തറ പാകിയ വിശുദ്ധരായ കപ്പൂച്ചിൻ സന്യാസിമാരുടെ പുണ്യജീവിതവും ദൈവാനുഭവവും.
            </p>
          </div>
        </div>
      </section>

      {/* Main Founders Bio Grid */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden">
        
        {/* Background Sanctuary Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_sanctuary_bg.webp"
            alt="Sanctuary Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#140E0B]/95 via-[#18110D]/92 to-[#100B08]/96" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Founder 1: Fr. Armond Madhavath Capuchin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="bg-stone-900/85 backdrop-blur-md border-2 border-stone-700/80 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5 text-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-stone-800 border-2 border-amber-400/40 p-1 flex items-center justify-center shrink-0 shadow-lg overflow-hidden">
                  <img
                    src="/assisi_assets/fr_armond_madhavath.webp"
                    alt="Fr Armond Madhavath Capuchin"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/download.webp';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950 px-2.5 py-1 rounded border border-amber-700/50">
                    1957 – 2001
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Fr. Armond Madhavath Capuchin
                  </h2>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    സ്ഥാപക ഡയറക്ടർ • CHARISMATIC PIONEER
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-normal border-t border-stone-700/60 pt-4">
                <p>
                  ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ സ്ഥാപക ഡയറക്ടറായ ബഹുമാനപ്പെട്ട അർമോണ്ട് അച്ചൻ കേരള കത്തോലിക്കാ സഭയിൽ കരിസ്മാറ്റിക് മുന്നേറ്റത്തിന് തുടക്കം കുറിച്ചവരിൽ പ്രമുഖനാണ്.
                </p>
                <p>
                  1976-ൽ വിശുദ്ധ അൽഫോൻസാമ്മയുടെ പുണ്യഭൂമിയിൽ മലയാളത്തിലെ ആദ്യ കരിസ്മാറ്റിക് ധ്യാനങ്ങൾ ആരംഭിച്ച അച്ചൻ, പതിനായിരക്കണക്കിന് ആളുകളെ വചനത്തിലൂടെയും ദിവ്യകാരുണ്യത്തിലൂടെയും ആത്മീയ നവീകരണത്തിലേക്ക് നയിച്ചു.
                </p>
                <p>
                  അദ്ദേഹത്തിന്റെ തീക്ഷ്ണമായ പ്രാർത്ഥനാജീവിതവും ദിവ്യകാരുണ്യ ഭക്തിയും ഇന്നും അസ്സീസി ധ്യാനകേന്ദ്രത്തിന് പ്രചോദനമായി നിലകൊള്ളുന്നു.
                </p>
              </div>
            </motion.div>

            {/* Founder 2: Fr. Gratian Pallipurath Capuchin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="bg-stone-900/85 backdrop-blur-md border-2 border-stone-700/80 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5 text-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-stone-800 border-2 border-amber-400/40 p-1 flex items-center justify-center shrink-0 shadow-lg overflow-hidden">
                  <img
                    src="/assisi_assets/fr_gratian_pallipurath.webp"
                    alt="Fr. Gratian Pallipurath Capuchin"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/fr-gratian.webp';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950 px-2.5 py-1 rounded border border-amber-700/50">
                    1926 – 2014
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Fr. Gratian Pallipurath Capuchin
                  </h2>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    ആത്മീയ ഗുരു • FRANCISCAN MISSIONARY
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-normal border-t border-stone-700/60 pt-4">
                <p>
                  ഫ്രാൻസിസ്കൻ കപ്പൂച്ചിൻ സന്യാസ സഭയിലെ ആദരണീയനായ ആത്മീയ ഗുരുവാണ് ഫാ. ഗ്രേഷ്യൻ പള്ളിപ്പുറത്ത്.
                </p>
                <p>
                  ഫ്രാൻസിസ്കൻ മൂന്നാം സഭയുടെ വ്യാപനത്തിലും, ആത്മീയ കൗൺസിലിംഗിലും, ജനങ്ങൾക്ക് സാന്ത്വനമേകുന്നതിലും അച്ചൻ വഹിച്ച പങ്ക് അവിസ്മരണീയമാണ്. അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ ആദ്യകാല വളർച്ചയിൽ നിർണ്ണായക പങ്കുവഹിച്ച പുണ്യപിതാവ്.
                </p>
                <p>
                  അദ്ദേഹത്തിന്റെ ലാളിത്യവും ദരിദ്രരോടുള്ള കാരുണ്യവും ഫ്രാൻസിസ്കൻ സന്യാസത്തിന്റെ യഥാർത്ഥ മാതൃകയായിരുന്നു.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
