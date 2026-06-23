import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteMeta, logo, navigation } from '../data/siteContent';
import { MenuIcon, CloseIcon } from './Icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-shadow duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-md border-gray-200' : 'bg-white border-gray-100'
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Wordmark */}
          <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-ttcda-gold focus:ring-offset-2 rounded">
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold leading-tight tracking-tight text-ttcda-charcoal">
                {siteMeta.shortName}
              </span>
              <span className="hidden sm:block text-[10px] md:text-xs font-semibold text-ttcda-gold tracking-wide uppercase">
                {siteMeta.affiliation}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  location.pathname === item.path
                    ? 'text-ttcda-maroon bg-ttcda-maroon/5'
                    : 'text-ttcda-gray-body hover:text-ttcda-maroon hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-ttcda-charcoal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ttcda-gold"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav
          className="lg:hidden border-t border-gray-100 bg-white"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 text-base font-medium rounded-md ${
                  location.pathname === item.path
                    ? 'text-ttcda-maroon bg-ttcda-maroon/5'
                    : 'text-ttcda-gray-body hover:text-ttcda-maroon hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
