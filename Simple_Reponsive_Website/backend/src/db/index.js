import mongoose from "mongoose";
import { dbName } from "../../constant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${dbName}`);
    console.log("Database connected successfully...");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
