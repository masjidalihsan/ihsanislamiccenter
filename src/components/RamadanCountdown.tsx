'use client';

import { useState, useEffect } from 'react';

// Ramadan 2025 expected start date (March 1, 2025 - may vary based on moon sighting)
const RAMADAN_START_DATE = new Date('2025-03-01T00:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function RamadanCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isRamadan, setIsRamadan] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = RAMADAN_START_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        // Ramadan has started or passed
        setIsRamadan(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ramadan Countdown</h2>
          <p className="text-primary-100 mb-6">Loading...</p>
        </div>
      </div>
    );
  }

  if (isRamadan) {
    return (
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
            <svg className="w-12 h-12 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ramadan Mubarak!</h2>
          <p className="text-primary-100 text-lg">The blessed month is here. May Allah accept your fasting and prayers.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 rounded-2xl p-8 mb-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
            <svg className="w-10 h-10 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ramadan Countdown</h2>
          <p className="text-primary-100">Ramadan 2025 begins on March 1st, insha&apos;Allah</p>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1">
              {timeLeft.days}
            </div>
            <div className="text-primary-200 text-sm md:text-base uppercase tracking-wide">Days</div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-primary-200 text-sm md:text-base uppercase tracking-wide">Hours</div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-primary-200 text-sm md:text-base uppercase tracking-wide">Minutes</div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-primary-200 text-sm md:text-base uppercase tracking-wide">Seconds</div>
          </div>
        </div>

        <p className="text-center text-primary-200 text-sm mt-6">
          *Exact date may vary based on moon sighting
        </p>
      </div>
    </div>
  );
}
