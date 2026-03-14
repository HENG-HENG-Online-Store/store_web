"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/context/cart-context";

const navLinks = [
  { href: "/", label: "ទំព័រដើម" },
  { href: "/products", label: "ផលិតផល" },
  { href: "/contact", label: "ទំនាក់ទំនង" },
];

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--logo-blue)]/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <Image
            src="/logo/logo.png"
            alt="ហេង ហេង ហាងអនឡាញ"
            width={40}
            height={40}
            className="object-contain sm:w-12 sm:h-12 w-10 h-10"
          />
          <span className="font-bold text-base sm:text-lg text-[var(--logo-orange)] truncate">
            ហេងហេង
          </span>
          <span className="text-sm text-[var(--logo-blue)] font-medium hidden sm:inline">
            ហាងអនឡាញ
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--foreground)] hover:text-[var(--logo-orange)] font-medium transition-colors text-sm lg:text-base"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/cart"
            title="រទេះ"
            aria-label={itemCount > 0 ? `រទេះ ${itemCount} របស់` : "រទេះ"}
            className="relative p-2 -m-2 text-[var(--foreground)] hover:text-[var(--logo-orange)] font-medium transition-colors rounded-lg hover:bg-[var(--foreground)]/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[var(--logo-orange)] text-white text-xs font-bold">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <Link
            href="/cart"
            title="រទេះ"
            aria-label={itemCount > 0 ? `រទេះ ${itemCount} របស់` : "រទេះ"}
            className="relative p-2 text-[var(--foreground)] hover:text-[var(--logo-orange)] rounded-lg hover:bg-[var(--foreground)]/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 min-w-[16px] h-[16px] px-0.5 flex items-center justify-center rounded-full bg-[var(--logo-orange)] text-white text-[10px] font-bold">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "បិទម៉ឺនុយ" : "បើកម៉ឺនុយ"}
            aria-expanded={menuOpen}
            className="p-2 text-[var(--foreground)] hover:text-[var(--logo-orange)] rounded-lg hover:bg-[var(--foreground)]/5"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden top-14"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <nav
            className="fixed left-0 right-0 top-14 z-50 md:hidden bg-[var(--background)] border-b border-[var(--logo-blue)]/20 shadow-lg py-2"
            aria-label="ម៉ឺនុយចម្បង"
          >
            <ul className="max-w-6xl mx-auto px-4 flex flex-col">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-2 text-[var(--foreground)] hover:text-[var(--logo-orange)] hover:bg-[var(--foreground)]/5 font-medium rounded-lg transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-[var(--foreground)]/10 mt-1 pt-1">
                <Link
                  href="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 py-3 px-2 text-[var(--foreground)] hover:text-[var(--logo-orange)] hover:bg-[var(--foreground)]/5 font-medium rounded-lg transition-colors"
                >
                  រទេះ
                  {itemCount > 0 && (
                    <span className="min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full bg-[var(--logo-orange)] text-white text-xs font-bold">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
