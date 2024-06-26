import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "MongoDB Connected Successfully",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MongoDB Connection Failed", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
