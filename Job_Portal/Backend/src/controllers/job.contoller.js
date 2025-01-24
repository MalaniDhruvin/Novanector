import { Job } from "../models/job.model.js";

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json({ jobs, message: "Jobs fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getJobs };
