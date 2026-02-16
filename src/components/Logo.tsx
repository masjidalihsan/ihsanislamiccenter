import { siteConfig } from '@/data/siteConfig';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crescent Moon */}
      <circle cx="100" cy="25" r="12" fill="#7c3aed" />
      <circle cx="105" cy="23" r="9" fill="white" />

      {/* Dome Spire */}
      <path
        d="M100 35 L100 55"
        stroke="#7c3aed"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Main Dome */}
      <path
        d="M60 130
           Q60 70 100 55
           Q140 70 140 130"
        fill="#7c3aed"
      />

      {/* Dome Window/Design */}
      <ellipse cx="100" cy="95" rx="15" ry="25" fill="#a855f7" opacity="0.5" />

      {/* Inner Design Lines */}
      <path
        d="M85 80 Q100 65 115 80"
        stroke="#6d28d9"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M80 95 Q100 75 120 95"
        stroke="#6d28d9"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M78 110 Q100 88 122 110"
        stroke="#6d28d9"
        strokeWidth="2"
        fill="none"
      />

      {/* Decorative Curves - Left */}
      <path
        d="M60 130
           Q40 135 20 145
           Q35 150 55 145
           Q45 155 30 165"
        stroke="#7c3aed"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Decorative Curves - Right */}
      <path
        d="M140 130
           Q160 135 180 145
           Q165 150 145 145
           Q155 155 170 165"
        stroke="#7c3aed"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Base Platform */}
      <path
        d="M55 130 L55 140 Q100 155 145 140 L145 130"
        fill="#7c3aed"
      />

      {/* Arabic-style decorative element */}
      <path
        d="M70 175 Q100 160 130 175"
        stroke="#f59e0b"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M60 185 Q100 168 140 185"
        stroke="#f59e0b"
        strokeWidth="2"
        fill="none"
      />

      {/* Text: Dynamic from config */}
      <text
        x="100"
        y="210"
        textAnchor="middle"
        fill="#7c3aed"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        {siteConfig.masjidName}
      </text>
    </svg>
  );
}
