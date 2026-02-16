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

// =====================================================
// SAMAHA ISLAMIC CENTER - SHAKOPEE, MINNESOTA
// =====================================================

export const siteConfig: SiteConfig = {
  masjidName: "Samaha Islamic Center",
  shortDescription: "A welcoming home for prayer, learning, and community growth in Shakopee, Minnesota.",
  longDescription: "Samaha Islamic Center promotes an educational setting that supports the Islamic community spiritually and physically, valuing individuals' rights and values, and collaborating with other communities for peace and coexistence. We ensure that we meet the needs of the local community by promoting education. Whether you want to come in for a moment of spiritual reflection or taking part in our programs, you will be welcomed by the Samaha team.",
  
  address: {
    line1: "214 Holmes St S",
    city: "Shakopee",
    state: "MN",
    zip: "55379"
  },
  
  contact: {
    phone: "(612) 478-2838",
    email: "masjidsamahacenter@gmail.com"
  },
  
  // Purple + Orange - Samaha brand colors
  colors: {
    primary: "#7c3aed",  // Purple - from their logo
    accent: "#f59e0b"    // Orange/Gold - from their logo
  },
  
  social: {
    facebook: "https://www.facebook.com/p/Samaha-Islamic-Center-100075825926737/",
    instagram: "https://www.instagram.com/samahacenter/",
    youtube: "https://youtube.com/@samahaislamiccenter4678",
    tiktok: "https://tiktok.com/@samahaislamiccenter"
  },
  
  prayerTimes: {
    fajr: { iqamah: "6:30 AM", adhan: "6:00 AM" },
    dhuhr: { iqamah: "1:30 PM", adhan: "1:15 PM" },
    asr: { iqamah: "4:30 PM", adhan: "4:15 PM" },
    maghrib: { iqamah: "5:45 PM", adhan: "5:35 PM" },
    isha: { iqamah: "7:30 PM", adhan: "7:15 PM" },
    jumuah: [
      { time: "1:30 PM", khateeb: "Imam" }
    ]
  },
  
  programs: [
    {
      title: "Quran Studies",
      description: "Structured Quran recitation and memorization classes for all ages.",
      day: "Saturday & Sunday",
      time: "10:00 AM - 1:00 PM"
    },
    {
      title: "Islamic Education",
      description: "Learn about Islamic principles, history, and values.",
      day: "Sunday",
      time: "11:00 AM"
    },
    {
      title: "Youth Program",
      description: "Activities and learning for young Muslims to build faith and community.",
      day: "Friday",
      time: "After Maghrib"
    },
    {
      title: "Sisters' Circle",
      description: "Weekly gathering for sisters to learn, reflect, and connect.",
      day: "Saturday",
      time: "2:00 PM"
    }
  ],
  
  donationLinks: {
    general: "#",  // TODO: Add payment link
    zakat: "#",
    sadaqah: "#"
  },
  
  leadership: [
    {
      name: "Imam",
      role: "Imam & Religious Director"
    },
    {
      name: "Board President",
      role: "President"
    }
  ],
  
  ramadan: {
    taraweehStartTime: "After Isha",
    specialNotes: "Community iftar available during Ramadan. Taraweeh prayers held nightly. Join us for a blessed month!"
  },
  
  events: [
    {
      title: "Community Reminder: Faith, Strength & Family",
      date: "2026-01-01",
      time: "5:00 PM",
      description: "Featuring Dr. Khadar Biihi (Community Educator), Jaylani Hussein (Executive Director, CAIR MN), and Yussuf Abdille (Director, IANA). Topics: Stay strong in difficult times, Faith through current challenges, Raising righteous children, Protecting our values.",
      location: "214 Holmes St S, Shakopee"
    },
    {
      title: "Ramadan 2026 - First Taraweeh",
      date: "2026-02-28",
      time: "After Isha",
      description: "Join us for the first night of Taraweeh prayers as we welcome the blessed month of Ramadan. Community iftar will be served.",
      location: "Samaha Islamic Center"
    },
    {
      title: "Daily Iftar - Ramadan",
      date: "2026-03-01",
      time: "Maghrib",
      description: "Join us every evening during Ramadan for community iftar. Bring your family and break your fast together with the community.",
      location: "Main Hall"
    },
    {
      title: "Laylatul Qadr Program",
      date: "2026-03-22",
      time: "After Isha",
      description: "Special night program for the last 10 nights of Ramadan. Join us for extended prayers, Quran recitation, and dua.",
      location: "Main Prayer Hall"
    },
    {
      title: "Eid ul-Fitr Prayer",
      date: "2026-03-30",
      time: "8:00 AM",
      description: "Eid prayer followed by community celebration. Bring your family for prayers, food, and festivities!",
      location: "Samaha Islamic Center"
    },
    {
      title: "Community Gathering & Discussion",
      date: "2026-04-15",
      time: "5:00 PM",
      description: "Monthly community gathering with guest speakers, local masjid announcements, discussion, and dinner for all families.",
      location: "Samaha Islamic Center"
    }
  ],
  
  youth: {
    description: "Empowering the next generation of Muslim leaders through faith, knowledge, and community. Our youth programs focus on building strong Islamic identity while developing leadership skills.",
    programs: [
      {
        title: "Youth Halaqah",
        description: "Weekly gathering for young Muslims to learn, discuss, and grow together.",
        day: "Friday",
        time: "After Maghrib"
      }
    ]
  },
  
  counseling: {
    description: "Confidential, faith-based support available for community members. Our team is here to help with spiritual guidance and family matters.",
    contactEmail: "alaminmasjid2019@gmail.com",
    contactPhone: "(612) 478-2838"
  },
  
  about: {
    mission: "To promote an educational setting that supports the Islamic community spiritually and physically, valuing individuals' rights and values, and collaborating with other communities for peace and coexistence.",
    vision: "To be a welcoming center where Muslims can strengthen their faith, educate their families, and contribute positively to the broader Shakopee community.",
    history: "Samaha Islamic Center serves the growing Muslim community in Shakopee and surrounding areas of Minnesota, providing a space for worship, learning, and community connection."
  }
};

export default siteConfig;
