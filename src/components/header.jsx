import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-light fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <a className="text-2xl font-bold" href="#home">
          Vibhakar
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-light md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 ml-auto`} // Added ml-auto
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-base">
            <li>
              <a
                href="#home"
                className="block py-2 md:py-0 hover:text-accent transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 md:py-0 hover:text-accent transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 md:py-0 hover:text-accent transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 md:py-0 hover:text-accent transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="block py-2 md:py-0 hover:text-accent transition duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 md:py-0 hover:text-accent transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
