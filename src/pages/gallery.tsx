import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Sparkles, X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  malayalamTitle: string;
  category: 'chapel' | 'halls' | 'campus' | 'grotto' | 'history';
  src: string;
  fullSrc?: string;
  description: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    title: 'Holy Eucharistic Chapel',
    malayalamTitle: 'ദിവ്യകാരുണ്യ ചാപ്പൽ',
    category: 'chapel',
    src: '/assisi_assets/gallery/IMG20230605154002-460x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605154002-scaled.webp',
    description: 'അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ പ്രധാന ദിവ്യകാരുണ്യ ആരാധനാ ചാപ്പൽ.'
  },
  {
    id: '2',
    title: 'Our Lady of Lourdes Grotto',
    malayalamTitle: 'പരിശുദ്ധ മാതാവിന്റെ ഗ്രോട്ടോ',
    category: 'grotto',
    src: '/assisi_assets/gallery/IMG20230605154859-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605154859-scaled.webp',
    description: 'ധ്യാനാർത്ഥികൾ കൊന്ത നമസ്കരിക്കുകയും മെഴുകുതിരി കത്തിച്ചു പ്രാർത്ഥിക്കുകയും ചെയ്യുന്ന പരിശുദ്ധ അമ്മയുടെ ഗ്രോട്ടോ.'
  },
  {
    id: '3',
    title: 'Assisi Renewal Centre Entrance',
    malayalamTitle: 'അസ്സീസി ധ്യാനകേന്ദ്രം പ്രധാന കവാടം',
    category: 'campus',
    src: '/assisi_assets/gallery/IMG20230605154936-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605154936-scaled.webp',
    description: 'ഭരണങ്ങാനത്തെ ആത്മീയ സാന്ത്വനത്തിന്റെ പ്രവേശന കവാടം.'
  },
  {
    id: '4',
    title: 'Main Retreat Auditorium',
    malayalamTitle: 'വലിയ ധ്യാന ഹാൾ',
    category: 'halls',
    src: '/assisi_assets/gallery/IMG20230605155121-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155121-scaled.webp',
    description: 'ആയിരക്കണക്കിന് വിശ്വാസികൾ ഒരുമിച്ചു ദൈവവചനം ശ്രവിക്കുന്ന വിശാലമായ ധ്യാന ഹാൾ.'
  },
  {
    id: '5',
    title: 'Sanctuary & Adoration Altar',
    malayalamTitle: 'ആരാധനാ അൾത്താര',
    category: 'chapel',
    src: '/assisi_assets/gallery/IMG20230605155141-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155141-scaled.webp',
    description: 'നിത്യ ആരാധനയും സ്തുതിപ്പും നടക്കുന്ന ദിവ്യകാരുണ്യ സന്നിധി.'
  },
  {
    id: '6',
    title: 'Retreat Hall Seating & Interior',
    malayalamTitle: 'ധ്യാന ഹാൾ ഉൾവശം',
    category: 'halls',
    src: '/assisi_assets/gallery/IMG20230605155154-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155154-scaled.webp',
    description: 'ആത്മീയ നവീകരണ ശുശ്രൂഷകൾക്കായി സജ്ജീകരിച്ചിരിക്കുന്ന ശാന്തമായ അന്തരീക്ഷം.'
  },
  {
    id: '7',
    title: 'Ashram Prayer Corridors',
    malayalamTitle: 'ധ്യാന പാതയും വരാന്തയും',
    category: 'campus',
    src: '/assisi_assets/gallery/IMG20230605155200-scaled.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155200-scaled.webp',
    description: 'ധ്യാനാർത്ഥികൾക്കു സ്വസ്ഥമായി ജപമാല ചൊല്ലാനും ഏകാന്ത പ്രാർത്ഥനയിൽ ഏർപ്പെടാനുമുള്ള ആശ്രമ പരിസരം.'
  },
  {
    id: '8',
    title: 'Main Hall Sanctuary Stage',
    malayalamTitle: 'പ്രധാന അൾത്താര വേദി',
    category: 'halls',
    src: '/assisi_assets/gallery/IMG20230605155215-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155215-scaled.webp',
    description: 'വിശുദ്ധ കുർബാനയും രോഗശാന്തി ശുശ്രൂഷകളും അർപ്പിക്കപ്പെടുന്ന വേദി.'
  },
  {
    id: '9',
    title: 'Campus Panorama',
    malayalamTitle: 'ധ്യാനകേന്ദ്രം പരിസര കാഴ്ച',
    category: 'campus',
    src: '/assisi_assets/gallery/IMG20230605153946-1024x460.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605153946-scaled.webp',
    description: 'ഭരണങ്ങാനത്തിന്റെ ഹൃദയഭാഗത്ത് സ്ഥിതി ചെയ്യുന്ന അസ്സീസി ധ്യാനകേന്ദ്രം.'
  },
  {
    id: '10',
    title: 'Nature & Greenery Grounds',
    malayalamTitle: 'ആശ്രമ പൂന്തോട്ടവും പ്രകൃതിയും',
    category: 'campus',
    src: '/assisi_assets/gallery/IMG20230605154038-1024x460.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605154038-scaled.webp',
    description: 'പ്രകൃതിഭംഗിയും തണലും നിറഞ്ഞ പ്രാർത്ഥനാന്തരീക്ഷം.'
  },
  {
    id: '11',
    title: 'St. Francis of Assisi Statue',
    malayalamTitle: 'വിശുദ്ധ ഫ്രാൻസിസ് അസ്സീസി രൂപം',
    category: 'grotto',
    src: '/assisi_assets/4934.webp',
    fullSrc: '/assisi_assets/4934.webp',
    description: 'സമാധാനത്തിന്റെയും പ്രകൃതിസ്നേഹത്തിന്റെയും കാവൽപിതാവായ വിശുദ്ധ ഫ്രാൻസിസ് അസ്സീസി.'
  },
  {
    id: '12',
    title: 'Golden Jubilee Ashram Church (1976 – 2026)',
    malayalamTitle: 'സുവർണ്ണ ജൂബിലി ദേവാലയം',
    category: 'history',
    src: '/assisi_assets/2018-05-26.webp',
    fullSrc: '/assisi_assets/2018-05-26.webp',
    description: '50 വർഷത്തെ ചരിത്രമുള്ള ഭരണങ്ങാനം അസ്സീസി കപ്പൂച്ചിൻ ആശ്രമ ദേവാലയം.'
  },
  {
    id: '13',
    title: 'Historic Retreat Gatherings',
    malayalamTitle: 'ആദ്യകാല ധ്യാന കൂട്ടായ്മകൾ',
    category: 'history',
    src: '/assisi_assets/Retreat.webp',
    fullSrc: '/assisi_assets/Retreat.webp',
    description: 'മലയാളത്തിലെ ആദ്യ കരിസ്മാറ്റിക് ധ്യാന മുന്നേറ്റത്തിന്റെ അമൂല്യ ചരിത്ര ചിത്രം.'
  },
  {
    id: '14',
    title: 'Founder Fr. Armond Madhavath Capuchin',
    malayalamTitle: 'സ്ഥാപക പിതാവ് ബ്രദർ അർമോണ്ട്',
    category: 'history',
    src: '/assisi_assets/fr_armond_madhavath.webp',
    fullSrc: '/assisi_assets/fr_armond_madhavath.webp',
    description: 'മലയാളത്തിലെ ആദ്യ കരിസ്മാറ്റിക് ധ്യാനം ആരംഭിച്ച പുണ്യപിതാവ് (1957 - 2001).'
  },
  {
    id: '15',
    title: 'Fr. Gratian Pallipurath Capuchin',
    malayalamTitle: 'ബഹുമാനപ്പെട്ട ഗ്രേഷ്യൻ അച്ചൻ',
    category: 'history',
    src: '/assisi_assets/fr_gratian_pallipurath.webp',
    fullSrc: '/assisi_assets/fr_gratian_pallipurath.webp',
    description: 'ഫ്രാൻസിസ്കൻ മൂന്നാം സഭയുടെയും മിഷൻ ധ്യാനങ്ങളുടെയും അമരക്കാരൻ (1926 - 2014).'
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'chapel' | 'halls' | 'campus' | 'grotto' | 'history'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Photos (എല്ലാം)' },
    { key: 'chapel', label: 'Chapel (ചാപ്പൽ)' },
    { key: 'halls', label: 'Retreat Halls (ഹാളുകൾ)' },
    { key: 'campus', label: 'Campus & Grounds (ആശ്രമം)' },
    { key: 'grotto', label: 'Marian Grotto (ഗ്രോട്ടോ)' },
    { key: 'history', label: 'Golden Jubilee (ചരിത്രം)' }
  ];

  return (
    <Layout
      title="ഫോട്ടോ ഗാലറി | Photo Gallery | അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം"
      description="Photo gallery of Assisi Renewal Center Bharananganam - Chapels, Retreat Halls, Grotto, and Campus Grounds."
    >
      {/* Header Banner - Marian Blue & Ivory */}
      <section className="bg-gradient-to-b from-[#F0F7FF] via-[#E8F2FC] to-[#DDEAF8] border-b border-[#C7DCF1] py-14 text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E3A8A] bg-white px-3 py-1 rounded-md border border-[#BFDBFE] inline-flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>ARC PHOTO ARCHIVES • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
              ഫോട്ടോ ഗാലറി (Photo Gallery)
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ദിവ്യകാരുണ്യ ചാപ്പൽ, ധ്യാന ഹാളുകൾ, മാതാവിന്റെ ഗ്രോട്ടോ, ആശ്രമ പ്രകൃതിഭംഗി, സുവർണ്ണ ജൂബിലി ചരിത്ര ചിത്രങ്ങൾ.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 bg-[#FAF8F5] min-h-[600px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 border-b border-[#E8E3D7] mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#7A1C1C] text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border border-[#E2DCCE]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="group bg-white rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assisi_assets/2018-05-26.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                    <ZoomIn className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-wider">വലുതായി കാണുക</span>
                  </div>
                </div>

                <div className="p-4 text-left space-y-1">
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-[#7A1C1C] transition line-clamp-1">
                    {item.malayalamTitle}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#181614] rounded-2xl border border-amber-900/50 p-4 sm:p-6 overflow-hidden shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeLightbox.malayalamTitle}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300">
                  {activeLightbox.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                className="p-2 rounded-lg bg-amber-950/60 hover:bg-amber-900 text-amber-200 transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative max-h-[65vh] flex items-center justify-center bg-black/60 rounded-xl overflow-hidden">
              <img
                src={activeLightbox.fullSrc || activeLightbox.src}
                alt={activeLightbox.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="text-left text-xs sm:text-sm text-amber-100/90 pt-1">
              <p>{activeLightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
