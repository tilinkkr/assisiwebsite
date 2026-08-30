import React from 'react';
import { Layout } from '../components/Layout';
import { Building, ExternalLink } from 'lucide-react';

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
      description="Sister institutions and ministries of St. Joseph Capuchin Province - Assisi Magazine, Jeevan Books, Retreat Centers, and Language Institute."
    >
      {/* Header Banner: Capuchin Emerald */}
      <section className="bg-gradient-to-b from-[#F4FAF6] via-[#E6F4EC] to-[#D5EDE0] border-b border-[#BBE3CC] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#065F46] bg-white px-3 py-1 rounded-md border border-[#A7F3D0] inline-flex items-center gap-1.5 shadow-xs">
              <Building className="w-3.5 h-3.5" />
              <span>ST. JOSEPH CAPUCHIN PROVINCE MINISTRIES</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              OUR INSTITUTIONS (കപ്പൂച്ചിൻ സ്ഥാപനങ്ങൾ)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              സെന്റ് ജോസഫ് കപ്പൂച്ചിൻ പ്രൊവിൻസിന്റെ കീഴിൽ പ്രവർത്തിക്കുന്ന സഹോദര സ്ഥാപനങ്ങളും ആത്മീയ സംരംഭങ്ങളും.
            </p>
          </div>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-14 bg-white min-h-[600px] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.map((inst, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border-2 border-[#D5EDE0] rounded-3xl p-6 shadow-xs hover:shadow-lg transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#065F46] bg-[#ECFDF5] px-3 py-1 rounded-md border border-[#A7F3D0]">
                    {inst.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 pt-1">
                    {inst.malayalamTitle}
                  </h3>
                  <p className="text-xs font-bold text-emerald-800">
                    {inst.name}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-1">
                    {inst.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E2D5]">
                  <a
                    href={inst.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#065F46] hover:text-[#047857] transition"
                  >
                    <span>വെബ്‌സൈറ്റ് സന്ദർശിക്കുക</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
