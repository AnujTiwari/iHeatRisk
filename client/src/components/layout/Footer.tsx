import { Link } from "wouter";
import Logo from "@/components/Logo";
import {
  Linkedin,
  Mail,
  MapPin
} from "lucide-react";

import cardiffLogo from "@/assets/cardiff.png";
import dpiLogo from "@/assets/dpi_logo.png";
import uilogo from "@/assets/UI_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/iheatrisk"
    }
  ];

  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Column 1: Logo + Description */}
          <div>
            <Link href="/">
              <div className="flex items-center gap-2 mb-4 cursor-pointer">
                <Logo size={32} isFooter />
                <span className="text-xl font-heading font-bold">
                  i<span className="text-primary">HEAT</span>RISK
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 mb-4">
              Personalized heat risk assessments and actionable recommendations to protect your health in a warming world.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Research Partners */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">Research Partners</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <img src={cardiffLogo} alt="Cardiff University" className="h-12 w-auto object-contain" />
              <img src={dpiLogo} alt="Discovery Partners Institute" className="h-12 w-auto object-contain" />
              <img src={uilogo} alt="University of Illinois System" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="text-sm text-neutral-400 space-y-3">
            <h4 className="text-xl font-heading font-semibold mb-4 text-white">Contact Us</h4>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@iheatrisk.com
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span>
                iHeatRisk Cardiff-DPI Grant, 200 S. Wacker Dr. 20th Floor<br />
                Chicago, IL, USA, 60607
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-4 pb-2 text-center text-neutral-500 text-xs">
          &copy; {currentYear} iHEATRISK. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
