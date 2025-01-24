import { Recruiter } from "../models/recruiter.model.js";
import { Candidate } from "../models/candidate.model.js";
import { Job } from "../models/job.model.js";
import { createAcessTokenAndRefreshToken } from "./login_logout.controller.js";

const createRecruiter = async (req, res) => {
  const {
    fullname,
    email,
    phone,
    password,
    companyname,
    location,
    designation,
  } = req.body;
  try {
    if (
      !fullname ||
      !email ||
      !phone ||
      !password ||
      !companyname ||
      !location ||
      !designation
    ) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const existingUser = await Recruiter.findOne({ email });
    const existingCandidate = await Candidate.findOne({ email });
    if (existingUser || existingCandidate) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const docPath = req.file?.path;
    if (!docPath) {
      return res.status(400).json({ message: "document is required" });
    }

    const recruiter = await Recruiter.create({
      fullname,
      email,
      phone,
      password,
      companyname,
      location,
      designation,
      document: docPath,
      isLogin: true,
    });

    const { accessToken, refreshToken } = await createAcessTokenAndRefreshToken(
      recruiter._id
    );
    const options = {
      httpOnly: true,
      secure: true,
    };

    const newRecruiter = await Recruiter.find(recruiter._id).select(
      "-password -refreshToken"
    );
    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        newRecruiter,
        message: "Recruiter created sucessfullly!",
        accessToken,
      });
  } catch (error) {
    res.status(500).json({ message: "Error creating recruiter" });
    console.log(error);
  }
};

const verifyRecruiter = async (req, res) => {
  try {
    // console.log(req.user);
    const recruiter = await Recruiter.findById(req.user._id);
    if (!recruiter) {
      return res.status(404).json({ message: "Unauthorized Request!" });
    }
    res.status(200).json({ recruiter });
  } catch (error) {
    res.status(500).json({ message: "Error verifying recruiter" });
    console.log(error);
  }
};

const createJob = async (req, res) => {
  const {
    title,
    companyname,
    workmode,
    city,
    country,
    minsalary,
    maxsalary,
    role,
    joblevel,
    vacancies,
    description,
  } = req.body;
    console.log(req.body, role);

  try {
    if (
      !title ||
      !companyname ||
      !workmode ||
      !city ||
      !country ||
      !minsalary ||
      !maxsalary ||
      !role ||
      !vacancies ||
      !description ||
      !joblevel
    ) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const newJob = await Job.create({
      title,
      companyname,
      workmode,
      location: { city, country },
      salary: { minsalary, maxsalary },
      role,
      vacancies,
      description,
      joblevel,
      createdBy: req.user?._id,
    });

    const createdJob = await Job.findById(newJob._id);
    res.status(201).json({ createdJob, message: "Job created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

export { createRecruiter, verifyRecruiter, createJob };
