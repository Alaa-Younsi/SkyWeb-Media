import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Our Approach", href: "#approach" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Graphic Design",
    "Social Media Marketing",
    "SEO Services",
    "Email Marketing",
    "E-commerce Solutions"
  ];

  return (
    <footer id="contact" className="bg-skyblue-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-2xl font-bold">SkyWeb Media</span>
            </div>
            <p className="text-skyblue-200 mb-6">
              A premier digital marketing agency specializing in web development, 
              graphic design, and strategic social media marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-skyblue-800 hover:bg-skyblue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-skyblue-800 hover:bg-skyblue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-skyblue-800 hover:bg-skyblue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-skyblue-800 hover:bg-skyblue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-skyblue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-skyblue-200 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-skyblue-200">contact@skywebmedia.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-skyblue-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-skyblue-200">
                  123 Digital Avenue<br />
                  San Francisco, CA 94107
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-skyblue-800 pt-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-skyblue-200 mb-6">
              Subscribe to our newsletter for the latest digital marketing insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg bg-skyblue-800 border border-skyblue-700 text-white placeholder-skyblue-300 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-skyblue-950 py-6">
        <div className="container-custom text-center">
          <p className="text-skyblue-200 mb-2">
            <a
              href="https://alaayounsi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Website created by Alaa Younsi
            </a>
          </p>
          <p className="text-skyblue-300">
            © {new Date().getFullYear()} SkyWeb Media. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;