import { Mail, Facebook, Linkedin, MapPin, Phone, Globe } from 'lucide-react';

const EMAIL = "spatialsysconsultantlimited@gmail.com";
const PHONE = "+254 702 923 234 / +254 738 033 909"; // placeholder, replace with real number
const WEBSITE = "www.spatialsysconsultantslimited.co.ke"; // placeholder, replace with real website
const FACEBOOK_URL = ""; // add when available
const LINKEDIN_URL = ""; // add when available

const company = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: `mailto:${EMAIL}` },
];

const services = [
  "Topographical Surveys",
  "Sectional Title Surveys",
  "Cadastral Surveys",
  "Mutation Surveys",
  "Engineering Surveys",
  "UAV and Aerial Mapping",
];

const socialClass =
  "w-10 h-10 rounded-full bg-white/10 hover:bg-[#73951f] flex items-center justify-center transition-all duration-300 transform hover:scale-110";

function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#141c07] via-[#1f2b0c] to-[#141c07]">
      <div className="max-w-7xl mx-auto px-8 py-16 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precision Surveying, Delivered
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
              SpatialSys Consultants Limited is a registered survey company
              offering land and engineering survey, mapping and GIS services,
              delivered by registered surveyors and KCAA-licensed drone pilots.
            </p>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#73951f]" aria-hidden="true" />
                <span>SpatialSys Consultants Limited <br/> Joyland Plaza, 2nd Floor Suite, Ruaka.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#73951f]" aria-hidden="true" />
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#73951f]" aria-hidden="true" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#73951f]" aria-hidden="true" />
                <a
                  href={`https://${WEBSITE.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  {WEBSITE}
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="Company">
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <div className="flex flex-col gap-3">
              {company.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Services Links */}
          <nav aria-label="Services">
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <div className="flex flex-col gap-3">
              {services.map((name) => (
                <a
                  key={name}
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} SpatialSys Consultants Limited. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href={`mailto:${EMAIL}`} className={socialClass} aria-label="Email">
                <Mail className="w-5 h-5 text-gray-300" />
              </a>
              {FACEBOOK_URL && (
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-300" />
                </a>
              )}
              {LINKEDIN_URL && (
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-300" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;