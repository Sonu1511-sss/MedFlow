import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center"
        >
          <img
            src={assets.logo || "/fallback-logo.png"}
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition hover:text-primary ${
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : ""
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `transition hover:text-primary ${
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : ""
              }`
            }
          >
            ALL DOCTORS
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition hover:text-primary ${
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : ""
              }`
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition hover:text-primary ${
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : ""
              }`
            }
          >
            CONTACT
          </NavLink>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {token && userData ? (
            <div className="relative group cursor-pointer">

              {/* Profile Trigger */}

<div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-2 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg">

  <img
    src={userData.image || "/fallback-user.png"}
    alt=""
    className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
  />

  <div className="hidden md:block">
    <p className="text-sm font-semibold text-gray-800 leading-none">
      {userData.name}
    </p>

    <p className="text-xs text-gray-500">
      Patient
    </p>
  </div>

  <img
    src={assets.dropdown_icon}
    alt=""
    className="w-3 transition-transform duration-300 group-hover:rotate-180"
  />

</div>

{/* Dropdown */}

<div className="absolute right-0 top-full pt-4 hidden group-hover:block z-50">

  <div className="w-72 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">


    {/* Menu */}

<div className="w-full p-1">
  <button
    onClick={() => navigate("/my-profile")}
    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-primary"
  >
    <div className="text-left">
      <p className="font-medium text-sm">My Profile</p>
    </div>
  </button>

  <button
    onClick={() => navigate("/my-appointments")}
    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-primary"
  >
    <div className="text-left">
      <p className="font-medium text-sm">Appointments</p>
    </div>
  </button>

  <div className="my-1 border-t border-gray-100"></div>

  <button
    onClick={logout}
    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-red-500 transition-all duration-200 hover:bg-red-50"
  >
    <div className="text-left">
      <p className="font-medium text-sm">Logout</p>
    </div>
  </button>
</div>

  </div>

</div>

            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-primary text-white px-7 py-3 rounded-full hover:scale-105 transition"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Button */}

          <button
            onClick={() => setShowMenu(true)}
            className="md:hidden"
          >
            <img
              src={assets.menu_icon}
              className="w-7"
              alt=""
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white transition-all duration-300 z-50 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b">

          <img
            src={assets.logo}
            className="h-12 object-contain"
            alt=""
          />

          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className="w-7 cursor-pointer"
            alt=""
          />

        </div>

        <div className="flex flex-col mt-10 gap-5 text-lg font-medium px-8">

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className="py-3 border-b"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/doctors"
            className="py-3 border-b"
          >
            ALL DOCTORS
          </NavLink>

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/about"
            className="py-3 border-b"
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contact"
            className="py-3 border-b"
          >
            CONTACT
          </NavLink>

          {!token && (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate("/login");
              }}
              className="mt-5 bg-primary text-white py-3 rounded-full"
            >
              Create Account
            </button>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;