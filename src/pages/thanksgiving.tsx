import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Heart, Send, Quote, CheckCircle2 } from 'lucide-react';

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
      {/* Header Banner: Sunrise Gold */}
      <section className="bg-gradient-to-b from-[#FFFDF7] via-[#FEFCE8] to-[#FEF08A]/30 border-b border-[#EADBBE] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#92400E] bg-white px-3 py-1 rounded-md border border-[#FDE68A] inline-flex items-center gap-1.5 shadow-xs">
              <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>TESTIMONIALS & PRAISE • നന്ദി പ്രകാശനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              THANKS GIVING (നന്ദി പ്രകാശനം)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              നമ്മുടെ കർത്താവായ യേശുക്രിസ്തുവിലൂടെയും അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ശുശ്രൂഷകളിലൂടെയും നിങ്ങൾക്കു ലഭിച്ച എല്ലാ അനുഗ്രഹങ്ങൾക്കും ദൈവത്തിന് നന്ദി പ്രകാശിപ്പിക്കുക.
            </p>
          </div>
        </div>
      </section>

      {/* Main Thanksgiving Content */}
      <section className="py-14 bg-[#FAF8F5] min-h-[600px] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#EADBBE] p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">Write to Us (ഞങ്ങൾക്ക് എഴുതുക)</h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Please make your Thanks Giving Message for all the benefits you have received through Our Lord Jesus Christ...
                </p>
              </div>

              {thanksSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">നന്ദി പ്രകാശനം സമർപ്പിച്ചു!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    നിങ്ങളുടെ സാക്ഷ്യം അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ വാട്സാപ്പിലേക്ക് അയച്ചിരിക്കുന്നു. ദൈവം നിങ്ങളെ സമൃദ്ധമായി അനുഗ്രഹിക്കട്ടെ.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleThanksSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                        First Name (ആദ്യ പേര്) *
                      </label>
                      <input
                        type="text"
                        required
                        value={thanksForm.firstName}
                        onChange={(e) => setThanksForm({ ...thanksForm, firstName: e.target.value })}
                        placeholder="First Name"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#B45309] bg-[#FAFAF8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                        Last Name (അവസാന പേര്) *
                      </label>
                      <input
                        type="text"
                        required
                        value={thanksForm.lastName}
                        onChange={(e) => setThanksForm({ ...thanksForm, lastName: e.target.value })}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#B45309] bg-[#FAFAF8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                        Contact Number (ഫോൺ നമ്പർ) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={thanksForm.contact}
                        onChange={(e) => setThanksForm({ ...thanksForm, contact: e.target.value })}
                        placeholder="Contact Number"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#B45309] bg-[#FAFAF8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={thanksForm.email}
                        onChange={(e) => setThanksForm({ ...thanksForm, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#B45309] bg-[#FAFAF8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                      Subject (വിഷയം) *
                    </label>
                    <input
                      type="text"
                      required
                      value={thanksForm.subject}
                      onChange={(e) => setThanksForm({ ...thanksForm, subject: e.target.value })}
                      placeholder="e.g. രോഗസൗഖ്യം / സാമ്പത്തിക കടബാധ്യതയിൽ നിന്നുള്ള മോചനം"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#B45309] bg-[#FAFAF8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                      Describe (Type Here...) *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={thanksForm.description}
                      onChange={(e) => setThanksForm({ ...thanksForm, description: e.target.value })}
                      placeholder="കർത്താവ് നിങ്ങളുടെ ജീവിതത്തിൽ പ്രവർത്തിച്ച അത്ഭുതങ്ങളും അനുഗ്രഹങ്ങളും ഇവിടെ വിവരിക്കുക..."
                      className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-[#D5CCBA] text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#B45309] bg-[#FAFAF8]"
                    />
                  </div>

                  <div className="p-4 bg-[#FAF7F0] border border-[#EADBBE] rounded-xl space-y-2">
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      I Agree to Publish My Testimonial in the Website:
                    </p>
                    <div className="flex items-center gap-6 text-sm font-semibold text-slate-800">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="agreePublish"
                          value="yes"
                          checked={thanksForm.agreePublish === 'yes'}
                          onChange={(e) => setThanksForm({ ...thanksForm, agreePublish: e.target.value })}
                          className="text-[#7A1C1C] focus:ring-[#7A1C1C]"
                        />
                        <span>Yes (അതെ)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="agreePublish"
                          value="no"
                          checked={thanksForm.agreePublish === 'no'}
                          onChange={(e) => setThanksForm({ ...thanksForm, agreePublish: e.target.value })}
                          className="text-[#7A1C1C] focus:ring-[#7A1C1C]"
                        />
                        <span>No (വേണ്ട)</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#B45309] hover:bg-[#92400E] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl transition shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT THANKS GIVING</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Authentic Testimonials (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-[#EADBBE] pb-3">
                <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                  <Quote className="w-5 h-5 text-[#B45309]" />
                  <span>TESTIMONIALS (സാക്ഷ്യങ്ങൾ)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  അസ്സീസി ധ്യാനത്തിൽ പങ്കെടുത്ത വിശ്വാസികളുടെ അനുഭവ സാക്ഷ്യങ്ങൾ
                </p>
              </div>

              {/* Testimonial 1 */}
              <div className="bg-white border border-[#EADBBE] p-6 rounded-2xl shadow-xs space-y-3 relative">
                <Quote className="w-8 h-8 text-amber-200 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal italic-none">
                  "We attended a retreat last month and my mother had prayed for her sister who a mother of five children and had a debt of Rs 21 lakhs and they had no means of paying it. After a candid conversation with a close relative, he took initiative and paid the lion's share of the debt paving way for rest to be paid in a miraculous manner today."
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <p className="font-bold text-slate-950 text-sm">Abraham Jacob</p>
                  <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded">October 2023</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border border-[#EADBBE] p-6 rounded-2xl shadow-xs space-y-3 relative">
                <Quote className="w-8 h-8 text-amber-200 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal italic-none">
                  "I had attended the retreat last year in which my counselor had told that I will be soon blessed with a baby boy. I was a bit tensed about me conceiving and being pregnant as I had Pcod. But by God's grace everything went well and my baby is happy, healthy 3 month old now."
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <p className="font-bold text-slate-950 text-sm">Dona Jose</p>
                  <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded">June 2024</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
