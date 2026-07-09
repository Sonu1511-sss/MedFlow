import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <section className="mt-24">
      <div className="text-center">

        <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
          More Specialists
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          Related Doctors
        </h2>

        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Explore more experienced doctors in the same speciality and find the
          right healthcare professional for your needs.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mt-12">

        {relDoc.map((item) => (
          <div
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
          >

            {/* Image */}
            <div className="bg-blue-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex items-center justify-between">

                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    item.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.available ? "Available" : "Unavailable"}
                </span>

                <span className="text-yellow-500 font-semibold">
                  ⭐ 4.9
                </span>

              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.name}
              </h3>

              <p className="text-blue-600 mt-1">
                {item.speciality}
              </p>

              <div className="flex justify-between text-sm text-gray-500 mt-5">

                <span>8+ Years Exp.</span>

                <span>500+ Patients</span>

              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/appointment/${item._id}`);
                }}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
              >
                Book Appointment
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default RelatedDoctors;