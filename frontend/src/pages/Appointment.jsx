import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

import {
  Calendar,
  Clock3,
  BadgeCheck,
  IndianRupee,
  Info,
  Stethoscope,
} from "lucide-react";

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();

  const {
    doctors,
    currencySymbol,
    backendUrl,
    token,
    getDoctorsData,
  } = useContext(AppContext);

  const daysOfWeek = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];

  // ===========================
  // STATE
  // ===========================

  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);

  const [slotIndex, setSlotIndex] = useState(0);

  const [slotTime, setSlotTime] = useState("");

  // ===========================
  // FETCH DOCTOR
  // ===========================

  const fetchDocInfo = () => {
    const doctor = doctors.find(
      (item) => item._id === docId
    );

    if (!doctor) return;

    setDocInfo({
      ...doctor,
      slots_booked: doctor.slots_booked || {},
    });
  };// ===========================
// AVAILABLE SLOTS
// ===========================

const getAvailableSlots = () => {

  if (!docInfo) return;

  setDocSlots([]);

  const today = new Date();

  const allSlots = [];

  for (let i = 0; i < 7; i++) {

    const currentDate = new Date(today);

    currentDate.setDate(today.getDate() + i);

    const endTime = new Date(currentDate);

    endTime.setHours(21, 0, 0, 0);

    // Today's Slots
    if (today.getDate() === currentDate.getDate()) {

      currentDate.setHours(
        currentDate.getHours() > 10
          ? currentDate.getHours() + 1
          : 10
      );

      currentDate.setMinutes(
        currentDate.getMinutes() > 30
          ? 30
          : 0
      );

    } else {

      currentDate.setHours(10);
      currentDate.setMinutes(0);

    }

    const daySlots = [];

    while (currentDate < endTime) {

      const formattedTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const slotDate = `${day}_${month}_${year}`;

      const bookedSlots =
        docInfo.slots_booked?.[slotDate] || [];

      const isAvailable =
        !bookedSlots.includes(formattedTime);

      if (isAvailable) {

        daySlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

      }

      currentDate.setMinutes(
        currentDate.getMinutes() + 30
      );

    }

    allSlots.push(daySlots);

  }

  setDocSlots(allSlots);

};// ===========================
// BOOK APPOINTMENT
// ===========================

const bookAppointment = async () => {

  if (!token) {
    toast.warning("Please login to book an appointment");
    navigate("/login");
    return;
  }

  if (!slotTime) {
    toast.warning("Please select a time slot");
    return;
  }

  try {

    const date = docSlots[slotIndex][0].datetime;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const slotDate = `${day}_${month}_${year}`;

    const { data } = await axios.post(
      backendUrl + "/api/user/book-appointment",
      {
        docId,
        slotDate,
        slotTime,
      },
      {
        headers: {
          token,
        },
      }
    );

    if (data.success) {

      toast.success(data.message);

      getDoctorsData();

      navigate("/my-appointments");

    } else {

      toast.error(data.message);

    }

  } catch (error) {

    console.log(error);

    toast.error(error.message);

  }

};

// ===========================
// EFFECTS
// ===========================

useEffect(() => {

  if (doctors.length > 0) {
    fetchDocInfo();
  }

}, [doctors, docId]);

useEffect(() => {

  if (docInfo) {
    getAvailableSlots();
  }

}, [docInfo]);

// ===========================
// UI START
// ===========================

return (

  docInfo && (

    <div className="min-h-screen bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-4">

        {/* Premium Doctor Card Starts Here */}{/* ================= DOCTOR CARD ================= */}

<div className="grid gap-6 lg:grid-cols-[280px_1fr]">

  {/* Doctor Image */}

  <div className="relative">

    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl">

      <img
        src={docInfo.image}
        alt={docInfo.name}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />

    </div>

    {/* Verified Badge */}

    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-lg">

      <BadgeCheck
        size={16}
        className="text-blue-600"
      />

      <span className="text-xs font-semibold text-gray-700">
        Verified Doctor
      </span>

    </div>

  </div>

  {/* Doctor Details */}

  <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

    {/* Name */}

    <div className="flex flex-wrap items-center gap-3">

      <h1 className="text-3xl font-bold text-gray-900">

        {docInfo.name}

      </h1>

      <img
        src={assets.verified_icon}
        alt=""
        className="h-6 w-6"
      />

    </div>

    {/* Degree */}

    <div className="mt-3 flex flex-wrap items-center gap-3">

      <p className="text-gray-600">

        {docInfo.degree}

        <span className="mx-2 text-gray-300">
          |
        </span>

        {docInfo.speciality}

      </p>

      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">

        {docInfo.experience}

      </span>

    </div>

    {/* Small Stats */}

    <div className="mt-6 grid grid-cols-3 gap-3">

      <div className="rounded-2xl bg-slate-50 p-4">

        <Calendar
          size={20}
          className="text-blue-600"
        />

        <p className="mt-2 text-xs text-gray-500">
          Experience
        </p>

        <h4 className="font-semibold">

          {docInfo.experience}

        </h4>

      </div>

      <div className="rounded-2xl bg-slate-50 p-4">

        <Stethoscope
          size={20}
          className="text-blue-600"
        />

        <p className="mt-2 text-xs text-gray-500">
          Specialty
        </p>

        <h4 className="font-semibold">

          {docInfo.speciality}

        </h4>

      </div>

      <div className="rounded-2xl bg-slate-50 p-4">

        <Clock3
          size={20}
          className="text-blue-600"
        />

        <p className="mt-2 text-xs text-gray-500">
          Available
        </p>

        <h4 className="font-semibold">
          Today
        </h4>

      </div>

    </div>    {/* ================= ABOUT ================= */}

    <div className="mt-8">

      <div className="flex items-center gap-2">

        <Info
          size={18}
          className="text-blue-600"
        />

        <h3 className="text-lg font-semibold text-gray-900">
          About Doctor
        </h3>

      </div>

      <p className="mt-3 leading-7 text-gray-600">

        {docInfo.about}

      </p>

    </div>

    {/* ================= INFO CARDS ================= */}

    <div className="mt-8 grid gap-4 md:grid-cols-2">

      {/* Appointment Fee */}

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-600 p-2 text-white">

            <IndianRupee size={18} />

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Consultation Fee
            </p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">

              {currencySymbol}
              {docInfo.fees}

            </h3>

          </div>

        </div>

      </div>

      {/* Consultation */}

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-emerald-600 p-2 text-white">

            <BadgeCheck size={18} />

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Consultation
            </p>

            <h3 className="mt-1 text-lg font-bold text-gray-900">

              Available Today

            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

{/* ================= BOOKING SECTION START ================= */}

<div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-bold text-gray-900">
        Select Appointment Slot
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Choose your preferred date and time.
      </p>

    </div>

  </div>{/* ================= DATE SELECTOR ================= */}

<div className="mt-6 flex gap-4 overflow-x-auto pb-2">

  {docSlots.length > 0 &&
    docSlots.map((item, index) => (

      <button
        key={index}
        onClick={() => {
          setSlotIndex(index);
          setSlotTime("");
        }}
        className={`min-w-[78px] rounded-2xl border p-4 text-center transition-all duration-300
        ${
          slotIndex === index
            ? "border-blue-600 bg-blue-600 text-white shadow-lg"
            : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50"
        }`}
      >

        <p className="text-xs font-semibold tracking-wider">

          {item[0] &&
            daysOfWeek[item[0].datetime.getDay()]}

        </p>

        <h3 className="mt-2 text-2xl font-bold">

          {item[0] &&
            item[0].datetime.getDate()}

        </h3>

      </button>

    ))}

</div>

{/* ================= TIME SLOTS ================= */}

<div className="mt-8">

  <h3 className="mb-4 text-sm font-semibold text-gray-700">

    Available Time

  </h3>

  <div className="flex flex-wrap gap-3">

    {docSlots.length > 0 &&
      docSlots[slotIndex]?.map((item, index) => (

        <button
          key={index}
          onClick={() => setSlotTime(item.time)}
          className={`rounded-xl px-5 py-2 text-sm font-medium transition-all duration-300
          ${
            slotTime === item.time
              ? "bg-blue-600 text-white shadow-md"
              : "border border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50"
          }`}
        >

          {item.time.toLowerCase()}

        </button>

      ))}

  </div>

</div>{/* ================= BOOK BUTTON ================= */}

<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

  <div>

    <p className="text-sm text-gray-500">
      Consultation Fee
    </p>

    <h2 className="mt-1 text-2xl font-bold text-blue-600">
      {currencySymbol}
      {docInfo.fees}
    </h2>

  </div>

  <button
    onClick={bookAppointment}
    disabled={!slotTime}
    className={`rounded-2xl px-10 py-3 text-sm font-semibold text-white transition-all duration-300
      ${
        slotTime
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          : "cursor-not-allowed bg-gray-300"
      }`}
  >
    {slotTime ? "Book Appointment" : "Select Time Slot"}
  </button>

</div>

</div>

{/* ================= RELATED DOCTORS ================= */}

<div className="mt-16">

  <div className="mb-8 text-center">

    <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600">
      RECOMMENDED
    </span>

    <h2 className="mt-3 text-3xl font-bold text-gray-900">
      Related Doctors
    </h2>

    <p className="mt-2 text-gray-500">
      Explore doctors with the same speciality.
    </p>

  </div>

  <RelatedDoctors
    speciality={docInfo.speciality}
    docId={docId}
  />

</div>

</div>

</div>

  )
);
};

export default Appointment;