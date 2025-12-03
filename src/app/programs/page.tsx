import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProgramCard from '@/components/ProgramCard';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Programs',
  description: `Educational and spiritual programs at ${siteConfig.masjidName}`,
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        description="Comprehensive Islamic education and community programs for all ages and backgrounds."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {siteConfig.programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>

          {/* Registration CTA */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join a Program?</h3>
              <p className="text-primary-100 mb-6 max-w-xl mx-auto">
                Contact us to learn more about our programs or to register. We welcome everyone to participate in our community activities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${siteConfig.contact.phone}`} className="btn-accent">
                  Call Us
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
