"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/join-event", label: "Join the event" },
  { href: "/about-us", label: "About Us" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar({
  onLoginClick,
}: {
  onLoginClick?: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        mobileOpen &&
        menuRef.current &&
        btnRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/img/TMIlogo.png"
              alt="The Mindful Initiative Logo"
              width={120}
              height={32}
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    active
                      ? "text-primary bg-primary-glow"
                      : "text-txt-muted hover:text-txt hover:bg-primary-glow/50"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop login */}
          <button
            onClick={onLoginClick}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-bg-elevated bg-primary rounded-lg hover:bg-primary-hover transition-all duration-300 hover:shadow-[0_0_20px_var(--c-primary-glow)] active:scale-95"
          >
            Login / Sign up
          </button>

          {/* Hamburger */}
          <button
            ref={btnRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-txt-muted hover:text-txt hover:bg-primary-glow transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-card mx-4 mb-4 rounded-xl p-4 space-y-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? "text-primary bg-primary-glow"
                    : "text-txt-muted hover:text-txt hover:bg-primary-glow/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMobileOpen(false);
              onLoginClick?.();
            }}
            className="w-full mt-2 px-4 py-3 text-sm font-semibold text-bg-elevated bg-primary rounded-lg hover:bg-primary-hover transition-colors text-center"
          >
            Login / Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
