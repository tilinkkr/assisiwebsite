export interface PrayerRequest {
  id: string;
  name: string;
  phone: string;
  place?: string;
  intention: string;
  status: 'new' | 'in_prayer' | 'completed';
  notes?: string;
  createdAt: string;
}

export interface TestimonySubmission {
  id: string;
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  subject: string;
  description: string;
  agreePublish: boolean;
  isApproved: boolean;
  createdAt: string;
}

export interface RetreatBooking {
  id: string;
  name: string;
  phone: string;
  retreatDates: string;
  retreatTitle: string;
  personsCount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

// Initial sample data if storage is empty
const DEFAULT_PRAYERS: PrayerRequest[] = [
  {
    id: 'pr-1001',
    name: 'തോമസ് ജോസഫ് (Thomas Joseph)',
    phone: '+91 9447123456',
    place: 'പാലാ, കോട്ടയം',
    intention: 'കുടുംബ സമാധാനത്തിനും മക്കളുടെ ഉപരിപഠന വിജയത്തിനുമായി പ്രത്യേക പ്രാർത്ഥന ആവശ്യപ്പെടുന്നു.',
    status: 'new',
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString()
  },
  {
    id: 'pr-1002',
    name: 'മേരിക്കുട്ടി ആന്റണി (Marykutty Antony)',
    phone: '+91 9846234567',
    place: 'ഭരണങ്ങാനം',
    intention: 'ഗുരുതരമായ അർബുദ രോഗത്തിൽ നിന്നുള്ള സൗഖ്യത്തിനായി വിശുദ്ധ കുർബാനയിൽ ഓർത്ത് പ്രാർത്ഥിക്കണം.',
    status: 'in_prayer',
    notes: 'Fr. Director informed for Wednesday Eucharistic Adoration',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString()
  },
  {
    id: 'pr-1003',
    name: 'ജോൺസൺ മാത്യു (Johnson Mathew)',
    phone: '+91 8547345678',
    place: 'തൊടുപുഴ',
    intention: 'കടബാധ്യതകളിൽ നിന്നുള്ള വിടുതലിനും വിദേശ ജോലിക്കുമായി പ്രാർത്ഥനാ സഹായം തേടുന്നു.',
    status: 'completed',
    createdAt: new Date(Date.now() - 72 * 3600 * 1000).toISOString()
  }
];

const DEFAULT_TESTIMONIES: TestimonySubmission[] = [
  {
    id: 'test-2001',
    firstName: 'Abraham',
    lastName: 'Jacob',
    contact: '+91 9447001122',
    email: 'abraham.j@example.com',
    subject: 'കടബാധ്യതയിൽ നിന്നുള്ള അത്ഭുതകരമായ വിടുതൽ',
    description: 'We attended a retreat last month and my mother had prayed for her sister who had a debt of Rs 21 lakhs... God miraculously cleared the debt through divine providence. Praise the Lord!',
    agreePublish: true,
    isApproved: true,
    createdAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString()
  },
  {
    id: 'test-2002',
    firstName: 'Dona',
    lastName: 'Jose',
    contact: '+91 9846112233',
    email: 'dona.jose@example.com',
    subject: 'സന്താന സൗഭാഗ്യം നൽകി അനുഗ്രഹിച്ചു',
    description: 'I had attended the retreat last year and requested prayer for childbirth. Through intense prayer at Assisi, God blessed us with a healthy baby boy. All glory to Jesus!',
    agreePublish: true,
    isApproved: true,
    createdAt: new Date(Date.now() - 10 * 24 * 3600 * 1000).toISOString()
  }
];

const DEFAULT_BOOKINGS: RetreatBooking[] = [
  {
    id: 'bk-3001',
    name: 'ജോസഫ് കുരുവിള (Joseph Kuruvilla)',
    phone: '+91 9447556677',
    retreatDates: 'August 07 - 10',
    retreatTitle: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)',
    personsCount: 2,
    status: 'confirmed',
    createdAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString()
  }
];

// Helper functions for Local Storage & Backend API sync
export const DB = {
  // Prayer Requests
  getPrayers: (): PrayerRequest[] => {
    if (typeof window === 'undefined') return DEFAULT_PRAYERS;
    try {
      const data = localStorage.getItem('assisi_db_prayers');
      if (!data) {
        localStorage.setItem('assisi_db_prayers', JSON.stringify(DEFAULT_PRAYERS));
        return DEFAULT_PRAYERS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_PRAYERS;
    }
  },

  savePrayer: (prayer: Omit<PrayerRequest, 'id' | 'createdAt' | 'status'>): PrayerRequest => {
    const list = DB.getPrayers();
    const newEntry: PrayerRequest = {
      ...prayer,
      id: `pr-${Date.now().toString().slice(-6)}`,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    const updated = [newEntry, ...list];
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('assisi_db_prayers', JSON.stringify(updated));
      } catch (err) {
        console.error('Storage error', err);
      }
    }
    return newEntry;
  },

  updatePrayerStatus: (id: string, status: PrayerRequest['status'], notes?: string): PrayerRequest[] => {
    const list = DB.getPrayers();
    const updated = list.map((item) => (item.id === id ? { ...item, status, notes: notes ?? item.notes } : item));
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_prayers', JSON.stringify(updated));
    }
    return updated;
  },

  deletePrayer: (id: string): PrayerRequest[] => {
    const list = DB.getPrayers();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_prayers', JSON.stringify(updated));
    }
    return updated;
  },

  // Testimonies
  getTestimonies: (): TestimonySubmission[] => {
    if (typeof window === 'undefined') return DEFAULT_TESTIMONIES;
    try {
      const data = localStorage.getItem('assisi_db_testimonies');
      if (!data) {
        localStorage.setItem('assisi_db_testimonies', JSON.stringify(DEFAULT_TESTIMONIES));
        return DEFAULT_TESTIMONIES;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_TESTIMONIES;
    }
  },

  saveTestimony: (testimony: Omit<TestimonySubmission, 'id' | 'createdAt' | 'isApproved'>): TestimonySubmission => {
    const list = DB.getTestimonies();
    const newEntry: TestimonySubmission = {
      ...testimony,
      id: `test-${Date.now().toString().slice(-6)}`,
      isApproved: false,
      createdAt: new Date().toISOString()
    };
    const updated = [newEntry, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_testimonies', JSON.stringify(updated));
    }
    return newEntry;
  },

  toggleApproveTestimony: (id: string): TestimonySubmission[] => {
    const list = DB.getTestimonies();
    const updated = list.map((item) => (item.id === id ? { ...item, isApproved: !item.isApproved } : item));
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_testimonies', JSON.stringify(updated));
    }
    return updated;
  },

  deleteTestimony: (id: string): TestimonySubmission[] => {
    const list = DB.getTestimonies();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_testimonies', JSON.stringify(updated));
    }
    return updated;
  },

  // Retreat Bookings
  getBookings: (): RetreatBooking[] => {
    if (typeof window === 'undefined') return DEFAULT_BOOKINGS;
    try {
      const data = localStorage.getItem('assisi_db_bookings');
      if (!data) {
        localStorage.setItem('assisi_db_bookings', JSON.stringify(DEFAULT_BOOKINGS));
        return DEFAULT_BOOKINGS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_BOOKINGS;
    }
  },

  saveBooking: (booking: Omit<RetreatBooking, 'id' | 'createdAt' | 'status'>): RetreatBooking => {
    const list = DB.getBookings();
    const newEntry: RetreatBooking = {
      ...booking,
      id: `bk-${Date.now().toString().slice(-6)}`,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    const updated = [newEntry, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_bookings', JSON.stringify(updated));
    }
    return newEntry;
  },

  updateBookingStatus: (id: string, status: RetreatBooking['status']): RetreatBooking[] => {
    const list = DB.getBookings();
    const updated = list.map((item) => (item.id === id ? { ...item, status } : item));
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_bookings', JSON.stringify(updated));
    }
    return updated;
  },

  deleteBooking: (id: string): RetreatBooking[] => {
    const list = DB.getBookings();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_bookings', JSON.stringify(updated));
    }
    return updated;
  },

  // Export to CSV for printing/mass intention list
  exportPrayersToCSV: (prayers: PrayerRequest[]) => {
    const headers = ['ID', 'Date', 'Name', 'Phone', 'Place', 'Intention', 'Status', 'Notes'];
    const rows = prayers.map((p) => [
      p.id,
      new Date(p.createdAt).toLocaleDateString('en-IN'),
      `"${(p.name || '').replace(/"/g, '""')}"`,
      `"${p.phone}"`,
      `"${(p.place || '').replace(/"/g, '""')}"`,
      `"${(p.intention || '').replace(/"/g, '""')}"`,
      p.status,
      `"${(p.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Assisi_Prayer_Intentions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
