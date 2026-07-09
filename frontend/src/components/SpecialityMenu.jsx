import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-200/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Medical Specialities
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Find Doctors by
            <span className="text-blue-600"> Speciality</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
            Browse experienced specialists across multiple medical fields and
            book your appointment with trusted healthcare professionals in just
            a few clicks.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center hover:-translate-y-3 hover:border-blue-200">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-500">
                  <img
                    src={item.image}
                    alt={item.speciality}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center">
                  {item.speciality}
                </h3>

                <p className="text-xs text-gray-500 mt-2 text-center">
                  Experienced Specialists
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;