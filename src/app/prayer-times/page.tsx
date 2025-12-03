import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PrayerTimesSection from '@/components/PrayerTimesSection';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Prayer Times',
  description: `Daily prayer times and Jumu'ah schedule at ${siteConfig.masjidName}`,
};

export default function PrayerTimesPage() {
  return (
    <>
      <PageHeader
        title="Prayer Times"
        description="Join us for daily prayers at the masjid. All times listed are iqamah times."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <PrayerTimesSection />
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Important Notes
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Please arrive 5-10 minutes before iqamah time</li>
                <li>Maghrib iqamah is called shortly after sunset</li>
                <li>Prayer times adjust seasonally</li>
                <li>Check our social media for any schedule changes</li>
              </ul>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z" />
                  <path d="M12 16C8 16 4 18 4 22H20C20 18 16 16 12 16Z" />
                </svg>
                Jumu&apos;ah Prayer
              </h3>
              <p className="text-gray-600 mb-3">
                Join us every Friday for Jumu&apos;ah prayer. We offer multiple prayer times to accommodate the community.
              </p>
              <ul className="text-gray-600 space-y-1">
                {siteConfig.prayerTimes.jumuah.map((jumuah, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{jumuah.khateeb}</span>
                    <span className="font-medium">{jumuah.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
