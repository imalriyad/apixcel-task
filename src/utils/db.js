import mongoose from "mongoose";

const connect = async () => {
  try {
    if (mongoose.connection.readyState !== 0) {
      console.log("Already connected to MongoDB");
      return;
    }
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error while connecting to MongoDB:", error.message);
    throw new Error("Error while connecting to MongoDB");
  }
};

export default connect;
