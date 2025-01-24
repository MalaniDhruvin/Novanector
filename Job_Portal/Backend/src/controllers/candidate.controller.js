import { Candidate } from "../models/candidate.model.js";
import { Recruiter } from "../models/recruiter.model.js";
import { createAcessTokenAndRefreshToken } from "./login_logout.controller.js";

const createCandidate = async (req, res) => {
  const { fullname, email, phone, password } = req.body;
  try {
    if (!fullname || !email || !phone || !password) {
      console.log(fullname, email, phone, password);
      return res.status(400).json({ message: "Please fill in all fields." });
    }
    const existingCandidate = await Candidate.findOne({ email });
    const exisitingRecruiter = await Recruiter.findOne({ email });
    if (existingCandidate || exisitingRecruiter) {
      return res.status(400).json({ message: "email already exists." });
    }
    console.log(req.file);
    const cvPath = req.file?.path;
    console.log(req.file?.path);
    if (!cvPath) {
      return res.status(400).json({ message: "cv is required" });
    }

    const candidate = await Candidate.create({
      fullname,
      email,
      phone,
      password,
      cv: cvPath,
      isLogin: true,
    });

    const { accessToken, refreshToken } = await createAcessTokenAndRefreshToken(
      candidate._id
    );
    const createdUser = await Candidate.findById(candidate._id).select(
      "-password -refreshToken"
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(201)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "Candidate created successfully",
        createdUser,
        accessToken,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const verifyCandidate = async (req, res) => {
  try {
    // console.log(req.user);
    const user = await Candidate.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "Unauthorized Request!" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error verifying candidate" });
    console.log(error);
  }
};

const applyJob = async (req, res) => {
  const { jobId } = req.params;
  const { recruiterId } = req.body;
  const user = await Candidate.findById(req.user._id);

  try {
    if (!user) {
      return res.status(404).json({ message: "Unauthorized Request!" });
    }
    if (!recruiterId) {
      return res.status(400).json({ message: "recruiterId is required" });
    }
    const updatesUser = await Candidate.findByIdAndUpdate(req.user._id, {
      $push: { applyingfor: jobId },
    });
    await Recruiter.findByIdAndUpdate(recruiterId, {
      $push: { appliedCandidates: updatesUser._id },
    });

    const updatedCandidate = await Candidate.findById(updatesUser._id).select(
      "-password -refreshToken"
    );

    res
      .status(200)
      .json({ message: "Job applied successfully", updatedCandidate });
  } catch (error) {
    res.status(500).json({ message: "Error applying for job" });
  }
};
export { createCandidate, verifyCandidate, applyJob };
