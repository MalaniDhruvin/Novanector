import axios from "axios";
import { apikeys, BASE_URL } from "./apikeys";

axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
    
export const verifyCandidate = () => axios.get(apikeys.verifyCandidate, { withCredentials: true });
export const verifyRecruiter = () => axios.get(apikeys.verifyRecruiter, { withCredentials: true });
export const createCandidate = (data) => axios.post(apikeys.createCandidate, data, { withCredentials: true });
export const createRecruiter = (data) => axios.post(apikeys.createRecruiter, data, { withCredentials: true });
export const loginUser = (data) => axios.post(apikeys.loginUser, data, { withCredentials: true });
export const logOutUser = () => axios.get(apikeys.logOutUser, { withCredentials: true });
export const createJob = (data) => axios.post(apikeys.createJob, data, { withCredentials: true });
export const getJobs = () => axios.get(apikeys.getAllJobs, { withCredentials: true });
export const applyJob = (jobId,recruiterId) => axios.post(apikeys.applyJob+"/"+jobId, recruiterId, { withCredentials: true });