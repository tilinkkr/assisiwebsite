import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Send, Quote, CheckCircle2 } from 'lucide-react';

export default function ThanksgivingPage() {
  const [thanksForm, setThanksForm] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    subject: '',
    description: '',
    agreePublish: 'yes'
  });
  const [thanksSubmitted, setThanksSubmitted] = useState(false);

  const handleThanksSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*THANKS GIVING (നന്ദി പ്രകാശനം)*\nപേര്: ${thanksForm.firstName} ${thanksForm.lastName}\nഫോൺ: ${thanksForm.contact}\nEmail: ${thanksForm.email}\nവിഷയം: ${thanksForm.subject}\nവെബ്‌സൈറ്റിൽ പ്രസിദ്ധീകരിക്കാൻ അനുമതി: ${thanksForm.agreePublish === 'yes' ? 'Yes' : 'No'}\n\nസാക്ഷ്യം / അനുഭവം:\n${thanksForm.description}\n\n(Assisi Retreat Centre Bharananganam)`
    );
    window.open(`https://wa.me/918330884331?text=${waText}`, '_blank');
    setThanksSubmitted(true);
  };

  return (
    <Layout
      title="നന്ദി പ്രകാശനം & സാക്ഷ്യങ്ങൾ | Thanks Giving | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Share your Thanksgiving message and read authentic testimonies of blessings received at Assisi Renewal Center Bharananganam."
    >
      {/* Header Banner: Sunrise Gold Atmosphere */}
      <section className="relative bg-gradient-to-b from-[#281C08] via-[#1E1405] to-[#140C03] border-b border-amber-900/40 py-14 sm:py-18 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-md border border-amber-500/40 inline-flex items-center shadow-xs">
              <span>TESTIMONIALS & PRAISE • നന്ദി പ്രകാശനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              THANKS GIVING (നന്ദി പ്രകാശനം)
            </h1>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-normal">
              നമ്മുടെ കർത്താവായ യേശുക്രിസ്തുവിലൂടെയും അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ശുശ്രൂഷകളിലൂടെയും നിങ്ങൾക്കു ലഭിച്ച എല്ലാ അനുഗ്രഹങ്ങൾക്കും ദൈവത്തിന് നന്ദി പ്രകാശിപ്പിക്കുക.
            </p>
          </div>
        </div>
      </section>

      {/* Main Thanksgiving Content with Background */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden">
        
        {/* Background Image: Candlelit Adoration */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assisi_assets/backgrounds/retreat_adoration_candles_bg.webp"
            alt="Adoration Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/96 via-stone-950/90 to-stone-900/85" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="lg:col-span-7 bg-stone-900/90 backdrop-blur-md border border-amber-400/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 text-white"
            >
              <div>
                <h2 className="text-2xl font-bold text-white">Write to Us (ഞങ്ങൾക്ക് എഴുതുക)</h2>
                <p className="text-xs sm:text-sm text-stone-300 font-normal mt-1">
                  Please make your Thanks Giving Message for all the benefits you have received through Our Lord Jesus Christ...
                </p>
              </div>

              {thanksSubmitted ? (
                <div className="p-6 bg-emerald-950/80 border border-emerald-500 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-200">നന്ദി പ്രകാശനം സമർപ്പിച്ചു!</h3>
                  <p className="text-xs sm:text-sm text-emerald-300">
                    നിങ്ങളുടെ സാക്ഷ്യം അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ വാട്സാപ്പിലേക്ക് അയച്ചിരിക്കുന്നു. ദൈവം നിങ്ങളെ സമൃദ്ധമായി അനുഗ്രഹിക്കട്ടെ.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleThanksSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-1">
                        First Name (ആദ്യ പേര്) *
                      </label>
                      <input
                        type="text"
                        required
                        value={thanksForm.firstName}
                        onChange={(e) => setThanksForm({ ...thanksForm, firstName: e.target.value })}
                        placeholder="First Name"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-1">
                        Last Name (അവസാന പേര്) *
                      </label>
                      <input
                        type="text"
                        required
                        value={thanksForm.lastName}
                        onChange={(e) => setThanksForm({ ...thanksForm, lastName: e.target.value })}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-1">
                        Contact Number (ഫോൺ നമ്പർ) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={thanksForm.contact}
                        onChange={(e) => setThanksForm({ ...thanksForm, contact: e.target.value })}
                        placeholder="Contact Number"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={thanksForm.email}
                        onChange={(e) => setThanksForm({ ...thanksForm, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-1">
                      Subject (വിഷയം) *
                    </label>
                    <input
                      type="text"
                      required
                      value={thanksForm.subject}
                      onChange={(e) => setThanksForm({ ...thanksForm, subject: e.target.value })}
                      placeholder="e.g. രോഗസൗഖ്യം / സാമ്പത്തിക കടബാധ്യതയിൽ നിന്നുള്ള മോചനം"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-1">
                      Describe (നിങ്ങളുടെ അനുഭവം / സാക്ഷ്യം) *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={thanksForm.description}
                      onChange={(e) => setThanksForm({ ...thanksForm, description: e.target.value })}
                      placeholder="കർത്താവ് നിങ്ങളുടെ ജീവിതത്തിൽ പ്രവർത്തിച്ച അത്ഭുതങ്ങളും അനുഗ്രഹങ്ങളും ഇവിടെ വിവരിക്കുക..."
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-700 bg-stone-950/80 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-2">
                      I Agree to Publish My Testimonial in the Website (വെബ്‌സൈറ്റിൽ പ്രസിദ്ധീകരിക്കാൻ സമ്മതിക്കുന്നുണ്ടോ?)
                    </label>
                    <div className="flex items-center gap-6 text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="agree"
                          value="yes"
                          checked={thanksForm.agreePublish === 'yes'}
                          onChange={() => setThanksForm({ ...thanksForm, agreePublish: 'yes' })}
                          className="accent-[#B45309]"
                        />
                        <span>Yes (അതെ)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="agree"
                          value="no"
                          checked={thanksForm.agreePublish === 'no'}
                          onChange={() => setThanksForm({ ...thanksForm, agreePublish: 'no' })}
                          className="accent-[#B45309]"
                        />
                        <span>No (വേണ്ട)</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#B45309] hover:bg-[#92400E] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>സന്ദേശം സമർപ്പിക്കുക (Submit)</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Column: Published Testimonials (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="border-b border-amber-900/50 pb-3">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Quote className="w-5 h-5 text-amber-400" />
                  <span>TESTIMONIALS (അനുഭവ സാക്ഷ്യങ്ങൾ)</span>
                </h3>
              </div>

              {/* Story 1 */}
              <div className="bg-stone-900/80 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-xl space-y-3 text-stone-200">
                <p className="text-xs sm:text-sm leading-relaxed font-normal">
                  "We attended a retreat last month and my mother had prayed for her sister who is a mother of five children and had a debt of Rs 21 lakhs and they had no means of paying it. After a candid conversation with a close relative, he took initiative and paid the lion's share of the debt paving way for rest to be paid in a miraculous manner today."
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <strong className="text-white font-bold">Abraham Jacob</strong>
                  <span className="text-amber-400 font-semibold">October 2023</span>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-stone-900/80 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-xl space-y-3 text-stone-200">
                <p className="text-xs sm:text-sm leading-relaxed font-normal">
                  "I had attended the retreat last year in which my counselor had told that I will be soon blessed with a baby boy. I was a bit tensed about me conceiving and being pregnant as I had Pcod. But by God's immense grace and intercession at Assisi, we were blessed with a healthy boy. Praise the Lord!"
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <strong className="text-white font-bold">Dona Jose</strong>
                  <span className="text-amber-400 font-semibold">June 2024</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
