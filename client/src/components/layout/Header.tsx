import { useState } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/calculator", label: "Calculator" },
    { path: "/how-it-works", label: "Technical Overview" },
    // { path: "/activities", label: "Milestones" },
    {path: "/faq", label : "FAQ"},
    { path: "/about", label: "Contributors" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="w-full px-4 md:px-12 py-3 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-3 md:mb-0">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Logo size={40} />
              <span className="ml-2 text-2xl font-heading font-bold text-neutral-800">
                i<span className="text-primary">HEAT</span>RISK
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-neutral-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <div
                className={`nav-link relative font-medium transition-colors cursor-pointer ${
                  location === link.path
                    ? "text-primary"
                    : "text-neutral-700 hover:text-primary"
                } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-primary after:transition-all after:duration-300 ${
                  location === link.path ? "after:w-full" : "hover:after:w-full"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-3 border-t">
          <div className="w-full px-2 sm:px-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`block py-2 cursor-pointer ${
                    location === link.path
                      ? "text-primary"
                      : "text-neutral-700 hover:text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
