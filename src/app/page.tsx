import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import PrayerTimesSection from '@/components/PrayerTimesSection';
import ProgramCard from '@/components/ProgramCard';
import EventCard from '@/components/EventCard';
import { siteConfig } from '@/data/siteConfig';

export default function HomePage() {
  const upcomingEvents = siteConfig.events
    .filter((event) => new Date(event.date) >= new Date())
    .slice(0, 3);

  const featuredPrograms = siteConfig.programs.slice(0, 3);

  return (
    <div className="-mt-20">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Prayer Times Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-heading">Today&apos;s Prayer Times</h2>
            <p className="section-subheading mx-auto">Join us for daily prayers at the masjid</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <PrayerTimesSection />
          </div>
          <div className="text-center mt-8">
            <Link href="/prayer-times" className="btn-outline">
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <h2 className="section-heading">Our Programs</h2>
              <p className="section-subheading">Educational and spiritual programs for all ages</p>
            </div>
            <Link href="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
          <div className="grid gap-6">
            {featuredPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
              <div>
                <h2 className="section-heading">Upcoming Events</h2>
                <p className="section-subheading">Join us for community gatherings and special events</p>
              </div>
              <Link href="/events" className="btn-primary">
                View All Events
              </Link>
            </div>
            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Donate CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Your Masjid</h2>
          <p className="text-lg text-accent-100 mb-8 max-w-2xl mx-auto">
            Your generous donations help us maintain the masjid, provide educational programs, and serve the community. Every contribution makes a difference.
          </p>
          <Link href="/donate" className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Donate Now
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Visit Al-Ihsan Islamic Center</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">Join our growing community for prayer, learning, and brotherhood</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Address Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Location</h3>
              <p className="text-green-100">
                {siteConfig.address.line1}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Get In Touch</h3>
              <p className="text-green-100">
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-amber-400 transition-colors">{siteConfig.contact.phone}</a><br />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-400 transition-colors">{siteConfig.contact.email}</a>
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Open Hours</h3>
              <p className="text-green-100">
                Open for all 5 daily prayers<br />
                Office: Mon-Fri 10AM-6PM
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Directions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
