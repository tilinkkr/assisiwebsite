import React from 'react';
import { Layout } from '../components/Layout';
import { Sparkles } from 'lucide-react';

export default function InspirationPage() {
  return (
    <Layout
      title="സ്ഥാപക പിതാക്കന്മാർ | Our Inspiration | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Founding inspiration and spiritual pioneers of Assisi Renewal Center Bharananganam - Fr. Armond Madhavath Capuchin and Fr. Gratian Pallipurath Capuchin."
    >
      {/* Header Banner: Franciscan Earth & Sandstone */}
      <section className="bg-gradient-to-b from-[#F7F4F0] via-[#EFE8D8] to-[#E5DAC0] border-b border-[#D5C6A8] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#734126] bg-white px-3 py-1 rounded-md border border-[#DDD3BF] inline-flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>CAPUCHIN SPIRITUAL HERITAGE • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              OUR INSPIRATION (സ്ഥാപക പിതാക്കന്മാർ)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ ആത്മീയ അടിത്തറ പാകിയ വിശുദ്ധരായ കപ്പൂച്ചിൻ സന്യാസിമാരുടെ പുണ്യജീവിതവും ദൈവാനുഭവവും.
            </p>
          </div>
        </div>
      </section>

      {/* Main Founders Bio Grid */}
      <section className="py-14 bg-white min-h-[600px] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Founder 1: Fr. Armond Madhavath Capuchin */}
            <div className="bg-[#FAF8F5] border-2 border-[#DDD3BF] p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#EBF7FF] border-2 border-[#BAE6FD] p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                  <img
                    src="/assisi_assets/fr_armond_madhavath.webp"
                    alt="Fr Armond Madhavath Capuchin"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/download.webp';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#734126] bg-white px-2.5 py-1 rounded border border-[#EADBBE]">
                    1957 – 2001
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                    Fr. Armond Madhavath Capuchin
                  </h2>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">
                    സ്ഥാപക ഡയറക്ടർ • CHARISMATIC PIONEER
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-[#EADBBE] pt-4">
                <p>
                  Br. Armond born on 25 November 1930, at Palackattumala in Kottayam district, made his profession in the Order on 13 May 1957, and was ordained a priest on 25 March 1960. Br. Armond started his ministry in Nazareth Ashram, Aluva and continued it in Loreto Muvattupuzha, Assisi Ashram Bharananganam and Vimalagiri Ashram, Iritty.
                </p>
                <p>
                  <strong>It is Br. Armond who started the Charismatic Retreat in Malayalam at Bharananganam with official ecclesiastical approval.</strong> Here he laboured hard to develop the retreat centre. He was also the director of Franciscan Third Order and the director of Assisi Sneha Bhavan. He was also the Rector of the Seraphic Seminary at Bharananganam.
                </p>
                <p>
                  Br. Armond was known for his simplicity, humility and prayerfulness. Because of his deep spirituality, he could calmly face oppositions and hurdles with confidence in God's power. He passed away on 12 January 2001; and his mortal remains were laid to rest at Vimalagiri Ashram, Iritty.
                </p>
              </div>
            </div>

            {/* Founder 2: Fr. Gratian Pallipurath Capuchin */}
            <div className="bg-[#FAF8F5] border-2 border-[#DDD3BF] p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#EBF7FF] border-2 border-[#BAE6FD] p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                  <img
                    src="/assisi_assets/fr_gratian_pallipurath.webp"
                    alt="Fr. Gratian Pallipurath Capuchin"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/download.webp';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#734126] bg-white px-2.5 py-1 rounded border border-[#EADBBE]">
                    1926 – 2014
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                    Fr. Gratian Pallipurath Capuchin
                  </h2>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">
                    മിഷൻ പ്രഘോഷകൻ • OFM CAPUCHIN
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-[#EADBBE] pt-4">
                <p>
                  Born on 14 December 1926 in the family of Pallipurath, Meenkulam in the Archdiocese of Changanacherry, Br. Gratian joined the Capuchins. He made his simple profession on 23 July 1944 at Monte Mariano, Faringipet and solemn profession on 07 December 1948 at Amalashram, Trichy. Ordained priest on 17 December 1950 in Coimbatore Cathedral.
                </p>
                <p>
                  Br. Gratian put his heart and soul in parish mission retreats, the Franciscan Third Order, Sathyaradhana pious youth movement, and the press apostolate. He conducted the "Better World Movement" Seminars across major Indian cities with deep Capuchin simplicity.
                </p>
                <p>
                  On 12 August 2014, after preparing the altar for Holy Mass in the morning, he breathed his last. His mortal remains rest in the vault of Assisi Ashram Cemetery, Bharananganam.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
