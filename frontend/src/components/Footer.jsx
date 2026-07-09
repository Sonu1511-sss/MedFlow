import React from "react";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <img src={assets.logo} alt="MedFlow" className="w-36 mb-5" />

            <p className="text-gray-600 leading-7 text-sm">
              MedFlow is a modern healthcare platform that helps patients
              connect with trusted doctors, book appointments, manage medical
              records, and receive AI-powered healthcare assistance.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-pink-500 hover:text-white transition cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-sky-500 hover:text-white transition cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-blue-700 hover:text-white transition cursor-pointer">
                <FaLinkedinIn />
              </div>

            </div>

          </div>

          {/* Company */}

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li className="hover:text-blue-600 cursor-pointer">
                Home
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Find Doctors
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>Doctor Appointment</li>

              <li>AI Health Assistant</li>

              <li>Online Consultation</li>

              <li>Medical Records</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-blue-600 mt-1" />
                <span>+91 90000 90000</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-blue-600 mt-1" />
                <span>support@medflow.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © 2026 MedFlow. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-600">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-blue-600">
              Cookies
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;