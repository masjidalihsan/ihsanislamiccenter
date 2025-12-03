import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

const quickLinks = [
  { href: '/prayer-times', label: 'Prayer Times' },
  { href: '/programs', label: 'Programs' },
  { href: '/events', label: 'Events' },
  { href: '/donate', label: 'Donate' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const SocialIcon = ({ platform, url }: { platform: string; url: string }) => {
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.57,31.57,0,0,0,0,12a31.57,31.57,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.57,31.57,0,0,0,24,12,31.57,31.57,0,0,0,23.5,6.19ZM9.54,15.51V8.49L15.82,12Z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2.16c3.2,0,3.58.01,4.85.07,1.17.05,1.8.25,2.23.41.56.22.96.48,1.38.9s.68.82.9,1.38c.16.43.35,1.06.41,2.23.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.05,1.17-.25,1.8-.41,2.23-.22.56-.48.96-.9,1.38s-.82.68-1.38.9c-.43.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.43-.35-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68,1.38-.9c.43-.16,1.06-.35,2.23-.41,1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33.01,7.05.07,5.78.13,4.9.33,4.14.63c-.78.3-1.45.71-2.11,1.38S.93,3.36.63,4.14C.33,4.9.13,5.78.07,7.05.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.06,1.27.26,2.15.56,2.91.3.78.71,1.45,1.38,2.11s1.33,1.08,2.11,1.38c.76.29,1.64.5,2.91.56C8.33,23.99,8.74,24,12,24s3.67-.01,4.95-.07c1.27-.06,2.15-.26,2.91-.56.78-.3,1.45-.71,2.11-1.38s1.08-1.33,1.38-2.11c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.45-1.38-2.11s-1.33-1.08-2.11-1.38c-.76-.29-1.64-.5-2.91-.56C15.67.01,15.26,0,12,0Z" />
        <path d="M12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z" />
        <circle cx="18.41" cy="5.59" r="1.44" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.47,6.53a8.46,8.46,0,0,0-13.33,10l-1.26,4.58,4.7-1.23a8.46,8.46,0,0,0,9.89-13.35ZM12,19.4A7,7,0,0,1,8.43,18.5l-.26-.15-2.67.7.71-2.6-.17-.27A7,7,0,1,1,12,19.4Z" />
        <path d="M16.06,13.42c-.22-.11-1.3-.64-1.5-.71s-.35-.11-.5.11-.57.71-.7.86-.26.17-.48.06a6,6,0,0,1-1.78-1.1,6.67,6.67,0,0,1-1.23-1.53c-.13-.22,0-.34.1-.45s.22-.26.33-.39a1.54,1.54,0,0,0,.22-.37.41.41,0,0,0,0-.39c-.06-.11-.5-1.2-.68-1.64s-.36-.37-.5-.38H9.1a.72.72,0,0,0-.52.25A2.19,2.19,0,0,0,7.89,9.2a3.82,3.82,0,0,0,.8,2A8.73,8.73,0,0,0,12,14.67a10.69,10.69,0,0,0,1.11.41,2.67,2.67,0,0,0,1.22.08,2,2,0,0,0,1.31-.93,1.62,1.62,0,0,0,.11-.93C15.69,13.19,15.56,13.14,16.06,13.42Z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    telegram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99,2A10,10,0,1,0,22,12,10,10,0,0,0,11.99,2Zm5.65,6.67L15.72,17a.67.67,0,0,1-1,.38l-2.48-1.89-1.32,1.25a.24.24,0,0,1-.23.05l.23-2.1,5.9-5.51c.26-.24-.05-.37-.4-.13l-7.28,4.6L6.76,13a.45.45,0,0,1-.49-.05.47.47,0,0,1-.09-.49l1.7-5.85a.64.64,0,0,1,.77-.44l9.89,3.87A.36.36,0,0,1,17.64,8.67Z" />
      </svg>
    ),
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-primary-700 hover:bg-primary-800 text-white rounded-full flex items-center justify-center transition-colors"
      aria-label={platform}
    >
      {icons[platform]}
    </a>
  );
};

export default function Footer() {
  const { masjidName, address, contact, social } = siteConfig;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Masjid Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt={masjidName}
                width={80}
                height={80}
                className="h-20 w-auto bg-white rounded-lg p-2"
              />
            </div>
            <p className="text-gray-400 mb-4">{siteConfig.shortDescription}</p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Address</h4>
            <address className="not-italic text-gray-400 space-y-1">
              <p>{address.line1}</p>
              {address.line2 && <p>{address.line2}</p>}
              <p>{address.city}, {address.state} {address.zip}</p>
            </address>
            <div className="mt-4 space-y-2">
              <p>
                <a href={`tel:${contact.phone}`} className="hover:text-primary-400 transition-colors">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-primary-400 transition-colors">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              {social.facebook && <SocialIcon platform="facebook" url={social.facebook} />}
              {social.youtube && <SocialIcon platform="youtube" url={social.youtube} />}
              {social.instagram && <SocialIcon platform="instagram" url={social.instagram} />}
              {social.whatsapp && <SocialIcon platform="whatsapp" url={social.whatsapp} />}
              {social.twitter && <SocialIcon platform="twitter" url={social.twitter} />}
              {social.telegram && <SocialIcon platform="telegram" url={social.telegram} />}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {masjidName}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with faith and dedication for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
