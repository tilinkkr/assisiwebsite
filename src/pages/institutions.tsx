import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { ExternalLink } from 'lucide-react';

export default function InstitutionsPage() {
  const institutions = [
    {
      name: 'Assisi Magazine',
      malayalamTitle: 'അസ്സീസി മാസിക',
      desc: 'കത്തോലിക്കാ കുടുംബങ്ങളിലേക്ക് ആത്മീയ ചിന്തകളും സുവിശേഷ വെളിച്ചവും എത്തിക്കുന്ന വിഖ്യാത പ്രസിദ്ധീകരണം.',
      url: 'https://magazine.assisijeevan.com/',
      tag: 'Christian Publication'
    },
    {
      name: 'Jeevan Books',
      malayalamTitle: 'ജീവൻ ബുക്സ് & പബ്ലിക്കേഷൻസ്',
      desc: 'വിശുദ്ധ ഗ്രന്ഥങ്ങൾ, പ്രാർത്ഥനാ പുസ്തകങ്ങൾ, ആത്മീയ സാഹിത്യങ്ങൾ എന്നിവ ലഭ്യമാക്കുന്ന കപ്പൂച്ചിൻ പബ്ലിഷിംഗ് ഹൗസ്.',
      url: 'https://shop.assisijeevan.com/',
      tag: 'Book House'
    },
    {
      name: 'Assisi Ashram Bharananganam',
      malayalamTitle: 'അസ്സീസി ആശ്രമം, ഭരണങ്ങാനം',
      desc: 'കപ്പൂച്ചിൻ സന്യാസിമാരുടെ പുണ്യ ആശ്രമവും ആത്മീയ തണലും, പ്രാർത്ഥനയുടെയും ശാന്തിയുടെയും കേന്ദ്രം.',
      url: 'https://www.assisiashram.org/',
      tag: 'Friary & Monastery'
    },
    {
      name: 'Assisi Language Institute (AIFL)',
      malayalamTitle: 'അസ്സീസി ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് ഫോറിൻ ലാംഗ്വേജസ്',
      desc: 'വിദേശ ഭാഷാ പഠനത്തിനും വ്യക്തിത്വ വികസനത്തിനുമുള്ള പ്രമുഖ വിദ്യാഭ്യാസ സ്ഥാപനം.',
      url: 'https://www.assisiinstitute.org/',
      tag: 'Foreign Language Institute'
    },
    {
      name: 'Vimalagiri Retreat Center Iritty',
      malayalamTitle: 'വിമലഗിരി ധ്യാനകേന്ദ്രം, ഇരിട്ടി',
      desc: 'കണ്ണൂർ ഇരിട്ടിയിൽ സ്ഥിതി ചെയ്യുന്ന കപ്പൂച്ചിൻ ധ്യാനകേന്ദ്രവും ആത്മീയ നവീകരണാലയവും.',
      url: 'https://www.vimalagiriretreatcenter.in/',
      tag: 'Retreat Centre'
    },
    {
      name: 'Sinai Retreat Center Palakkad',
      malayalamTitle: 'സീനായ് റിന്യൂവൽ സെന്റർ, മുണ്ടൂർ',
      desc: 'പാലക്കാട് മുണ്ടൂരിൽ സ്ഥിതി ചെയ്യുന്ന കത്തോലിക്കാ ആത്മീയ നവീകരണ ധ്യാനകേന്ദ്രം.',
      url: 'https://santhomecaps.org/our-ministry/retreat-centers/sinai-renewal-centre-mundoor/',
      tag: 'Retreat Centre'
    },
    {
      name: 'Gagultha Retreat Center',
      malayalamTitle: 'ഗാഗുൽത്താ ധ്യാനകേന്ദ്രം',
      desc: 'വിശ്വാസികൾ ആത്മീയ വിടുതലും സൗഖ്യവും അനുഭവിക്കുന്ന കരിസ്മാറ്റിക് കത്തോലിക്കാ ധ്യാനകേന്ദ്രം.',
      url: 'https://gagultharetreatcentre.com/',
      tag: 'Retreat Centre'
    }
  ];

  return (
    <Layout
      title="കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ | Our Institutions | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Sister institutions and ministries of St. Joseph Capuchin Province - Assisi Magazine, Jeevan Books, Assisi Ashram, and Retreat Centers."
    >
      {/* Header Banner: Capuchin Forest Emerald Atmosphere */}
      <section className="relative bg-gradient-to-b from-[#061810] via-[#0B2519] to-[#04120C] border-b border-emerald-900/40 py-14 sm:py-18 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-md border border-emerald-500/40 inline-flex items-center shadow-xs">
              <span>ST. JOSEPH CAPUCHIN PROVINCE • MINISTRIES</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              OUR INSTITUTIONS (സ്ഥാപനങ്ങൾ)
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
              ഫ്രാൻസിസ്കൻ കപ്പൂച്ചിൻ സന്യാസ സഭയുടെ കീഴിൽ പ്രവർത്തിക്കുന്ന പ്രമുഖ ആത്മീയ, പ്രസിദ്ധീകരണ, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Institutions */}
      <section className="py-14 bg-gradient-to-b from-[#04120C] via-[#081C13] to-[#030E09] min-h-[600px] text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: (idx % 3) * 0.08 }}
                className="bg-emerald-950/60 backdrop-blur-md border border-emerald-800/40 p-6 rounded-3xl shadow-xl hover:border-emerald-400/60 transition group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-2.5 py-0.5 rounded border border-emerald-700">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition leading-snug">
                    {item.malayalamTitle}
                  </h3>
                  <p className="text-xs text-emerald-200/80 font-medium">
                    {item.name}
                  </p>
                  <p className="text-xs text-stone-300 leading-relaxed font-normal pt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-900/50 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-white transition">
                  <span>വെബ്സൈറ്റ് സന്ദർശിക്കുക</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
