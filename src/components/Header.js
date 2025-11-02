"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // WhatsApp details
  const phoneNumber = "917994863515"; // your number (with country code, no +)
  const message = "Hello! I would like to book a ride with Fine Way Travels.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#fleet", label: "Our Fleet" },
    { href: "#contact", label: "Contact" },
    { href: "#destination", label: "Destinations" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- Brand --- */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-3xl font-bold text-white"
              style={{
                fontFamily: "'Dancing Script', cursive",
                textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
              }}
            >
              Fine Way{" "}
              <span
                className="text-orange-300"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
                }}
              >
                Travels
              </span>
            </a>
          </div>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-orange-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-6 py-3 text-base font-semibold rounded-full shadow-sm text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105"
            >
              📞 Book Now
            </a>
          </nav>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Slide-in Menu (Transparent + Glass effect) --- */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/10 backdrop-blur-xl shadow-lg border-r border-white/20 transform transition-transform duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <span className="text-white text-xl font-semibold">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-orange-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-orange-300 px-2 py-2 rounded-md text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center px-6 py-3 text-base font-semibold rounded-full text-orange-900 bg-gradient-to-r from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            📞 Book Now
          </a>

          <button className="block w-full text-white text-center mt-3 hover:text-orange-300 transition">
           
          </button>
        </div>
      </div>

      {/* --- Backdrop overlay when menu open --- */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
