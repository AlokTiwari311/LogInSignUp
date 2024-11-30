import React, { useState } from "react";
import signUpImg from "../assets/signup.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function submitHandler(event) {
    event.preventDefault();
    const { name, email, dob, phoneNumber, password, confirmPassword } = formData;

    // Validate fields
    for (let field in formData) {
      if (!formData[field]) {
        toast.error(`Please fill out the ${field} field`);
        return;
      }
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://login-signup-api-taupe.vercel.app/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/");
      } else {
        toast.error(result.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please try again later.");
    }
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen bg-gray-50">
      {/* Left side (background image) */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('${signUpImg}')` }}
      ></div>

      {/* Right side (form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Create an Account
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Enter your details below to get started.
          </p>

          <form onSubmit={submitHandler} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={changeHandler}
                  value={formData.name}
                  className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={changeHandler}
                  value={formData.email}
                  className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-gray-600 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  onChange={changeHandler}
                  value={formData.dob}
                  className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={changeHandler}
                  value={formData.phoneNumber}
                  className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <label className="block text-gray-600 mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={changeHandler}
                  value={formData.password}
                  placeholder="Password"
                  className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <span
                  className="absolute right-3 top-[38px] cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>
              <div className="relative">
                <label className="block text-gray-600 mb-1">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={changeHandler}
                  value={formData.confirmPassword}
                  placeholder="Confirm Password"
                  className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <span
                  className="absolute right-3 top-[38px] cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link to={"/"} className="text-green-600 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
