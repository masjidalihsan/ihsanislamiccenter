import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import RamadanCountdown from '@/components/RamadanCountdown';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Ramadan',
  description: `Ramadan programs and schedule at ${siteConfig.masjidName}`,
};

export default function RamadanPage() {
  const { ramadan, prayerTimes } = siteConfig;

  return (
    <>
      <PageHeader
        title="Ramadan Programs"
        description="Join us for a blessed Ramadan filled with worship, community, and spiritual growth."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          {/* Ramadan Countdown */}
          <RamadanCountdown />

          {/* Welcome Message */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block p-4 bg-accent-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z" />
                <path d="M12 16C8 16 4 18 4 22H20C20 18 16 16 12 16Z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ramadan Mubarak!</h2>
            <p className="text-lg text-gray-600">{ramadan.specialNotes}</p>
          </div>

          {/* Schedule Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {/* Iftar Time */}
            {ramadan.iftarTime && (
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Iftar Time</h3>
                <p className="text-2xl font-bold">{ramadan.iftarTime}</p>
                <p className="text-orange-100 text-sm mt-2">Break your fast with the community</p>
              </div>
            )}

            {/* Taraweeh */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Taraweeh Prayer</h3>
              <p className="text-2xl font-bold">{ramadan.taraweehStartTime}</p>
              <p className="text-primary-100 text-sm mt-2">Nightly prayers during Ramadan</p>
            </div>

            {/* Suhoor */}
            {ramadan.suhoorEndTime && (
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Suhoor Ends</h3>
                <p className="text-2xl font-bold">{ramadan.suhoorEndTime}</p>
                <p className="text-indigo-100 text-sm mt-2">Last time to eat before Fajr</p>
              </div>
            )}
          </div>

          {/* Prayer Times During Ramadan */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Prayer Schedule</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-5 divide-x divide-gray-100">
                {(['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as const).map((prayer) => (
                  <div key={prayer} className="p-4 text-center">
                    <h4 className="font-semibold text-gray-900 capitalize mb-1">{prayer}</h4>
                    <p className="text-primary-700 font-bold">{prayerTimes[prayer].iqamah}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Programs During Ramadan */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ramadan Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Daily Quran Recitation
                </h3>
                <p className="text-gray-600">Complete recitation of the Quran during Taraweeh prayers throughout the month.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Community Iftars
                </h3>
                <p className="text-gray-600">Daily iftar meals at the masjid. Sponsor an iftar for the community!</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Last 10 Nights I&apos;tikaf
                </h3>
                <p className="text-gray-600">Dedicated space for brothers and sisters to perform I&apos;tikaf during the last 10 nights.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Kids&apos; Ramadan Program
                </h3>
                <p className="text-gray-600">Special activities and programs for children during Ramadan.</p>
              </div>
            </div>
          </div>

          {/* Donate CTA */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-accent-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Ramadan Programs</h3>
              <p className="text-gray-600 mb-6">
                Your donations help provide iftars, support our programs, and assist those in need during this blessed month.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/donate" className="btn-accent">
                  Donate Now
                </Link>
                <a href={`mailto:${siteConfig.contact.email}?subject=Iftar Sponsorship`} className="btn-outline">
                  Sponsor an Iftar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
