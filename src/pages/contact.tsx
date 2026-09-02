import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { MapPin, Phone, MessageCircle, Mail, Clock, Compass } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout
      title="ബന്ധപ്പെടുക & മാപ്പ് | Contact Us | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Contact Assisi Renewal Center Bharananganam - Office Phone, Address, WhatsApp helpline, Route and Google Map."
    >
      {/* Header Banner */}
      <section className="relative bg-[#1A120E] border-b border-stone-800 py-12 sm:py-16 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-3.5 py-1 rounded-md border border-amber-500 inline-flex items-center gap-1.5 shadow-xs">
              <Compass className="w-3.5 h-3.5" />
              <span>VISIT & INQUIRY • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              CONTACT US (ബന്ധപ്പെടുക)
            </h1>
            <p className="text-sm sm:text-base text-amber-100 leading-relaxed font-medium">
              ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ വിലാസം, ഫോൺ നമ്പറുകൾ, എത്തിച്ചേരാനുള്ള വഴി, ഗൂഗിൾ മാപ്പ്.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content with Subtle Background */}
      <section className="relative py-14 min-h-[600px] text-left overflow-hidden bg-[#0F0C0A]">
        
        {/* Subtle background */}
        <div className="absolute inset-0 z-0 bg-[#0F0C0A]">
          <img
            src="/assisi_assets/backgrounds/retreat_monastery_cloister.webp"
            alt="Monastery Background"
            className="w-full h-full object-cover opacity-15 filter blur-[0.5px]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C0A]/98 via-[#0F0C0A]/90 to-[#0F0C0A]/98" />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Office Contacts (5 cols) - SOLID OPAQUE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-[#181412] border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 text-white">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    അസ്സീസി ആശ്രമ കാര്യാലയം
                  </h2>
                  <p className="text-xs text-amber-400 font-bold mt-0.5">
                    ST. JOSEPH CAPUCHIN PROVINCE
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-stone-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">വിലാസം (Address)</p>
                      <p className="text-stone-300 leading-relaxed">
                        Fr. Director, Assisi Renewal Center,<br />
                        Bharananganam P.O., Kottayam Dist.,<br />
                        Kerala - 686578, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">ഫോൺ നമ്പറുകൾ (Telephone)</p>
                      <p className="text-stone-300">
                        ലാൻഡ്‌ലൈൻ: <a href="tel:04822238335" className="font-bold text-amber-300 hover:underline">04822 238335</a><br />
                        മൊബൈൽ & ഹെൽപ്പ്‌ലൈൻ: <a href="tel:8590124063" className="font-bold text-amber-300 hover:underline">+91 8590124063</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">ഔദ്യോഗിക WhatsApp</p>
                      <a
                        href="https://wa.me/918330884331?text=ഹലോ,%20അസ്സീസി%20ധ്യാനകേന്ദ്രത്തിലെ%20വിവരങ്ങൾ%20അറിയാൻ%20ആഗ്രഹിക്കുന്നു."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-300 font-bold hover:underline"
                      >
                        +91 8330884331 (മെസ്സേജ് അയക്കുക)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">ഇമെയിൽ (Email)</p>
                      <a href="mailto:assisirenewalcenter@gmail.com" className="text-amber-300 hover:underline">
                        assisirenewalcenter@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">ഓഫീസ് സമയം (Office Hours)</p>
                      <p className="text-stone-300">
                        രാവിലെ 9:00 AM മുതൽ വൈകുന്നേരം 6:00 PM വരെ
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Google Maps & Route Guide (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="bg-[#181412] border border-stone-800 p-4 rounded-3xl shadow-2xl">
                <h3 className="text-lg font-bold text-white p-2">
                  ഗൂഗിൾ മാപ്പ് ലൊക്കേഷൻ (Google Maps)
                </h3>
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-stone-700">
                  <iframe
                    title="Assisi Renewal Center Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.228784110825!2d76.7166311!3d9.6974972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cb679ba2bb6b%3A0xb35a7702f23cf0a6!2sAssisi%20Renewal%20Center!5e0!3m2!1sen!2sin!4v1694241078167!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-[#181412] border border-stone-800 p-6 rounded-3xl shadow-xl space-y-3 text-stone-200 text-xs sm:text-sm">
                <h4 className="font-bold text-white text-base">
                  എത്തിച്ചേരാനുള്ള വഴി (How to Reach)
                </h4>
                <ul className="space-y-2 list-disc list-inside text-stone-300">
                  <li>പാലാ – ഈരാറ്റുപേട്ട പ്രധാന റൂട്ടിൽ ഭരണങ്ങാനം ജംഗ്ഷനിൽ നിന്നും 600 മീറ്റർ മാത്രം ദൂരം.</li>
                  <li>ഏറ്റവും അടുത്ത റെയിൽവേ സ്റ്റേഷൻ: കോട്ടയം (32 കി.മീ).</li>
                  <li>ഏറ്റവും അടുത്ത വിമാനത്താവളം: കൊച്ചി അന്താരാഷ്ട്ര വിമാനത്താവളം - നെടുമ്പാശ്ശേരി (75 കി.മീ).</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
