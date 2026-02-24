import { ArrowRight, Stethoscope, Users } from "lucide-react";
import { Activity } from "react";

function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
              What makes us different
            </h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8">
              Modern Healthcare Delivered with Compassion
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Family medicine
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Family physicians deliver comprehensive, continuous primary
                    care across all ages, ensuring long-term health and
                    well-being.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Virtual care
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Virtual care enables remote healthcare through video, phone,
                    messaging, and monitoring, providing convenience when you
                    need it most.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Urgent care
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Urgent care delivers prompt treatment for
                    non-life-threatening injuries and illnesses, saving you a
                    trip to the emergency room.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Departments
            </h3>
            <ul className="space-y-4">
              {[
                "Family Medicine",
                "Women's Health",
                "Children's Health",
                "Men's Health",
                "Chronic Disease Management",
                "Physical Therapy",
              ].map((dept, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group"
                >
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">
                    {dept}
                  </span>
                  <ArrowRight
                    className="text-gray-400 group-hover:text-blue-600 transition-colors"
                    size={20}
                  />
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors">
              View all departments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
