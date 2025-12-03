import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.masjidName} - our mission, vision, and history`,
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <>
      <PageHeader
        title="About Us"
        description={siteConfig.shortDescription}
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          {/* Mission & Vision */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            {about?.mission && (
              <div className="bg-primary-50 rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">{about.mission}</p>
              </div>
            )}

            {about?.vision && (
              <div className="bg-accent-50 rounded-2xl p-8">
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">{about.vision}</p>
              </div>
            )}
          </div>

          {/* Long Description */}
          {siteConfig.longDescription && (
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{siteConfig.longDescription}</p>
            </div>
          )}

          {/* History */}
          {about?.history && (
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Our History
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{about.history}</p>
            </div>
          )}

          {/* Services Grid */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Daily Prayers', desc: 'Five daily prayers in congregation', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Islamic Education', desc: 'Quran classes and Islamic studies', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                { title: 'Youth Programs', desc: 'Activities for teens and young adults', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { title: 'Community Events', desc: 'Regular gatherings and celebrations', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { title: 'Counseling', desc: 'Faith-based guidance and support', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                { title: 'Funeral Services', desc: 'Janazah and burial arrangements', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-600 mb-6">
              We welcome everyone to be part of our community. Learn about our leadership team or get in touch with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/leadership" className="btn-primary">
                Meet Our Team
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
