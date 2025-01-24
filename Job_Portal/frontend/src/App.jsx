import { Outlet } from "react-router";
import CandidateSignUp from "./components/candidate/CandidateSignUp";
import JobSearch from "./components/candidate/JobSearch";
import Home from "./components/Home";
import Login from "./components/Login";
import PostJob from "./components/recruiter/PostJob";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
