import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import LeadershipCard from '@/components/LeadershipCard';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Leadership',
  description: `Meet the leadership team at ${siteConfig.masjidName}`,
};

export default function LeadershipPage() {
  // Separate imams from board members
  const imams = siteConfig.leadership.filter(
    (member) => member.role.toLowerCase().includes('imam') || member.role.toLowerCase().includes('sheikh')
  );
  const boardMembers = siteConfig.leadership.filter(
    (member) => !member.role.toLowerCase().includes('imam') && !member.role.toLowerCase().includes('sheikh')
  );

  return (
    <>
      <PageHeader
        title="Our Leadership"
        description="Meet the dedicated individuals who guide and serve our community."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          {/* Religious Leadership */}
          {imams.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Religious Leadership</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {imams.map((member, index) => (
                  <LeadershipCard key={index} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Board Members */}
          {boardMembers.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Board of Directors</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {boardMembers.map((member, index) => (
                  <LeadershipCard key={index} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Get Involved */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Want to Get Involved?</h3>
              <p className="text-gray-600 mb-6">
                We are always looking for dedicated volunteers to help serve the community. If you are interested in volunteering or joining a committee, please reach out to us.
              </p>
              <a href={`mailto:${siteConfig.contact.email}`} className="btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
