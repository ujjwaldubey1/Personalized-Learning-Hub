"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between px-8 py-4">
      
        <div className="text-2xl font-bold">
          <span className="text-purple-600">Track</span>
          <span className="text-green-500">Ed</span>
        </div>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          {[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/contact' },
          ].map((link, index) => (
            <li
              key={index}
              className="hover:text-blue-600 transition-colors"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <ul className="hidden lg:flex gap-4">
          {[
            { label: 'Login', href: '/auth/login' },
            { label: 'SignUp', href: '/auth/signup' },
          ].map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="px-5 py-2 border-2 rounded-lg font-semibold text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50">
          <ul className="flex flex-col gap-4 p-4 text-lg font-medium border-t border-gray-200">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link, index) => (
              <li
                key={index}
                className="hover:text-blue-600 transition-colors"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 p-4 border-t border-gray-200">
            {[
              { label: 'Login', href: '/auth/login' },
              { label: 'SignUp', href: '/auth/signup' },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block text-center px-5 py-2 border-2 rounded-lg font-semibold text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
