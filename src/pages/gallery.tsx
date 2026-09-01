import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../components/Layout';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { DB, GalleryPhoto } from '../lib/db';

interface GalleryItem {
  id: string;
  title: string;
  malayalamTitle: string;
  category: 'chapel' | 'halls' | 'campus' | 'grotto' | 'history' | 'retreats' | string;
  src: string;
  fullSrc?: string;
  description: string;
}

const DEFAULT_GALLERY_DATA: GalleryItem[] = [
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
    title: 'Praise & Worship Altar Podium',
    malayalamTitle: 'സ്തുതിപ്പ് വേദി',
    category: 'chapel',
    src: '/assisi_assets/gallery/IMG20230605155154-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155154-scaled.webp',
    description: 'ധ്യാന ശുശ്രൂഷകൾ നയിക്കുന്ന പ്രധാന വേദി.'
  },
  {
    id: '7',
    title: 'Holy Monstrance & Tabernacle',
    malayalamTitle: 'ദിവ്യകാരുണ്യ സക്രാരി',
    category: 'chapel',
    src: '/assisi_assets/gallery/IMG20230605155215-461x1024.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155215-scaled.webp',
    description: 'അനുഗ്രഹദായകമായ പരിശുദ്ധ പരമ ദിവ്യകാരുണ്യ സന്നിധി.'
  },
  {
    id: '8',
    title: 'Eucharistic Adoration with Votive Candles',
    malayalamTitle: 'മെഴുകുതിരി വെളിച്ചത്തിൽ ആരാധന',
    category: 'chapel',
    src: '/assisi_assets/gallery/MonstranceCandles-1536x1000-1.webp',
    fullSrc: '/assisi_assets/gallery/MonstranceCandles-1536x1000-1.webp',
    description: 'ശാന്തമായ പ്രാർത്ഥനാന്തരീക്ഷത്തിൽ പ്രകാശിക്കുന്ന ദിവ്യകാരുണ്യം.'
  },
  {
    id: '9',
    title: 'Scenic Campus Gardens & Hills',
    malayalamTitle: 'ആശ്രമ പൂന്തോട്ടവും പ്രകൃതിയും',
    category: 'campus',
    src: '/assisi_assets/gallery/photo-1622598453695-4fbaf151aadc.webp',
    fullSrc: '/assisi_assets/gallery/photo-1622598453695-4fbaf151aadc.webp',
    description: 'ധ്യാനാർത്ഥികൾക്ക് ധ്യാനിക്കാനും പ്രാർത്ഥിക്കാനുമുള്ള ശാന്തമായ പ്രകൃതിഭംഗി.'
  },
  {
    id: '10',
    title: 'Residential Retreat Accommodation Block',
    malayalamTitle: 'റസിഡൻഷ്യൽ താമസ മുറികൾ',
    category: 'campus',
    src: '/assisi_assets/gallery/IMG20230605155200-scaled.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155200-scaled.webp',
    description: 'ധ്യാനത്തിനെത്തുന്നവർക്കുള്ള സുഖപ്രദമായ താമസ മുറികളും ഹാളുകളും.'
  },
  {
    id: '11',
    title: 'Spiritual Counseling Rooms',
    malayalamTitle: 'ആത്മീയ കൗൺസിലിംഗ് മുറികൾ',
    category: 'halls',
    src: '/assisi_assets/gallery/IMG20230605155235-scaled-e1695101767132.webp',
    fullSrc: '/assisi_assets/gallery/IMG20230605155235-scaled-e1695101767132.webp',
    description: 'വ്യക്തിഗത കൗൺസിലിംഗിനും കുമ്പസാരത്തിനുമുള്ള പ്രാർത്ഥനാ മുറികൾ.'
  },
  {
    id: '12',
    title: 'Assisi Golden Jubilee Monastic Church',
    malayalamTitle: 'അസ്സീസി ആശ്രമ ദേവാലയം (50 വർഷം)',
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
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(DEFAULT_GALLERY_DATA);

  // Load custom dynamic gallery photos from database and merge seamlessly
  useEffect(() => {
    const customPhotos = DB.getGallery();
    if (customPhotos && customPhotos.length > 0) {
      const mapped: GalleryItem[] = customPhotos.map((p) => ({
        id: p.id,
        title: p.title,
        malayalamTitle: p.malayalamTitle || p.title,
        category: p.category || 'retreats',
        src: p.src,
        fullSrc: p.src,
        description: p.description || ''
      }));
      setGalleryItems([...mapped, ...DEFAULT_GALLERY_DATA]);
    }

    DB.fetchGalleryAsync().then((live) => {
      if (live && live.length > 0) {
        const mapped: GalleryItem[] = live.map((p: GalleryPhoto) => ({
          id: p.id,
          title: p.title,
          malayalamTitle: p.malayalamTitle || p.title,
          category: p.category || 'retreats',
          src: p.src,
          fullSrc: p.src,
          description: p.description || ''
        }));
        setGalleryItems([...mapped, ...DEFAULT_GALLERY_DATA]);
      }
    });
  }, []);

  const categories = [
    { key: 'all', label: 'All Photos (എല്ലാം)' },
    { key: 'chapel', label: 'Chapel (ചാപ്പൽ)' },
    { key: 'halls', label: 'Retreat Halls (ഹാളുകൾ)' },
    { key: 'campus', label: 'Campus & Grounds (ആശ്രമം)' },
    { key: 'grotto', label: 'Marian Grotto (ഗ്രോട്ടോ)' },
    { key: 'history', label: 'Golden Jubilee (ചരിത്രം)' },
    { key: 'retreats', label: 'Recent Retreats (ധ്യാനങ്ങൾ)' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <Layout
      title="ഫോട്ടോ ഗാലറി | Photo Gallery | അസ്സീസി ധ്യാനകേന്ദ്രം, ഭരണങ്ങാനം"
      description="Photo gallery of Assisi Renewal Center Bharananganam - Chapels, Retreat Halls, Grotto, and Campus Grounds."
    >
      {/* Header Banner - Marian Midnight Atmosphere */}
      <section className="relative bg-gradient-to-b from-[#0B1528] via-[#101E38] to-[#0A1120] border-b border-blue-900/40 py-14 sm:py-18 text-left overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-3.5 py-1 rounded-md border border-blue-500/40 inline-flex items-center shadow-xs">
              <span>ARC PHOTO ARCHIVES • ഭരണങ്ങാനം</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              ഫോട്ടോ ഗാലറി (Photo Gallery)
            </h1>
            <p className="text-sm sm:text-base text-blue-200/90 leading-relaxed font-normal">
              അസ്സീസി ധ്യാനകേന്ദ്രത്തിലെ ദിവ്യകാരുണ്യ ചാപ്പൽ, ധ്യാന ഹാളുകൾ, മാതാവിന്റെ ഗ്രോട്ടോ, ആശ്രമ പ്രകൃതിഭംഗി, സുവർണ്ണ ജൂബിലി ചരിത്ര ചിത്രങ്ങൾ.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 bg-gradient-to-b from-[#0A1120] via-[#0D1629] to-[#080D18] min-h-[600px]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 border-b border-blue-900/40 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#7A1C1C] text-white shadow-md border border-amber-400/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-stone-300 border border-blue-900/40 backdrop-blur-md'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Bulletproof Responsive Aspect-Ratio Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.length === 0 ? (
              <div className="col-span-full py-16 text-center text-stone-400 space-y-2">
                <ImageIcon className="w-10 h-10 text-stone-600 mx-auto" />
                <p className="text-base font-bold">ചിത്രങ്ങൾ ഒന്നും കണ്ടെത്തിയില്ല</p>
              </div>
            ) : (
              filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: (idx % 8) * 0.04 }}
                  onClick={() => setActiveLightbox(item)}
                  className="group relative bg-[#131E33] border-2 border-blue-950 hover:border-amber-400/80 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Fixed Aspect Ratio Container: Guarantees 0 Grid Breakage Regardless of Image Dimensions */}
                  <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assisi_assets/Assisi-Renewal-Center-150x150.webp';
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-2.5 left-3">
                      <span className="text-[10px] font-black uppercase text-amber-300 bg-black/70 px-2 py-0.5 rounded border border-amber-400/40">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Caption Footer */}
                  <div className="p-3.5 text-left space-y-1 bg-[#10192B]">
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                      {item.malayalamTitle}
                    </h3>
                    <p className="text-[11px] text-stone-400 truncate">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightbox(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-4xl bg-[#131E33] border-2 border-amber-400 rounded-3xl overflow-hidden shadow-2xl z-10 text-left my-auto"
            >
              <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeLightbox.fullSrc || activeLightbox.src}
                  alt={activeLightbox.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
                
                <button
                  type="button"
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-rose-800 text-white flex items-center justify-center backdrop-blur-md transition cursor-pointer border border-white/30"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="p-5 sm:p-6 space-y-2 bg-[#10192B] border-t border-blue-900/60 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-amber-300 bg-amber-950 px-2.5 py-0.5 rounded border border-amber-600">
                    {activeLightbox.category}
                  </span>
                  <p className="text-xs text-stone-400 font-mono">ARC BHARANANGANAM</p>
                </div>
                
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {activeLightbox.malayalamTitle} ({activeLightbox.title})
                </h3>
                
                {activeLightbox.description && (
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {activeLightbox.description}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </Layout>
  );
}
