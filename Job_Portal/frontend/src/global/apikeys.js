const BASE_URL = "http://localhost:8080/api/v1";

const apikeys = {
  verifyCandidate: `${BASE_URL}/candidate/verify`,
  verifyRecruiter: `${BASE_URL}/recruiter/verify`,
  createCandidate: `${BASE_URL}/candidate/signup`,
  createRecruiter: `${BASE_URL}/recruiter/signup`,
  createJob: `${BASE_URL}/recruiter/createJob`,
  applyJob: `${BASE_URL}/candidate/apply`,
  getAllJobs: `${BASE_URL}/job/getJobs`,
  loginUser: `${BASE_URL}/login`,
  logOutUser: `${BASE_URL}/logout`,
};

export { apikeys, BASE_URL };
