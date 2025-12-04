import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Prayer Times',
  description: `Daily prayer times and Jumu'ah schedule at ${siteConfig.masjidName}`,
};

export default function PrayerTimesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Prayer Times
            </h1>
            <p className="text-xl text-green-100">
              Join us for daily prayers at Al-Ihsan Islamic Center
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Times Widget Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Masjidal Widget */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://timing.athanplus.com/masjid/widgets/embed?theme=1&masjid_id=EdoeO9L7"
                width="100%"
                height="560"
                style={{ border: 'none' }}
                className="w-full"
                title="Prayer Times"
              />
            </div>

            {/* Additional Info */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Important Notes
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Please arrive 5-10 minutes before iqamah time</li>
                  <li>• Maghrib iqamah is called shortly after sunset</li>
                  <li>• Prayer times adjust seasonally</li>
                  <li>• Check our social media for any schedule changes</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Jumu&apos;ah Prayer
                </h3>
                <p className="text-gray-600 mb-3">
                  Join us every Friday for Jumu&apos;ah prayer.
                </p>
                <div className="bg-amber-50 rounded-lg p-4">
                  {siteConfig.prayerTimes.jumuah.map((jumuah, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{jumuah.khateeb}</span>
                      <span className="font-bold text-amber-700 text-lg">{jumuah.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="mt-6 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-green-100">
                    {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
