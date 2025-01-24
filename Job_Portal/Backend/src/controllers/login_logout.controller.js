import { Candidate } from "../models/candidate.model.js";
import { Recruiter } from "../models/recruiter.model.js";

export const createAcessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await Candidate.findById(userId);
    const recruiter = await Recruiter.findById(userId);

    if (!user && !recruiter) {
      return null;
    }

    let accessToken;
    let refreshToken;

    if (!user && recruiter) {
      accessToken = recruiter.generateAccessToken();
      refreshToken = recruiter.generateRefreshToken();

      recruiter.refreshToken = refreshToken;
      await recruiter.save({ validateBeforeSave: false });
    }

    if (!recruiter && user) {
      accessToken = user.generateAccessToken();
      refreshToken = user.generateRefreshToken();

      user.refreshToken = refreshToken; // Save refresh token
      await user.save({ validateBeforeSave: false });
    }

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error creating tokens:", error);
    return null;
  }
};

const userLogin = async (req, res) => {
  console.log("Request body:", req.body);
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await Candidate.findOne({ email });
    const recruiter = await Recruiter.findOne({ email });

    if (!user && !recruiter) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user) {
      const passwordCorrect = await recruiter.isPasswordCorrect(password);
      if (!passwordCorrect) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const { accessToken, refreshToken } =
        await createAcessTokenAndRefreshToken(recruiter._id);
      await Recruiter.findByIdAndUpdate(recruiter._id, { isLogin: true });
      const loggedUser = await Recruiter.findById(recruiter._id);
      const options = {
        httpOnly: true,
        secure: true,
      };
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          message: "Logged in successfully",
          loggedUser,
          accessToken,
        });
    }
    if (!recruiter) {
      const passwordCorrect = await user.isPasswordCorrect(password);
      if (!passwordCorrect) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const { accessToken, refreshToken } =
        await createAcessTokenAndRefreshToken(user._id);
      await Candidate.findByIdAndUpdate(user._id, { isLogin: true });
      const loggedUser = await Candidate.findById(user._id);
      const options = {
        httpOnly: true,
        secure: true,
      };
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({ message: "Logged in successfully", loggedUser, accessToken });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const userLogout = async (req, res) => {
  const user = await Candidate.findById(req.user._id);
  const recruiter = await Recruiter.findById(req.user._id);
  try {
    if (!user) {
      await Recruiter.findByIdAndUpdate(req.user._id, {
        isLogin: false,
        refreshToken: "",
      });
    }
    if (!recruiter) {
      await Candidate.findByIdAndUpdate(req.user._id, {
        isLogin: false,
        refreshToken: "",
      });
    }

    res
      .status(200)
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
export { userLogin, userLogout };
