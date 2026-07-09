import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const {
    token,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  } = useContext(AppContext);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setImage(false);
        setIsEdit(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen = py-6 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ================= Header ================= */}

        <div className="bg-white rounded-2xl shadow border p-5 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="relative">
                {isEdit ? (
                  <label
                    htmlFor="image"
                    className="cursor-pointer group"
                  >
                    <img
                      src={
                        image
                          ? URL.createObjectURL(image)
                          : userData.image
                      }
                      alt=""
                      className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
                    />

                    <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <img
                        src={assets.upload_icon}
                        alt=""
                        className="w-7"
                      />
                    </div>

                    <input
                      id="image"
                      hidden
                      type="file"
                      onChange={(e) =>
                        setImage(e.target.files[0])
                      }
                    />
                  </label>
                ) : (
                  <img
                    src={userData.image}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
                  />
                )}
              </div>

              <div>
                {isEdit ? (
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="border rounded-lg px-3 py-2 text-2xl font-semibold outline-none"
                  />
                ) : (
                  <h1 className="text-2xl font-bold text-gray-800">
                    {userData.name}
                  </h1>
                )}

                <p className="text-gray-500 text-sm mt-1">
                  {userData.email}
                </p>

                <span className="inline-block mt-2 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                  Active Account
                </span>
              </div>
            </div>

            {!isEdit && (
              <button
                onClick={() => setIsEdit(true)}
                className="px-5 py-2 rounded-lg bg-primary text-white hover:opacity-90"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* ================= Contact Information ================= */}<div className="bg-white rounded-2xl shadow border p-5 mb-6">
  <div className="mb-4">
    <h2 className="text-lg font-semibold text-gray-800">
      Contact Information
    </h2>
    <p className="text-sm text-gray-500">
      Manage your contact details
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Email */}

    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Email Address
      </label>

      <input
        type="email"
        value={userData.email}
        disabled
        className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 outline-none"
      />
    </div>

    {/* Phone */}

    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Phone Number
      </label>

      {isEdit ? (
        <input
          type="text"
          value={userData.phone}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              phone: e.target.value,
            }))
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          placeholder="Enter Phone Number"
        />
      ) : (
        <input
          type="text"
          value={userData.phone}
          disabled
          className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-700"
        />
      )}
    </div>

  </div>
</div>

{/* ================= Address Information ================= */}
<div className="bg-white rounded-2xl shadow border p-5 mb-6">
  <div className="mb-4">
    <h2 className="text-lg font-semibold text-gray-800">
      Address & Basic Information
    </h2>
    <p className="text-sm text-gray-500">
      Update your address and personal details
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Address Line 1 */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Address Line 1
      </label>

      {isEdit ? (
        <input
          type="text"
          value={userData.address?.line1 || ""}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              address: {
                ...(prev.address || {}),
                line1: e.target.value,
              },
            }))
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        />
      ) : (
        <input
          type="text"
          value={userData.address?.line1 || ""}
          disabled
          className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2"
        />
      )}
    </div>

    {/* Address Line 2 */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Address Line 2
      </label>

      {isEdit ? (
        <input
          type="text"
          value={userData.address?.line2 || ""}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              address: {
                ...(prev.address || {}),
                line2: e.target.value,
              },
            }))
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        />
      ) : (
        <input
          type="text"
          value={userData.address?.line2 || ""}
          disabled
          className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2"
        />
      )}
    </div>

    {/* Gender */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Gender
      </label>

      {isEdit ? (
        <select
          value={userData.gender}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              gender: e.target.value,
            }))
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        >
          <option value="Not Selected">Not Selected</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      ) : (
        <input
          type="text"
          value={userData.gender}
          disabled
          className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2"
        />
      )}
    </div>

    {/* DOB */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Date of Birth
      </label>

      {isEdit ? (
        <input
          type="date"
          value={userData.dob}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              dob: e.target.value,
            }))
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        />
      ) : (
        <input
          type="text"
          value={userData.dob}
          disabled
          className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2"
        />
      )}
    </div>

  </div>
</div>

{/* ================= Buttons ================= */}

<div className="flex justify-end gap-3 mt-6">
  {isEdit ? (
    <>
      <button
        onClick={() => {
          setIsEdit(false);
          setImage(false);
          loadUserProfileData();
        }}
        className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
      >
        Cancel
      </button>

      <button
        onClick={updateUserProfileData}
        className="px-5 py-2 rounded-lg bg-primary text-white hover:opacity-90"
      >
        Save Changes
      </button>
    </>
  ) : (
    <button
      onClick={() => setIsEdit(true)}
      className="px-5 py-2 rounded-lg bg-primary text-white hover:opacity-90"
    >
      Edit Profile
    </button>
  )}
</div>

      </div>
    </div>
  );
};

export default MyProfile;