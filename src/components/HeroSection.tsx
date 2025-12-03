import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showPattern?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  showPattern = true,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Decorative Pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M10 2 L10 18 M2 10 L18 10" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
      )}

      {/* Accent Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
            {subtitle}
          </p>
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && primaryButtonLink && (
                <Link href={primaryButtonLink} className="btn-accent">
                  {primaryButtonText}
                </Link>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Link href={secondaryButtonLink} className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
