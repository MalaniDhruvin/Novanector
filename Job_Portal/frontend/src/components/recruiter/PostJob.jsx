import React, { useState } from "react";
import Header from "../Header";
import { createJob } from "../../global/apicalls";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    companyname: "",
    workmode: "",
    role: "",
    minsalary: "",
    maxsalary: "",
    vacancies: "",
    joblevel: "",
    country: "",
    city: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await createJob(formData);
      console.log(response);
      setFormData({
        title: "",
        companyname: "",
        workmode: "",
        role: "",
        minsalary: "",
        maxsalary: "",
        vacancies: "",
        joblevel: "",
        country: "",
        city: "",
        description: "",
      });
      // window.location.href = "/postjob";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="py-10 min-h-screen px-6 md:px-20">
        <form  className="w-full p-8  bg-white ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Post a job</h2>
          <p className="text-gray-500 mt-[-12px] mb-6 tracking-tighter">
            Find the best talent for your company
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Job Title */}
            <div className="col-span-2">
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Add job title, role vacancies etc"
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              />
            </div>

            {/* Company Name */}
            <div className="col-span-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyname}
                onChange={(e) => setFormData({ ...formData, companyname: e.target.value })}
                placeholder="Add company name"
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              />
            </div>

            {/* Work Mode */}
            <div>
              <label
                htmlFor="workMode"
                className="block text-sm font-medium text-gray-700"
              >
                Work Mode
              </label>
              <select
                id="workMode"
                value={formData.workmode}
                onChange={(e) => setFormData({ ...formData, workmode: e.target.value })}
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              >
                <option value="">Select...</option>
                <option value="remote">Remote</option>
                <option value="on-site">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            {/* Job Role */}
            <div>
              <label
                htmlFor="jobRole"
                className="block text-sm font-medium text-gray-700"
              >
                Job Role
              </label>
              <select
                id="jobRole"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none0"
              >
                <option value="">Select...</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label
                htmlFor="minSalary"
                className="block text-sm font-medium text-gray-700"
              >
                Min Salary
              </label>
              <input
                type="number"
                id="minSalary"
                value={formData.minsalary}
                onChange={(e) => setFormData({ ...formData, minsalary: e.target.value })}
                placeholder="Minimum Salary..."
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="maxSalary"
                className="block text-sm font-medium text-gray-700"
              >
                Max Salary
              </label>
              <input
                type="number"
                id="maxSalary"
                value={formData.maxsalary}
                onChange={(e) => setFormData({ ...formData, maxsalary: e.target.value })}
                placeholder="Maximum Salary..."
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              />
            </div>

            {/* Vacancies */}
            <div>
              <label
                htmlFor="vacancies"
                className="block text-sm font-medium text-gray-700"
              >
                Vacancies
              </label>
              <select
                name="vacancies"
                id="vacancies"
                value={formData.vacancies}
               onChange={(e) => setFormData({ ...formData, vacancies: e.target.value })}
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              >
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            {/* Job Level */}
            <div>
              <label
                htmlFor="jobLevel"
                className="block text-sm font-medium text-gray-700"
              >
                Job Level
              </label>
              <select
                id="jobLevel"
                value={formData.jobLevel}
                onChange={(e) => setFormData({ ...formData, joblevel: e.target.value })}
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              >
                <option value="">Select...</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                name="country"
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              >
                <option value="">Select...</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <select
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="mt-1 block w-full border h-10 p-2 border-[#E7E7F1] rounded-md outline-none"
              >
                <option value="">Select...</option>
                <option value="mumbai">Mumbai</option>
                <option value="new-york">New York</option>
                <option value="toronto">Toronto</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-6 col-span-2">
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Add your description..."
              rows="4"
              className="mt-1 block w-full border p-2 border-[#E7E7F1] rounded-md outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-3/12 bg-[#3B46D7] text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Post Job
          </button>
        </form>
      </div>
    </>
  );
};

export default PostJob;
