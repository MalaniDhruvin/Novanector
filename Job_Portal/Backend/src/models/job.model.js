import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  workmode: {
    type: String,
    required: true,
  },
  joblevel: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  salary: {
    minsalary: {
      type: Number,
      required: true,
    },
    maxsalary: {
      type: Number,
      required: true,
    },
  },
  role: {
    type: String,
    required: true,
  },
  vacancies: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recruiter",
  },
});

export const Job = mongoose.model("Job", jobSchema);
