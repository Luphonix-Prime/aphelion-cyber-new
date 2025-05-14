import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-primary/30' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Aphelion<span className="text-secondary">Cyber</span></span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li className="group relative">
                  <Link href="/platform" className="text-gray-300 hover:text-white font-medium flex items-center">
                    Platform
                    <i className="ri-arrow-down-s-line ml-1 text-gray-400 group-hover:text-secondary transition-colors"></i>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 w-64 hidden group-hover:block">
                    <div className="bg-primary-light rounded-xl shadow-xl p-4 border border-gray-700">
                      <ul className="space-y-2">
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">Risk Assessment</a></li>
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">Threat Detection</a></li>
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">Security Automation</a></li>
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">Compliance Management</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="group relative">
                  <Link href="/solutions" className="text-gray-300 hover:text-white font-medium flex items-center">
                    Solutions
                    <i className="ri-arrow-down-s-line ml-1 text-gray-400 group-hover:text-secondary transition-colors"></i>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 w-64 hidden group-hover:block">
                    <div className="bg-primary-light rounded-xl shadow-xl p-4 border border-gray-700">
                      <ul className="space-y-2">
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">For Healthcare</a></li>
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">For Financial Services</a></li>
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">For Government</a></li>
                        <li><a href="#" className="block px-4 py-2 text-sm hover:bg-dark/50 rounded-lg">For Enterprise</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li><Link href="/pricing" className="text-gray-300 hover:text-white font-medium">Pricing</Link></li>
                <li><Link href="/resources" className="text-gray-300 hover:text-white font-medium">Resources</Link></li>
                <li><Link href="/company" className="text-gray-300 hover:text-white font-medium">Company</Link></li>
              </ul>
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white font-medium">Login</Link>
            <Link href="/contact" className="bg-secondary hover:bg-[#4f46e5] text-white font-medium px-6 py-2 rounded-lg transition-colors">
              Request Demo
            </Link>
          </div>

          <button 
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-5 space-y-4 bg-primary border-t border-gray-700">
          <Link href="/platform" className="block py-2 text-gray-300 hover:text-white font-medium">Platform</Link>
          <Link href="/solutions" className="block py-2 text-gray-300 hover:text-white font-medium">Solutions</Link>
          <Link href="/pricing" className="block py-2 text-gray-300 hover:text-white font-medium">Pricing</Link>
          <Link href="/resources" className="block py-2 text-gray-300 hover:text-white font-medium">Resources</Link>
          <Link href="/company" className="block py-2 text-gray-300 hover:text-white font-medium">Company</Link>
          <div className="pt-4 space-y-3">
            <Link href="/login" className="block text-center text-gray-300 hover:text-white font-medium py-2">Login</Link>
            <Link href="/contact" className="block text-center bg-secondary hover:bg-[#4f46e5] text-white font-medium px-6 py-2 rounded-lg transition-colors">
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
