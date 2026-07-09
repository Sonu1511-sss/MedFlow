import React from "react";
import { assets } from "../assets/assets";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl"></div>

        <div className="absolute top-20 right-0 h-72 w-72 rounded-full  blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <span className="rounded-full  px-5 py-2 text-sm font-semibold text-blue-600">
              CONTACT US
            </span>

            <h1 className="mt-5 text-5xl font-bold text-gray-900">
              We'd Love to
              <br />
              Hear From You
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Have questions, feedback, or need assistance? Our team is
              always ready to help you with your healthcare journey.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}

          <div>

            <img
              src={assets.contact_image}
              alt=""
              className="w-full rounded-3xl shadow-xl"
            />

          </div>

          {/* Contact Card */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600">
              GET IN TOUCH
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Contact MedFlow
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Feel free to reach out to us anytime. Our support team is
              always available to answer your questions and assist you.
            </p>

            {/* Address */}

            <div className="mt-8 flex items-start gap-4">

              <div className="rounded-xl bg-blue-100 p-3">

                <MapPin className="text-blue-600" size={22} />

              </div>

              <div>

                <h4 className="font-semibold text-gray-900">
                  Office Address
                </h4>

                <p className="mt-2 text-gray-600">
                  Bhopal,
                  <br />
                  Madhya Pradesh, India
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="mt-6 flex items-start gap-4">

              <div className="rounded-xl bg-green-100 p-3">

                <Phone className="text-green-600" size={22} />

              </div>

              <div>

                <h4 className="font-semibold text-gray-900">
                  Phone
                </h4>

                <p className="mt-2 text-gray-600">
                  +91 9977413362
                </p>

              </div>

            </div>

            {/* Email */}

            <div className="mt-6 flex items-start gap-4">

              <div className="rounded-xl bg-purple-100 p-3">

                <Mail className="text-purple-600" size={22} />

              </div>

              <div>

                <h4 className="font-semibold text-gray-900">
                  Email
                </h4>

                <p className="mt-2 text-gray-600">
                  medflow@gmail.com
                </p>

              </div>

            </div>

            {/* Career */}

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">

              <div className="flex items-center gap-3">

                <Building2 size={24} />

                <h3 className="text-xl font-semibold">
                  Join Our Team
                </h3>

              </div>

              <p className="mt-4 text-blue-100 leading-7">
                We are always looking for talented developers,
                designers and healthcare innovators to build the
                future of digital healthcare.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:scale-105">

                Explore Careers

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;