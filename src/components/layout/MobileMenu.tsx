'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface MobileMenuProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly links: readonly { readonly href: string; readonly label: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
        role="button"
        tabIndex={0}
        aria-label="關閉選單"
      />

      <nav className="absolute right-0 top-0 h-full w-64 bg-warm-bg shadow-xl p-6 flex flex-col">
        <button
          type="button"
          className="self-end p-2 text-text-secondary hover:text-rose-dark transition-colors"
          onClick={onClose}
          aria-label="關閉選單"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-rose-dark transition-colors text-base font-medium py-2"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
