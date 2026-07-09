import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);

  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const [day, month, year] = slotDate.split("_");
    return `${day} ${months[Number(month)]} ${year}`;
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/appointments",
        {
          headers: { token },
        }
      );

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const payWithCOD = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/payment-cod",
        { appointmentId },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">

      <div className="mb-10">

        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
          My Appointments
        </span>

        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Manage Your Appointments
        </h2>

        <p className="text-gray-500 mt-2">
          View your upcoming, completed and cancelled appointments.
        </p>

      </div>

      {appointments.length === 0 ? (

        <div className="bg-white rounded-3xl border border-gray-200 py-20 text-center shadow-sm">

          <img
            src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
            className="w-32 mx-auto"
            alt=""
          />

          <h3 className="text-2xl font-semibold mt-6">
            No Appointments Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Book your first appointment with our trusted doctors.
          </p>

        </div>

      ) : (

        <div className="space-y-6">

          {appointments.map((item) => (

            <div
              key={item._id}
              className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition p-6 flex flex-col lg:flex-row gap-6"
            >

              {/* Doctor Image */}

              <div className="w-full lg:w-44 flex justify-center">

                <div className="bg-blue-50 rounded-2xl p-3">

                  <img
                    src={item.docData.image}
                    alt={item.docData.name}
                    className="w-40 h-40 object-contain"
                  />

                </div>

              </div>

              {/* Doctor Details */}

              <div className="flex-1">

                <div className="flex flex-wrap justify-between items-start gap-3">

                  <div>

                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.docData.name}
                    </h3>

                    <p className="text-blue-600 font-medium mt-1">
                      {item.docData.speciality}
                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      item.cancelled
                        ? "bg-red-100 text-red-600"
                        : item.isCompleted
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.cancelled
                      ? "Cancelled"
                      : item.isCompleted
                      ? "Completed"
                      : "Upcoming"}
                  </span>

                </div>

                <div className="mt-6 space-y-2 text-gray-600">

                  <p>
                    📍 {item.docData.address.line1}
                  </p>

                  <p>
                    {item.docData.address.line2}
                  </p>

                  <p>
                    📅 {slotDateFormat(item.slotDate)}
                  </p>

                  <p>
                    🕒 {item.slotTime}
                  </p>

                </div>                {/* Action Buttons */}

                <div className="mt-8 flex flex-col sm:flex-row gap-3">

                  {!item.cancelled &&
                    !item.payment &&
                    !item.isCompleted && (
                      <button
                        onClick={() => payWithCOD(item._id)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
                      >
                        Cash on Delivery
                      </button>
                    )}

                  {!item.cancelled &&
                    item.payment &&
                    !item.isCompleted && (
                      <button
                        disabled
                        className="flex-1 bg-green-100 text-green-700 py-3 rounded-xl font-medium cursor-default"
                      >
                        ✓ Paid (COD)
                      </button>
                    )}

                  {item.isCompleted && (
                    <button
                      disabled
                      className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium cursor-default"
                    >
                      Appointment Completed
                    </button>
                  )}

                  {!item.cancelled && !item.isCompleted && (
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 rounded-xl font-medium transition"
                    >
                      Cancel Appointment
                    </button>
                  )}

                  {item.cancelled && (
                    <button
                      disabled
                      className="flex-1 bg-red-100 text-red-600 py-3 rounded-xl font-medium cursor-default"
                    >
                      Appointment Cancelled
                    </button>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
};

export default MyAppointments;