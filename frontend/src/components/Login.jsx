import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import loginImg from "../assets/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State to hold password input
  const navigate = useNavigate(); // For navigation after successful login

  const submitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("https://login-signup-api-taupe.vercel.app/auth/login", {
        email,
        password,
      });


      localStorage.setItem("token", response.data.token);


      toast.success("Login successful", {
        autoClose: 500, // Toast will auto-close after 1 second
        onClose: () => {
          navigate("/home"); // Navigate after the toast closes
        }
      });


    } catch (error) {
      // Check for error responses and display appropriate toast
      if (error.response) {
        const errorMessage = error.response.data.message || "Login failed. Please try again.";

        if (error.response.status === 401) {
          // Incorrect password
          toast.error("Incorrect password. Please try again.");
        } else if (error.response.status === 404) {
          // User not found
          toast.error("User not found. Please check your email or sign up.");
        } else {
          // General error message
          toast.error(errorMessage);
        }
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };


  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Background Image Section */}
      <div
        className="hidden lg:block w-full bg-cover bg-center m-4 rounded-lg"
        style={{ backgroundImage: `url('${loginImg}')` }}
      ></div>

      {/* Login Form Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-[40%] bg-white p-8 md:my-4 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
        <form className="w-full max-w-sm" onSubmit={submitHandler}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              value={email} // Bind input value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required // Make this field mandatory
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
              value={password} // Bind input value to state
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required // Make this field mandatory
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Link to Signup */}
        <div className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-orange-500 hover:underline">
            Sign up for free.
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
