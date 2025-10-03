"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import LoginModal from './LoginModal';

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header    className="w-screen fixed top-0 left-0 z-50 backdrop-blur-md shadow-lg bg-gradient-to-r from-black/40 via-black/30 to-black/20">
      <nav className="relative flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold tracking-wider uppercase">
          Bi8
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6">
          <li>
          <Link href="/" className=" nav-link text-white font-semibold ">
              Home
            </Link>
          </li>
          <li>
        <Link href="/about" className=" nav-link text-white font-semibold ">
              About
            </Link>
          </li>
          <li>
           <Link href="/contact" className=" nav-link text-white font-semibold ">
              Book Now
            </Link>
          </li>
          <li>
            <Link href="/menu" className=" nav-link text-white font-semibold ">
              Menu
            </Link>
          </li>
             <li>
            <Link href="/support" className=" nav-link text-white font-semibold ">
              Support
            </Link>
          </li>
        </ul>

        {/* Desktop Login Modal Trigger */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="text-white border border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Login
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
          className=" text-white md:hidden p-3 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 relative z-[10001]"
        >
          {/* Animated hamburger lines */}
          <span className={`hamburger ${navOpen ? 'hamburger-active' : ''}`}>
            <span className="hamburger-box">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </span>
        </button>

      </nav>
      {/* Mobile menu dropdown (compact) */}
      <div
        className={`md:hidden absolute right-4 top-full mt-2 origin-top-right transform ${navOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} transition duration-200`}
      >
        <div className="min-w-[30vw] rounded-xl bg-black/70 backdrop-blur-lg border border-white/15 shadow-lg p-2">
          <ul className="flex flex-col gap-1">
            <li><Link onClick={() => setNavOpen(false)} href="/" className="mobile-nav-link transition-opacity duration-200 delay-75">Home</Link></li>
            <li><Link onClick={() => setNavOpen(false)} href="/about" className="mobile-nav-link transition-opacity duration-200 delay-100">About</Link></li>
            <li><Link onClick={() => setNavOpen(false)} href="/contact" className="mobile-nav-link transition-opacity duration-200 delay-150">Book Now</Link></li>
            <li><Link onClick={() => setNavOpen(false)} href="/menu" className="mobile-nav-link transition-opacity duration-200 delay-200">Menu</Link></li>
            <li><Link onClick={() => setNavOpen(false)} href="/support" className="mobile-nav-link transition-opacity duration-200 delay-300">Support</Link></li>
            <li>
              <button
                type="button"
                onClick={() => { setLoginOpen(true); setNavOpen(false); }}
                className="w-full text-left mobile-nav-link border border-white/30 hover:bg-white hover:text-black transition"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal rendered via portal */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
};

export default Header;
