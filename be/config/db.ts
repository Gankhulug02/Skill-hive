import mongoose from "mongoose";

const connectDB = async (uri: string): Promise<void> => {
  try {
    const db = await mongoose.connect(uri);
    console.log("Connected mongoose");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
