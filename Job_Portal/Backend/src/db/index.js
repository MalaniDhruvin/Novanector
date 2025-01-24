import mongoose from "mongoose";
import { dbName } from "../../constant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${dbName}`);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectDB };
