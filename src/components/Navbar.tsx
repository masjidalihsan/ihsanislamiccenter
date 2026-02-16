'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt={siteConfig.masjidName}
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div>
              <span className="block text-lg font-bold text-gray-900">Samaha</span>
              <span className="block text-xs text-gray-600">Islamic Center</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-violet-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/prayer-times" className="text-gray-700 hover:text-violet-600 font-medium transition-colors">
              Prayer Times
            </Link>
            <Link href="/ramadan" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">
              🌙 Ramadan
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-violet-600 font-medium transition-colors">
              Programs
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-violet-600 font-medium transition-colors">
              Events
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-violet-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-violet-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Link
              href="/donate"
              className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-3 text-gray-700 hover:bg-violet-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/prayer-times" className="px-4 py-3 text-gray-700 hover:bg-violet-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Prayer Times
              </Link>
              <Link href="/ramadan" className="px-4 py-3 text-amber-600 font-semibold hover:bg-amber-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                🌙 Ramadan
              </Link>
              <Link href="/programs" className="px-4 py-3 text-gray-700 hover:bg-violet-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Programs
              </Link>
              <Link href="/events" className="px-4 py-3 text-gray-700 hover:bg-violet-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Events
              </Link>
              <Link href="/about" className="px-4 py-3 text-gray-700 hover:bg-violet-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="px-4 py-3 text-gray-700 hover:bg-violet-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link 
                href="/donate" 
                className="mx-4 mt-2 py-3 bg-violet-600 text-white text-center font-semibold rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
