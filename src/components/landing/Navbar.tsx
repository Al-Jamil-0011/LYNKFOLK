"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/constants";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-grey-100/80 transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with official vibrant infinity loop */}
        <Link href="#home" className="flex items-center group transition-opacity hover:opacity-95">
          <Logo size="md" showTagline={false} priority />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary-600 font-semibold"
                    : "text-grey-700 hover:text-primary-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA Button with soft purple glow */}
        <div className="hidden md:flex items-center">
          <Link
            href="#get-started"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-500/30 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-grey-700 hover:text-primary-500 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-grey-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-medium py-2 px-2 rounded-lg transition-colors ${
                  activeItem === item.label
                    ? "bg-primary-50 text-primary-500 font-semibold"
                    : "text-grey-700 hover:bg-grey-50 hover:text-primary-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-primary-500 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-600"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
