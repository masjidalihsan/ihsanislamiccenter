'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

const CONTACT_EMAIL = "mhmursal@gmail.com";

export default function UmrahPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    adults: '1',
    children: '0',
    passportReady: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Umrah Registration - ${formData.fullName}`;
    const body = `
UMRAH TRIP REGISTRATION
========================

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Number of Adults: ${formData.adults}
Number of Children: ${formData.children}

Passport Ready: ${formData.passportReady === 'yes' ? 'Yes' : 'No'}

Additional Message:
${formData.message || 'N/A'}

========================
Submitted from Al-Ihsan Islamic Center Website
    `.trim();

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Limited Spots Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              VIP Umrah <span className="text-amber-400">2026</span>
            </h1>
            <p className="text-xl text-green-100 mb-4">January 17-30, 2026 | Meccah & Madinah</p>
            <p className="text-2xl font-bold text-amber-400">From $2,800 per person</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Left - Trip Details & Flyer */}
            <div>
              {/* Flyer Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="/umrah-event.jpg"
                  alt="VIP Umrah Trip 2026"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              {/* Package Includes */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Package Includes:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '✈️', text: 'Round-trip Flight' },
                    { icon: '🏨', text: '5-Star Hotels' },
                    { icon: '📋', text: 'Visa Processing' },
                    { icon: '🚌', text: 'All Transfers' },
                    { icon: '🕌', text: '7 Nights Meccah' },
                    { icon: '🕋', text: '3 Nights Madinah' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Questions? Contact Us:</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Sh. Mohamed Mursal:</strong> <a href="tel:+16518083584" className="text-green-700 hover:underline">(651) 808-3584</a></p>
                  <p><strong>Ahmed Anshur:</strong> <a href="tel:+16517069933" className="text-green-700 hover:underline">(651) 706-9933</a></p>
                  <p><strong>Sh. Ise Abdi:</strong> <a href="tel:+16122428944" className="text-green-700 hover:underline">(612) 242-8944</a></p>
                </div>
              </div>
            </div>

            {/* Right - Registration Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
                  <h2 className="text-2xl font-bold text-white">Register Your Interest</h2>
                  <p className="text-amber-100">Fill out the form below and we&apos;ll contact you</p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Client Opened!</h3>
                    <p className="text-gray-600 mb-4">Please send the email to complete your registration.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-green-700 hover:underline font-medium"
                    >
                      Submit another registration
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="(XXX) XXX-XXXX"
                      />
                    </div>

                    {/* Number of Travelers */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adults
                        </label>
                        <select
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Children
                        </label>
                        <select
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        >
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Passport Ready */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Do you have a valid passport?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="passportReady"
                            value="yes"
                            checked={formData.passportReady === 'yes'}
                            onChange={handleChange}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="passportReady"
                            value="no"
                            checked={formData.passportReady === 'no'}
                            onChange={handleChange}
                            className="w-4 h-4 text-green-600 focus:ring-green-500"
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                        placeholder="Any questions or special requests?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Register Now
                    </button>

                    <p className="text-center text-sm text-gray-500">
                      By registering, you&apos;ll receive trip details and payment information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
