import mongoose from "mongoose";

const connectDB = async () => {
  const { MONGODB_URI } = process.env
  await mongoose.connect(`${MONGODB_URI}/appointy`)
};

export default connectDB;
