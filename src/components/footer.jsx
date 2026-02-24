import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                TIC
              </div>
              <span className="font-bold text-xl text-white leading-tight">
                Tashkent
                <br />
                International Clinic
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing high-quality, continuous primary care and specialized
              medical services to our diverse community.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <div className="w-4 h-4 bg-white mask-facebook"></div>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <div className="w-4 h-4 bg-white mask-instagram"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  News & Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Patient Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">8:30 - 20:30</span>
              </li>
              <li className="flex justify-between text-gray-400 border-t border-gray-800 pt-3">
                <span>Saturday</span>
                <span className="text-white font-medium">8:30 - 20:30</span>
              </li>
              <li className="flex justify-between text-gray-400 border-t border-gray-800 pt-3">
                <span>Sunday</span>
                <span className="text-red-400 font-medium">
                  Closed / Emergency Only
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-blue-500 mt-1 shrink-0" size={20} />
                <span>
                  38 Sarikul street,
                  <br />
                  Tashkent, Uzbekistan
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <span>+998 78 120 11 44</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <span>info@tashclinic.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} – All rights reserved - tashclinic.org
            clone
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
