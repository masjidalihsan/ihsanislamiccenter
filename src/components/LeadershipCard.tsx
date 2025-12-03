import type { LeadershipMember } from '@/data/siteConfig';

interface LeadershipCardProps {
  member: LeadershipMember;
}

export default function LeadershipCard({ member }: LeadershipCardProps) {
  return (
    <div className="card p-6 text-center">
      {/* Avatar */}
      <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-primary-600 font-medium mb-3">{member.role}</p>
      {member.bio && (
        <p className="text-gray-600 text-sm">{member.bio}</p>
      )}
    </div>
  );
}
