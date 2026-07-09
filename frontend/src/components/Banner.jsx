import React from "react";
import {
  FaUserMd,
  FaRobot,
  FaCalendarCheck,
  FaShieldAlt,
  FaHeartbeat,
  FaMapMarkedAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd />,
    title: "Verified Doctors",
    desc: "Consult experienced and certified healthcare professionals across multiple specialties.",
  },
  {
    icon: <FaRobot />,
    title: "AI Health Assistant",
    desc: "Receive AI-powered health guidance and personalized recommendations instantly.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Easy Appointment",
    desc: "Book appointments with your preferred doctor quickly and hassle-free.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Records",
    desc: "Your medical records are encrypted and protected with complete privacy.",
  },
  {
    icon: <FaHeartbeat />,
    title: "24/7 Care",
    desc: "Access trusted healthcare support anytime, anywhere you need it.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Nearby Hospitals",
    desc: "Find trusted hospitals and clinics near your location with ease.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
            Why Choose MedFlow
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Trusted Healthcare,
            <span className="text-blue-600"> Simplified</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-7">
            MedFlow makes healthcare easier with verified doctors, AI-powered
            assistance, secure medical records, and quick appointment booking.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-7 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;