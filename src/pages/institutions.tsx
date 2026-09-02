import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { ExternalLink, BookOpen, Building2, Globe } from 'lucide-react';

const INSTITUTIONS_LIST = [
  {
    name: 'Assisi Magazine (അസ്സീസി മാസിക)',
    desc: 'മലയാളത്തിലെ പ്രമുഖ കത്തോലിക്കാ ആത്മീയ മാസിക. കപ്പൂച്ചിൻ സഭയുടെ മുഖപത്രം.',
    url: 'https://magazine.assisijeevan.com/',
    icon: BookOpen,
    badge: 'Publishing'
  },
  {
    name: 'Jeevan Books Bharananganam (ജീവൻ ബുക്സ്)',
    desc: 'ആത്മീയ ഗ്രന്ഥങ്ങൾ, വിശുദ്ധ ബൈബിൾ, പ്രാർത്ഥനാ പുസ്തകങ്ങൾ എന്നിവ ലഭ്യമാക്കുന്നു.',
    url: 'https://shop.assisijeevan.com/',
    icon: BookOpen,
    badge: 'Book Store'
  },
  {
    name: 'Assisi Ashram Bharananganam (അസ്സീസി ആശ്രമം)',
    desc: 'സെന്റ് ജോസഫ് കപ്പൂച്ചിൻ പ്രൊവിൻസിന്റെ ആസ്ഥാന ആശ്രമം.',
    url: 'https://www.assisiashram.org/',
    icon: Building2,
    badge: 'Monastery'
  },
  {
    name: 'Assisi Language Institute - AIFL (ഭാഷാ ഇൻസ്റ്റിറ്റ്യൂട്ട്)',
    desc: 'വിദേശ ഭാഷാ പഠനത്തിനും നൈപുണ്യ വികസനത്തിനുമുള്ള പ്രമുഖ കേന്ദ്രം.',
    url: 'https://www.assisiinstitute.org/',
    icon: Globe,
    badge: 'Education'
  },
  {
    name: 'Vimalagiri Retreat Center Iritty (വിമലഗിരി ധ്യാനകേന്ദ്രം)',
    desc: 'കണ്ണൂർ ഇരിട്ടിയിലുള്ള കപ്പൂച്ചിൻ നവീകരണ ധ്യാനകേന്ദ്രം.',
    url: 'https://www.vimalagiriretreatcenter.in/',
    icon: Building2,
    badge: 'Retreat Center'
  },
  {
    name: 'Sinai Retreat Center Palakkad (സീനായ് മുണ്ടൂർ)',
    desc: 'പാലക്കാട് മുണ്ടൂരിലുള്ള പ്രമുഖ കപ്പൂച്ചിൻ ധ്യാനകേന്ദ്രം.',
    url: 'https://santhomecaps.org/our-ministry/retreat-centers/sinai-renewal-centre-mundoor/',
    icon: Building2,
    badge: 'Retreat Center'
  },
  {
    name: 'Gagultha Retreat Center (ഗാഗുൽത്താ ധ്യാനകേന്ദ്രം)',
    desc: 'കപ്പൂച്ചിൻ സന്യാസിമാരുടെ നേതൃത്വത്തിലുള്ള ധ്യാനകേന്ദ്രം.',
    url: 'https://gagultharetreatcentre.com/',
    icon: Building2,
    badge: 'Retreat Center'
  }
];

export default function InstitutionsPage() {
  return (
    <Layout
      title="കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ | Our Institutions | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Ministries, Ashrams, Publishing and Language Institutes under St. Joseph Capuchin Province Bharananganam."
    >
      {/* Header Banner */}
      <section className="relative bg-[#1A120E] border-b border-stone-800 py-12 sm:py-16 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-3.5 py-1 rounded-md border border-amber-500 inline-flex items-center shadow-xs">
              <span>CAPUCHIN MINISTRIES & APOSTOLATE</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              OUR INSTITUTIONS (കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ)
            </h1>
            <p className="text-sm sm:text-base text-amber-100 leading-relaxed font-medium">
              സെന്റ് ജോസഫ് കപ്പൂച്ചിൻ പ്രൊവിൻസിന്റെ കീഴിൽ പ്രവർത്തിക്കുന്ന ഇതര ആത്മീയ, പ്രസിദ്ധീകരണ, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ.
            </p>
          </div>
        </div>
      </section>

      {/* Main Institutions Grid with Subtle Cloister Background */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden bg-[#0F0C0A]">
        
        {/* Subtle background */}
        <div className="absolute inset-0 z-0 bg-[#0F0C0A]">
          <img
            src="/assisi_assets/backgrounds/retreat_monastery_cloister.webp"
            alt="Capuchin Cloister Architecture"
            className="w-full h-full object-cover opacity-15 filter blur-[0.5px]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C0A]/98 via-[#0F0C0A]/90 to-[#0F0C0A]/98" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONS_LIST.map((inst, idx) => {
              const Icon = inst.icon;
              return (
                <motion.a
                  key={idx}
                  href={inst.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.05 }}
                  className="bg-[#181412] border border-stone-800 p-6 rounded-3xl shadow-xl hover:border-amber-400 transition text-left group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-500 flex items-center justify-center text-amber-300">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-black text-amber-300 bg-black/60 px-2.5 py-0.5 rounded border border-amber-600/40">
                        {inst.badge}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition">
                      {inst.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                      {inst.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-white transition">
                    <span>വെബ്സൈറ്റ് സന്ദർശിക്കുക</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
