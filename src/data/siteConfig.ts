export interface PrayerTime {
  iqamah: string;
  adhan: string;
}

export interface JumuahTime {
  time: string;
  khateeb: string;
}

export interface Program {
  title: string;
  description: string;
  day: string;
  time: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface Event {
  title: string;
  date: string;
  time: string;
  description: string;
  location?: string;
  image?: string;
}

export interface SiteConfig {
  masjidName: string;
  shortDescription: string;
  longDescription?: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
  };
  contact: {
    phone: string;
    email: string;
    fax?: string;
  };
  colors: {
    primary: string;
    accent: string;
  };
  social: {
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
    instagram?: string;
    twitter?: string;
    telegram?: string;
  };
  prayerTimes: {
    fajr: PrayerTime;
    dhuhr: PrayerTime;
    asr: PrayerTime;
    maghrib: PrayerTime;
    isha: PrayerTime;
    jumuah: JumuahTime[];
  };
  programs: Program[];
  donationLinks: {
    general: string;
    zakat?: string;
    sadaqah?: string;
    construction?: string;
    scholarship?: string;
  };
  leadership: LeadershipMember[];
  ramadan: {
    taraweehStartTime: string;
    iftarTime?: string;
    suhoorEndTime?: string;
    specialNotes: string;
  };
  events: Event[];
  youth: {
    description: string;
    programs?: Program[];
  };
  counseling: {
    description: string;
    contactEmail?: string;
    contactPhone?: string;
    availableHours?: string;
  };
  about?: {
    mission?: string;
    vision?: string;
    history?: string;
  };
}

export const siteConfig: SiteConfig = {
  masjidName: "Al-Ihsan Islamic Center",
  shortDescription: "A welcoming home for prayer, learning, and community growth.",
  longDescription: "Masjid Ihsan Islamic Center is dedicated to serving the Muslim community through daily prayers, comprehensive Islamic education, youth development, and community support services. We strive to create an environment where individuals and families can grow spiritually and build meaningful connections.",
  address: {
    line1: "955 W Minnehaha Ave",
    city: "St Paul",
    state: "MN",
    zip: "55104"
  },
  contact: {
    phone: "(651) 207-5518",
    email: "Alihsan.ic@gmail.com"
  },
  colors: {
    primary: "#065f46",
    accent: "#d4af37"
  },
  social: {
    facebook: "https://www.facebook.com/share/1LNsz3E5E2/?mibextid=wwXIfr",
    youtube: "#",
    instagram: "#"
  },
  prayerTimes: {
    fajr: { iqamah: "6:00 AM", adhan: "5:45 AM" },
    dhuhr: { iqamah: "1:30 PM", adhan: "1:15 PM" },
    asr: { iqamah: "3:45 PM", adhan: "3:30 PM" },
    maghrib: { iqamah: "4:45 PM", adhan: "4:35 PM" },
    isha: { iqamah: "6:30 PM", adhan: "6:15 PM" },
    jumuah: [
      { time: "1:00 PM", khateeb: "Imam" }
    ]
  },
  programs: [
    {
      title: "Weekend Quran School",
      description: "Structured Quran and Islamic studies for children.",
      day: "Saturday & Sunday",
      time: "10:00 AM - 1:00 PM"
    },
    {
      title: "Youth Halaqah & Activities",
      description: "Weekly halaqah, sports, and mentoring for youth.",
      day: "Friday",
      time: "7:00 PM"
    },
    {
      title: "Sisters' Halaqah",
      description: "Learning, reflection, and sisterhood.",
      day: "Sunday",
      time: "11:00 AM"
    },
    {
      title: "Adult Tajweed Class",
      description: "Adult Quran recitation and tajweed class.",
      day: "Wednesday",
      time: "7:30 PM"
    }
  ],
  donationLinks: {
    general: "#",
    zakat: "#",
    sadaqah: "#",
    construction: "#"
  },
  leadership: [
    {
      name: "Imam Name",
      role: "Imam"
    },
    {
      name: "Brother One",
      role: "President"
    },
    {
      name: "Brother Two",
      role: "Board Member"
    }
  ],
  ramadan: {
    taraweehStartTime: "After Isha",
    specialNotes: "Community iftar every weekend, nightly taraweeh."
  },
  events: [
    {
      title: "VIP Umrah Trip - January 2026",
      date: "2026-01-17",
      time: "January 17-30, 2026",
      description: "Join Al-Ihsan Islamic Center for an unforgettable VIP Umrah experience! 7 nights in Meccah, 3 nights in Madinah. Package includes flight, 5-star hotel, visa, and transfers. Price from $2,800 per person. Contact: Sh. Mohamed Mursal (651) 808-3584, Ahmed Anshur (651) 706-9933, or Sh. Ise Abdi (612) 242-8944.",
      location: "Meccah & Madinah, Saudi Arabia",
      image: "/umrah-event.jpg"
    },
    {
      title: "Al-Ihsan Machad & Qur'an Graduation - Class of 2025",
      date: "2025-12-14",
      time: "2:00 PM – 6:00 PM",
      description: "Celebrating the achievements of our Machad and Qur'an students! A day to honor their hard work, dedication, and the blessings of learning the Book of Allah. Join us as we recognize their journey and encourage the next generation of seekers of knowledge.",
      location: "Wilder, St. Paul, MN",
      image: "/graduation-event.png"
    },
    {
      title: "Community Iftar",
      date: "2025-03-15",
      time: "Maghrib",
      description: "Join us for community iftar during Ramadan.",
      location: "Main Hall"
    }
  ],
  youth: {
    description: "Empowering the next generation of Muslim leaders through faith, knowledge, and brotherhood. Join our vibrant youth community for inspiring discussions, meaningful connections, and spiritual growth.",
    programs: [
      {
        title: "Youth Halaqah",
        description: "A weekly gathering for young Muslims to explore their faith, discuss relevant topics, build lasting friendships, and grow together as a community. Activities include Islamic discussions, Q&A sessions, team activities, and more!",
        day: "Sunday",
        time: "6:30 PM – 8:30 PM"
      }
    ]
  },
  counseling: {
    description: "Confidential, faith-based counseling sessions available by appointment.",
    contactEmail: "Alihsan.ic@gmail.com"
  },
  about: {
    mission: "To provide a welcoming space for worship, education, and community building rooted in Islamic values.",
    vision: "To nurture a vibrant Muslim community where every individual can grow in faith, knowledge, and service."
  }
};

export default siteConfig;
