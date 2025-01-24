import React, { useState } from "react";
import { Link } from "react-router";
import { createCandidate } from "../../global/apicalls.js";

const CandidateSignUp = () => {
  const [candidate, setCandidate] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    cv: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", candidate);

    // Create a FormData object
    const formData = new FormData();

    // Append the fields to the FormData
    formData.append("fullname", candidate.fullname);
    formData.append("email", candidate.email);
    formData.append("phone", candidate.phone);
    formData.append("password", candidate.password);
    formData.append("cv", candidate.cv); // Attach the file

    try {
      const response = await createCandidate(formData);
      console.log(response.data.createdUser); // Pass FormData to the API call
      localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      window.location.href = "/";
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* Form Container */}
      <div className="bg-white p-8 w-full max-w-xl">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-gray-800  mb-2">
          Registration form
        </h2>
        <p className="text-gray-500 mb-6">
          Register to apply for jobs of your choice all over the world
        </p>

        {/* Form Fields */}
        <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-6">
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              required
              placeholder="Enter your full name..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setCandidate({ ...candidate, fullname: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your Email..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setCandidate({ ...candidate, email: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="mobile"
              required
              placeholder="Enter your Mobile Number..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setCandidate({ ...candidate, phone: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password..."
              required
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setCandidate({ ...candidate, password: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Your CV
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                id="uploadCV"
                className="hidden"
                name="cv"
                accept=".pdf, .doc, .docx, .txt"
                required
                onChange={(e) => {
                  const file = e.target.files[0];
                  const fileName = file ? file.name : "No file selected";
                  document.getElementById("fileName").value = fileName;

                  // Update candidate state
                  setCandidate(() => ({
                    ...candidate,
                    cv: file,
                  }));

                  console.log("File selected:", file);
                }}
              />
              <label
                htmlFor="uploadCV"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none cursor-pointer"
              >
                Upload Your CV
              </label>
              <input
                type="text"
                id="fileName"
                placeholder="File format PDF, DOC, DOCX, Txt..."
                className="flex-grow border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none transition duration-200"
            onClick={handleSubmit}
          >
            Register now
          </button>
          <div className="flex items-start mt-4 mb-4">
            <input
              type="checkbox"
              id="updates"
              className="mt-1 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="updates"
              className="ml-2 text-sm text-gray-700 leading-5"
            >
              Send me important updates & promotions via SMS, email, and{" "}
              <span className="text-green-500 font-medium">WhatsApp</span>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-[-12px] mb-2">
            Are you a recruiter?
            <Link
              to="/recruiter/signup"
              className="text-blue-500 hover:underline tracking-tighter"
            >
              Sign up here
            </Link>
          </p>
          <p className="text-xs text-gray-500 mb-6">
            By clicking Register, you agree to the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms and Conditions
            </a>{" "}
            &{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>{" "}
            of AlwaysApply.com
          </p>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">or signup with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Media Signup */}
          <div className="flex justify-center gap-4">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <img src="google.png" alt="Google" className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateSignUp;
