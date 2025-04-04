"use client";
import Image from "next/image";
import { supabase } from "src/services";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { Route } from "src/constants/navigation";

export const Header: FunctionComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/support/about" },
    { label: "Pricing", href: "/support/pricing" },
    { label: "API", href: "/enterprise-api" },
    { label: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await supabase.auth.getUser();
        if (user?.data !== null) {
          setUser(user.data.user);
        }
      } catch (error) {
        // TODO: handle error with snackbar
      }
    };
    getUser();
  }, []);

  return (
    <header
      itemScope
      itemType="http://schema.org/Organization"
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="relative h-[40px] w-[140px] md:h-[50px] md:w-[180px]">
          <Link href="/" itemProp="url">
            <Image
              alt="logo text"
              src="/logo.png"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="rounded-xl border border-primary bg-primary px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-primary/90"
            href={user !== null ? Route.DASHBOARD : Route.LOGIN}
            rel="noopener noreferrer"
          >
            {user !== null ? "Dashboard" : "Login"}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-2 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="rounded-xl border border-primary bg-primary px-5 py-2 text-center text-sm font-medium text-white shadow-md transition hover:bg-primary/90"
              href={user !== null ? Route.DASHBOARD : Route.LOGIN}
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {user !== null ? "Dashboard" : "Login"}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
