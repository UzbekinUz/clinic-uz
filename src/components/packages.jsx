import { ArrowRight } from "lucide-react";
import PACKAGES from "../sources/pkgs.json";

function Packages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
            Healthcare Packages
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            We offer a range of healthcare packages to suit your needs.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-600 transition-colors relative flex flex-col h-full shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                {pkg.target}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 pr-12">
                {pkg.title}
              </h4>
              <p className="text-gray-600 leading-relaxed grow mb-8">
                {pkg.desc}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button className="flex-1 bg-blue-50 text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-100 transition-colors">
                  Details
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-600 font-bold hover:underline inline-flex items-center gap-2 text-lg">
            View All Packages <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Packages;
