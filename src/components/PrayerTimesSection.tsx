import { siteConfig } from '@/data/siteConfig';

interface PrayerTimesSectionProps {
  compact?: boolean;
}

const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as const;
const prayerLabels: Record<typeof prayers[number], string> = {
  fajr: 'Fajr',
  dhuhr: 'Dhuhr',
  asr: 'Asr',
  maghrib: 'Maghrib',
  isha: 'Isha',
};

const prayerIcons: Record<typeof prayers[number], JSX.Element> = {
  fajr: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  dhuhr: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  asr: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  maghrib: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  isha: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
};

export default function PrayerTimesSection({ compact = false }: PrayerTimesSectionProps) {
  const { prayerTimes } = siteConfig;

  if (compact) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {prayers.map((prayer) => (
          <div key={prayer} className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-primary-700 mb-2 flex justify-center">
              {prayerIcons[prayer]}
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">{prayerLabels[prayer]}</h4>
            <p className="text-primary-700 font-bold">{prayerTimes[prayer].iqamah}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white p-6">
        <h2 className="text-2xl font-bold">Daily Prayer Times</h2>
        <p className="text-primary-100 mt-1">Iqamah times for today</p>
      </div>

      {/* Prayer Times Table */}
      <div className="divide-y divide-gray-100">
        {prayers.map((prayer) => (
          <div key={prayer} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700">
                {prayerIcons[prayer]}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{prayerLabels[prayer]}</h3>
                <p className="text-sm text-gray-500">Adhan: {prayerTimes[prayer].adhan}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-primary-700">{prayerTimes[prayer].iqamah}</span>
              <p className="text-sm text-gray-500">Iqamah</p>
            </div>
          </div>
        ))}
      </div>

      {/* Jumuah Section */}
      <div className="border-t-4 border-accent-500 bg-accent-50 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z" />
            <path d="M12 16C8 16 4 18 4 22H20C20 18 16 16 12 16Z" />
          </svg>
          Jumu&apos;ah (Friday Prayer)
        </h3>
        <div className="grid gap-3">
          {prayerTimes.jumuah.map((jumuah, index) => (
            <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
              <div>
                <span className="text-sm text-gray-600">Khateeb:</span>
                <p className="font-medium text-gray-900">{jumuah.khateeb}</p>
              </div>
              <span className="text-lg font-bold text-accent-600">{jumuah.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
