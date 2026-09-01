import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Send, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export default function PrayerPage() {
  const [prayerForm, setPrayerForm] = useState({ name: '', phone: '', place: '', intention: '' });
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*PRAYER REQUEST (പ്രാർത്ഥനാ സഹായം)*\nപേര്: ${prayerForm.name}\nഫോൺ: ${prayerForm.phone}\nസ്ഥലം: ${prayerForm.place}\n\nപ്രാർത്ഥനാ നിയോഗം:\n${prayerForm.intention}\n\n(Assisi Retreat Centre Bharananganam)`
    );
    window.open(`https://wa.me/918330884331?text=${waText}`, '_blank');
    setPrayerSubmitted(true);
  };

  return (
    <Layout
      title="പ്രാർത്ഥനാ സഹായം | Prayer Requests | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Send your prayer intentions to Assisi Renewal Center Bharananganam. Capuchin Fathers pray for your intentions in daily Holy Mass and Eucharistic Adoration."
    >
      {/* Header Banner: Marian Midnight Sapphire Atmosphere */}
      <section className="relative bg-gradient-to-b from-[#09152B] via-[#0D1D3A] to-[#081224] border-b border-blue-900/40 py-14 sm:py-18 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-3.5 py-1 rounded-md border border-blue-500/40 inline-flex items-center shadow-xs">
              <span>INTERCESSORY PRAYER MINISTRY • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              പ്രാർത്ഥനാ സഹായം (PRAYER REQUESTS)
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              നിങ്ങളുടെ പ്രാർത്ഥനാ നിയോഗങ്ങൾ അസ്സീസി ആശ്രമത്തിലെ കപ്പൂച്ചിൻ വൈദികർ വിശുദ്ധ കുർബാനയിലും ദിവ്യകാരുണ്യ സന്നിധിയിലും സമർപ്പിച്ച് പ്രാർത്ഥിക്കുന്നു.
            </p>
          </div>
        </div>
      </section>

      {/* Main Prayer Form Grid with Marian Sanctuary Background */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden">
        
        {/* Background Marian Grotto and Sanctuary */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_marian_sanctuary.webp"
            alt="Marian Sanctuary Candles"
            className="w-full h-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060F1E]/96 via-[#0B1A34]/92 to-[#060F1E]/96" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Prayer Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="lg:col-span-7 bg-stone-900/85 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 text-white"
            >
              <div>
                <h2 className="text-2xl font-bold text-white">
                  പ്രാർത്ഥനാ നിയോഗം സമർപ്പിക്കുക
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 font-normal mt-1">
                  താഴെ പറയുന്ന ഫോമിലൂടെ നിങ്ങളുടെ നിയോഗങ്ങൾ അയക്കാവുന്നതാണ്:
                </p>
              </div>

              {prayerSubmitted ? (
                <div className="p-6 bg-[#1E3A8A]/90 border-2 border-amber-400 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">പ്രാർത്ഥനാ നിയോഗം സമർപ്പിച്ചു</h3>
                  <p className="text-xs sm:text-sm text-stone-200">
                    നിങ്ങളുടെ നിയോഗങ്ങൾ വിശുദ്ധ കുർബാനയിൽ സമർപ്പിച്ചു പ്രാർത്ഥിക്കുന്നതാണ്. ദൈവം നിങ്ങളെ സമൃദ്ധമായി അനുഗ്രഹിക്കട്ടെ!
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePrayerSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-stone-200">
                      പേര് (Your Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={prayerForm.name}
                      onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                      placeholder="നിങ്ങളുടെ പൂർണ്ണ നാമം"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-stone-200">
                        ഫോൺ നമ്പർ (Phone Number) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={prayerForm.phone}
                        onChange={(e) => setPrayerForm({ ...prayerForm, phone: e.target.value })}
                        placeholder="+91 Phone"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500 font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-stone-200">
                        സ്ഥലം / ഇടവക (Place / Parish)
                      </label>
                      <input
                        type="text"
                        value={prayerForm.place}
                        onChange={(e) => setPrayerForm({ ...prayerForm, place: e.target.value })}
                        placeholder="Place / Parish"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-stone-200">
                      പ്രാർത്ഥനാ നിയോഗം (Prayer Intention) *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={prayerForm.intention}
                      onChange={(e) => setPrayerForm({ ...prayerForm, intention: e.target.value })}
                      placeholder="നിങ്ങളുടെ പ്രാർത്ഥനാ നിയോഗങ്ങൾ ഇവിടെ വിശദമായി രേഖപ്പെടുത്തുക (രോഗസൗഖ്യം, കടബാധ്യത, പരീക്ഷാ വിജയം, കുടുംബ സമാധാനം...)"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-[#172554] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98 border border-amber-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>നിയോഗം അയക്കുക (Send Intention)</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Helpline Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-stone-900/80 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 text-white">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>അടിയന്തര പ്രാർത്ഥനാ സഹായം</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                  ഗുരുതരമായ രോഗാവസ്ഥകൾ, അത്യാഹിതങ്ങൾ, അടിയന്തര ആത്മീയ സഹായങ്ങൾ എന്നിവയ്ക്ക് ആശ്രമത്തിലേക്ക് നേരിട്ട് വിളിക്കാം:
                </p>
                <div className="pt-2 space-y-2 text-sm font-bold">
                  <a
                    href="tel:04822238335"
                    className="flex items-center justify-between p-3 bg-stone-800/80 border border-stone-700 rounded-xl hover:bg-stone-700 transition"
                  >
                    <span className="text-stone-300">ആശ്രമം ഓഫീസ്:</span>
                    <span className="text-amber-400">04822 238335</span>
                  </a>
                  <a
                    href="tel:8590124063"
                    className="flex items-center justify-between p-3 bg-stone-800/80 border border-stone-700 rounded-xl hover:bg-stone-700 transition"
                  >
                    <span className="text-stone-300">ഹെൽപ്പ്‌ലൈൻ:</span>
                    <span className="text-amber-400">+91 8590124063</span>
                  </a>
                  <a
                    href="https://wa.me/918330884331?text=%E0%B4%B9%E0%B4%B2%E0%B5%8B%2C%20%E0%B4%85%E0%B4%B8%E0%B5%8D%E0%B4%B8%E0%B5%80%E0%B4%B8%E0%B4%BF%20%E0%B4%A7%E0%B5%8D%E0%B4%AF%E0%B4%BE%E0%B4%A8%E0%B4%95%E0%B5%87%E0%B4%A8%E0%B5%8D%E0%B4%A6%E0%B5%8D%E0%B4%B0%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%BF%E0%B4%B2%E0%B5%8D%E2%80%8D%20%E0%B4%92%E0%B4%B0%E0%B5%81%20%E0%B4%85%E0%B4%9F%E0%B4%BF%E0%B4%AF%E0%B4%A8%E0%B5%8D%E0%B4%A4%E0%B4%B0%20%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%BE%E0%B4%B0%E0%B5%8D%E2%80%8D%E0%B4%A4%E0%B5%8D%E0%B4%A5%E0%B4%A8%E0%B4%BE%20%E0%B4%B8%E0%B4%B9%E0%B4%BE%E0%B4%AF%E0%B4%82%20%E0%B4%86%E0%B4%B5%E0%B4%B6%E0%B5%8D%E0%B4%AF%E0%B4%AE%E0%B5%81%E0%B4%A3%E0%B5%8D%E0%B4%9F%E0%B5%8D."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-[#1E3A8A]/90 border-2 border-amber-400 rounded-xl hover:bg-[#1E3A8A] transition shadow-md"
                  >
                    <span className="text-white font-bold flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-amber-300 fill-white" />
                      <span>WhatsApp പ്രാർത്ഥന:</span>
                    </span>
                    <span className="text-amber-300 font-extrabold">+91 8330884331</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
