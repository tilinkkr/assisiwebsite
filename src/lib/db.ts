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

export interface RetreatEvent {
  id: string;
  month: string; // 'august' | 'september' | 'october' etc.
  dates: string;
  type: string;
  director: string;
  timing: string;
  fee: string;
  image?: string;
  isActive: boolean;
  sortOrder: number;
  createdAt?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  malayalamTitle: string;
  category: string;
  src: string;
  description?: string;
  sortOrder?: number;
  createdAt?: string;
}

const DEFAULT_EVENTS: RetreatEvent[] = [
  { id: 'ev-101', month: 'august', dates: 'August 07 - 10', type: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 1 },
  { id: 'ev-102', month: 'august', dates: 'August 14 - 17', type: 'Marian & Family Deliverance Retreat (കുടുംബ നവീകരണ ധ്യാനം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 2 },
  { id: 'ev-103', month: 'august', dates: 'August 21 - 24', type: 'Charismatic Spiritual Renewal (കരിസ്മാറ്റിക് ധ്യാനം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 3 },
  { id: 'ev-104', month: 'august', dates: 'August 28 - 31', type: 'Youth & Vocation Discernment Retreat (യുവജന ധ്യാനം)', director: 'Capuchin Youth Ministry', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 4 },
  { id: 'ev-201', month: 'september', dates: 'September 04 - 07', type: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 5 },
  { id: 'ev-202', month: 'september', dates: 'September 11 - 14', type: 'Holy Spirit & Deliverance Retreat (വിശുദ്ധാത്മാവിൽ നവീകരണം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 6 },
  { id: 'ev-203', month: 'september', dates: 'September 18 - 21', type: 'Couples & Family Sanctity Retreat (ദമ്പതി ധ്യാനം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 7 },
  { id: 'ev-204', month: 'september', dates: 'September 25 - 28', type: 'Inner Peace & Healing Retreat (ശാന്തിയും സൗഖ്യവും)', director: 'Capuchin Preachers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 8 },
  { id: 'ev-301', month: 'october', dates: 'October 02 - 05', type: 'St. Francis Feast Special Retreat (ഫ്രാൻസിസ്കൻ തിരുനാൾ ധ്യാനം)', director: 'Provincial & Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 9 },
  { id: 'ev-302', month: 'october', dates: 'October 09 - 12', type: 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', director: 'Fr. Director & ARC Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 10 },
  { id: 'ev-303', month: 'october', dates: 'October 16 - 19', type: 'Rosary & Marian Intercession Retreat (ജപമാല മാസ ധ്യാനം)', director: 'Capuchin Fathers', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 11 },
  { id: 'ev-304', month: 'october', dates: 'October 23 - 26', type: 'Deliverance & Grace Renewal (വിടുതൽ ധ്യാനം)', director: 'Fr. Director & Team', timing: 'Thursday 4:30 PM to Sunday 1:30 PM', fee: '₹700', isActive: true, sortOrder: 12 }
];

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

export const DB = {
  // ==========================================
  // PRAYER REQUESTS
  // ==========================================
  fetchPrayersAsync: async (): Promise<PrayerRequest[]> => {
    try {
      const res = await fetch('/api/prayers.php');
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('assisi_db_prayers', JSON.stringify(json.data));
          }
          return json.data;
        }
      }
    } catch {}
    return DB.getPrayers();
  },

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

  savePrayer: async (prayer: Omit<PrayerRequest, 'id' | 'createdAt' | 'status'>): Promise<PrayerRequest> => {
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
      } catch (e) {
        console.error(e);
      }
    }

    try {
      fetch('/api/prayers.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      }).catch(() => {});
    } catch {}

    return newEntry;
  },

  updatePrayerStatus: (id: string, status: PrayerRequest['status'], notes?: string): PrayerRequest[] => {
    const list = DB.getPrayers();
    const updated = list.map((item) => (item.id === id ? { ...item, status, notes: notes ?? item.notes } : item));
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_prayers', JSON.stringify(updated));
    }

    try {
      fetch('/api/prayers.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, notes })
      }).catch(() => {});
    } catch {}

    return updated;
  },

  deletePrayer: (id: string): PrayerRequest[] => {
    const list = DB.getPrayers();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_prayers', JSON.stringify(updated));
    }

    try {
      fetch(`/api/prayers.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      }).catch(() => {});
    } catch {}

    return updated;
  },

  // ==========================================
  // RETREAT EVENTS & SCHEDULE
  // ==========================================
  fetchEventsAsync: async (): Promise<RetreatEvent[]> => {
    try {
      const res = await fetch('/api/events.php');
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('assisi_db_events', JSON.stringify(json.data));
          }
          return json.data;
        }
      }
    } catch {}
    return DB.getEvents();
  },

  getEvents: (): RetreatEvent[] => {
    if (typeof window === 'undefined') return DEFAULT_EVENTS;
    try {
      const data = localStorage.getItem('assisi_db_events');
      if (!data) {
        localStorage.setItem('assisi_db_events', JSON.stringify(DEFAULT_EVENTS));
        return DEFAULT_EVENTS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_EVENTS;
    }
  },

  saveEvent: (event: Omit<RetreatEvent, 'id'>): RetreatEvent => {
    const list = DB.getEvents();
    const newEntry: RetreatEvent = {
      ...event,
      id: `ev-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newEntry, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_events', JSON.stringify(updated));
    }

    try {
      fetch('/api/events.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      }).catch(() => {});
    } catch {}

    return newEntry;
  },

  updateEvent: (event: RetreatEvent): RetreatEvent[] => {
    const list = DB.getEvents();
    const updated = list.map((item) => (item.id === event.id ? event : item));
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_events', JSON.stringify(updated));
    }

    try {
      fetch('/api/events.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      }).catch(() => {});
    } catch {}

    return updated;
  },

  deleteEvent: (id: string): RetreatEvent[] => {
    const list = DB.getEvents();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_events', JSON.stringify(updated));
    }

    try {
      fetch(`/api/events.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      }).catch(() => {});
    } catch {}

    return updated;
  },

  // ==========================================
  // GALLERY PHOTOS
  // ==========================================
  fetchGalleryAsync: async (): Promise<GalleryPhoto[]> => {
    try {
      const res = await fetch('/api/gallery.php');
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('assisi_db_gallery', JSON.stringify(json.data));
          }
          return json.data;
        }
      }
    } catch {}
    return DB.getGallery();
  },

  getGallery: (): GalleryPhoto[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem('assisi_db_gallery');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  savePhoto: (photo: Omit<GalleryPhoto, 'id'>): GalleryPhoto => {
    const list = DB.getGallery();
    const newEntry: GalleryPhoto = {
      ...photo,
      id: `gal-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newEntry, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_gallery', JSON.stringify(updated));
    }

    try {
      fetch('/api/gallery.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      }).catch(() => {});
    } catch {}

    return newEntry;
  },

  deletePhoto: (id: string): GalleryPhoto[] => {
    const list = DB.getGallery();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_gallery', JSON.stringify(updated));
    }

    try {
      fetch(`/api/gallery.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      }).catch(() => {});
    } catch {}

    return updated;
  },

  // ==========================================
  // TESTIMONIES
  // ==========================================
  fetchTestimoniesAsync: async (): Promise<TestimonySubmission[]> => {
    try {
      const res = await fetch('/api/testimonies.php');
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('assisi_db_testimonies', JSON.stringify(json.data));
          }
          return json.data;
        }
      }
    } catch {}
    return DB.getTestimonies();
  },

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

  saveTestimony: async (testimony: Omit<TestimonySubmission, 'id' | 'createdAt' | 'isApproved'>): Promise<TestimonySubmission> => {
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

    try {
      fetch('/api/testimonies.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      }).catch(() => {});
    } catch {}

    return newEntry;
  },

  toggleApproveTestimony: (id: string): TestimonySubmission[] => {
    const list = DB.getTestimonies();
    let newApprovedState = false;
    const updated = list.map((item) => {
      if (item.id === id) {
        newApprovedState = !item.isApproved;
        return { ...item, isApproved: newApprovedState };
      }
      return item;
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_testimonies', JSON.stringify(updated));
    }

    try {
      fetch('/api/testimonies.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isApproved: newApprovedState })
      }).catch(() => {});
    } catch {}

    return updated;
  },

  deleteTestimony: (id: string): TestimonySubmission[] => {
    const list = DB.getTestimonies();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_testimonies', JSON.stringify(updated));
    }

    try {
      fetch(`/api/testimonies.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      }).catch(() => {});
    } catch {}

    return updated;
  },

  // ==========================================
  // RETREAT BOOKINGS
  // ==========================================
  fetchBookingsAsync: async (): Promise<RetreatBooking[]> => {
    try {
      const res = await fetch('/api/bookings.php');
      if (res.ok) {
        const json = await res.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('assisi_db_bookings', JSON.stringify(json.data));
          }
          return json.data;
        }
      }
    } catch {}
    return DB.getBookings();
  },

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

  saveBooking: async (booking: Omit<RetreatBooking, 'id' | 'createdAt' | 'status'>): Promise<RetreatBooking> => {
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

    try {
      fetch('/api/bookings.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      }).catch(() => {});
    } catch {}

    return newEntry;
  },

  updateBookingStatus: (id: string, status: RetreatBooking['status']): RetreatBooking[] => {
    const list = DB.getBookings();
    const updated = list.map((item) => (item.id === id ? { ...item, status } : item));
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_bookings', JSON.stringify(updated));
    }

    try {
      fetch('/api/bookings.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      }).catch(() => {});
    } catch {}

    return updated;
  },

  deleteBooking: (id: string): RetreatBooking[] => {
    const list = DB.getBookings();
    const updated = list.filter((item) => item.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('assisi_db_bookings', JSON.stringify(updated));
    }

    try {
      fetch(`/api/bookings.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      }).catch(() => {});
    } catch {}

    return updated;
  },

  // Export to CSV
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
