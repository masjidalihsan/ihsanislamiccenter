import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: {
    default: siteConfig.masjidName,
    template: `%s | ${siteConfig.masjidName}`,
  },
  description: siteConfig.shortDescription,
  keywords: ['masjid', 'mosque', 'islamic center', 'prayer times', 'muslim community', siteConfig.masjidName],
  authors: [{ name: siteConfig.masjidName }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.masjidName,
    title: siteConfig.masjidName,
    description: siteConfig.shortDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
