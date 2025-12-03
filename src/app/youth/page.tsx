import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Youth Programs',
  description: `Youth activities and programs at ${siteConfig.masjidName}`,
};

export default function YouthPage() {
  const { youth, contact } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 py-20 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-white rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-white rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Building Tomorrow&apos;s Leaders
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Youth <span className="text-amber-400">Halaqah</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
              {youth.description}
            </p>

            {/* Schedule Highlight */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-amber-300 font-semibold text-lg">Every Sunday</p>
                  <p className="text-white text-2xl font-bold">6:30 PM – 8:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          {/* Program Details Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">What to Expect</h2>
                <p className="text-green-100">Join us for an evening of growth, connection, and fun!</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: '📖', title: 'Islamic Discussions', desc: 'Engaging topics relevant to young Muslims today' },
                    { icon: '🤝', title: 'Brotherhood & Sisterhood', desc: 'Build lasting friendships in a positive environment' },
                    { icon: '❓', title: 'Q&A Sessions', desc: 'Get your questions answered in a safe space' },
                    { icon: '🎮', title: 'Team Activities', desc: 'Fun games and activities to build community' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Join Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Join Our Youth Program?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Strengthen Your Faith',
                  description: 'Deepen your understanding of Islam through interactive learning and meaningful discussions.',
                  color: 'from-green-500 to-emerald-600',
                  icon: '🕌',
                },
                {
                  title: 'Find Your Community',
                  description: 'Connect with like-minded Muslim youth who share your values and support your journey.',
                  color: 'from-blue-500 to-indigo-600',
                  icon: '👥',
                },
                {
                  title: 'Grow as a Leader',
                  description: 'Develop confidence, public speaking skills, and the ability to make a positive impact.',
                  color: 'from-amber-500 to-orange-600',
                  icon: '⭐',
                },
                {
                  title: 'Navigate Challenges',
                  description: 'Learn how to face modern challenges while staying true to your Islamic identity.',
                  color: 'from-purple-500 to-violet-600',
                  icon: '🧭',
                },
                {
                  title: 'Have Fun!',
                  description: 'Enjoy games, activities, and events in a halal and welcoming environment.',
                  color: 'from-pink-500 to-rose-600',
                  icon: '🎉',
                },
                {
                  title: 'Make Memories',
                  description: 'Create unforgettable experiences and friendships that will last a lifetime.',
                  color: 'from-teal-500 to-cyan-600',
                  icon: '📸',
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-white rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 border-4 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join?</h3>
                <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
                  Come as you are! All youth are welcome to join us every Sunday. Bring a friend and be part of something amazing.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${contact.email}?subject=Youth Halaqah Inquiry`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border-2 border-white/30 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
