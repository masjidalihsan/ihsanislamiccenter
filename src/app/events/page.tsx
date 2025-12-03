import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import EventCard from '@/components/EventCard';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Events',
  description: `Upcoming events and community gatherings at ${siteConfig.masjidName}`,
};

export default function EventsPage() {
  const now = new Date();
  const upcomingEvents = siteConfig.events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = siteConfig.events
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHeader
        title="Events"
        description="Join us for community gatherings, educational seminars, and special celebrations."
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
              <div className="grid gap-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
                <p className="text-gray-600">Check back soon for new events, or follow us on social media for updates.</p>
              </div>
            )}
          </div>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
              <div className="grid gap-6 opacity-75">
                {pastEvents.slice(0, 5).map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Stay Updated */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-primary-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media or subscribe to our mailing list to stay informed about upcoming events and programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {siteConfig.social.facebook && (
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Follow on Facebook
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Follow on Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
