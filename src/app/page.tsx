'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import QuickLinksGrid from '@/components/QuickLinksGrid';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PrayerTimesSection from '@/components/PrayerTimesSection';
import ProgramCard from '@/components/ProgramCard';
import EventCard from '@/components/EventCard';
import { siteConfig } from '@/data/siteConfig';

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function HomePage() {
  const upcomingEvents = siteConfig.events
    .filter((event) => new Date(event.date) >= new Date())
    .slice(0, 3);

  const featuredPrograms = siteConfig.programs.slice(0, 3);

  const prayerSection = useScrollReveal();
  const programsSection = useScrollReveal();
  const eventsSection = useScrollReveal();
  const donateSection = useScrollReveal();
  const contactSection = useScrollReveal();

  return (
    <div className="-mt-20">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Links Grid */}
      <QuickLinksGrid />

      {/* Stats/Impact Section */}
      <StatsSection />

      {/* Prayer Times Section */}
      <section
        ref={prayerSection.ref}
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-50 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${prayerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full text-sky-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Daily Schedule
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Today&apos;s <span className="text-sky-600">Prayer Times</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for daily prayers at the masjid
            </p>
          </div>

          <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${prayerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <PrayerTimesSection />
            </div>
          </div>

          <div className={`text-center mt-10 transition-all duration-700 delay-300 ${prayerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/prayer-times"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Full Schedule
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        ref={programsSection.ref}
        className="py-24 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container-custom relative z-10">
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 transition-all duration-700 ${programsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Learning & Growth
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-violet-600">Programs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-xl">
                Educational and spiritual programs for all ages
              </p>
            </div>
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View All Programs
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6">
            {featuredPrograms.map((program, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${programsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <ProgramCard program={program} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section
          ref={eventsSection.ref}
          className="py-24 bg-white relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="container-custom relative z-10">
            <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 transition-all duration-700 ${eventsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Mark Your Calendar
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Upcoming <span className="text-purple-600">Events</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-xl">
                  Join us for community gatherings and special events
                </p>
              </div>
              <Link
                href="/events"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View All Events
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${eventsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-gray-100">
                    <EventCard event={event} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Donate CTA Section */}
      <section
        ref={donateSection.ref}
        className="py-24 relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600">
          <div className="absolute inset-0 gradient-hero opacity-20" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/20 rounded-full animate-float-slow" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-custom relative z-10">
          <div className={`text-center transition-all duration-700 ${donateSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Make a Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Support Your Masjid
            </h2>
            <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
              Your generous donations help us maintain the masjid, provide educational programs, and serve the community. Every contribution makes a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-amber-600 font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Donate Now
              </Link>
              <Link
                href="/donate#zakat"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 text-lg"
              >
                Pay Zakat
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Visit Section */}
      <section
        ref={contactSection.ref}
        className="py-24 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
          <div className="absolute inset-0 opacity-20 gradient-hero" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="container-custom relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Visit Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Come Visit <span className="gradient-text">{siteConfig.masjidName}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our growing community for prayer, learning, and brotherhood
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Address Card */}
            <div
              className={`group transition-all duration-700 ${contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="glass rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Location</h3>
                <p className="text-gray-300">
                  {siteConfig.address.line1}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div
              className={`group transition-all duration-700 ${contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="glass rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Get In Touch</h3>
                <p className="text-gray-300">
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-amber-400 transition-colors">{siteConfig.contact.phone}</a><br />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-400 transition-colors">{siteConfig.contact.email}</a>
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className={`group transition-all duration-700 ${contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="glass rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Open Hours</h3>
                <p className="text-gray-300">
                  Open for all 5 daily prayers<br />
                  Office: Mon-Fri 10AM-6PM
                </p>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              Get Directions
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
