import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  HeartPulse,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);

  const navigate = useNavigate();

  // ================= STATES =================

  const [state, setState] = useState("Login");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  // ================= SUBMIT =================

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(
          backendUrl + "/api/user/register",
          {
            name,
            email,
            password,
          }
        );

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(
          backendUrl + "/api/user/login",
          {
            email,
            password,
          }
        );

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ================= REDIRECT =================

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  // ================= UI =================

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-6">

  {/* Background Blur */}

  <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full  blur-3xl"></div>

  <div className="absolute top-10 right-0 h-72 w-72 rounded-full  blur-3xl"></div>

  <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full  blur-3xl"></div>

  {/* Login Card */}

 <form
  onSubmit={onSubmitHandler}
  className={`relative z-10
    w-full
    max-w-[720px]
    ${
      state === "Sign Up"
        ? "min-h-[470px]"
        : "min-h-[420px]"
    }
    overflow-hidden
    rounded-3xl
    border border-white/70
    bg-white
    shadow-[0_20px_60px_rgba(15,23,42,0.08)]
    lg:grid
    lg:grid-cols-[45%_55%]`}
>

    {/* ================= LEFT SIDE ================= */}

  {/* ================= LEFT PANEL ================= */}

<div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#4F46E5] p-6 text-white">

  {/* Top */}

  <div>

    {/* Logo */}

    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">

        <HeartPulse size={22} />

      </div>

      <div>

        <h2 className="text-xl font-bold tracking-wide">
          MedFlow
        </h2>

        <p className="text-xs text-blue-100">
          Smart Healthcare
        </p>

      </div>

    </div>

    {/* Heading */}

    <div className="mt-10">

      <h1 className="text-[30px] font-bold leading-tight">

        Your Health,
        <br />
        Simplified.

      </h1>

      <p className="mt-4 text-sm leading-6 text-blue-100">

        Consult experienced doctors,
        book appointments instantly
        and manage your medical
        records securely.

      </p>

    </div>

  </div>

  {/* Bottom */}

  <div>

    <div className="space-y-4">

      <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">

        <CalendarDays size={18} />

        <div>

          <h4 className="text-sm font-semibold">
            Instant Booking
          </h4>

          <p className="text-[11px] text-blue-100">
            Book within seconds
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">

        <ShieldCheck size={18} />

        <div>

          <h4 className="text-sm font-semibold">
            Secure Records
          </h4>

          <p className="text-[11px] text-blue-100">
            Protected medical history
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">

        <HeartPulse size={18} />

        <div>

          <h4 className="text-sm font-semibold">
            Trusted Doctors
          </h4>

          <p className="text-[11px] text-blue-100">
            Verified healthcare experts
          </p>

        </div>

      </div>

    </div>

    {/* Footer */}

    <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">

      <p className="text-xs text-blue-100">
        ⭐ Trusted by
      </p>

      <h3 className="mt-1 text-xl font-bold">
        10K+
      </h3>

      <p className="text-xs text-blue-100">
        Happy Patients
      </p>

    </div>

  </div>

</div>
    {/* ================= RIGHT SIDE START ================= */}

    <div className="bg-white p-5 md:p-6">
      {/* ================= HEADER ================= */}

<div className="mb-5">

  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold tracking-wider text-blue-600">
    {state === "Sign Up" ? "CREATE ACCOUNT" : "WELCOME BACK"}
  </span>

  <h2 className="mt-3 text-2xl font-bold text-gray-900">
    {state === "Sign Up"
      ? "Create Account"
      : "Login"}
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    {state === "Sign Up"
      ? "Join MedFlow and book appointments easily."
      : "Sign in to continue to your account."}
  </p>

</div>

{/* ================= FULL NAME ================= */}

{state === "Sign Up" && (

<div className="mb-4">

<label className="mb-2 block text-sm font-medium text-gray-700">
  Full Name
</label>

<div className="group relative">

<User
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600"
/>

<input
type="text"
required
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="John Doe"
className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
/>

</div>

</div>

)}

{/* ================= EMAIL ================= */}

<div className="mb-4">

<label className="mb-2 block text-sm font-medium text-gray-700">
  Email Address
</label>

<div className="group relative">

<Mail
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600"
/>

<input
type="email"
required
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="example@gmail.com"
className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
/>

</div>

</div>{/* ================= PASSWORD ================= */}

<div className="mb-4">

  <label className="mb-2 block text-sm font-medium text-gray-700">
    Password
  </label>

  <div className="group relative">

    <Lock
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-blue-600"
    />

    <input
      type={showPassword ? "text" : "password"}
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
      className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-11 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
    >
      {showPassword ? (
        <EyeOff size={18} />
      ) : (
        <Eye size={18} />
      )}
    </button>

  </div>

</div>

{/* ================= REMEMBER & FORGOT ================= */}

<div className="mb-5 flex items-center justify-between">

  <label className="flex cursor-pointer items-center gap-2 select-none">

    <input
      type="checkbox"
      checked={rememberMe}
      onChange={() => setRememberMe(!rememberMe)}
      className="h-4 w-4 rounded border-gray-300 accent-blue-600"
    />

    <span className="text-xs text-gray-600">
      Remember me
    </span>

  </label>

  {state === "Login" && (

    <button
      type="button"
      className="text-xs font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
    >
      Forgot Password?
    </button>

  )}

</div>{/* ================= LOGIN / REGISTER BUTTON ================= */}

<button
  type="submit"
  className="group flex h-10 w-full items-center justify-center rounded-xl
  bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
  text-sm font-semibold text-white
  shadow-lg transition-all duration-300
  hover:-translate-y-0.5 hover:shadow-xl
  active:scale-[0.98]"
>
  {state === "Sign Up" ? "Create Account" : "Login"}

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 6l6 6-6 6"
    />
  </svg>
</button>

{/* ================= DIVIDER ================= */}

<div className="relative my-5">

  <div className="border-t border-gray-200"></div>

  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] font-medium tracking-wider text-gray-400">
    OR CONTINUE WITH
  </span>

</div>

{/* ================= GOOGLE BUTTON ================= */}

<button
  type="button"
  className="flex h-10 w-full items-center justify-center gap-3 rounded-xl
  border border-gray-200 bg-white
  text-sm font-medium text-gray-700
  transition-all duration-300
  hover:border-blue-300
  hover:bg-blue-50
  hover:shadow-md"
>

  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="h-5 w-5"
  />

  Continue with Google

</button>{/* ================= LOGIN / SIGNUP TOGGLE ================= */}

<div className="mt-5 text-center">

  {state === "Login" ? (

    <p className="text-sm text-gray-600">

      Don't have an account?

      <button
        type="button"
        onClick={() => {
          setState("Sign Up");
          setName("");
          setEmail("");
          setPassword("");
        }}
        className="ml-2 font-semibold text-blue-600 transition hover:text-blue-700"
      >
        Create Account
      </button>

    </p>

  ) : (

    <p className="text-sm text-gray-600">

      Already have an account?

      <button
        type="button"
        onClick={() => {
          setState("Login");
          setEmail("");
          setPassword("");
        }}
        className="ml-2 font-semibold text-blue-600 transition hover:text-blue-700"
      >
        Login
      </button>

    </p>

  )}

</div>

{/* ================= FOOTER ================= */}

<div className="mt-5 border-t border-gray-100 pt-4 text-center">

  <p className="text-[11px] leading-5 text-gray-400">
    By continuing you agree to our{" "}

    <span className="cursor-pointer font-medium text-blue-600 hover:underline">
      Terms
    </span>

    {" "}and{" "}

    <span className="cursor-pointer font-medium text-blue-600 hover:underline">
      Privacy Policy
    </span>

  </p>

</div>

{/* ================= END RIGHT PANEL ================= */}

</div>

{/* ================= END FORM ================= */}

</form>

</div>
);
};

export default Login;