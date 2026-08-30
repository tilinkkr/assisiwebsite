import React from 'react';
import { Layout } from '../components/Layout';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';

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
      {/* Header Banner: Eucharistic Rose Tint */}
      <section className="bg-gradient-to-b from-[#FDF5F6] via-[#FAE8EB] to-[#F5D8DD] border-b border-[#ECC4C9] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7A1C1C] bg-white px-3 py-1 rounded-md border border-[#F0D5D8] inline-flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>MONTHLY 1-DAY CONVENTION • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              സായാഹ്ന കൺവെൻഷൻ (Evening Convention)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              എല്ലാ മാസത്തെയും ആദ്യ ചൊവ്വാഴ്ച വൈകുന്നേരം 4:00 മുതൽ രാത്രി 9:00 വരെ അസ്സീസി ധ്യാനകേന്ദ്രത്തിൽ വെച്ച് നടക്കുന്ന സായാഹ്ന കൺവെൻഷൻ.
            </p>
          </div>
        </div>
      </section>

      {/* Main Timetable & Poster Grid */}
      <section className="py-14 bg-white min-h-[600px] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Timetable (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#7A1C1C] bg-[#FDF2F4] px-3 py-1 rounded-md border border-[#F5D5DA]">
                  PROGRAM TIMETABLE
                </span>
                <h2 className="text-2xl font-bold text-slate-950 mt-2">
                  കൺവെൻഷൻ ക്രമം (4:00 PM – 9:00 PM)
                </h2>
              </div>

              <div className="bg-[#FAF8F5] border border-[#EADBBE] rounded-2xl divide-y divide-[#EADBBE] shadow-xs overflow-hidden">
                {schedule.map((item, idx) => (
                  <div key={idx} className="p-5 flex items-start gap-4">
                    <div className="bg-[#7A1C1C] text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 mt-0.5">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-[#FFF9FA] border border-[#F0D5D8] rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-950">കൂടുതൽ വിവരങ്ങൾക്ക് ഓഫീസുമായി ബന്ധപ്പെടുക</h4>
                  <p className="text-xs text-slate-600">ഭരണങ്ങാനം അസ്സീസി ആശ്രമം</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:04822238335"
                    className="bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>04822 238335</span>
                  </a>
                  <a
                    href="https://wa.me/918330884331?text=ഹലോ,%20സായാഹ്ന%20കൺവെൻഷനെക്കുറിച്ച്%20അറിയാൻ%20ആഗ്രഹിക്കുന്നു."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Poster (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF8F5] border border-[#EADBBE] rounded-3xl p-4 shadow-md max-w-md mx-auto">
                <img
                  src="/assisi_assets/convension-683x1024.webp"
                  alt="സായാഹ്ന കൺവെൻഷൻ ഔദ്യോഗിക പോസ്റ്റർ"
                  className="w-full h-auto object-contain rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assisi_assets/retret.webp';
                  }}
                />
                <p className="text-xs font-bold text-slate-800 text-center mt-3">
                  ഔദ്യോഗിക അറിയിപ്പ് പോസ്റ്റർ • അസ്സീസി ധ്യാനകേന്ദ്രം
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
