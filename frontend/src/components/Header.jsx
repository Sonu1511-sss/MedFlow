import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl">

      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-14 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              🩺 Trusted Healthcare Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-8">

              Find The Right
              <span className="block text-blue-600">
                Doctor Instantly
              </span>

            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              Search experienced specialists, compare reviews,
              book appointments, and receive quality healthcare
              from trusted professionals near you.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition">

                Book Appointment

              </button>

              <button className="bg-white border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition">

                Explore Doctors

              </button>

            </div>

            <div className="flex gap-10 mt-14">

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  500+
                </h2>
                <p className="text-gray-500">
                  Doctors
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  30K+
                </h2>
                <p className="text-gray-500">
                  Patients
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  4.9★
                </h2>
                <p className="text-gray-500">
                  Rating
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* Background Circle */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-200 blur-2xl opacity-60"></div>

            {/* Doctor */}

            <div className="relative bg-white rounded-[40px] shadow-2xl p-6">

              <img
                src={assets.header_img}
                className="w-[430px] object-contain"
                alt=""
              />

            </div>


          </div>

        </div>

      </div>

    </section>
  );
};

export default Header;