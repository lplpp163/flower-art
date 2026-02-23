'use client';

import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/flowers', label: '花語圖鑑' },
  { href: '/arrangements', label: '花型教學' },
  { href: '/structure', label: '結構解析' },
  { href: '/journal', label: '學習日誌' },
  { href: '/practice', label: '今天練什麼' },
  { href: '/growth', label: '成長故事' },
] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-rose-dark font-bold tracking-wider">
          花藝學習
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-rose-dark transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-text-secondary hover:text-rose-dark transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="開啟選單"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
