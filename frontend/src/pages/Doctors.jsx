import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const specialities = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}

      <div className="mb-10">

        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          Find Doctors
        </span>

        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Find Your Healthcare Specialist
        </h1>

        <p className="text-gray-500 mt-3">
          Browse experienced doctors across multiple specialities and book your
          appointment instantly.
        </p>

      </div>

      <button
        onClick={() => setShowFilter(!showFilter)}
        className="sm:hidden mb-5 border px-5 py-2 rounded-lg"
      >
        Filters
      </button>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Filter */}

        <div
          className={`${
            showFilter ? "block" : "hidden"
          } lg:block w-full lg:w-64`}
        >

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

            <h2 className="font-semibold text-lg mb-5">
              Specialities
            </h2>

            <div className="space-y-3">

              {specialities.map((item) => (

                <button
                  key={item}
                  onClick={() =>
                    speciality === item
                      ? navigate("/doctors")
                      : navigate(`/doctors/${item}`)
                  }
                  className={`w-full text-left px-4 py-3 rounded-xl transition ${
                    speciality === item
                      ? "bg-blue-600 text-white"
                      : "bg-gray-50 hover:bg-blue-50"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* Doctors */}

        <div className="flex-1">

          <p className="text-gray-500 mb-6">
            {filterDoc.length} Doctors Available
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

            {filterDoc.map((item) => (

              <div
                key={item._id}
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
              >

                <div className="bg-blue-50">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-contain"
                  />

                </div>

                <div className="p-5">

                  <div className="flex justify-between items-center">

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        item.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.available
                        ? "Available"
                        : "Unavailable"}
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

                  <div className="flex justify-between mt-5 text-sm text-gray-500">

                    <span>8+ Years</span>

                    <span>500+ Patients</span>

                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/appointment/${item._id}`);
                    }}
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium"
                  >
                    Book Appointment
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Doctors;