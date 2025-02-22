import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return next(new ErrorHandler("Please Fill All Fields", 400));
    }

    const newMessage = await Message.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully!",
      data: newMessage._id, // Only send the message ID to avoid exposing full data
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Internal Server Error", 500));
  }
});

/**
 * @desc Get all messages (Admin Only)
 * @route GET /api/messages
 * @access Private (Require authentication & admin role)
 */
export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  try {
    // Ensure only admins can access this
    if (!req.user || req.user.role !== "Admin") {
      return next(new ErrorHandler("Unauthorized Access", 403));
    }

    const messages = await Message.find().select("-__v"); // Exclude unnecessary fields

    res.status(200).json({
      success: true,
      messages,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Internal Server Error", 500));
  }
});
