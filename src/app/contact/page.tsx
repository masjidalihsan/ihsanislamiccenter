import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${siteConfig.masjidName}`,
};

export default function ContactPage() {
  const { address, contact, social } = siteConfig;

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We would love to hear from you. Reach out with any questions or inquiries."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <address className="not-italic text-gray-600">
                      {address.line1}<br />
                      {address.line2 && <>{address.line2}<br /></>}
                      {address.city}, {address.state} {address.zip}
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${contact.phone}`} className="text-primary-700 hover:underline">
                      {contact.phone}
                    </a>
                    {contact.fax && (
                      <p className="text-gray-600 text-sm mt-1">Fax: {contact.fax}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${contact.email}`} className="text-primary-700 hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 10:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed (Open for programs)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {social.facebook && (
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-700 hover:bg-primary-800 text-white rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                      </svg>
                    </a>
                  )}
                  {social.instagram && (
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-700 hover:bg-primary-800 text-white rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.16c3.2,0,3.58.01,4.85.07,1.17.05,1.8.25,2.23.41.56.22.96.48,1.38.9s.68.82.9,1.38c.16.43.35,1.06.41,2.23.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.05,1.17-.25,1.8-.41,2.23-.22.56-.48.96-.9,1.38s-.82.68-1.38.9c-.43.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.43-.35-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68,1.38-.9c.43-.16,1.06-.35,2.23-.41,1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33.01,7.05.07,5.78.13,4.9.33,4.14.63c-.78.3-1.45.71-2.11,1.38S.93,3.36.63,4.14C.33,4.9.13,5.78.07,7.05.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.06,1.27.26,2.15.56,2.91.3.78.71,1.45,1.38,2.11s1.33,1.08,2.11,1.38c.76.29,1.64.5,2.91.56C8.33,23.99,8.74,24,12,24s3.67-.01,4.95-.07c1.27-.06,2.15-.26,2.91-.56.78-.3,1.45-.71,2.11-1.38s1.08-1.33,1.38-2.11c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.45-1.38-2.11s-1.33-1.08-2.11-1.38c-.76-.29-1.64-.5-2.91-.56C15.67.01,15.26,0,12,0Z" />
                        <path d="M12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z" />
                        <circle cx="18.41" cy="5.59" r="1.44" />
                      </svg>
                    </a>
                  )}
                  {social.youtube && (
                    <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-700 hover:bg-primary-800 text-white rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.57,31.57,0,0,0,0,12a31.57,31.57,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.57,31.57,0,0,0,24,12,31.57,31.57,0,0,0,23.5,6.19ZM9.54,15.51V8.49L15.82,12Z" />
                      </svg>
                    </a>
                  )}
                  {social.whatsapp && (
                    <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-700 hover:bg-primary-800 text-white rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.47,6.53a8.46,8.46,0,0,0-13.33,10l-1.26,4.58,4.7-1.23a8.46,8.46,0,0,0,9.89-13.35ZM12,19.4A7,7,0,0,1,8.43,18.5l-.26-.15-2.67.7.71-2.6-.17-.27A7,7,0,1,1,12,19.4Z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder / Map */}
            <div>
              <div className="bg-gray-100 rounded-2xl p-8 h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  For general inquiries, please email us directly at{' '}
                  <a href={`mailto:${contact.email}`} className="text-primary-700 hover:underline font-medium">
                    {contact.email}
                  </a>
                </p>

                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Contacts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">General Inquiries:</span>
                      <a href={`mailto:${contact.email}`} className="text-primary-700 hover:underline">{contact.email}</a>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Counseling:</span>
                      <a href={`mailto:${siteConfig.counseling.contactEmail || contact.email}`} className="text-primary-700 hover:underline">
                        {siteConfig.counseling.contactEmail || contact.email}
                      </a>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Main Office:</span>
                      <a href={`tel:${contact.phone}`} className="text-primary-700 hover:underline">{contact.phone}</a>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-500 text-sm mt-6">
                  You can also visit us during office hours. We look forward to meeting you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
