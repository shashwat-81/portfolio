import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          Portfolio
        </a>
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            className="text-primary-600 dark:text-primary-400 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className={`flex-col lg:flex-row lg:flex ${open ? 'flex' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent shadow-lg lg:shadow-none`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 lg:py-0 text-gray-600 dark:text-gray-300 hover:text-primary-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;