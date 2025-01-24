import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
import { useDispatch } from "react-redux";
import {
  logOutUser,
  verifyCandidate,
  verifyRecruiter,
} from "../global/apicalls";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(user);

  const handleLogout = async () => {
    try {
      const response = await logOutUser();
      console.log(response);
      dispatch(userActions.logout());
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async (type) => {
    try {
      if (type === "candidate") {
        const response = await verifyCandidate();
        window.location.href = "/jobsearch";
        console.log(response);
      }

      if (type === "recruiter") {
        const response = await verifyRecruiter();
        window.location.href = "/postjob";
        console.log(response);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-[#3B46D7]">MyJob</h1>
        <nav className="flex items-center space-x-4">
          <a href="#jobs" className="text-gray-700 hover:text-blue-600">
            Jobs
          </a>
          <a href="#company" className="text-gray-700 hover:text-blue-600">
            Company
          </a>
          <a href="#career" className="text-gray-700 hover:text-blue-600">
            Career
          </a>
          {!user?.isLogin ? (
            <>
              <Link
                to="/login"
                className="bg-[#3B46D7] text-white px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/candidate/signup"
                className="bg-[#3B46D7] text-white px-4 py-2 rounded"
              >
                Signup
              </Link>
              <button
                className="border border-[#3B46D7] text-[#3B46D7] px-4 py-2 rounded"
                onClick={() => handleVerify("recruiter")}
              >
                Post a Job
              </button>
              <button
                className="border border-[#3B46D7] text-[#3B46D7] px-4 py-2 rounded"
                onClick={() => handleVerify("candidate")}
              >
                Find a Job
              </button>
            </>
          ) : (
            <>
              <button
                className="border border-[#3B46D7] text-[#3B46D7] px-4 py-2 rounded"
                onClick={() => handleVerify("recruiter")}
              >
                Post a Job
              </button>
              <button
                className="border border-[#3B46D7] text-[#3B46D7] px-4 py-2 rounded"
                onClick={() => handleVerify("candidate")}
              >
                Find a Job
              </button>

              <button
                to="/login"
                className="bg-[#3B46D7] text-white px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
