import Image from 'next/image';
import type { Event } from '@/data/siteConfig';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  // Parse date parts directly to avoid timezone issues
  const [year, month, day] = event.date.split('-').map(Number);
  const eventDate = new Date(year, month - 1, day);
  const monthName = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const weekday = eventDate.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Event Flyer Image */}
        {event.image && (
          <div className="flex-shrink-0 md:w-64 lg:w-80">
            <Image
              src={event.image}
              alt={event.title}
              width={320}
              height={400}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-grow">
          {/* Date Badge */}
          <div className="flex-shrink-0 w-20 md:w-24 bg-primary-700 text-white flex flex-col items-center justify-center p-4">
            <span className="text-sm uppercase tracking-wider">{monthName}</span>
            <span className="text-3xl font-bold">{day}</span>
            <span className="text-xs text-primary-200">{weekday}</span>
          </div>

          {/* Event Details */}
          <div className="flex-grow p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-3">{event.description}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center text-gray-500">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </span>
              {event.location && (
                <span className="inline-flex items-center text-gray-500">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
