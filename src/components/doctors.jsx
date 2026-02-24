import { ArrowRight } from "lucide-react";
import DOCTORS from "../sources/doctors.json";

function Doctors() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
              Our Doctors
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Compassionate Experts Dedicated to Your Health
            </h3>
          </div>
          <button className="bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap">
            View all doctors
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">
                  {doctor.exp}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {doctor.role}
                </p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-800">
                  View Profile <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
