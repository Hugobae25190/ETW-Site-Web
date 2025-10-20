"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#212121] border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-white">
              ESCAPE THE <span className="text-[#E74C3C] group-hover:text-[#C4A84A] transition-colors">WEAKNESS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-[#C4A84A] transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/protocol" 
              className="text-white hover:text-[#C4A84A] transition-colors font-medium"
            >
              The Protocol
            </Link>
            <Link 
              href="/pricing" 
              className="text-white hover:text-[#C4A84A] transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="/why-choose-me" 
              className="text-white hover:text-[#C4A84A] transition-colors font-medium"
            >
              Why Choose Me
            </Link>
            <Link 
              href="/free-audit" 
              className="bg-[#E74C3C] text-white px-6 py-3 rounded-md font-bold hover:bg-[#C0392B] transition-colors"
            >
              Free Audit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
