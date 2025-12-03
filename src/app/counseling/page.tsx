import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Counseling Services',
  description: `Faith-based counseling services at ${siteConfig.masjidName}`,
};

export default function CounselingPage() {
  const { counseling, contact } = siteConfig;

  return (
    <>
      <PageHeader
        title="Counseling Services"
        description="Confidential, faith-based support for individuals and families."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          {/* Main Description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{counseling.description}</p>
          </div>

          {/* Services Grid */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Marriage Counseling',
                  description: 'Support for couples navigating challenges in their relationship with Islamic guidance.',
                  icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                },
                {
                  title: 'Family Counseling',
                  description: 'Helping families strengthen their bonds and resolve conflicts with compassion.',
                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                },
                {
                  title: 'Individual Support',
                  description: 'Personal guidance for life challenges, stress, anxiety, and personal development.',
                  icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                },
                {
                  title: 'Pre-Marital Counseling',
                  description: 'Preparation for engaged couples to build a strong foundation for marriage.',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                },
                {
                  title: 'Grief & Loss Support',
                  description: 'Compassionate support for those dealing with loss and bereavement.',
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                },
                {
                  title: 'Spiritual Guidance',
                  description: 'Help with faith-related questions, doubts, and spiritual growth.',
                  icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Confidentiality Notice */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Confidentiality Guaranteed</h3>
                  <p className="text-gray-600">
                    All counseling sessions are completely confidential. We respect your privacy and create a safe space for you to share openly. Our counselors are bound by professional ethics and Islamic principles of trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Schedule a Session</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {counseling.contactEmail && (
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-primary-100 mb-1">Email</p>
                    <a href={`mailto:${counseling.contactEmail}`} className="font-medium hover:underline">
                      {counseling.contactEmail}
                    </a>
                  </div>
                )}

                {counseling.contactPhone && (
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-sm text-primary-100 mb-1">Phone</p>
                    <a href={`tel:${counseling.contactPhone}`} className="font-medium hover:underline">
                      {counseling.contactPhone}
                    </a>
                  </div>
                )}
              </div>

              {counseling.availableHours && (
                <div className="text-center">
                  <p className="text-sm text-primary-100 mb-1">Available Hours</p>
                  <p className="font-medium">{counseling.availableHours}</p>
                </div>
              )}

              {!counseling.contactEmail && !counseling.contactPhone && (
                <div className="text-center">
                  <p className="mb-4">Contact us to schedule an appointment:</p>
                  <a href={`mailto:${contact.email}?subject=Counseling Inquiry`} className="btn-accent">
                    Contact Us
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
