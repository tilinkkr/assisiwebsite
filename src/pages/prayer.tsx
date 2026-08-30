import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Heart, Send, CheckCircle2, Phone } from 'lucide-react';

export default function PrayerPage() {
  const [prayerForm, setPrayerForm] = useState({ name: '', phone: '', place: '', intention: '' });
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*പ്രാർത്ഥനാ നിയോഗം (PRAYER REQUEST)*\nപേര്: ${prayerForm.name}\nഫോൺ: ${prayerForm.phone}\nസ്ഥലം: ${prayerForm.place}\n\nനിയോഗം:\n${prayerForm.intention}\n\n(അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം)`
    );
    window.open(`https://wa.me/918330884331?text=${waText}`, '_blank');
    setPrayerSubmitted(true);
  };

  return (
    <Layout
      title="പ്രാർത്ഥനാ സഹായം | Prayer Requests | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Submit your intercessory prayer requests to Assisi Renewal Center Bharananganam for Holy Mass and Adoration intentions."
    >
      {/* Header Banner: Marian Cerulean */}
      <section className="bg-gradient-to-b from-[#F2F7FC] via-[#E4EFF9] to-[#D5E6F5] border-b border-[#B8D5ED] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E3A8A] bg-white px-3 py-1 rounded-md border border-[#BFDBFE] inline-flex items-center gap-1.5 shadow-xs">
              <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-500" />
              <span>INTERCESSORY PRAYERS • പ്രാർത്ഥനാ സഹായം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              PRAYER REQUESTS (പ്രാർത്ഥനാ സഹായം)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              നിങ്ങളുടെ പ്രാർത്ഥനാ നിയോഗങ്ങൾ അസ്സീസി ആശ്രമത്തിലെ കപ്പൂച്ചിൻ വൈദികർ വിശുദ്ധ കുർബാനയിലും ദിവ്യകാരുണ്യ സന്നിധിയിലും സമർപ്പിച്ച് പ്രാർത്ഥിക്കുന്നു.
            </p>
          </div>
        </div>
      </section>

      {/* Main Prayer Form & Card */}
      <section className="py-14 bg-white min-h-[600px] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#BFDBFE] p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  പ്രാർത്ഥനാ നിയോഗം അയക്കുക
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  താഴെ നൽകിയിരിക്കുന്ന ഫോം പൂരിപ്പിച്ചു പ്രാർത്ഥനാ സഹായം തേടാവുന്നതാണ്.
                </p>
              </div>

              {prayerSubmitted ? (
                <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900">പ്രാർത്ഥനാ നിയോഗം ലഭിച്ചു!</h4>
                  <p className="text-xs sm:text-sm text-blue-800">
                    നിങ്ങളുടെ നിയോഗങ്ങൾ അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ പരിശുദ്ധ ദിവ്യകാരുണ്യ സന്നിധിയിൽ സമർപ്പിച്ച് പ്രാർത്ഥിക്കുന്നതാണ്.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePrayerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                        പേര് (Name) *
                      </label>
                      <input
                        type="text"
                        required
                        value={prayerForm.name}
                        onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                        placeholder="നിങ്ങളുടെ പേര്"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                        ഫോൺ നമ്പർ (Phone) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={prayerForm.phone}
                        onChange={(e) => setPrayerForm({ ...prayerForm, phone: e.target.value })}
                        placeholder="ഫോൺ നമ്പർ"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                      സ്ഥലം / ഇടവക (Place / Parish) *
                    </label>
                    <input
                      type="text"
                      required
                      value={prayerForm.place}
                      onChange={(e) => setPrayerForm({ ...prayerForm, place: e.target.value })}
                      placeholder="സ്ഥലം അല്ലെങ്കിൽ ഇടവക"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                      പ്രാർത്ഥനാ നിയോഗം (Prayer Intention) *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={prayerForm.intention}
                      onChange={(e) => setPrayerForm({ ...prayerForm, intention: e.target.value })}
                      placeholder="നിങ്ങളുടെ പ്രാർത്ഥനാ നിയോഗങ്ങൾ ഇവിടെ വിശദമായി രേഖപ്പെടുത്തുക (രോഗസൗഖ്യം, കടബാധ്യത, പരീക്ഷാ വിജയം, കുടുംബ സമാധാനം...)"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#1E3A8A] hover:bg-[#172554] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl transition shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>പ്രാർത്ഥനാ നിയോഗം സമർപ്പിക്കുക</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF8F5] border border-[#BFDBFE] p-6 rounded-3xl shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  നിത്യ പ്രാർത്ഥനാ സഹായം
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "നിങ്ങൾ എളിയവരും ഭാരം ചുമക്കുന്നവരുമെല്ലാം എന്റെ അടുക്കൽ വരുവിൻ; ഞാൻ നിങ്ങളെ ആശ്വസിപ്പിക്കാം." (മത്തായി 11:28)
                </p>
                <div className="border-t border-slate-200 pt-3 space-y-2 text-xs text-slate-700">
                  <p>• വിശുദ്ധ കുർബാനയിലെ പ്രത്യേക നിയോഗ സമർപ്പണം</p>
                  <p>• ദിവ്യകാരുണ്യ ആരാധനയിലെ മദ്ധ്യസ്ഥ പ്രാർത്ഥന</p>
                  <p>• കപ്പൂച്ചിൻ സന്യാസിമാരുടെ സമൂഹ ജപം</p>
                </div>
              </div>

              <div className="p-6 bg-blue-50 border border-blue-200 rounded-3xl space-y-3">
                <h4 className="text-sm font-bold text-blue-950">ഹെൽപ്പ്‌ലൈൻ നമ്പറുകൾ</h4>
                <p className="text-xs text-blue-800">അടിയന്തര പ്രാർത്ഥനാ സഹായങ്ങൾക്ക് നേരിട്ട് വിളിക്കാം:</p>
                <div className="flex flex-col gap-2 font-bold text-sm text-blue-900">
                  <a href="tel:04822238335" className="hover:underline flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>04822 238335 (ഓഫീസ്)</span>
                  </a>
                  <a href="tel:8590124063" className="hover:underline flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 8590124063</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
