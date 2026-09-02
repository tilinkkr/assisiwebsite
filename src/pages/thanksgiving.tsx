import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Send, CheckCircle2, Quote } from 'lucide-react';
import { DB } from '../lib/db';

const TESTIMONIALS_LIST = [
  {
    author: 'Abraham Jacob',
    date: 'October 2023',
    testimony: 'We attended a retreat last month and my mother had prayed for her sister who had a debt of Rs 21 lakhs... God miraculously cleared the debt through divine providence. Praise the Lord!'
  },
  {
    author: 'Dona Jose',
    date: 'June 2024',
    testimony: 'I had attended the retreat last year and requested prayer for childbirth. Doctors had said chances were minimal due to severe complications. Through intense prayer at Assisi, God blessed us with a baby boy. All glory to Jesus!'
  },
  {
    author: 'Mathew Varghese',
    date: 'February 2024',
    testimony: 'My father was suffering from chronic illness and severe pain for over three years. After attending the healing adoration at Assisi Renewal Center, he received complete physical healing. Thank You Jesus!'
  },
  {
    author: 'Marykutty Thomas',
    date: 'November 2023',
    testimony: 'Our family was going through immense spiritual struggle and depression. The four days of retreat at Bharananganam brought divine peace, reconciliation, and new hope to our lives.'
  }
];

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
    // 1. Save to Database
    DB.saveTestimony({
      firstName: thanksForm.firstName,
      lastName: thanksForm.lastName,
      contact: thanksForm.contact,
      email: thanksForm.email,
      subject: thanksForm.subject,
      description: thanksForm.description,
      agreePublish: thanksForm.agreePublish === 'yes'
    });

    // 2. Open WhatsApp
    const waText = encodeURIComponent(
      `*THANKS GIVING (നന്ദി പ്രകാശനം)*\nപേര്: ${thanksForm.firstName} ${thanksForm.lastName}\nഫോൺ: ${thanksForm.contact}\nEmail: ${thanksForm.email}\nവിഷയം: ${thanksForm.subject}\nവെബ്‌സൈറ്റിൽ പ്രസിദ്ധീകരിക്കാൻ അനുമതി: ${thanksForm.agreePublish === 'yes' ? 'Yes' : 'No'}\n\nസാക്ഷ്യം / അനുഭവം:\n${thanksForm.description}\n\n(Assisi Retreat Centre Bharananganam)`
    );
    window.open(`https://wa.me/918330884331?text=${waText}`, '_blank');
    setThanksSubmitted(true);
  };

  return (
    <Layout
      title="നന്ദി പ്രകാശനം & സാക്ഷ്യങ്ങൾ | Thanks Giving | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Share your testimonies and thanksgiving for blessings received through Jesus Christ at Assisi Renewal Center Bharananganam."
    >
      {/* Header Banner: Marian Sapphire Atmosphere */}
      <section className="relative bg-[#070F1E] border-b border-stone-800 py-12 sm:py-16 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-3.5 py-1 rounded-md border border-amber-500 inline-flex items-center shadow-xs">
              <span>TESTIMONIES OF DIVINE GRACE • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              THANKS GIVING (നന്ദി പ്രകാശനം)
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-medium">
              കർത്താവായ യേശുക്രിസ്തുവിൽ നിന്നും പരിശുദ്ധ അമ്മയുടെയും വിശുദ്ധ ഫ്രാൻസിസ് അസ്സീസ്സിയുടെയും മാധ്യസ്ഥതയിലൂടെ ലഭിച്ച ഉപകാരങ്ങൾക്ക് നന്ദി അർപ്പിക്കാം.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Testimonials Grid */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden bg-[#070D18]">
        
        {/* Subtle background */}
        <div className="absolute inset-0 z-0 bg-[#070D18]">
          <img
            src="/assisi_assets/backgrounds/retreat_marian_sanctuary.webp"
            alt="Marian Sanctuary Candles"
            className="w-full h-full object-cover opacity-15 filter blur-[0.5px]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/98 via-[#070D18]/90 to-[#070D18]/98" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column (7 cols) - SOLID OPAQUE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="lg:col-span-7 bg-[#111726] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 text-white"
            >
              <div>
                <h2 className="text-2xl font-black text-white">
                  സാക്ഷ്യം സമർപ്പിക്കുക (Share Testimony)
                </h2>
                <p className="text-xs sm:text-sm text-stone-200 font-medium mt-1">
                  നിങ്ങളുടെ അനുഭവം താഴെ കാണുന്ന ഫോമിൽ രേഖപ്പെടുത്തുക:
                </p>
              </div>

              {thanksSubmitted ? (
                <div className="p-6 bg-[#1E3A8A] border border-amber-400 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">നന്ദി പ്രകാശനം സമർപ്പിച്ചു</h3>
                  <p className="text-xs sm:text-sm text-stone-200">
                    നിങ്ങളുടെ സാക്ഷ്യം വിജയകരമായി ലഭിച്ചു. ദൈവത്തിന് സ്തുതിയും മഹത്വവും ഉണ്ടായിരിക്കട്ടെ!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleThanksSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-stone-100">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={thanksForm.firstName}
                        onChange={(e) => setThanksForm({ ...thanksForm, firstName: e.target.value })}
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-stone-100">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={thanksForm.lastName}
                        onChange={(e) => setThanksForm({ ...thanksForm, lastName: e.target.value })}
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-stone-100">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Phone"
                        value={thanksForm.contact}
                        onChange={(e) => setThanksForm({ ...thanksForm, contact: e.target.value })}
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-stone-100">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={thanksForm.email}
                        onChange={(e) => setThanksForm({ ...thanksForm, email: e.target.value })}
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-stone-100">
                      Subject (വിഷയം) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. രോഗസൗഖ്യം, പരീക്ഷാ വിജയം, കുടുംബ സമാധാനം..."
                      value={thanksForm.subject}
                      onChange={(e) => setThanksForm({ ...thanksForm, subject: e.target.value })}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-stone-100">
                      സാക്ഷ്യം / വിവരണം (Describe Testimony) *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="ദൈവത്തിൽ നിന്ന് ലഭിച്ച കൃപയെക്കുറിച്ചുള്ള നിങ്ങളുടെ അനുഭവം ഇവിടെ വിശദമായി രേഖപ്പെടുത്തുക..."
                      value={thanksForm.description}
                      onChange={(e) => setThanksForm({ ...thanksForm, description: e.target.value })}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl border border-stone-800 bg-stone-900 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-400 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-[#172554] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98 border border-amber-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT THANKS GIVING</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Testimonials List Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="border-b border-stone-800 pb-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Quote className="w-5 h-5 text-amber-400" />
                  <span>TESTIMONIALS (സാക്ഷ്യങ്ങൾ)</span>
                </h3>
              </div>

              {TESTIMONIALS_LIST.map((item, idx) => (
                <div key={idx} className="bg-[#111726] border border-stone-800 p-5 rounded-2xl shadow-xl space-y-2 text-stone-100 text-left">
                  <p className="text-xs sm:text-sm leading-relaxed font-normal">
                    "{item.testimony}"
                  </p>
                  <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs">
                    <strong className="text-white font-bold">{item.author}</strong>
                    <span className="text-amber-400 font-bold">{item.date}</span>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
