import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import DonateSection from '@/components/DonateSection';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Donate',
  description: `Support ${siteConfig.masjidName} through your generous donations`,
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Support Your Masjid"
        description="Your generous contributions help us maintain the masjid and serve the community."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          {/* Quran Verse */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-4">
              &quot;The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes; in each spike is a hundred grains. And Allah multiplies for whom He wills.&quot;
            </blockquote>
            <cite className="text-primary-600 font-medium">— Surah Al-Baqarah, 2:261</cite>
          </div>

          {/* Donation Options */}
          <DonateSection showAll />

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tax Deductible</h3>
              <p className="text-gray-600">
                {siteConfig.masjidName} is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the fullest extent allowed by law.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Ways to Give</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Stock donations</li>
                <li>Legacy giving (bequest)</li>
                <li>Employer matching programs</li>
                <li>In-person at the masjid office</li>
              </ul>
            </div>
          </div>

          {/* Contact for Questions */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Questions about donations? Contact us at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-700 hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
