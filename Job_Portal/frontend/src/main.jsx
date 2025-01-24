import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import CandidateSignUp from "./components/candidate/CandidateSignUp.jsx";
import JobSearch from "./components/candidate/JobSearch.jsx";
import PostJob from "./components/recruiter/PostJob.jsx";
import RecruiterSignUp from "./components/recruiter/RecruiterSignUp.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/candidate/signup",
        element: <CandidateSignUp />,
      },
      {
        path: "/recruiter/signup",
        element: <RecruiterSignUp />,
      },
      {
        path: "/jobsearch",
        element: <JobSearch />,
      },
      {
        path: "/postjob",
        element: <PostJob />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
