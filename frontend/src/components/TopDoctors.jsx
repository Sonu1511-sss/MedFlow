import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
            Our Medical Experts
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
               Meet Our 
             <span className="text-blue-600"> Top Doctors</span>
         
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-7">
            Find experienced specialists across multiple medical fields and
            book appointments with trusted healthcare professionals in minutes.
          </p>
        </div>

        {/* Doctors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

          {doctors.slice(0, 10).map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group"
            >

              {/* Image */}
              <div className="bg-[#EDF5FF] relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-contain group-hover:scale-105 transition duration-300"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                </div>

              </div>

              {/* Content */}

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <h3 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                    ⭐
                    <span className="text-gray-800 text-sm">4.9</span>
                  </div>

                </div>

                <p className="text-blue-600 font-medium mt-2">
                  {item.speciality}
                </p>

                <div className="flex items-center justify-between mt-5 text-sm text-gray-500">

                  <span>8+ Years Exp.</span>

                  <span>500+ Patients</span>

                </div>

                <button
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/appointment/${item._id}`);
                  }}
                >
                  Book Appointment
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Button */}

        <div className="flex justify-center mt-16">

          <button
            onClick={() => {
              navigate("/doctors");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition duration-300"
          >
            View All Doctors →
          </button>

        </div>

      </div>
    </section>
  );
};

export default TopDoctors;