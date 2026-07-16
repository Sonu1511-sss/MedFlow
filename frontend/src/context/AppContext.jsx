import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";

  // Backend URL
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  console.log("Backend URL:", backendUrl);

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(false);

  // ---------------- Doctors ----------------

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ---------------- User Profile ----------------

  const loadUserProfileData = async () => {
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
          address: data.userData.address || {
            line1: "",
            line2: "",
          },
          gender: data.userData.gender || "",
          dob: data.userData.dob || "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ---------------- Effects ----------------

  useEffect(() => {
    if (backendUrl) {
      getDoctorsData();
    }
  }, [backendUrl]);

  useEffect(() => {
    if (token && backendUrl) {
      loadUserProfileData();
    }
  }, [token, backendUrl]);

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
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;