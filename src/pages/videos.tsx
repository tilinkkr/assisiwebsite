import React from 'react';
import { Layout } from '../components/Layout';
import { Video } from 'lucide-react';

export default function VideosPage() {
  const videoList = [
    {
      title: 'Praise and Worship (സ്തുതിപ്പും ആരാധനയും)',
      desc: 'അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ സംഗീത സാന്ദ്രമായ ആരാധനയും സ്തുതിപ്പും.',
      category: 'Worship',
      videoUrl: 'https://assisirenewalcenter.org/wp-content/uploads/2023/06/VID-20230608-WA0047.mp4'
    },
    {
      title: 'Eucharistic Adoration (ദിവ്യകാരുണ്യ ആരാധന)',
      desc: 'വിശുദ്ധ കുർബാനയുടെ തിരുസന്നിധിയിലുള്ള ഭക്തിനിർഭരമായ നിത്യാരാധന.',
      category: 'Adoration',
      videoUrl: 'https://assisirenewalcenter.org/wp-content/uploads/2023/06/VID-20230608-WA0002.mp4'
    },
    {
      title: 'Eucharistic Procession (ദിവ്യകാരുണ്യ പ്രദക്ഷിണം)',
      desc: 'ധ്യാനാർത്ഥികൾ പങ്കുകൊള്ളുന്ന വിശുദ്ധ ദിവ്യകാരുണ്യ പ്രദക്ഷിണവും രോഗശാന്തി ആശീർവാദവും.',
      category: 'Procession',
      videoUrl: 'https://assisirenewalcenter.org/wp-content/uploads/2023/06/VID-20230606-WA0023.mp4'
    },
    {
      title: 'Assisi Golden Jubilee Video (സുവർണ്ണ ജൂബിലി ഡോക്യുമെന്ററി)',
      desc: 'അസ്സീസി ധ്യാനകേന്ദ്രത്തിന്റെ 50 വർഷത്തെ അനുഗ്രഹീത നാൾവഴികൾ.',
      category: 'Documentary',
      videoUrl: 'https://assisirenewalcenter.org/wp-content/uploads/2026/02/ASSISSI-V02-HQ.mp4'
    },
    {
      title: 'Retreat Experience & Blessing (ധ്യാനാനുഭവം)',
      desc: 'വിശ്വാസികളുടെ അനുഭവ സാക്ഷ്യങ്ങളും വചന പ്രഘോഷണവും.',
      category: 'Experience',
      videoUrl: 'https://assisirenewalcenter.org/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-05-at-8.07.39-AM.mp4'
    },
    {
      title: 'Evening Convention Highlights (കൺവെൻഷൻ ദൃശ്യങ്ങൾ)',
      desc: 'സായാഹ്ന കൺവെൻഷനിലെ വിശുദ്ധ കുർബാനയും രോഗശാന്തി ശുശ്രൂഷയും.',
      category: 'Convention',
      videoUrl: 'https://assisirenewalcenter.org/wp-content/uploads/2025/07/WhatsApp-Video-2025-07-17-at-10.35.32-AM.mp4'
    }
  ];

  return (
    <Layout
      title="വീഡിയോകൾ | Videos | അസ്സീസി ധ്യാനകേന്ദ്രം"
      description="Watch Praise & Worship, Eucharistic Adoration, and Procession videos from Assisi Renewal Center Bharananganam."
    >
      {/* Header Banner: Royal Indigo */}
      <section className="bg-gradient-to-b from-[#F8F7FF] via-[#EFEBFD] to-[#E3DCFA] border-b border-[#D7CEFB] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4338CA] bg-white px-3 py-1 rounded-md border border-[#C7D2FE] inline-flex items-center gap-1.5 shadow-xs">
              <Video className="w-3.5 h-3.5" />
              <span>SACRED BROADCASTS • ഭക്തിസാന്ദ്രമായ ദൃശ്യങ്ങൾ</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              VIDEOS (സ്തുതിപ്പും ആരാധനയും)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ സ്തുതിപ്പും ആരാധനയും, ദിവ്യകാരുണ്യ പ്രദക്ഷിണങ്ങളും, സായാഹ്ന കൺവെൻഷൻ ദൃശ്യങ്ങളും.
            </p>
          </div>
        </div>
      </section>

      {/* Video Cards Grid */}
      <section className="py-14 bg-[#FAF8F5] min-h-[600px] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D7CEFB] rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition flex flex-col justify-between"
              >
                <div className="relative aspect-video bg-slate-950 flex items-center justify-center">
                  <video
                    src={item.videoUrl}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
