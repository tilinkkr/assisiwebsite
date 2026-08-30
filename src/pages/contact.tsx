import React from 'react';
import { Layout } from '../components/Layout';
import { MapPin, Phone, MessageCircle, Mail, Clock, Compass } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout
      title="ബന്ധപ്പെടുക & മാപ്പ് | Contact Us | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Contact Assisi Renewal Center Bharananganam - Office Phone, Address, WhatsApp helpline, Route and Google Map."
    >
      {/* Header Banner: Franciscan Warm Gold */}
      <section className="bg-gradient-to-b from-[#FBF8F1] via-[#FAF6EC] to-[#F5EFE4] border-b border-[#E3DCCE] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8C6239] bg-white px-3 py-1 rounded-md border border-[#E5E0D5] inline-flex items-center gap-1.5 shadow-xs">
              <Compass className="w-3.5 h-3.5" />
              <span>VISIT & INQUIRY • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              CONTACT US (ബന്ധപ്പെടുക)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ വിലാസം, ഫോൺ നമ്പറുകൾ, എത്തിച്ചേരാനുള്ള വഴി, ഗൂഗിൾ മാപ്പ്.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-14 bg-white min-h-[600px] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Office Contacts (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF8F5] border border-[#E8E2D5] p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                    അസ്സീസി ആശ്രമ കാര്യാലയം
                  </h2>
                  <p className="text-xs text-[#8C6239] font-bold mt-0.5">
                    ST. JOSEPH CAPUCHIN PROVINCE
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#7A1C1C] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-950">വിലാസം (Address)</p>
                      <p className="text-slate-600 leading-relaxed">
                        Fr. Director, Assisi Renewal Center,<br />
                        Bharananganam P.O., Kottayam Dist.,<br />
                        Kerala - 686578, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#7A1C1C] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-950">ഓഫീസ് ഫോൺ (Phone)</p>
                      <p className="text-slate-600">
                        <a href="tel:04822238335" className="hover:text-[#7A1C1C] font-semibold">04822 238335</a> /{' '}
                        <a href="tel:8590124063" className="hover:text-[#7A1C1C] font-bold text-amber-900">+91 8590124063</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-950">വാട്സാപ്പ് ഹെൽപ്പ്‌ലൈൻ (WhatsApp)</p>
                      <p className="text-slate-600">
                        <a href="https://wa.me/918330884331" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 font-bold text-emerald-900">
                          +91 8330884331
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7A1C1C] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-950">ഇമെയിൽ (Email)</p>
                      <p className="text-slate-600">
                        <a href="mailto:assisirenewalcenter@gmail.com" className="hover:text-[#7A1C1C]">
                          assisirenewalcenter@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-950">ഓഫീസ് സമയം (Office Hours)</p>
                      <p className="text-slate-600">
                        രാവിലെ 9:00 AM മുതൽ വൈകുന്നേരം 6:00 PM വരെ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Route Guide Card */}
              <div className="bg-[#FFFDF7] border border-[#EADBBE] p-6 rounded-3xl space-y-3">
                <h3 className="text-base font-bold text-slate-950">
                  എത്തിച്ചേരാനുള്ള വഴി (Route Guide)
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  പാലാ – ഈരാറ്റുപേട്ട റൂട്ടിൽ ഭരണങ്ങാനം ജംഗ്ഷനിൽ നിന്ന് 600 മീറ്റർ മാത്രം ദൂരം. ഭരണങ്ങാനം സെന്റ് മേരീസ് പള്ളിക്ക് സമീപം.
                </p>
              </div>
            </div>

            {/* Right Column: Google Maps Embed (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-[#E8E2D5] rounded-3xl p-3 shadow-md overflow-hidden">
                <div className="aspect-[16/11] w-full rounded-2xl overflow-hidden">
                  <iframe
                    title="Assisi Renewal Center Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.228784110825!2d76.7166311!3d9.6974972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cb679ba2bb6b%3A0xb35a7702f23cf0a6!2sAssisi%20Renewal%20Center!5e0!3m2!1sen!2sin!4v1694241078167!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 text-center">
                  <a
                    href="https://goo.gl/maps/rLrYxk9nssL6czxM9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7A1C1C] hover:underline"
                  >
                    <span>ഗൂഗിൾ മാപ്പിൽ നേരിട്ട് തുറക്കുക (Open in Google Maps)</span>
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
