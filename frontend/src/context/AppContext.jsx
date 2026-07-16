import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹";

  // Backend URL
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  console.log("Backend URL:", backendUrl);
  console.log("ENV:", import.meta.env);

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(null);

  // ---------------- Doctors ----------------

  const getDoctorsData = async () => {
    if (!backendUrl) return;

    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // ---------------- User Profile ----------------

  const loadUserProfileData = async () => {
    if (!backendUrl || !token) return;

    try {
      const { data } = await axios.get(
        `${backendUrl}/api/user/get-profile`,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        setUserData({
          ...data.userData,
          address: data.userData?.address || {
            line1: "",
            line2: "",
          },
          gender: data.userData?.gender || "",
          dob: data.userData?.dob || "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // ---------------- Effects ----------------

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  // ---------------- Context Value ----------------

  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;