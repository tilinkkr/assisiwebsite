import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Lock,
  LogOut,
  HeartHandshake,
  Heart,
  Calendar,
  Search,
  Download,
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  Trash2,
  Check,
  Eye,
  ArrowLeft
} from 'lucide-react';
import { DB, PrayerRequest, TestimonySubmission, RetreatBooking } from '../lib/db';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'prayers' | 'testimonies' | 'bookings'>('prayers');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Data lists
  const [prayers, setPrayers] = useState<PrayerRequest[]>([]);
  const [testimonies, setTestimonies] = useState<TestimonySubmission[]>([]);
  const [bookings, setBookings] = useState<RetreatBooking[]>([]);

  // Check existing session
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('assisi_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      loadAllData();
    }
  }, []);

  const loadAllData = () => {
    setPrayers(DB.getPrayers());
    setTestimonies(DB.getTestimonies());
    setBookings(DB.getBookings());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '7777' || passcode === 'assisi2026' || passcode === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('assisi_admin_auth', 'true');
      setAuthError('');
      loadAllData();
    } else {
      setAuthError('തെറ്റായ പാസ്‌കോഡ്! (Incorrect Passcode. Default: 7777)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('assisi_admin_auth');
  };

  // Prayer actions
  const handleUpdatePrayerStatus = (id: string, status: PrayerRequest['status']) => {
    const updated = DB.updatePrayerStatus(id, status);
    setPrayers(updated);
  };

  const handleAddNote = (id: string, currentNotes?: string) => {
    const newNote = prompt('അച്ചന്റെയോ കാര്യാലയത്തിന്റെയോ കുറിപ്പ് ചേർക്കുക (Add note):', currentNotes || '');
    if (newNote !== null) {
      const prayer = prayers.find(p => p.id === id);
      const updated = DB.updatePrayerStatus(id, prayer?.status || 'new', newNote);
      setPrayers(updated);
    }
  };

  const handleDeletePrayer = (id: string) => {
    if (confirm('ഈ പ്രാർത്ഥനാ നിയോഗം നീക്കം ചെയ്യണോ? (Delete prayer request?)')) {
      const updated = DB.deletePrayer(id);
      setPrayers(updated);
    }
  };

  // Testimony actions
  const handleToggleApproveTestimony = (id: string) => {
    const updated = DB.toggleApproveTestimony(id);
    setTestimonies(updated);
  };

  const handleDeleteTestimony = (id: string) => {
    if (confirm('ഈ സാക്ഷ്യം നീക്കം ചെയ്യണോ? (Delete testimony?)')) {
      const updated = DB.deleteTestimony(id);
      setTestimonies(updated);
    }
  };

  // Booking actions
  const handleUpdateBookingStatus = (id: string, status: RetreatBooking['status']) => {
    const updated = DB.updateBookingStatus(id, status);
    setBookings(updated);
  };

  const handleDeleteBooking = (id: string) => {
    if (confirm('ഈ ബുക്കിംഗ് നീക്കം ചെയ്യണോ? (Delete booking?)')) {
      const updated = DB.deleteBooking(id);
      setBookings(updated);
    }
  };

  // Filtered Prayers
  const filteredPrayers = prayers.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.place && p.place.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.phone.includes(searchQuery) ||
      p.intention.toLowerCase().includes(searchQuery.toLowerCase());

    const matchStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  // KPI Counters
  const countNewPrayers = prayers.filter((p) => p.status === 'new').length;
  const countInPrayer = prayers.filter((p) => p.status === 'in_prayer').length;
  const countCompleted = prayers.filter((p) => p.status === 'completed').length;
  const countTestimonies = testimonies.length;
  const countBookings = bookings.length;

  return (
    <>
      <Head>
        <title>Admin Dashboard | അസ്സീസി ധ്യാനകേന്ദ്രം കാര്യാലയം</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#0C0A09] text-stone-100 font-sans">
        
        {/* LOGIN SCREEN */}
        {!isAuthenticated ? (
          <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#140F0C] to-[#0C0A09]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md bg-[#181412] border-2 border-stone-700 p-8 rounded-3xl shadow-2xl space-y-6 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#7A1C1C] border-2 border-amber-400 p-3 mx-auto flex items-center justify-center shadow-lg">
                <Lock className="w-8 h-8 text-amber-300" />
              </div>

              <div>
                <h1 className="text-2xl font-black text-white">അഡ്മിൻ പോർട്ടൽ</h1>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mt-1">
                  ASSISI RENEWAL CENTER BHARANANGANAM
                </p>
                <p className="text-xs text-stone-400 mt-2">
                  പ്രാർത്ഥനാ നിയോഗങ്ങളും ബുക്കിംഗുകളും പരിശോധിക്കാൻ പാസ്‌കോഡ് നൽകുക
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1 text-left">
                  <label className="block text-xs font-bold text-stone-300">
                    Admin Passcode / PIN
                  </label>
                  <input
                    type="password"
                    required
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter PIN (Default: 7777)"
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-700 bg-stone-900 text-white text-center text-lg tracking-widest focus:outline-none focus:border-amber-400 font-mono font-bold"
                  />
                </div>

                {authError && (
                  <p className="text-xs text-rose-400 font-bold bg-rose-950/60 p-2.5 rounded-lg border border-rose-800">
                    {authError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#7A1C1C] hover:bg-[#601515] text-white font-black py-3 px-4 rounded-xl transition shadow-lg border border-amber-400 cursor-pointer active:scale-98"
                >
                  ലോഗിൻ ചെയ്യുക (Login to Dashboard)
                </button>
              </form>

              <div className="pt-2 border-t border-stone-800">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>തിരികെ പ്രധാന വെബ്‌സൈറ്റിലേക്ക് (Back to Website)</span>
                </Link>
              </div>
            </motion.div>
          </div>
        ) : (
          
          /* AUTHENTICATED DASHBOARD */
          <div className="min-h-screen flex flex-col">
            
            {/* Top Navigation Bar */}
            <header className="bg-[#181412] border-b-2 border-stone-700 sticky top-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] p-1 flex items-center justify-center shrink-0 border border-amber-400">
                  <img
                    src="/assisi_assets/Assisi-Renewal-Center-150x150.webp"
                    alt="Assisi Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-black text-white">
                    അഡ്മിൻ ഡാഷ്‌ബോർഡ്
                  </h1>
                  <p className="text-[10px] text-amber-400 font-bold tracking-wide">
                    ഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രം
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="/"
                  target="_blank"
                  className="hidden sm:inline-flex items-center gap-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold py-2 px-3 rounded-lg transition border border-stone-600"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>ലൈവ് സൈറ്റ് കാണുക</span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 bg-[#7A1C1C] hover:bg-[#601515] text-white text-xs font-bold py-2 px-3.5 rounded-lg transition shadow-sm cursor-pointer active:scale-95"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>ലോഗ്ഔട്ട്</span>
                </button>
              </div>
            </header>

            {/* Dashboard Content */}
            <main className="flex-1 max-w-[1536px] w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
              
              {/* Summary KPI Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                
                <div className="bg-[#181412] border-2 border-stone-700 p-4 rounded-2xl shadow-md space-y-1">
                  <div className="flex items-center justify-between text-amber-400">
                    <span className="text-xs font-bold uppercase">പുതിയ നിയോഗങ്ങൾ</span>
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white">{countNewPrayers}</p>
                  <p className="text-[11px] text-amber-300">പ്രാർത്ഥന കാത്തിരിക്കുന്നു</p>
                </div>

                <div className="bg-[#181412] border-2 border-stone-700 p-4 rounded-2xl shadow-md space-y-1">
                  <div className="flex items-center justify-between text-blue-400">
                    <span className="text-xs font-bold uppercase">പ്രാർത്ഥനയിൽ</span>
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white">{countInPrayer}</p>
                  <p className="text-[11px] text-stone-400">വി. കുർബാനയിൽ സമർപ്പിച്ചു</p>
                </div>

                <div className="bg-[#181412] border-2 border-stone-700 p-4 rounded-2xl shadow-md space-y-1">
                  <div className="flex items-center justify-between text-emerald-400">
                    <span className="text-xs font-bold uppercase">പൂർത്തിയായവ</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white">{countCompleted}</p>
                  <p className="text-[11px] text-stone-400">പ്രാർത്ഥിച്ച നിയോഗങ്ങൾ</p>
                </div>

                <div className="bg-[#181412] border-2 border-stone-700 p-4 rounded-2xl shadow-md space-y-1">
                  <div className="flex items-center justify-between text-purple-400">
                    <span className="text-xs font-bold uppercase">സാക്ഷ്യങ്ങൾ</span>
                    <Heart className="w-4 h-4" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white">{countTestimonies}</p>
                  <p className="text-[11px] text-stone-400">നന്ദി പ്രകാശനങ്ങൾ</p>
                </div>

                <div className="bg-[#181412] border-2 border-stone-700 p-4 rounded-2xl shadow-md space-y-1 col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-between text-rose-400">
                    <span className="text-xs font-bold uppercase">ധ്യാന ബുക്കിംഗ്</span>
                    <Calendar className="w-4 h-4" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white">{countBookings}</p>
                  <p className="text-[11px] text-stone-400">രജിസ്ട്രേഷനുകൾ</p>
                </div>

              </div>

              {/* Main Navigation Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-stone-800 pb-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('prayers')}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer flex items-center gap-2 ${
                      activeTab === 'prayers'
                        ? 'bg-[#7A1C1C] text-white border-2 border-amber-400 shadow-md'
                        : 'bg-[#181412] text-stone-300 border border-stone-700 hover:bg-stone-800'
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>പ്രാർത്ഥനാ നിയോഗങ്ങൾ ({prayers.length})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('testimonies')}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer flex items-center gap-2 ${
                      activeTab === 'testimonies'
                        ? 'bg-[#7A1C1C] text-white border-2 border-amber-400 shadow-md'
                        : 'bg-[#181412] text-stone-300 border border-stone-700 hover:bg-stone-800'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                    <span>സാക്ഷ്യങ്ങൾ ({testimonies.length})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer flex items-center gap-2 ${
                      activeTab === 'bookings'
                        ? 'bg-[#7A1C1C] text-white border-2 border-amber-400 shadow-md'
                        : 'bg-[#181412] text-stone-300 border border-stone-700 hover:bg-stone-800'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>ധ്യാന ബുക്കിംഗ് ({bookings.length})</span>
                  </button>
                </div>

                {/* Export Button for Priests */}
                {activeTab === 'prayers' && (
                  <button
                    type="button"
                    onClick={() => DB.exportPrayersToCSV(filteredPrayers)}
                    className="bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs font-black py-2.5 px-4 rounded-xl transition inline-flex items-center gap-2 border border-amber-400 shadow-md cursor-pointer active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>CSV / Excel ആയി ഡൗൺലോഡ് ചെയ്യുക</span>
                  </button>
                )}
              </div>

              {/* TAB 1: PRAYER REQUESTS */}
              {activeTab === 'prayers' && (
                <div className="space-y-4">
                  
                  {/* Search & Status Filters */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative flex-1 w-full">
                      <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="പേര്, ഫോൺ നമ്പർ, സ്ഥലം അല്ലെങ്കിൽ നിയോഗം തിരയുക..."
                        className="w-full pl-10 pr-4 py-2.5 bg-[#181412] border-2 border-stone-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-stone-500 font-medium"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                      {[
                        { key: 'all', label: 'എല്ലാം' },
                        { key: 'new', label: 'പുതിയത്' },
                        { key: 'in_prayer', label: 'പ്രാർത്ഥനയിൽ' },
                        { key: 'completed', label: 'പൂർത്തിയായവ' }
                      ].map((s) => (
                        <button
                          key={s.key}
                          type="button"
                          onClick={() => setStatusFilter(s.key)}
                          className={`px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                            statusFilter === s.key
                              ? 'bg-amber-400 text-slate-950 font-black'
                              : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Prayer Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPrayers.length === 0 ? (
                      <div className="col-span-full py-16 text-center text-stone-400 space-y-2">
                        <HeartHandshake className="w-10 h-10 text-stone-600 mx-auto" />
                        <p className="text-base font-bold">പ്രാർത്ഥനാ നിയോഗങ്ങൾ ഒന്നും കണ്ടെത്തിയില്ല</p>
                      </div>
                    ) : (
                      filteredPrayers.map((item) => {
                        const waMsg = encodeURIComponent(
                          `സ്നേഹമുള്ള ${item.name},\nഭരണങ്ങാനം അസ്സീസി ധ്യാനകേന്ദ്രത്തിൽ അങ്ങയുടെ പ്രാർത്ഥനാ നിയോഗം വിശുദ്ധ കുർബാനയിലും ദിവ്യകാരുണ്യ സന്നിധിയിലും സമർപ്പിച്ച് പ്രാർത്ഥിക്കുന്നു.\n\nദൈവം അങ്ങയെ സമൃദ്ധമായി അനുഗ്രഹിക്കട്ടെ!\n- അസ്സീസി ആശ്രമം കാര്യാലയം`
                        );
                        return (
                          <div
                            key={item.id}
                            className={`bg-[#181412] border-2 rounded-2xl p-5 shadow-xl transition flex flex-col justify-between space-y-3 ${
                              item.status === 'new'
                                ? 'border-amber-400/80 bg-gradient-to-b from-[#241A14] to-[#181412]'
                                : item.status === 'in_prayer'
                                ? 'border-blue-500/60'
                                : 'border-stone-700 opacity-90'
                            }`}
                          >
                            <div className="space-y-2 text-left">
                              <div className="flex items-center justify-between border-b border-stone-800 pb-2.5">
                                <span className="text-[11px] font-mono text-stone-400">
                                  {new Date(item.createdAt).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </span>
                                
                                <span
                                  className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase ${
                                    item.status === 'new'
                                      ? 'bg-amber-400 text-slate-950 animate-pulse'
                                      : item.status === 'in_prayer'
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-stone-700 text-stone-300'
                                  }`}
                                >
                                  {item.status === 'new'
                                    ? 'പുതിയത്'
                                    : item.status === 'in_prayer'
                                    ? 'പ്രാർത്ഥനയിൽ'
                                    : 'പൂർത്തിയായി'}
                                </span>
                              </div>

                              <div>
                                <h3 className="text-base font-bold text-white">{item.name}</h3>
                                {item.place && (
                                  <p className="text-xs text-amber-300 font-medium">📍 {item.place}</p>
                                )}
                              </div>

                              <div className="p-3 bg-stone-900/90 rounded-xl border border-stone-800">
                                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal whitespace-pre-wrap">
                                  "{item.intention}"
                                </p>
                              </div>

                              {item.notes && (
                                <p className="text-[11px] text-amber-200/90 bg-amber-950/40 p-2 rounded-lg border border-amber-800/40">
                                  📝 <strong className="text-amber-300">കുറിപ്പ്:</strong> {item.notes}
                                </p>
                              )}
                            </div>

                            {/* Actions Strip */}
                            <div className="pt-3 border-t border-stone-800 space-y-2">
                              {/* Contact buttons */}
                              <div className="grid grid-cols-2 gap-2">
                                <a
                                  href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                                  className="inline-flex items-center justify-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold py-2 px-2.5 rounded-xl transition border border-stone-600"
                                >
                                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                                  <span>വിളിക്കുക</span>
                                </a>

                                <a
                                  href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=${waMsg}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs font-bold py-2 px-2.5 rounded-xl transition border border-amber-400"
                                >
                                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                                  <span>വാട്സാപ്പ് മറുപടി</span>
                                </a>
                              </div>

                              {/* Status dropdown & Notes Modal button */}
                              <div className="flex items-center justify-between gap-2 pt-1">
                                <div className="flex items-center gap-1">
                                  {item.status !== 'in_prayer' && (
                                    <button
                                      type="button"
                                      onClick={() => handleUpdatePrayerStatus(item.id, 'in_prayer')}
                                      className="text-[11px] bg-blue-900/60 hover:bg-blue-800 text-blue-200 font-bold py-1 px-2 rounded-lg transition border border-blue-700"
                                    >
                                      പ്രാർത്ഥനയിലേക്ക് മാറ്റുക
                                    </button>
                                  )}
                                  {item.status !== 'completed' && (
                                    <button
                                      type="button"
                                      onClick={() => handleUpdatePrayerStatus(item.id, 'completed')}
                                      className="text-[11px] bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold py-1 px-2 rounded-lg transition border border-stone-600 flex items-center gap-1"
                                    >
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span>പൂർത്തിയായി</span>
                                    </button>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => handleAddNote(item.id, item.notes)}
                                    className="text-[11px] bg-stone-800 hover:bg-stone-700 text-amber-300 font-bold py-1 px-2 rounded-lg transition border border-stone-600"
                                    title="അച്ചന്റെ കുറിപ്പ്"
                                  >
                                    📝 കുറിപ്പ്
                                  </button>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => handleDeletePrayer(item.id)}
                                  className="p-1.5 text-stone-400 hover:text-rose-400 rounded-lg transition"
                                  title="ഡിലീറ്റ് ചെയ്യുക"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                          </div>
                        );
                      })
                    )}
                  </div>

                </div>
              )}

              {/* TAB 2: TESTIMONIES */}
              {activeTab === 'testimonies' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testimonies.length === 0 ? (
                    <div className="col-span-full py-16 text-center text-stone-400">
                      സാക്ഷ്യങ്ങൾ ഒന്നും ലഭിച്ചിട്ടില്ല
                    </div>
                  ) : (
                    testimonies.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#181412] border-2 border-stone-700 rounded-2xl p-5 shadow-xl space-y-3 flex flex-col justify-between text-left"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                            <span className="text-xs text-stone-400">
                              {new Date(item.createdAt).toLocaleDateString('en-IN')}
                            </span>
                            <span
                              className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                                item.isApproved
                                  ? 'bg-emerald-400 text-slate-950'
                                  : 'bg-amber-400 text-slate-950'
                              }`}
                            >
                              {item.isApproved ? 'സൈറ്റിൽ പ്രസിദ്ധീകരിച്ചു' : 'അംഗീകാരം കാത്തിരിക്കുന്നു'}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-white">
                            {item.firstName} {item.lastName}
                          </h3>
                          <p className="text-xs text-amber-300 font-bold">{item.subject}</p>
                          <p className="text-xs text-stone-300 bg-stone-900 p-3 rounded-xl border border-stone-800 leading-relaxed font-normal">
                            "{item.description}"
                          </p>
                          <p className="text-[11px] text-stone-400">
                            ഫോൺ: {item.contact} | ഇമെയിൽ: {item.email}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => handleToggleApproveTestimony(item.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                              item.isApproved
                                ? 'bg-stone-800 text-stone-300 border border-stone-600'
                                : 'bg-emerald-600 text-white border border-emerald-400'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{item.isApproved ? 'പ്രസിദ്ധീകരണം മാറ്റുക' : 'വെബ്‌സൈറ്റിൽ പ്രസിദ്ധീകരിക്കുക'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteTestimony(item.id)}
                            className="p-1.5 text-stone-400 hover:text-rose-400 rounded-lg transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 3: RETREAT BOOKINGS */}
              {activeTab === 'bookings' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bookings.length === 0 ? (
                    <div className="col-span-full py-16 text-center text-stone-400">
                      ധ്യാന ബുക്കിംഗുകൾ ഒന്നും ലഭിച്ചിട്ടില്ല
                    </div>
                  ) : (
                    bookings.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#181412] border-2 border-stone-700 rounded-2xl p-5 shadow-xl space-y-3 text-left"
                      >
                        <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                          <span className="text-xs text-amber-300 font-bold">{item.retreatDates}</span>
                          <span
                            className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase ${
                              item.status === 'confirmed'
                                ? 'bg-emerald-400 text-slate-950'
                                : 'bg-amber-400 text-slate-950'
                            }`}
                          >
                            {item.status === 'confirmed' ? 'സ്ഥിരീകരിച്ചു' : 'തീരുമാനമായില്ല'}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-white">{item.name}</h3>
                          <p className="text-xs text-stone-300">{item.retreatTitle}</p>
                          <p className="text-xs text-amber-400 font-bold mt-1">ആളുകളുടെ എണ്ണം: {item.personsCount}</p>
                          <p className="text-xs text-stone-400 mt-0.5">ഫോൺ: {item.phone}</p>
                        </div>

                        <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                          <a
                            href={`tel:${item.phone}`}
                            className="inline-flex items-center gap-1 text-xs text-amber-300 font-bold hover:underline"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>വിളിക്കുക</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => handleUpdateBookingStatus(item.id, item.status === 'confirmed' ? 'pending' : 'confirmed')}
                            className="text-xs bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold py-1 px-2.5 rounded-lg border border-stone-600"
                          >
                            {item.status === 'confirmed' ? 'Pending ആക്കുക' : 'Confirm ചെയ്യുക'}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteBooking(item.id)}
                            className="p-1 text-stone-400 hover:text-rose-400 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

            </main>
          </div>
        )}

      </div>
    </>
  );
}
