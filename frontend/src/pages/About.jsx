import React from "react";
import { assets } from "../assets/assets";
import {
  HeartPulse,
  ShieldCheck,
  Users,
  CalendarCheck,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Background */}

        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-fullblur-3xl"></div>

        <div className="absolute top-20 right-0 h-72 w-72 rounded-fullblur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">

              ABOUT MEDFLOW

            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-900">

              Smarter Healthcare
              <br />

              Starts Here.

            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

              MedFlow is a modern healthcare platform that helps patients
              connect with trusted doctors, book appointments instantly,
              and manage healthcare in one secure place.

            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}

          <div>

            <img
              src={assets.about_image}
              alt=""
              className="w-full rounded-3xl shadow-xl"
            />

          </div>

          {/* Content */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600">

              WHO WE ARE

            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">

              Making Healthcare
              <br />

              More Accessible

            </h2>

            <p className="mt-6 leading-8 text-gray-600">

              MedFlow is designed to simplify healthcare by making
              appointment booking faster, easier and more reliable.
              Our platform connects patients with verified doctors
              while ensuring a seamless digital healthcare experience.

            </p>

            <p className="mt-5 leading-8 text-gray-600">

              Whether you are booking your first consultation or
              managing regular appointments, MedFlow provides
              a secure, user-friendly and modern healthcare platform
              that saves both time and effort.

            </p>            {/* Vision */}

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">

              <h3 className="text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-3 leading-7 text-blue-100">

                Our vision is to create a smarter healthcare ecosystem
                where patients can connect with trusted doctors,
                schedule appointments instantly and manage their
                healthcare journey with confidence and convenience.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}

          <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

              <CalendarCheck
                className="text-blue-600"
                size={28}
              />

            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Fast Booking
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">

              Book appointments with trusted doctors in just a few clicks.

            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

              <ShieldCheck
                className="text-green-600"
                size={28}
              />

            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Secure Platform
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">

              Your appointments and healthcare information remain safe and secure.

            </p>

          </div>

          {/* Card 3 */}

          <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">

              <HeartPulse
                className="text-pink-600"
                size={28}
              />

            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Better Care
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">

              Connect with experienced healthcare professionals anytime.

            </p>

          </div>

          {/* Card 4 */}

          <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">

              <Users
                className="text-purple-600"
                size={28}
              />

            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Trusted Doctors
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">

              Access a network of verified doctors across multiple specialties.

            </p>

          </div>

        </div>

      </section>      {/* ================= STATISTICS ================= */}

      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 py-20">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 text-center md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg">

            <h2 className="text-4xl font-bold text-white">
              1000+
            </h2>

            <p className="mt-3 text-blue-100">
              Appointments Completed
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg">

            <h2 className="text-4xl font-bold text-white">
              100+
            </h2>

            <p className="mt-3 text-blue-100">
              Verified Doctors
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg">

            <h2 className="text-4xl font-bold text-white">
              98%
            </h2>

            <p className="mt-3 text-blue-100">
              Patient Satisfaction
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg">

            <h2 className="text-4xl font-bold text-white">
              24/7
            </h2>

            <p className="mt-3 text-blue-100">
              Online Support
            </p>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            WHY MEDFLOW
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">

            Why Choose MedFlow?

          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">

            We combine modern technology with healthcare expertise
            to provide a seamless appointment booking experience.
            Our goal is to make quality healthcare accessible,
            secure and convenient for everyone.

          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

              <CalendarCheck
                size={30}
                className="text-blue-600"
              />

            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Easy Appointment
            </h3>

            <p className="mt-4 leading-7 text-gray-600">

              Book appointments anytime with just a few clicks
              using a simple and intuitive interface.

            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

              <ShieldCheck
                size={30}
                className="text-green-600"
              />

            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Safe & Secure
            </h3>

            <p className="mt-4 leading-7 text-gray-600">

              Your personal information and medical records
              are protected with secure technologies.

            </p>

          </div>

          {/* Card 3 */}

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">

              <HeartPulse
                size={30}
                className="text-purple-600"
              />

            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Quality Healthcare
            </h3>

            <p className="mt-4 leading-7 text-gray-600">

              Consult experienced and verified doctors
              across multiple specialties with confidence.

            </p>

          </div>

        </div>

      </section>      {/* ================= TEAM ================= */}

      <section className="bg-slate-100 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
              OUR TEAM
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Meet The Developers
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
              MedFlow was designed and developed with a focus on
              performance, security and an exceptional user experience.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {/* Shubham */}

            <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">

                S

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Shubham Uprade
              </h3>

              <span className="mt-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                Full Stack Developer
              </span>

              <p className="mt-5 leading-8 text-gray-600">
                Developed the complete MedFlow platform including
                frontend, backend, REST APIs, MongoDB database,
                authentication, appointment booking system,
                responsive UI and deployment.
              </p>

            </div>

            {/* Chandrabhan */}

            <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-600">

                C

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Chandrabhan Gadeshwer
              </h3>

              <span className="mt-2 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600">
                Frontend Developer
              </span>

              <p className="mt-5 leading-8 text-gray-600">
                Designed responsive user interfaces,
                improved user experience,
                optimized layouts and collaborated
                on building modern healthcare screens.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-12 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold">
            Your Health Deserves Better Care
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100 leading-8">
            Join thousands of patients using MedFlow to
            book appointments with trusted doctors quickly,
            securely and effortlessly.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105 hover:shadow-xl">

            Book Appointment

          </button>

        </div>

      </section>

    </div>
  );
};

export default About;