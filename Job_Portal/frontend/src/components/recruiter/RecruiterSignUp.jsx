import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createRecruiter } from "../../global/apicalls";

const RecruiterSignUp = () => {
  const [recruiter, setRecruiter] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    companyname: "",
    location: "",
    designation: "",
    document: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", recruiter);

    // Create a FormData object
    const formData = new FormData();

    // Append the fields to the FormData
    formData.append("fullname", recruiter.fullname);
    formData.append("email", recruiter.email);
    formData.append("phone", recruiter.phone);
    formData.append("password", recruiter.password);
    formData.append("companyname", recruiter.companyname);
    formData.append("location", recruiter.location);
    formData.append("designation", recruiter.designation);
    formData.append("document", recruiter.document); // Attach the file

    try {
      const response = await createRecruiter(formData);
      console.log(response.data.newRecruiter[0]); // Pass FormData to the API call
      localStorage.setItem("user", JSON.stringify(response.data.newRecruiter[0]));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Form Container */}
      <div className="bg-white rounded-lg p-8 w-full max-w-xl">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Recruiter Registration
        </h2>

        {/* Form Fields */}
        <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10 rounded-lg">
          {/* Full Name */}
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
              placeholder="Enter your full name..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setRecruiter({ ...recruiter, fullname: e.target.value })
              }
            />
          </div>

          {/* Email */}
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
              placeholder="Enter your Email..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setRecruiter({ ...recruiter, email: e.target.value })
              }
            />
          </div>

          {/* Mobile */}
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
              placeholder="Enter your Mobile Number..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setRecruiter({ ...recruiter, phone: e.target.value })
              }
            />
          </div>

          {/* Current Company Name */}
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Current Company Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter your Company Name..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setRecruiter({ ...recruiter, companyname: e.target.value })
              }
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Current Location<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your Company Location..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setRecruiter({ ...recruiter, location: e.target.value })
              }
            />
          </div>

          {/* Designation */}
          <div className="mb-4">
            <label
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Designation<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="designation"
              placeholder="Enter your Designation..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setRecruiter({ ...recruiter, designation: e.target.value })
              }
            />
          </div>

          {/* Password */}
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
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setRecruiter({ ...recruiter, password: e.target.value })
              }
            />
          </div>

          {/* Company Verification */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Verification<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                id="uploadCV"
                className="hidden"
                accept=".pdf, .doc, .docx, .txt"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const fileName =
                    e.target.files[0]?.name || "No file selected";
                  document.getElementById("fileName").value = fileName;

                  setRecruiter({ ...recruiter, document: file });
                }}
              />
              <label
                htmlFor="uploadCV"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none cursor-pointer"
              >
                Upload Document
              </label>
              <input
                type="text"
                id="fileName"
                placeholder="Business Documents, ISO..."
                className="flex-grow border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              File format: PDF, DOC, DOCX | File size: 5MB - 20MB
            </p>
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none transition duration-200"
              onClick={handleSubmit}
            >
              Register now
            </button>
          </div>

          {/* Updates Checkbox */}
          <div className="flex items-start mt-4">
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
          <p className="text-sm text-gray-500  mb-2">
            Are you a Applicant?
            <Link
              to="/candidate/signup"
              className="text-blue-500 hover:underline tracking-tighter"
            >
              Sign up here
            </Link>
          </p>
          {/* Terms and Conditions */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            By clicking Register, you agree to the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms and Conditions
            </a>{" "}
            &{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Social Signup */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">or signup with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <img
                src="http://localhost:5173/google.png"
                alt="Google"
                className="w-5 h-5"
              />
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

export default RecruiterSignUp;
