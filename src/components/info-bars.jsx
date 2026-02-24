import { Clock, MapPin, Phone } from "lucide-react";

function InfoBar() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600 shrink-0">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">
              Emergency Contacts
            </h3>
            <p className="text-gray-600 text-sm font-medium">
              +998 78 120 1144
            </p>
            <p className="text-gray-600 text-sm font-medium">
              +998 90 327 3378
            </p>
            <p className="text-blue-600 text-sm font-semibold mt-1">
              English speaking doctors 24/7
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600 shrink-0">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">
              Working Hours
            </h3>
            <p className="text-gray-600 font-medium">Monday - Saturday</p>
            <p className="text-gray-800 font-bold mt-1 text-lg">
              8:30 AM - 8:30 PM
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600 shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Address</h3>
            <p className="text-gray-600 font-medium">38 Sarikul street</p>
            <p className="text-gray-600 font-medium">Tashkent, Uzbekistan</p>
            <a
              href="#"
              className="text-blue-600 text-sm font-semibold mt-2 inline-block hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoBar;
