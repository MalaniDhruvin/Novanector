import React, { useState, useEffect } from "react";
import { MdExpandMore } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import Header from "../Header";
import { getJobs, applyJob } from "../../global/apicalls";
import Alert from "../../utils/Alert";

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  // Fetch all jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        // setJobs(response);
        setJobs(response.data.jobs);
        setDisplayedJobs(response.data.jobs.slice(0, displayCount));
        // console.log(response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, [displayCount]);

  const handleViewMore = () => {
    const newCount = displayCount + 6;
    setDisplayCount(newCount);
    setDisplayedJobs(jobs.slice(0, newCount));
  };

  return (
    <div className="relative">
      <Header />
      {alert && <Alert className="fixed top-0 right-0 left-0" message={message} />}
      <div className="min-h-screen p-4 md:p-6 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-14 my-16">
        <h1 className="text-3xl font-bold text-center mb-2">Job Search</h1>
        <p className="text-gray-500 text-center mb-6">
          Search for your desired job matching your skills
        </p>

        <div className="flex justify-center items-center mb-8">
          <div className="flex bg-white shadow-md rounded-md w-full max-w-4xl overflow-hidden">
            <input
              type="text"
              placeholder="Search job title / skills / Company"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter location"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Year of experience"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* Filter Sidebar */}

          <div className="rounded-md p-4 w-full lg:w-64 h-screen">
            <h3 className="text-lg font-bold mt-[-12px] mb-3 ml-4">Filter</h3>
            {/* Job Type Filter */}
            <div className="mb-6 bg-[#F7F6F6] shadow-md h-full py-6 px-4">
              <h4 className="text-sm font-medium mb-2 ">Job Type</h4>
              <div className="space-y-2 text-[#303030]">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" /> Full-time
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" /> Part-time
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" /> Freelance
                </label>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Work Mode</h4>
                <div className="space-y-2 text-[#303030]">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> Remote
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> On-Site
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Popular Job</h4>
                <div className="space-y-2 text-[#303030]">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> Marketing (21)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> Engineering (45)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> Design (71)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> Sales (24)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> Customer Service
                    (109)
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow px-12 ">
            <h3 className="text-lg font-bold mb-4">All jobs ({jobs.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {displayedJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-[#DDF2FF] rounded-md shadow-md p-4 relative"
                >
                  <FaRegBookmark className="absolute right-2 top-5 cursor-pointer text-xl text-[#ACB2B9]" />
                  <h4 className="text-lg font-semibold">{job.title}</h4>
                  <div className="flex justify-between items-center mt-2 w-full">
                    <p className="text-md font-semibold">Full-Time</p>
                    <p className="text-sm text-gray-500">
                      Salary: {job.salary.minsalary} INR -{" "}
                      {job.salary.maxsalary} INR
                    </p>
                  </div>
                  <p className="text-lg">{job.companyname}</p>
                  <p className="text-sm text-gray-500">
                    {job.location.country},{job.location.city}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button className="bg-transparent text-[#1D4ED8] border border-[#1D4ED8] px-4 py-2 rounded-md ">
                      View details
                    </button>
                    <button
                      className="bg-[#1D4ED8] text-white px-4 py-2 rounded-md "
                      onClick={async () => {
                        const response = await applyJob(job._id, {
                          recruiterId: job.createdBy,
                        });
                        setMessage(response.data.message);
                        setAlert(true);
                        console.log(response);
                      }}
                    >
                      Apply now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {displayedJobs.length < jobs.length && (
              <p
                onClick={handleViewMore}
                className="flex justify-center items-center font-medium mt-6 text-black py-3 underline cursor-pointer"
              >
                <MdExpandMore className="text-lg " />
                View more
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
