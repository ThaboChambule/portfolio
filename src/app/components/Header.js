"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white fixed top-0 left-0 w-full z-50 shadow-md bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-6">
        <div className="text-3xl md:text-5xl font-semibold">
          <a href="/">
            Thabo<span className="text-violet-500">.</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-violet-500"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation menu - desktop */}
        <nav className="hidden md:flex gap-5 text-lg md:text-2xl">
          <a href="/" className="hover:text-violet-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-violet-500 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-violet-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-violet-500 transition-colors">
            Contact
          </a>
        </nav>

        {/* Navigation menu - mobile */}
        <nav className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col items-center gap-4 w-full md:hidden mt-4 text-xl`}>
          <a 
            href="/" 
            className="w-full text-center py-2 hover:text-violet-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="w-full text-center py-2 hover:text-violet-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="w-full text-center py-2 hover:text-violet-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="w-full text-center py-2 hover:text-violet-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
