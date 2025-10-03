
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header    className="w-screen fixed top-0 left-0 z-50 backdrop-blur-md shadow-lg bg-gradient-to-r from-black/40 via-black/30 to-black/20">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold tracking-wider uppercase">
          Bi8
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6">
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

        {/* Login Link */}
        <Link
          href="/login"
          className="text-white border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
        >
          Login
        </Link>

      </nav>
    </header>
  );
};

export default Header;
