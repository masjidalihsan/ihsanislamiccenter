'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

const slides = [
  {
    image: '/hero-1.jpg',
    title: `Welcome to`,
    titleHighlight: siteConfig.masjidName,
    subtitle: 'A sanctuary of peace, compassion, and spiritual growth for our community in Shakopee.',
    badge: 'Open for All 5 Daily Prayers',
  },
  {
    image: '/hero-2.jpg',
    title: 'Join Our',
    titleHighlight: 'Community',
    subtitle: 'Experience the beauty of Islam through prayer, learning, and brotherhood.',
    badge: 'Programs for All Ages',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 7000;
    const interval = 50;
    let elapsed = 0;

    const progressTimer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);

      if (elapsed >= duration) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        elapsed = 0;
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <section className="relative h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover transition-transform duration-[7000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              priority={index === 0}
            />
            {/* Purple overlay to match brand */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-violet-800/70 to-purple-900/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl">
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-8 transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                  </span>
                  <span className="text-white/90 text-sm font-medium">{slide.badge}</span>
                </div>

                {/* Title */}
                <h1
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  {slide.title}
                </h1>
                <h1
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  {slide.titleHighlight}
                </h1>

                {/* Subtitle */}
                <p
                  className={`text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div
                  className={`flex flex-wrap gap-4 transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  <Link
                    href="/prayer-times"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Prayer Times
                  </Link>
                  <Link
                    href="/donate"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Support Us
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4">
          {/* Slide indicators with progress */}
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative h-2 transition-all duration-300 rounded-full overflow-hidden"
              style={{ width: index === currentSlide ? '48px' : '12px' }}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="absolute inset-0 bg-white/30 rounded-full" />
              {index === currentSlide && (
                <div
                  className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}

          {/* Slide counter */}
          <div className="border-l border-white/20 pl-4 ml-2">
            <span className="text-white font-bold text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="text-white/50 mx-1">/</span>
            <span className="text-white/50 text-sm">{String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
