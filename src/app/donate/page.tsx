import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

const DONATION_LINKS = {
  10: "https://buy.stripe.com/bJe14oe4783o57weyvfUQ04",
  20: "https://buy.stripe.com/cNicN60dhgzU9nMgGDfUQ03",
  30: "https://buy.stripe.com/14A5kEe473N8czYcqnfUQ02",
  custom: "https://buy.stripe.com/00weVe6BFerMgQeeyvfUQ00",
};

export const metadata: Metadata = {
  title: 'Donate',
  description: `Support ${siteConfig.masjidName} through your generous donations`,
};

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 py-20 md:py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-white rounded-full"></div>
        </div>

        {/* Decorative Mosque Silhouette Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Sadaqah Jariyah
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build the House of Allah <span className="text-amber-400">With Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4">
              Your donation helps us maintain the masjid, support programs, and serve the community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Donation Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Make a Donation</h2>
                <p className="text-amber-100 mt-1">Every dollar counts towards our mission</p>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                {/* Quick Amount Buttons */}
                <p className="text-center text-gray-600 mb-4 font-medium">Select a donation amount:</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <a
                    href={DONATION_LINKS[10]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 px-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-500 rounded-xl text-center font-bold text-xl text-green-700 hover:text-green-800 transition-all duration-200 transform hover:scale-105"
                  >
                    $10
                  </a>
                  <a
                    href={DONATION_LINKS[20]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 px-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-500 rounded-xl text-center font-bold text-xl text-green-700 hover:text-green-800 transition-all duration-200 transform hover:scale-105"
                  >
                    $20
                  </a>
                  <a
                    href={DONATION_LINKS[30]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 px-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-500 rounded-xl text-center font-bold text-xl text-green-700 hover:text-green-800 transition-all duration-200 transform hover:scale-105"
                  >
                    $30
                  </a>
                </div>

                {/* Custom Amount Button */}
                <a
                  href={DONATION_LINKS.custom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 px-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-bold rounded-2xl text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Give a Different Amount
                  </span>
                </a>
              </div>

              {/* Secure Payment Badge */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure payment powered by Stripe
                </div>
              </div>
            </div>

            {/* Quran Verse */}
            <div className="mt-12 text-center">
              <blockquote className="text-lg md:text-xl text-gray-600 italic mb-3">
                &quot;The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes; in each spike is a hundred grains.&quot;
              </blockquote>
              <cite className="text-green-700 font-semibold">— Surah Al-Baqarah, 2:261</cite>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tax Deductible</h3>
              <p className="text-gray-600 text-sm">
                All donations are tax-deductible. You&apos;ll receive a receipt for your records.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Recurring Giving</h3>
              <p className="text-gray-600 text-sm">
                Set up monthly donations to provide consistent support for our programs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Impact</h3>
              <p className="text-gray-600 text-sm">
                Your donations directly support masjid operations and community programs.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Questions about donations? Contact us at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-green-700 hover:underline font-medium">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
