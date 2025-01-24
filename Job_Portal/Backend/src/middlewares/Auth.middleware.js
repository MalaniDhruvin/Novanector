import jwt from "jsonwebtoken";
import { Candidate } from "../models/candidate.model.js";
import { Recruiter } from "../models/recruiter.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const accessToken =
      req.cookies.accessToken ||
      req.headers["authorization"]?.replace("Bearer ", "");
    // console.log("Access token:", accessToken);

    if (!accessToken) {
      return res.status(401).json({ message: "access token is required" });
    }

    // console.log(" " + process.env.ACCESS_TOKEN_PRIVACY);
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);

    // console.log("Decoded:", decoded);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthenticated" });
    }

    const user = await Candidate.findById(decoded?._id).select(
      "-password -refreshToken"
    );
    const recruiter = await Recruiter.findById(decoded?._id).select(
      "-password -refreshToken"
    );

    if (!user && !recruiter) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user && !recruiter) {
      req.user = user;
      next();
      return;
    }

    if (!user && recruiter) {
      req.user = recruiter;
      next();
      return;
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
