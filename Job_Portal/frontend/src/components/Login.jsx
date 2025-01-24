import React, { useState } from "react";
import { loginUser } from "../global/apicalls";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(user);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.loggedUser));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Card Container */}
      <h2 className="text-2xl font-bold mb-2 ">Login to your Account</h2>
      <p className="text-gray-500 mb-6">
        Welcome back! Select the below login methods.
      </p>
      <div className="bg-whitep-8 flex max-w-4xl w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
        {/* Login Form Section */}
        <div className="w-1/2 p-6">
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email ID / Username
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email id / username"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-blue-500 text-sm"
                >
                  Show
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2 border-gray-300 focus:ring-blue-500"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">or login with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <img src="google.png" alt="Google" className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/512px-Facebook_icon.svg.png"
                alt="Facebook"
                className="w-5 h-5"
              />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
        {/* Illustration Section */}
        <div className="w-1/2 p-6 flex items-center justify-center">
          <img
            src="login.png"
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
