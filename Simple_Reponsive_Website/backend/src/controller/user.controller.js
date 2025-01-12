import { User } from "../models/user.model.js";

const userMessage = async (req, res) => {
  const { firstname, lastname, email, message } = req.body;
  try {
    if (!firstname || !lastname || !email || !message) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
      firstname,
      lastname,
      email,
      message,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {userMessage}